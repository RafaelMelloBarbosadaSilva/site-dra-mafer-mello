"use client";

import * as React from "react";
import { gsap, motionTokens, SplitText, useGSAP } from "./gsap-setup";

/**
 * Coreografia de entrada do hero.
 *
 * Envolve o markup renderizado no servidor e localiza os alvos por
 * data-attribute, para que a página em si continue sendo um Server
 * Component:
 *
 *   [data-hero-media]  → parallax preso ao scroll
 *   [data-hero-title]  → revelação palavra a palavra (SplitText)
 *   [data-hero-item]   → entrada em cascata dos demais blocos
 *
 * Com `prefers-reduced-motion: reduce` nada é criado — nem o
 * parallax, nem o split — e o conteúdo permanece no estado final.
 */
export function HeroMotion({ children }: { children: React.ReactNode }) {
  const scope = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cleanups: Array<() => void> = [];

        const title = root.querySelector<HTMLElement>("[data-hero-title]");
        const items = root.querySelectorAll<HTMLElement>("[data-hero-item]");
        const media = root.querySelector<HTMLElement>("[data-hero-media]");

        if (title) {
          /* `aria: "auto"` (default) põe aria-label no elemento e
             aria-hidden nos pedaços, então o leitor de tela continua
             lendo o título como uma frase só. `autoSplit` refaz a
             divisão quando as fontes terminam de carregar. */
          const split = SplitText.create(title, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.words, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.03,
                ease: motionTokens.ease.expressive,
              }),
          });
          /* Devolve os nós de texto originais ao desmontar */
          cleanups.push(() => split.revert());
        }

        if (items.length) {
          const tl = gsap.from(items, {
            opacity: 0,
            y: 24,
            delay: title ? 0.15 : 0,
            duration: motionTokens.duration.base,
            stagger: motionTokens.stagger,
            ease: motionTokens.ease.out,
          });
          cleanups.push(() => tl.kill());
        }

        if (media) {
          /* Camada de fundo mais lenta que o conteúdo: o wrapper tem
             overflow-hidden, então a imagem não vaza da seção. */
          const parallax = gsap.to(media, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
          cleanups.push(() => parallax.kill());
        }

        return () => cleanups.forEach((fn) => fn());
      });

      return () => mm.revert();
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
