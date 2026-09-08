import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronRightIcon,
  InfoIcon,
  ShieldCheckIcon,
} from "lucide-react";

import {
  getProcedureBySlug,
  getRelatedProcedures,
  individualizationNotice,
  procedures,
} from "@/data/procedures";
import { buildWhatsAppUrl, siteConfig } from "@/data/site-config";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Faq, FaqJsonLd } from "@/components/Faq";
import ProcedureCard from "@/components/ProcedureCard";
import ReviewNotice from "@/components/ReviewNotice";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return procedures.map((procedure) => ({ slug: procedure.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);

  if (!procedure) return { title: "Procedimento não encontrado" };

  return {
    title: procedure.title,
    description: procedure.shortDescription,
    alternates: { canonical: `/procedimentos/${procedure.slug}` },
    openGraph: {
      title: `${procedure.title} | ${siteConfig.name}`,
      description: procedure.shortDescription,
      type: "article",
    },
  };
}

export default async function ProcedurePage({ params }: PageProps) {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);

  if (!procedure) notFound();

  const Icon = procedure.icon;
  const related = getRelatedProcedures(procedure);
  const whatsappUrl = buildWhatsAppUrl(procedure.whatsappMessage);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Procedimentos",
        item: `${siteConfig.url}/procedimentos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: procedure.title,
        item: `${siteConfig.url}/procedimentos/${procedure.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {procedure.faq.length > 0 && <FaqJsonLd items={procedure.faq} />}

      {/* ═══ HERO COMPACTO ═══ */}
      <Section background="muted" spacing="compact">
        <nav aria-label="Trilha de navegação" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="py-1 transition-colors hover:text-primary">
                Início
              </Link>
            </li>
            <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0" />
            <li>
              <Link
                href="/procedimentos"
                className="py-1 transition-colors hover:text-primary"
              >
                Procedimentos
              </Link>
            </li>
            <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0" />
            <li>
              <span aria-current="page" className="font-medium text-foreground">
                {procedure.title}
              </span>
            </li>
          </ol>
        </nav>

        <ReviewNotice label={procedure.title} />

        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="h-7 gap-1.5 px-3 text-[0.7rem] font-extrabold tracking-wider uppercase"
              >
                <Icon aria-hidden="true" className="size-3.5 text-brand-700" />
                {procedure.category}
              </Badge>
              {procedure.secondaryCategory && (
                <Badge
                  variant="outline"
                  className="h-7 px-3 text-[0.7rem] font-extrabold tracking-wider uppercase"
                >
                  {procedure.secondaryCategory}
                </Badge>
              )}
            </div>

            <h1 className="mb-6 font-serif text-4xl leading-[1.1] font-bold text-foreground sm:text-5xl">
              {procedure.title}
            </h1>
            <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
              {procedure.shortDescription}
            </p>
          </div>

          {/* CTA lateral */}
          <aside className="w-full rounded-2xl border border-border bg-card p-6 shadow-subtle">
            <h2 className="mb-2 font-serif text-lg font-bold text-foreground">
              Quer avaliar se é para você?
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              A conversa começa com uma mensagem — sem compromisso de agendar na
              hora.
            </p>
            <Button
              render={<a href={whatsappUrl} target="_blank" rel="noreferrer" />}
              size="xl"
              className="w-full"
            >
              <WhatsAppIcon className="size-5" />
              Falar sobre este procedimento
            </Button>
          </aside>
        </div>
      </Section>

      {/* ═══ CONTEÚDO ═══ */}
      <Section background="card">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-14">
            <div>
              <SectionHeading eyebrow="O que é" title="Entendendo o procedimento" />
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                {procedure.longDescription}
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Para quem"
                title="Queixas que costumam motivar a avaliação"
              />
              <Reveal as="ul" className="mt-6 space-y-3">
                {procedure.indications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand-700"
                    />
                    {item}
                  </li>
                ))}
              </Reveal>
            </div>

            <div>
              <SectionHeading
                eyebrow="Como funciona"
                title="As etapas do atendimento"
              />
              <Reveal as="ol" className="mt-6 space-y-4">
                {procedure.howItWorks.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-brand-700"
                    >
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step}
                    </p>
                  </li>
                ))}
              </Reveal>
            </div>

            <div>
              <SectionHeading
                eyebrow="Depois do procedimento"
                title="Orientações gerais de cuidado"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                As orientações definitivas são sempre as passadas na consulta,
                para o seu caso.
              </p>
              <Reveal as="ul" className="mt-6 space-y-3">
                {procedure.aftercare.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <ShieldCheckIcon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-gold-strong"
                    />
                    {item}
                  </li>
                ))}
              </Reveal>
            </div>

            {procedure.faq.length > 0 && (
              <div>
                <SectionHeading
                  eyebrow="Dúvidas frequentes"
                  title={`Sobre ${procedure.title.toLowerCase()}`}
                />
                <Faq items={procedure.faq} className="mt-6" />
              </div>
            )}
          </div>

          {/* Aviso de individualização — fixo na coluna lateral */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-4 rounded-2xl border border-gold/40 bg-gold-soft/25 p-6">
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-full bg-card text-gold-strong"
              >
                <InfoIcon className="size-5" />
              </span>
              <h2 className="font-serif text-lg font-bold text-foreground">
                Cada caso é um caso
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {individualizationNotice}
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* ═══ RELACIONADOS ═══ */}
      {related.length > 0 && (
        <Section background="muted">
          <SectionHeading
            eyebrow="Também pode interessar"
            title="Procedimentos relacionados"
            className="mb-12"
          />
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {related.map((item) => (
              <ProcedureCard key={item.id} procedure={item} />
            ))}
          </Reveal>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/procedimentos" />}
              variant="outline"
              size="lg"
            >
              <ArrowLeftIcon aria-hidden="true" className="size-4" />
              Ver todos os procedimentos
            </Button>
            <Button
              render={<a href={whatsappUrl} target="_blank" rel="noreferrer" />}
              size="lg"
            >
              <WhatsAppIcon className="size-4" />
              Agendar avaliação
              <ArrowRightIcon aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </Section>
      )}
    </>
  );
}
