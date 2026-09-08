"use client";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

/**
 * Registro único dos plugins.
 *
 * `gsap.registerPlugin` é idempotente, mas centralizar aqui evita
 * que cada componente registre por conta própria e garante que o
 * plugin exista antes do primeiro uso. O módulo tem "use client",
 * então nada disso roda no servidor.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Flip, SplitText);

  /* Só aparece com ?gsapMarkers=1 na URL, nunca em produção */
  ScrollTrigger.defaults({
    markers:
      process.env.NODE_ENV !== "production" &&
      new URLSearchParams(window.location.search).has("gsapMarkers"),
  });
}

/**
 * Tokens de motion — os mesmos valores das curvas em globals.css.
 * Centralizar aqui é o que mantém o ritmo das animações consistente
 * em vez de cada componente escolher uma duração própria.
 */
export const motionTokens = {
  duration: {
    /** Micro-interação: feedback imediato */
    fast: 0.2,
    /** Entrada padrão de elemento */
    base: 0.5,
    /** Deslocamentos maiores, transições de rota */
    slow: 0.8,
  },
  ease: {
    /** Chegada — desacelera */
    out: "power2.out",
    /** Entrada + saída */
    inOut: "expo.inOut",
    /** Títulos e elementos de destaque */
    expressive: "expo.out",
  },
  /** Máximo de ~8 filhos: além disso os últimos itens ficam lentos */
  stagger: 0.08,
} as const;

export { gsap, Flip, ScrollTrigger, SplitText, useGSAP };
