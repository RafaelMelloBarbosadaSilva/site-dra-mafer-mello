import { Section } from "@/components/layout/Section";

/** Bloco cinza que pulsa, nos tokens do projeto */
function Placeholder({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-xl bg-muted ${className ?? ""}`} />
  );
}

/**
 * Estado de carregamento entre rotas.
 *
 * Reproduz a silhueta de uma página do site — cabeçalho de seção
 * seguido de uma grade de cards — em vez de uma tela branca ou de um
 * spinner solto. `aria-busy` avisa o leitor de tela; o texto de
 * status fica em `sr-only` para não competir visualmente com o
 * skeleton.
 */
export default function Loading() {
  return (
    <Section background="default" spacing="compact" aria-busy="true">
      <p role="status" className="sr-only">
        Carregando conteúdo.
      </p>

      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-4">
        <Placeholder className="h-4 w-40" />
        <Placeholder className="h-12 w-full max-w-xl" />
        <Placeholder className="h-4 w-full max-w-lg" />
        <Placeholder className="h-4 w-2/3 max-w-md" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <Placeholder className="h-7 w-28" />
            <Placeholder className="h-6 w-3/4" />
            <Placeholder className="h-4 w-full" />
            <Placeholder className="h-4 w-5/6" />
            <Placeholder className="mt-2 h-4 w-32" />
          </div>
        ))}
      </div>
    </Section>
  );
}
