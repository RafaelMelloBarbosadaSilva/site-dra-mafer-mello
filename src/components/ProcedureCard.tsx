import { Procedure } from "@/data/procedures";
import { buildWhatsAppUrl } from "@/data/site-config";

interface ProcedureCardProps {
  procedure: Procedure;
}

export default function ProcedureCard({ procedure }: ProcedureCardProps) {
  const whatsappUrl = buildWhatsAppUrl(procedure.whatsappMessage);

  return (
    <article className="flex flex-col bg-white border border-stone-200/80 rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-300 transition-all duration-300 group relative">
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-extrabold rounded-md uppercase tracking-wider">
          <span>{procedure.icon}</span>
          {procedure.category}
        </span>
        {procedure.secondaryCategory && (
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">
            + {procedure.secondaryCategory}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold font-serif text-stone-900 mb-3 group-hover:text-brand-600 transition-colors">
        {procedure.title}
      </h3>

      <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
        {procedure.shortDescription}
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center justify-between text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors group/link pt-3 border-t border-stone-100"
      >
        <span>Saber mais no WhatsApp</span>
        <span className="transform group-hover/link:translate-x-1 transition-transform">
          →
        </span>
      </a>
    </article>
  );
}
