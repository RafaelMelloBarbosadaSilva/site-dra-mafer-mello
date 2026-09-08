import { TriangleAlertIcon } from "lucide-react";

/**
 * Lembrete de revisão profissional.
 *
 * O conteúdo das páginas de procedimento foi derivado do que já
 * estava aprovado no site, em linguagem descritiva e sem promessa de
 * resultado, mas ainda não passou pelo aval da Dra. Maria Fernanda.
 * Este aviso aparece só em desenvolvimento: sinaliza a pendência a
 * quem edita o site sem expor um rascunho ao público.
 *
 * Quando o texto for validado, basta marcar `needsReview: false` no
 * procedimento em `src/data/procedures.ts`.
 */
export default function ReviewNotice({ label }: { label: string }) {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <aside
      className="mb-8 flex items-start gap-3 rounded-xl border border-dashed border-gold bg-gold-soft/40 p-4 text-sm text-brand-950"
      aria-label="Aviso de desenvolvimento"
    >
      <TriangleAlertIcon
        aria-hidden="true"
        className="mt-0.5 size-5 shrink-0 text-gold-strong"
      />
      <p>
        <strong className="font-bold">Revisão pendente — {label}.</strong> Este
        texto foi redigido a partir do conteúdo já aprovado no site e precisa do
        aval da profissional antes de publicar. Visível apenas em
        desenvolvimento.
      </p>
    </aside>
  );
}
