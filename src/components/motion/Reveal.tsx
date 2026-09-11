"use client";

import * as React from "react";
import { cn } from "cn";
import { gsap, motionTokens, useGSAP } from "./gsap-setup";

interface RevealProps extends React.ComponentProps<"div"> {
  /**
   * `children` anima os filhos diretos em sequência (grades, listas).
   * `self` anima o próprio wrapper como um bloco só.
   */
  mode?: "children" | "self";
  /** Deslocamento vertical inicial, em px */
  y?: number;
  /** Renderiza como outro elemento (ex.: "ul", "ol") */
  as?: React.ElementType;
}

/** Depois disto o conteúdo aparece mesmo que o gatilho nunca dispare. */
const REDE_DE_SEGURANCA_MS = 5000;

/**
 * Revela conteúdo quando ele entra no viewport.
 *
 * ## Por que não ScrollTrigger nem IntersectionObserver
 *
 * As duas primeiras versões deste componente esconderam conteúdo de
 * verdade em produção:
 *
 * - Com **ScrollTrigger**, as posições de gatilho são medidas uma vez
 *   e ficam velhas quando as fontes do `next/font` e as imagens do
 *   `next/image` mudam a altura da página. Gatilho velho, animação
 *   que nunca roda, seção parada em `opacity: 0`.
 * - Com **IntersectionObserver**, a semântica do root implícito
 *   depende do contexto de navegação, o que torna o comportamento
 *   difícil de garantir e de testar.
 *
 * A checagem por `getBoundingClientRect` no evento de scroll é
 * deliberadamente sem graça: lê a posição real no momento da
 * consulta, então não existe medição para envelhecer. É o mecanismo
 * mais previsível para a única coisa que precisa ser infalível aqui.
 *
 * ## As três travas contra conteúdo invisível
 *
 * 1. **Só esconde o que está abaixo da dobra.** O que já está na
 *    tela quando o componente monta nunca recebe `opacity: 0` — não
 *    há como sumir.
 * 2. **Duas redes de segurança por tempo.** Se em 5s o gatilho não
 *    disparou, o estado inicial é removido. E depois que a animação
 *    começa, um segundo temporizador confere o resultado no tempo em
 *    que ela deveria ter terminado — porque um tween pode travar no
 *    meio (aba em segundo plano, ticker suspenso, aparelho lento) e
 *    deixar o conteúdo em opacidade parcial. Visível sem animação é
 *    sempre melhor que invisível.
 * 3. **`clearProps` no fim.** Nenhum estilo inline sobra depois da
 *    animação, então nada pode ficar preso num valor intermediário.
 *
 * Sem JavaScript, o HTML servido já traz o estado final. E com
 * `prefers-reduced-motion` nada chega a ser escondido.
 */
export function Reveal({
  mode = "children",
  y = 24,
  as: Component = "div",
  className,
  children,
  ...props
}: RevealProps) {
  const scope = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;

      const todos = (
        mode === "children" ? Array.from(el.children) : [el]
      ) as HTMLElement[];
      if (todos.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* Trava 1: o que já está visível não é escondido */
        const alvos = todos.filter(
          (alvo) => alvo.getBoundingClientRect().top > window.innerHeight * 0.9
        );
        if (alvos.length === 0) return;

        const tween = gsap.fromTo(
          alvos,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: motionTokens.duration.base,
            ease: motionTokens.ease.out,
            stagger: mode === "children" ? motionTokens.stagger : 0,
            /* Trava 3: sem resíduo inline no fim */
            clearProps: "opacity,transform",
            paused: true,
          }
        );

        let disparado = false;
        let agendado = false;
        const temporizadores: number[] = [];

        /** Força o estado final de quem ainda estiver escondido. */
        const garantirVisibilidade = () => {
          const escondidos = alvos.filter(
            (alvo) => Number(getComputedStyle(alvo).opacity) < 0.9
          );
          if (escondidos.length) {
            gsap.set(escondidos, { clearProps: "opacity,transform" });
          }
        };

        const pararDeOuvir = () => {
          window.removeEventListener("scroll", aoRolar);
          window.removeEventListener("resize", verificar);
        };

        const verificar = () => {
          if (disparado) return;
          const r = el.getBoundingClientRect();
          const entrou = r.top < window.innerHeight * 0.92 && r.bottom > 0;
          if (!entrou) return;
          disparado = true;
          pararDeOuvir();
          tween.play();

          /* Trava 2b — o tween começou, mas pode travar no meio (aba
             em segundo plano, ticker suspenso, dispositivo lento).
             Passado o tempo que ele levaria para terminar, conferimos
             e forçamos o estado final se algo ficou pelo caminho. */
          const duracaoTotal =
            (motionTokens.duration.base +
              (mode === "children" ? motionTokens.stagger * alvos.length : 0)) *
              1000 +
            600;
          temporizadores.push(
            window.setTimeout(garantirVisibilidade, duracaoTotal)
          );
        };

        /* Uma leitura de layout por frame, não por evento de scroll */
        const aoRolar = () => {
          if (agendado) return;
          agendado = true;
          requestAnimationFrame(() => {
            agendado = false;
            verificar();
          });
        };

        /* Trava 2a — o gatilho pode nunca disparar */
        temporizadores.push(
          window.setTimeout(() => {
            if (disparado) return;
            pararDeOuvir();
            garantirVisibilidade();
          }, REDE_DE_SEGURANCA_MS)
        );

        window.addEventListener("scroll", aoRolar, { passive: true });
        window.addEventListener("resize", verificar);
        verificar();

        return () => {
          pararDeOuvir();
          temporizadores.forEach((id) => window.clearTimeout(id));
          tween.kill();
          gsap.set(alvos, { clearProps: "opacity,transform" });
        };
      });

      return () => mm.revert();
    },
    { scope, dependencies: [mode, y] }
  );

  return (
    <Component ref={scope} className={cn(className)} {...props}>
      {children}
    </Component>
  );
}
