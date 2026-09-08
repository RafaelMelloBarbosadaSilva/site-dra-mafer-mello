"use client";

import * as React from "react";
import {
  agendarRefreshDeLayout,
  gsap,
  motionTokens,
  protegerContraInvisibilidade,
  SplitText,
  useGSAP,
} from "./gsap-setup";

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
 * Como o hero é a primeira coisa que a pessoa vê, ele segue a mesma
 * regra do `Reveal`: se qualquer parte da animação falhar, o texto
 * aparece mesmo assim. O parágrafo do hero chegou a ficar preso em
 * `opacity: 0` na versão anterior — por isso a entrada agora usa
 * `fromTo` com `clearProps` e uma proteção por tempo, em vez de um
 * `gsap.from` cujo estado inicial persiste se algo interromper.
 */
export function HeroMotion({ children }: { children: React.ReactNode }) {
  const scope = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      agendarRefreshDeLayout();

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const limpezas: Array<() => void> = [];

        const titulo = root.querySelector<HTMLElement>("[data-hero-title]");
        const itens = Array.from(
          root.querySelectorAll<HTMLElement>("[data-hero-item]")
        );
        const media = root.querySelector<HTMLElement>("[data-hero-media]");

        if (titulo) {
          /* `aria: "auto"` (padrão) põe aria-label no elemento e
             aria-hidden nos pedaços, então o leitor de tela continua
             lendo o título como uma frase só. `autoSplit` refaz a
             divisão quando as fontes terminam de carregar. */
          const split = SplitText.create(titulo, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.fromTo(
                self.words,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.03,
                  ease: motionTokens.ease.expressive,
                }
              ),
          });
          limpezas.push(() => split.revert());
          limpezas.push(protegerContraInvisibilidade([titulo]));
        }

        if (itens.length) {
          const tween = gsap.fromTo(
            itens,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              delay: titulo ? 0.15 : 0,
              duration: motionTokens.duration.base,
              stagger: motionTokens.stagger,
              ease: motionTokens.ease.out,
              clearProps: "opacity,transform",
            }
          );
          limpezas.push(() => {
            tween.kill();
            gsap.set(itens, { clearProps: "opacity,transform" });
          });
          limpezas.push(protegerContraInvisibilidade(itens));
        }

        if (media) {
          /* Camada de fundo mais lenta que o conteúdo: o wrapper tem
             overflow-hidden, então a imagem não vaza da seção.
             Só transform — não mexe em opacidade, então não tem como
             esconder nada. */
          const parallax = gsap.to(media, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          });
          limpezas.push(() => parallax.kill());
        }

        return () => limpezas.forEach((fn) => fn());
      });

      return () => mm.revert();
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
