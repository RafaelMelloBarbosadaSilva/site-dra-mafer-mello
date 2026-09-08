import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  AwardIcon,
  GraduationCapIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "lucide-react";

import {
  siteConfig,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
  professionalRegistry,
} from "@/data/site-config";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Trajetória, formação e abordagem de atendimento da ${siteConfig.name}, biomédica com atuação em estética facial, corporal e capilar em ${siteConfig.clinic.city} - ${siteConfig.clinic.state}.`,
  alternates: { canonical: "/sobre" },
};

const credentials = [
  {
    icon: GraduationCapIcon,
    label: "Formação",
    value: siteConfig.professional.title,
    detail:
      "Formação na área da saúde, base para a atuação em procedimentos estéticos.",
  },
  {
    icon: AwardIcon,
    label: "Especialização",
    value: "Master em Harmonização Facial",
    detail:
      "Aprofundamento em análise facial, senso de proporção e planejamento individualizado.",
  },
  {
    icon: ShieldCheckIcon,
    label: "Pós-graduação",
    value: "Estética Avançada e Cosmetologia",
    detail:
      "Foco em protocolos, segurança, ativos e cuidado com a qualidade da pele.",
  },
  {
    icon: MapPinIcon,
    label: "Atendimento",
    value: siteConfig.clinic.name,
    detail: `${siteConfig.clinic.address}.`,
  },
];

const principles = [
  {
    title: "A avaliação vem antes da indicação",
    body: "Nenhum procedimento é definido por catálogo. O ponto de partida é entender a queixa, o histórico de saúde, a rotina e o que a paciente espera — para só então falar sobre o que é possível.",
  },
  {
    title: "Naturalidade não é um estilo, é um limite",
    body: "O objetivo é valorizar traços que já existem, respeitando as proporções do rosto e do corpo de cada pessoa. Preservar a identidade é critério de decisão, não detalhe estético.",
  },
  {
    title: "Expectativa alinhada antes, não depois",
    body: "Dizer o que uma técnica não alcança faz parte do atendimento. Resultado varia conforme anatomia, resposta biológica e rotina — e isso é conversado com clareza antes de qualquer procedimento.",
  },
  {
    title: "Acompanhamento faz parte do plano",
    body: "O retorno não é formalidade: é onde a resposta individual é avaliada e o que for necessário é ajustado, dentro do que cada protocolo permite.",
  },
];

export default function AboutPage() {
  const registry = professionalRegistry();
  const whatsappUrl = buildWhatsAppUrl(defaultWhatsAppMessage());

  return (
    <>
      {/* ═══ APRESENTAÇÃO ═══ */}
      <Section background="muted" spacing="compact">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Sobre"
              title={siteConfig.name}
              description="Biomédica com atuação em estética facial, corporal e capilar, com foco em naturalidade, planejamento individual e segurança em cada etapa."
            />

            {registry && (
              <p className="mt-6 inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
                {registry}
              </p>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                render={
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" />
                }
                size="xl"
              >
                <WhatsAppIcon className="size-5" />
                Agendar uma avaliação
              </Button>
              <Button
                render={<Link href="/procedimentos" />}
                variant="outline"
                size="xl"
              >
                Ver procedimentos
                <ArrowRightIcon aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>

          <figure className="relative h-[440px] w-full overflow-hidden rounded-2xl shadow-lifted sm:h-[560px]">
            <Image
              src={siteConfig.images.portrait}
              alt={`Retrato da ${siteConfig.name}`}
              fill
              priority
              className="object-cover object-[50%_18%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </div>
      </Section>

      {/* ═══ TRAJETÓRIA ═══ */}
      <Section background="card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeading
            eyebrow="Trajetória"
            title="Técnica, escuta e senso de proporção."
          />

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              A atuação da {siteConfig.name} combina formação em{" "}
              {siteConfig.professional.title.toLowerCase()} com especialização
              em harmonização facial e pós-graduação em estética avançada e
              cosmetologia. É essa base que sustenta a leitura de cada rosto e
              de cada queixa corporal como um caso próprio.
            </p>
            <p>
              O atendimento acontece na {siteConfig.clinic.name}, em{" "}
              {siteConfig.clinic.city} - {siteConfig.clinic.state}, e abrange
              estética facial, tratamentos corporais e cuidados capilares. Em
              todas as frentes, o método é o mesmo: escutar primeiro, avaliar
              com calma e propor só o que faz sentido para aquela pessoa.
            </p>
            <p>
              O perfil{" "}
              <a
                href={siteConfig.instagram.personal}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary underline decoration-brand-300 underline-offset-4 transition-colors hover:decoration-primary"
              >
                {siteConfig.instagram.personalHandle}
              </a>{" "}
              segue como canal de conteúdo educativo e de acompanhamento da
              rotina profissional.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ CREDENCIAIS ═══ */}
      <Section background="muted">
        <SectionHeading
          eyebrow="Formação e atendimento"
          title="O que sustenta a indicação"
          align="center"
          className="mb-16"
        />

        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {credentials.map((item) => (
            <article
              key={item.value}
              className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-subtle"
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-700"
              >
                <item.icon className="size-6" />
              </span>
              <div>
                <span className="eyebrow mb-1 text-gold-strong">
                  {item.label}
                </span>
                <h3 className="mb-1.5 font-serif text-lg leading-snug font-bold text-foreground">
                  {item.value}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </Section>

      {/* ═══ PRINCÍPIOS ═══ */}
      <Section background="dark">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeading
            eyebrow="Como eu atendo"
            title="Quatro princípios que guiam cada atendimento."
            onDark
          />

          <Reveal as="ul" className="space-y-4">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 sm:flex-row"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-lg font-bold text-on-dark-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-on-dark">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-dark-muted">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ═══ CLÍNICA ═══ */}
      <Section background="card">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center gap-6 rounded-2xl border border-border bg-muted/50 p-6">
            <Image
              src={siteConfig.images.clinicLogo}
              alt=""
              width={96}
              height={96}
              className="rounded-xl border border-border object-cover"
            />
            <div>
              <strong className="mb-1 block font-serif text-xl font-bold text-foreground">
                {siteConfig.clinic.name}
              </strong>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Atendimento em estética e saúde em {siteConfig.clinic.city} -{" "}
                {siteConfig.clinic.state}.
              </p>
              <a
                href={siteConfig.instagram.clinic}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex min-h-11 items-center py-2.5 text-sm font-bold text-primary transition-colors hover:text-primary-hover"
              >
                {siteConfig.instagram.clinicHandle}
              </a>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Onde encontrar"
              title="Venha conversar sobre o seu caso."
              description={siteConfig.clinic.address}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                render={
                  <a
                    href={siteConfig.clinic.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                variant="outline"
                size="lg"
              >
                <MapPinIcon aria-hidden="true" className="size-4" />
                Ver no mapa
              </Button>
              <Button
                render={<Link href="/#contato" />}
                variant="ghost"
                size="lg"
              >
                Horários e contato
                <ArrowRightIcon aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
