"use client";

import * as React from "react";
import { gsap, useGSAP } from "./gsap-setup";

interface MagneticCtaProps extends React.ComponentProps<"span"> {
  /** Deslocamento máximo em px */
  forca?: number;
}

/**
 * Faz o filho seguir levemente o cursor, voltando ao lugar ao sair.
 *
 * Só `transform`, num wrapper que não contém estado nem semântica —
 * o botão real continua sendo o filho, com seus próprios foco,
 * rótulo e área de clique. Um `translate` de poucos pixels não tira
 * o alvo de baixo do cursor.
 *
 * Restrito a `(hover: hover) and (pointer: fine)`: em telas de toque
 * o efeito não faz sentido e só atrapalharia o alvo de toque.
 */
export function MagneticCta({
  forca = 6,
  className,
  children,
  ...props
}: MagneticCtaProps) {
  const escopo = React.useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = escopo.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)",
        () => {
          const mover = gsap.quickTo(el, "x", {
            duration: 0.4,
            ease: "power3.out",
          });
          const moverY = gsap.quickTo(el, "y", {
            duration: 0.4,
            ease: "power3.out",
          });

          const aoMover = (evento: PointerEvent) => {
            const r = el.getBoundingClientRect();
            const dx = (evento.clientX - (r.left + r.width / 2)) / (r.width / 2);
            const dy = (evento.clientY - (r.top + r.height / 2)) / (r.height / 2);
            mover(gsap.utils.clamp(-1, 1, dx) * forca);
            moverY(gsap.utils.clamp(-1, 1, dy) * forca);
          };

          const aoSair = () => {
            mover(0);
            moverY(0);
          };

          el.addEventListener("pointermove", aoMover);
          el.addEventListener("pointerleave", aoSair);

          return () => {
            el.removeEventListener("pointermove", aoMover);
            el.removeEventListener("pointerleave", aoSair);
            gsap.set(el, { clearProps: "transform" });
          };
        }
      );

      return () => mm.revert();
    },
    { scope: escopo, dependencies: [forca] }
  );

  return (
    <span ref={escopo} className={`inline-flex ${className ?? ""}`} {...props}>
      {children}
    </span>
  );
}
