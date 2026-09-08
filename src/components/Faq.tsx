import { ChevronDownIcon } from "lucide-react";
import { cn } from "cn";

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
 * FAQ em `<details>/<summary>`.
 *
 * Deliberadamente NÃO usa o Accordion do shadcn: o componente
 * desmonta o conteúdo fechado, o que tiraria as respostas do HTML
 * entregue ao crawler. Com `<details>` o texto está sempre no
 * documento, o teclado funciona sem JavaScript e a semântica de
 * expansão é nativa — o navegador anuncia o estado sozinho.
 *
 * O JSON-LD de FAQPage é emitido por `faqJsonLd()`, abaixo.
 */
export function Faq({ items, defaultOpenFirst = false, className }: FaqProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <details
          key={item.question}
          open={defaultOpenFirst && index === 0}
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
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </details>
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
