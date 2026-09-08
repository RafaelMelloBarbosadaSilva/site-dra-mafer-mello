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
  delay?: number;
  /** Ponto do viewport em que a animação dispara */
  start?: string;
  /** Renderiza como outro elemento (ex.: "ul", "ol") */
  as?: React.ElementType;
}

/**
 * Revela conteúdo quando ele entra no viewport.
 *
 * Duas garantias importantes:
 *
 * 1. **Sem JS o conteúdo continua visível.** Usamos `gsap.from()`,
 *    então o HTML servido já contém o estado final e o GSAP aplica
 *    o estado inicial no cliente, antes da pintura (o `useGSAP` roda
 *    num layout effect). Nada nasce com `opacity: 0` no CSS.
 *
 * 2. **`prefers-reduced-motion` desliga a animação.** O
 *    `gsap.matchMedia` só cria a timeline no contexto sem redução;
 *    no contexto reduzido nada é criado e o conteúdo permanece no
 *    estado final.
 */
export function Reveal({
  mode = "children",
  y = 24,
  delay = 0,
  start = "top 85%",
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

      const targets =
        mode === "children" ? Array.from(el.children) : [el];
      if (targets.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(targets, {
          opacity: 0,
          y,
          delay,
          duration: motionTokens.duration.base,
          ease: motionTokens.ease.out,
          stagger: mode === "children" ? motionTokens.stagger : 0,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        });
      });

      return () => mm.revert();
    },
    { scope, dependencies: [mode, y, delay, start] }
  );

  return (
    <Component ref={scope} className={cn(className)} {...props}>
      {children}
    </Component>
  );
}
