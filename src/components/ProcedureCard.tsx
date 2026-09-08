import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "cn";

import type { Procedure } from "@/data/procedures";
import { buildWhatsAppUrl } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { Badge } from "@/components/ui/badge";

interface ProcedureCardProps extends React.ComponentProps<"article"> {
  procedure: Procedure;
}

/**
 * Card do catálogo.
 *
 * Mudança de comportamento em relação à versão anterior: o card
 * inteiro passa a levar à página do procedimento (que antes não
 * existia) e o WhatsApp vira ação secundária. O link do título é o
 * alvo real — a área expandida usa um pseudo-elemento — para que o
 * leitor de tela anuncie um link só, com nome descritivo, em vez de
 * dois links concorrentes por card.
 */
export default function ProcedureCard({
  procedure,
  className,
  ...props
}: ProcedureCardProps) {
  const Icon = procedure.icon;
  const whatsappUrl = buildWhatsAppUrl(procedure.whatsappMessage);

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-6",
        "shadow-subtle transition-[border-color,background-color,box-shadow,color,transform] duration-300 ease-[var(--ease-out-soft)]",
        "hover:-translate-y-1 hover:border-brand-300 hover:shadow-lifted",
        /* Move o anel de foco do link para o card inteiro */
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        className
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <Badge
          variant="secondary"
          className="h-7 gap-1.5 px-3 text-[0.7rem] font-extrabold tracking-wider uppercase"
        >
          <Icon aria-hidden="true" className="size-3.5 text-brand-700" />
          {procedure.category}
        </Badge>
        {procedure.secondaryCategory && (
          <span className="text-[0.65rem] font-bold tracking-wider text-muted-foreground uppercase">
            + {procedure.secondaryCategory}
          </span>
        )}
      </div>

      <h3 className="mb-3 font-serif text-xl leading-snug font-bold text-foreground transition-colors group-hover:text-primary">
        <Link
          href={`/procedimentos/${procedure.slug}`}
          className="outline-none after:absolute after:inset-0 after:content-['']"
        >
          {procedure.title}
        </Link>
      </h3>

      <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
        {procedure.shortDescription}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
          Ver detalhes
          <ArrowRightIcon
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>

        {/* z-10 tira este link de baixo da área expandida do card */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Falar no WhatsApp sobre ${procedure.title}`}
          className="relative z-10 flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
        >
          <WhatsAppIcon className="size-5" />
        </a>
      </div>
    </article>
  );
}
