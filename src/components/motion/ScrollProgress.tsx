"use client";

import * as React from "react";
import { gsap, useGSAP } from "./gsap-setup";

/**
 * Barra fina de progresso de leitura, fixa no topo.
 *
 * Anima só `scaleX` de um elemento puramente decorativo
 * (`aria-hidden`), então não há como esconder conteúdo — a restrição
 * herdada do bug de invisibilidade. Fica logo abaixo do header
 * (`--header-height`) para não brigar com a marca.
 *
 * Não usa ScrollTrigger: uma leitura de `scrollY` por frame é mais
 * barata e não depende de medição prévia de layout, que é justamente
 * o que envelhece quando fontes e imagens chegam depois.
 */
export function ScrollProgress() {
  const barra = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = barra.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      let agendado = false;

      const atualizar = () => {
        const rolavel =
          document.documentElement.scrollHeight - window.innerHeight;
        const progresso = rolavel > 0 ? window.scrollY / rolavel : 0;
        gsap.set(el, { scaleX: Math.min(1, Math.max(0, progresso)) });
      };

      const aoRolar = () => {
        if (agendado) return;
        agendado = true;
        requestAnimationFrame(() => {
          agendado = false;
          atualizar();
        });
      };

      window.addEventListener("scroll", aoRolar, { passive: true });
      window.addEventListener("resize", aoRolar);
      atualizar();

      return () => {
        window.removeEventListener("scroll", aoRolar);
        window.removeEventListener("resize", aoRolar);
        gsap.set(el, { clearProps: "transform" });
      };
    });

    return () => mm.revert();
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-[var(--header-height)] z-40 h-0.5"
    >
      <div
        ref={barra}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-gold"
      />
    </div>
  );
}
