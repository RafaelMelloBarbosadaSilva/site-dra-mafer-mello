import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-12 border-b border-stone-800">
          <div>
            <span className="font-serif text-2xl font-bold block mb-2 text-white">
              {siteConfig.name}
            </span>
            <p className="text-brand-300 font-medium text-sm mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase font-extrabold tracking-widest text-brand-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/procedimentos" className="hover:text-brand-400 transition-colors">
                  Todos os Procedimentos
                </Link>
              </li>
              <li>
                <Link href="/#metodo" className="hover:text-brand-400 transition-colors">
                  Abordagem
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-brand-400 transition-colors">
                  Sobre a Dra. Maria Fernanda
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-brand-400 transition-colors">
                  Agendamento &amp; Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase font-extrabold tracking-widest text-brand-400 mb-4">
              Redes &amp; Atendimento
            </h4>
            <ul className="space-y-2 text-sm text-stone-300 mb-4">
              <li>
                <a
                  href={siteConfig.instagram.personal}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-400 transition-colors inline-flex items-center gap-2"
                >
                  <span>Instagram Oficial:</span>
                  <strong className="text-brand-300">{siteConfig.instagram.personalHandle}</strong>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.clinic}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-400 transition-colors inline-flex items-center gap-2"
                >
                  <span>Clínica Amesse:</span>
                  <strong className="text-brand-300">{siteConfig.instagram.clinicHandle}</strong>
                </a>
              </li>
              <li className="pt-2 text-stone-400 text-xs">
                {siteConfig.clinic.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-xl text-center md:text-right">
            Conteúdo informativo. Procedimentos dependem de avaliação individual, indicação profissional e orientações éticas do conselho aplicável.
          </p>
        </div>
      </div>
    </footer>
  );
}
