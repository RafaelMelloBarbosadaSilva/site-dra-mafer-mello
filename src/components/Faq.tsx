"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "cn";
import { gsap, useGSAP } from "@/components/motion/gsap-setup";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  /** Abre o primeiro item por padrão */
  defaultOpenFirst?: boolean;
  className?: string;
}

/**
 * FAQ em `<details>/<summary>` com abertura animada.
 *
 * Deliberadamente NÃO usa o Accordion do shadcn: o componente
 * desmonta o conteúdo fechado, o que tiraria as respostas do HTML
 * entregue ao crawler. Com `<details>` o texto está sempre no
 * documento, o teclado funciona sem JavaScript e a semântica de
 * expansão é nativa — o navegador anuncia o estado sozinho.
 *
 * A animação interpola apenas `height`, e o conteúdo em si nunca
 * muda de opacidade — a restrição do projeto contra animação capaz
 * de esconder texto. Sem JavaScript, o `<details>` abre e fecha na
 * marra, como sempre fez.
 */
function ItemFaq({
  item,
  aberto,
}: {
  item: FaqItem;
  aberto: boolean;
}) {
  const detalhes = React.useRef<HTMLDetailsElement>(null);
  const corpo = React.useRef<HTMLDivElement>(null);
  const animando = React.useRef(false);

  useGSAP(
    () => {
      const el = detalhes.current;
      const conteudo = corpo.current;
      if (!el || !conteudo) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const aoClicar = (evento: MouseEvent) => {
          evento.preventDefault();
          if (animando.current) return;
          animando.current = true;

          if (el.open) {
            gsap.to(conteudo, {
              height: 0,
              duration: 0.28,
              ease: "power2.inOut",
              onComplete: () => {
                el.open = false;
                gsap.set(conteudo, { clearProps: "height" });
                animando.current = false;
              },
            });
          } else {
            el.open = true;
            gsap.fromTo(
              conteudo,
              { height: 0 },
              {
                height: "auto",
                duration: 0.36,
                ease: "power2.out",
                onComplete: () => {
                  gsap.set(conteudo, { clearProps: "height" });
                  animando.current = false;
                },
              }
            );
          }
        };

        const resumo = el.querySelector("summary");
        resumo?.addEventListener("click", aoClicar);

        return () => {
          resumo?.removeEventListener("click", aoClicar);
          gsap.set(conteudo, { clearProps: "height" });
          animando.current = false;
        };
      });

      return () => mm.revert();
    },
    { scope: detalhes }
  );

  return (
    <details
      ref={detalhes}
      open={aberto}
      className="group rounded-2xl border border-border bg-card [&_summary::-webkit-details-marker]:hidden"
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6",
          "text-base font-bold text-foreground transition-colors hover:bg-accent/60 sm:text-lg"
        )}
      >
        {item.question}
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-brand-700 transition-transform duration-300 group-open:-rotate-180"
        >
          <ChevronDownIcon className="size-5" />
        </span>
      </summary>
      {/* overflow-hidden é o que permite animar a altura sem vazar */}
      <div ref={corpo} className="overflow-hidden">
        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

export function Faq({ items, defaultOpenFirst = false, className }: FaqProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <ItemFaq
          key={item.question}
          item={item}
          aberto={defaultOpenFirst && index === 0}
        />
      ))}
    </div>
  );
}

/** Structured data de FAQPage para as mesmas perguntas exibidas */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** <script> pronto para inserir no JSX */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
    />
  );
}
