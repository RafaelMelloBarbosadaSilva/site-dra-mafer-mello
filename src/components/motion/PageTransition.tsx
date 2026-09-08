"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "./gsap-setup";

/**
 * Transição de entrada entre rotas.
 *
 * NOTA SOBRE O PLANO — a ideia original era um shared element com
 * `Flip` no retrato da Dra. entre a home e /sobre. O Flip precisa que
 * o mesmo nó exista nos dois estados do DOM ao mesmo tempo, e o App
 * Router desmonta a rota anterior antes de montar a nova: sem
 * interceptar a navegação, `Flip.from` vira um no-op silencioso. Em
 * vez de entregar uma animação que não dispara, ficamos com uma
 * entrada direcional curta, que é o preset recomendado para
 * transição de rota em Next.
 *
 * O Flip continua sendo usado onde funciona de fato e rende de
 * verdade: no reordenamento da grade em `ProceduresFilter`.
 *
 * Só anima a entrada — não bloqueia a navegação nem atrasa a
 * pintura da rota nova.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scope = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.from(scope.current, {
          opacity: 0,
          y: 8,
          duration: 0.25,
          ease: "power1.out",
        });
        return () => tween.kill();
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], scope }
  );

  return <div ref={scope}>{children}</div>;
}
