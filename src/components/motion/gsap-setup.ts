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

/**
 * Recalcula as posições de gatilho quando o layout muda depois da
 * primeira medição.
 *
 * O ScrollTrigger mede as posições no mount, mas as fontes do
 * next/font e as imagens do next/image chegam depois e mudam a
 * altura da página; sem o refresh, o gatilho passa a apontar para
 * uma coordenada que não existe mais.
 *
 * Hoje o único ScrollTrigger do projeto é o parallax do hero, que
 * anima só `transform` e portanto não consegue esconder nada. As
 * revelações de conteúdo migraram para `Reveal`, que checa a posição
 * diretamente e não depende deste refresh — justamente porque a
 * medição velha chegou a deixar seções inteiras em `opacity: 0`.
 *
 * Idempotente: pode ser chamada por vários componentes.
 */
let refreshAgendado = false;

export function agendarRefreshDeLayout() {
  if (typeof window === "undefined" || refreshAgendado) return;
  refreshAgendado = true;

  const refresh = () => ScrollTrigger.refresh();

  /* Fontes: a troca de fallback para Inter/Playfair remexe a altura */
  document.fonts?.ready.then(refresh).catch(() => {});

  /* Imagens e demais sub-recursos */
  if (document.readyState === "complete") refresh();
  else window.addEventListener("load", refresh, { once: true });

  /* Rede final para qualquer coisa que assente depois disso */
  window.setTimeout(refresh, 1200);
}

/**
 * Rede de segurança contra conteúdo preso em `opacity: 0`.
 *
 * Regra do projeto: **nenhum texto pode ficar invisível por causa de
 * animação**. Se uma animação não completar, este utilitário devolve
 * ao estado final apenas os elementos que já deveriam estar visíveis
 * — os que ainda estão abaixo da dobra continuam disponíveis para
 * animar normalmente.
 *
 * Usado pelo hero, onde a entrada roda no load. O `Reveal` tem a
 * própria rede, por tempo.
 */
export function protegerContraInvisibilidade(
  alvos: Element[],
  atrasoMs = 2200
) {
  const id = window.setTimeout(() => {
    ScrollTrigger.refresh();

    requestAnimationFrame(() => {
      alvos.forEach((alvo) => {
        const r = alvo.getBoundingClientRect();
        const jaDeveriaAparecer = r.top < window.innerHeight;
        const invisivel = Number(getComputedStyle(alvo).opacity) < 0.5;
        if (jaDeveriaAparecer && invisivel) {
          gsap.set(alvo, { clearProps: "opacity,transform,visibility" });
        }
      });
    });
  }, atrasoMs);

  return () => window.clearTimeout(id);
}

export { gsap, Flip, ScrollTrigger, SplitText, useGSAP };
