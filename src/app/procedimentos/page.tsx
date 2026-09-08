import { Suspense } from "react";
import type { Metadata } from "next";
import { InfoIcon } from "lucide-react";

import ProceduresFilter from "@/components/ProceduresFilter";
import { Section, SectionHeading } from "@/components/layout/Section";
import { individualizationNotice, procedures } from "@/data/procedures";

export const metadata: Metadata = {
  title: "Procedimentos",
  description:
    "Conheça os procedimentos faciais, corporais e capilares oferecidos pela Dra. Maria Fernanda Mello, com foco em naturalidade, planejamento individual e segurança.",
};

/** Grade estática usada enquanto o filtro (client) hidrata */
function FilterFallback() {
  return (
    <div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8"
      aria-hidden="true"
    >
      {procedures.slice(0, 6).map((procedure) => (
        <div
          key={procedure.id}
          className="h-64 animate-pulse rounded-2xl border border-border bg-muted"
        />
      ))}
    </div>
  );
}

export default function ProceduresPage() {
  return (
    <Section background="default" spacing="compact">
      <SectionHeading
        as="h1"
        eyebrow="Catálogo completo"
        title="Nossos procedimentos"
        description="Tratamentos faciais, corporais e capilares planejados de forma individual para valorizar sua beleza com naturalidade e segurança."
        align="center"
        className="mb-16"
      />

      {/* ProceduresFilter lê a categoria de searchParams, então
          precisa de uma fronteira de Suspense para a página continuar
          pré-renderizada estaticamente. */}
      <Suspense fallback={<FilterFallback />}>
        <ProceduresFilter />
      </Suspense>

      <aside className="mx-auto mt-16 flex max-w-4xl flex-col items-start gap-4 rounded-2xl border border-border bg-secondary/60 p-6 sm:flex-row sm:p-8">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-card text-brand-700"
        >
          <InfoIcon className="size-5" />
        </span>
        <div>
          <h2 className="mb-1 font-serif text-lg font-bold text-foreground">
            Importante sobre todos os tratamentos
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {individualizationNotice}
          </p>
        </div>
      </aside>
    </Section>
  );
}
