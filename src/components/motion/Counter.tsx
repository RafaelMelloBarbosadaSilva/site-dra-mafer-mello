"use client";

import * as React from "react";
import { gsap, useGSAP } from "./gsap-setup";

interface CounterProps extends React.ComponentProps<"span"> {
  /** Valor final — é o que já vem renderizado do servidor */
  value: number;
  /** Sufixo colado ao número, como "+" */
  suffix?: string;
  duration?: number;
}

/**
 * Número que conta até o valor final quando entra na tela.
 *
 * O valor definitivo é o children do servidor: a contagem só
 * substitui `textContent` no cliente, e o estado final é sempre o
 * número correto. Nada de opacidade envolvida — se a animação não
 * rodar, o número simplesmente aparece pronto.
 *
 * `tabular-nums` evita que a largura mude a cada dígito e empurre o
 * layout durante a contagem.
 */
export function Counter({
  value,
  suffix = "",
  duration = 1.1,
  className,
  ...props
}: CounterProps) {
  const alvo = React.useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = alvo.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const contador = { n: 0 };
        let concluido = false;

        const escrever = () => {
          el.textContent = `${Math.round(contador.n)}${suffix}`;
        };

        const tween = gsap.to(contador, {
          n: value,
          duration,
          ease: "power2.out",
          onUpdate: escrever,
          /* Garante o valor exato no fim, sem erro de arredondamento */
          onComplete: () => {
            contador.n = value;
            escrever();
          },
          paused: true,
        });

        const encerrar = () => {
          concluido = true;
          window.removeEventListener("scroll", aoRolar);
        };

        const verificar = () => {
          if (concluido) return;
          const r = el.getBoundingClientRect();
          if (r.top > window.innerHeight * 0.95 || r.bottom < 0) return;
          encerrar();
          contador.n = 0;
          escrever();
          tween.play();
        };

        let agendado = false;
        const aoRolar = () => {
          if (agendado) return;
          agendado = true;
          requestAnimationFrame(() => {
            agendado = false;
            verificar();
          });
        };

        window.addEventListener("scroll", aoRolar, { passive: true });
        verificar();

        return () => {
          encerrar();
          tween.kill();
          /* Estado final garantido em qualquer desmontagem */
          el.textContent = `${value}${suffix}`;
        };
      });

      return () => mm.revert();
    },
    { dependencies: [value, suffix, duration] }
  );

  return (
    <span ref={alvo} className={className} {...props}>
      {value}
      {suffix}
    </span>
  );
}
