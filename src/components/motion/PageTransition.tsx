"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "./gsap-setup";

/**
 * Transição de entrada entre rotas.
 *
 * ## Por que não é um shared element
 *
 * O plano original previa um `Flip` no retrato da Dra. entre a home
 * e /sobre. O Flip precisa que o mesmo nó exista nos dois estados do
 * DOM ao mesmo tempo, e o App Router desmonta a rota anterior antes
 * de montar a nova: sem interceptar a navegação, `Flip.from` vira um
 * no-op silencioso. Ficamos com uma entrada direcional curta, que é
 * o preset recomendado para transição de rota em Next. O Flip segue
 * onde funciona de fato: no reordenamento da grade em
 * `ProceduresFilter`.
 *
 * ## Por que este componente é o mais perigoso do projeto
 *
 * Ele envolve **a página inteira**. Se a opacidade travar aqui, não
 * é uma seção que some — é tudo. Por isso, apesar de a duração ser
 * de 250ms, ele carrega as mesmas travas do `Reveal`:
 *
 * - `fromTo` com `clearProps`, para não sobrar estilo inline;
 * - rede de segurança por tempo, que devolve o estado final mesmo
 *   que o tween seja interrompido;
 * - limpeza explícita na desmontagem.
 *
 * Só anima a entrada — nunca bloqueia a navegação nem atrasa a
 * pintura da rota nova.
 */
const REDE_DE_SEGURANCA_MS = 1500;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const escopo = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = escopo.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.fromTo(
          el,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power1.out",
            clearProps: "opacity,transform",
          }
        );

        const rede = window.setTimeout(() => {
          gsap.set(el, { clearProps: "opacity,transform" });
        }, REDE_DE_SEGURANCA_MS);

        return () => {
          window.clearTimeout(rede);
          tween.kill();
          gsap.set(el, { clearProps: "opacity,transform" });
        };
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], scope: escopo }
  );

  return <div ref={escopo}>{children}</div>;
}
