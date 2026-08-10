import { Metadata } from "next";
import ProceduresFilter from "@/components/ProceduresFilter";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Procedimentos | ${siteConfig.name}`,
  description: "Conheça todos os procedimentos faciais, corporais e capilares oferecidos pela Dra. Maria Fernanda Mello com foco em naturalidade e segurança.",
};

export default function ProceduresPage() {
  return (
    <div className="py-16 md:py-24 bg-surface min-h-screen">
      <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Catálogo Completo</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-stone-900 mb-6 leading-tight">
            Nossos Procedimentos
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Tratamentos faciais, corporais e capilares planejados de forma individual para valorizar sua beleza com naturalidade e segurança.
          </p>
        </div>

        {/* Dynamic Client Filter & Grid */}
        <ProceduresFilter />

        {/* Safety Note */}
        <div className="mt-16 bg-brand-50/60 border border-brand-100 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-4">
          <span className="text-2xl shrink-0 bg-brand-100 text-brand-700 w-10 h-10 rounded-full flex items-center justify-center font-bold">ℹ️</span>
          <div>
            <h4 className="font-bold text-stone-900 mb-1">Importante sobre todos os tratamentos</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Cada tratamento depende de avaliação profissional individualizada. Indicações, número de sessões, resultados e duração variam conforme as características biológicas e objetivos de cada paciente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
