import Link from "next/link";
import { MapPinIcon } from "lucide-react";

import {
  siteConfig,
  professionalRegistry,
} from "@/data/site-config";
import { InstagramIcon } from "@/components/icons/BrandIcons";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/procedimentos", label: "Todos os procedimentos" },
  { href: "/sobre", label: "Sobre a Dra. Maria Fernanda" },
  { href: "/#metodo", label: "Abordagem" },
  { href: "/#contato", label: "Agendamento e contato" },
];

export default function Footer() {
  const registry = professionalRegistry();

  return (
    /* .on-dark troca a cor do anel de foco para o acento claro */
    <footer className="on-dark bg-surface-dark py-16 text-on-dark">
      <div className="container-site">
        <div className="grid grid-cols-1 items-start gap-10 border-b border-white/10 pb-12 md:grid-cols-3">
          <div>
            <span className="mb-2 block font-serif text-2xl font-bold text-on-dark">
              {siteConfig.name}
            </span>
            <p className="mb-4 text-sm font-medium text-on-dark-accent">
              {siteConfig.tagline}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-on-dark-muted">
              {siteConfig.description}
            </p>
            {registry && (
              <p className="mt-4 text-xs text-on-dark-muted">{registry}</p>
            )}
          </div>

          <nav aria-labelledby="footer-nav-heading">
            <h2
              id="footer-nav-heading"
              className="mb-4 font-sans text-xs font-extrabold tracking-widest text-on-dark-accent uppercase"
            >
              Navegação
            </h2>
            <ul className="space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    /* py-2 dá altura de toque confortável na lista */
                    className="inline-flex py-2 text-on-dark-muted transition-colors hover:text-on-dark-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-sans text-xs font-extrabold tracking-widest text-on-dark-accent uppercase">
              Redes e atendimento
            </h2>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={siteConfig.instagram.personal}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-2 text-on-dark-muted transition-colors hover:text-on-dark-accent"
                >
                  <InstagramIcon className="size-4" />
                  <span>Instagram oficial:</span>
                  <strong className="text-on-dark">
                    {siteConfig.instagram.personalHandle}
                  </strong>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.clinic}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-2 text-on-dark-muted transition-colors hover:text-on-dark-accent"
                >
                  <InstagramIcon className="size-4" />
                  <span>{siteConfig.clinic.name}:</span>
                  <strong className="text-on-dark">
                    {siteConfig.instagram.clinicHandle}
                  </strong>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.clinic.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 py-2 text-on-dark-muted transition-colors hover:text-on-dark-accent"
                >
                  <MapPinIcon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0"
                  />
                  {siteConfig.clinic.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Antes: text-stone-500 sobre stone-900 ≈ 3.9:1 (reprova em AA).
            Agora: on-dark-muted sobre surface-dark = 8.9:1. */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-on-dark-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <p className="max-w-xl text-center md:text-right">
            Conteúdo informativo. Procedimentos dependem de avaliação
            individual, indicação profissional e orientações éticas do conselho
            aplicável.
          </p>
        </div>
      </div>
    </footer>
  );
}
