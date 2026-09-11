import Link from "next/link";
import { ArrowRightIcon, CompassIcon } from "lucide-react";

import { getFeaturedProcedures, procedures } from "@/data/procedures";
import {
  siteConfig,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/data/site-config";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

/**
 * 404 na identidade do site.
 *
 * Antes disto, um link quebrado caía na tela preta padrão do Next —
 * fora da marca e sem nenhuma saída útil. Aqui a pessoa recebe
 * caminhos: os procedimentos em destaque, as rotas principais e o
 * WhatsApp.
 */
export default function NotFound() {
  const destaques = getFeaturedProcedures().slice(0, 4);

  return (
    <Section background="default" spacing="compact">
      <div className="mx-auto max-w-3xl text-center">
        <span
          aria-hidden="true"
          className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-secondary text-brand-700"
        >
          <CompassIcon className="size-8" />
        </span>

        <p className="eyebrow mb-3 text-gold-strong">Erro 404</p>
        <h1 className="mb-6 font-serif text-4xl leading-[1.1] font-bold text-foreground sm:text-5xl">
          Esta página não existe mais.
        </h1>
        <p className="mx-auto mb-10 max-w-[54ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
          O endereço pode ter mudado ou o link estar incompleto. Abaixo estão os
          caminhos mais procurados — e, se preferir, é só chamar no WhatsApp.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button render={<Link href="/" />} size="xl">
            Voltar para o início
          </Button>
          <Button
            render={<Link href="/procedimentos" />}
            variant="outline"
            size="xl"
          >
            Ver os {procedures.length} procedimentos
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground">
          Talvez você procurasse por
        </h2>

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((procedimento) => {
            const Icone = procedimento.icon;
            return (
              <Link
                key={procedimento.id}
                href={`/procedimentos/${procedimento.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-subtle transition-[border-color,background-color,box-shadow,color,transform] duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lifted"
              >
                <Icone
                  aria-hidden="true"
                  className="size-6 text-brand-700 transition-transform duration-300 group-hover:scale-110"
                />
                <strong className="font-serif text-base leading-snug text-foreground group-hover:text-primary">
                  {procedimento.title}
                </strong>
              </Link>
            );
          })}
        </Reveal>
      </div>

      <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-border bg-muted/50 p-8 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Prefere falar direto com a equipe da {siteConfig.clinic.name}?
        </p>
        <Button
          render={
            <a
              href={buildWhatsAppUrl(defaultWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
            />
          }
          size="lg"
        >
          <WhatsAppIcon className="size-4" />
          Chamar no WhatsApp
        </Button>
      </div>
    </Section>
  );
}
