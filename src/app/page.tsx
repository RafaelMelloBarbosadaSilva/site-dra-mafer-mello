import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  AwardIcon,
  ClockIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  MapPinIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { getFeaturedProcedures, procedures } from "@/data/procedures";
import {
  siteConfig,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
  instagramPosts,
} from "@/data/site-config";
import ProcedureCard from "@/components/ProcedureCard";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Faq, FaqJsonLd, type FaqItem } from "@/components/Faq";
import { Reveal } from "@/components/motion/Reveal";
import { HeroMotion } from "@/components/motion/HeroMotion";
import {
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons/BrandIcons";

const heroProof = [
  {
    term: "Naturalidade",
    detail: "valorização dos traços reais",
  },
  { term: "Avaliação", detail: "indicação caso a caso" },
  { term: "Segurança", detail: "expectativas alinhadas antes" },
];

const pillars = [
  {
    title: "Autocuidado consciente",
    body: "O site organiza as principais dúvidas antes da avaliação, sem prometer resultados iguais para todas as pessoas.",
  },
  {
    title: "Traços naturais",
    body: "A mensagem prioriza leveza, sutileza e equilíbrio, preservando a identidade facial e corporal.",
  },
  {
    title: "Primeiro contato simples",
    body: "Os botões direcionam para o WhatsApp com mensagens específicas, de acordo com o interesse da paciente.",
    wide: true,
  },
];

const goals = [
  {
    label: "Harmonia facial",
    title: "Valorizar proporções sem descaracterizar",
    href: "/procedimentos?categoria=facial",
  },
  {
    label: "Contornos e volumes",
    title: "Equilibrar traços com sutileza",
    href: "/procedimentos/preenchimento-acido-hialuronico",
  },
  {
    label: "Firmeza da pele",
    title: "Estimular colágeno facial e corporal",
    href: "/procedimentos/bioestimulador-colageno",
  },
  {
    label: "Tratamentos corporais",
    title: "Gordura localizada, celulite e microvasos",
    href: "/procedimentos?categoria=corporal",
  },
  {
    label: "Saúde capilar",
    title: "Cuidados para fortalecimento e queda",
    href: "/procedimentos?categoria=capilar",
  },
];

const method = [
  {
    title: "Escuta e avaliação",
    body: "Entendimento das queixas, rotina, histórico e objetivos estéticos.",
  },
  {
    title: "Planejamento",
    body: "Definição das possibilidades indicadas e dos cuidados necessários.",
  },
  {
    title: "Procedimento",
    body: "Execução com foco em segurança, proporcionalidade e naturalidade.",
  },
  {
    title: "Orientações",
    body: "Cuidados gerais e acompanhamento conforme cada protocolo e resposta individual.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Preciso saber qual procedimento quero fazer?",
    answer:
      "Não. A avaliação existe justamente para entender suas queixas, analisar suas características e indicar o caminho mais adequado.",
  },
  {
    question: "Os resultados ficam naturais?",
    answer:
      "A condução prioriza naturalidade e equilíbrio. O plano depende da indicação profissional e da resposta individual de cada pessoa.",
  },
  {
    question: "Existe contraindicação?",
    answer:
      "Alguns procedimentos podem ter restrições. Por isso, histórico de saúde, expectativas e características individuais devem ser avaliados antes da indicação.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "Os botões do site direcionam para o WhatsApp com uma mensagem pré-preenchida conforme o procedimento ou interesse selecionado.",
  },
];

export default function HomePage() {
  const featuredProcedures = getFeaturedProcedures();
  const whatsappUrl = buildWhatsAppUrl(defaultWhatsAppMessage());

  return (
    <>
      <FaqJsonLd items={faqItems} />

      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <HeroMotion>
        <section
          id="inicio"
          className="on-dark relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-surface-dark text-on-dark"
        >
          {/* data-hero-media: camada de parallax. O overflow-hidden da
              seção impede que a imagem vaze ao ser deslocada. */}
          <div
            data-hero-media
            className="absolute inset-0 z-0 scale-110 will-change-transform"
          >
            <Image
              src={siteConfig.images.hero}
              alt=""
              fill
              priority
              className="object-cover object-[68%_38%]"
              sizes="100vw"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-gradient-to-r from-surface-dark/95 via-surface-dark/85 to-surface-dark/40"
          />

          <div className="relative z-20 w-full py-16 md:py-24">
            <div className="container-site">
              <div className="max-w-2xl">
                <span
                  data-hero-item
                  className="eyebrow mb-4 text-on-dark-accent"
                >
                  {siteConfig.tagline}
                </span>

                <h1
                  data-hero-title
                  className="mb-6 font-serif text-4xl leading-[1.1] font-bold text-on-dark sm:text-5xl lg:text-6xl"
                >
                  Estética facial e corporal personalizada para valorizar seus
                  traços com leveza.
                </h1>

                <p
                  data-hero-item
                  className="mb-10 max-w-[58ch] text-base leading-relaxed text-on-dark-muted sm:text-lg"
                >
                  A abordagem da {siteConfig.name} é guiada por naturalidade,
                  planejamento individual e cuidado em cada etapa, respeitando
                  as características e os objetivos de cada paciente.
                </p>

                <div
                  data-hero-item
                  className="mb-16 flex flex-col gap-4 sm:flex-row"
                >
                  <Button
                    render={
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" />
                    }
                    size="xl"
                  >
                    <WhatsAppIcon className="size-5" />
                    Quero agendar uma avaliação
                  </Button>
                  <Button
                    render={<Link href="/procedimentos" />}
                    variant="outline-dark"
                    size="xl"
                  >
                    Conhecer todos os procedimentos
                    <ArrowRightIcon aria-hidden="true" className="size-4" />
                  </Button>
                </div>

                <dl
                  data-hero-item
                  className="grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
                >
                  {heroProof.map((item) => (
                    <div
                      key={item.term}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <dt className="text-sm font-bold text-on-dark-accent">
                        {item.term}
                      </dt>
                      <dd className="mt-1 text-xs text-on-dark-muted">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </HeroMotion>

      {/* ═══════════════════════════════════════════
          PILARES
          ═══════════════════════════════════════════ */}
      <Section background="card" id="instagram">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Do Instagram para o site"
            title="Uma comunicação clara, acolhedora e centrada em naturalidade."
            className="max-w-lg"
          />

          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`group rounded-2xl border border-border bg-muted/60 p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:border-brand-300 hover:shadow-lifted ${
                  pillar.wide ? "sm:col-span-2" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="mb-4 flex size-10 items-center justify-center rounded-full bg-secondary font-bold text-brand-700 transition-transform group-hover:scale-110"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          COMECE PELO OBJETIVO
          ═══════════════════════════════════════════ */}
      <Section background="muted" id="objetivos">
        <SectionHeading
          eyebrow="Comece pelo objetivo"
          title="O procedimento ideal nasce da avaliação, não de uma escolha pronta."
          description="A orientação profissional ajuda a entender se o caminho envolve estética facial, tratamentos corporais, capilares ou um planejamento combinado."
          align="center"
          className="mb-16"
        />

        <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <Link
              key={goal.label}
              href={goal.href}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 backdrop-blur transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand-300 hover:bg-card hover:shadow-lifted"
            >
              <span className="eyebrow mb-3 text-brand-700">{goal.label}</span>
              <strong className="font-serif text-lg leading-tight text-foreground">
                {goal.title}
              </strong>
            </Link>
          ))}

          <a
            href={buildWhatsAppUrl(
              "Olá! Gostaria de tirar uma dúvida inicial antes de decidir o tratamento."
            )}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-brand-300 bg-secondary p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-lifted"
          >
            <span className="eyebrow mb-3 flex items-center gap-2 text-brand-700">
              <WhatsAppIcon className="size-4" />
              Dúvida inicial
            </span>
            <strong className="font-serif text-lg leading-tight text-foreground">
              Conversar antes de decidir o melhor caminho
            </strong>
          </a>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════════
          PROCEDIMENTOS EM DESTAQUE
          ═══════════════════════════════════════════ */}
      <Section background="card" id="procedimentos">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Procedimentos em destaque"
            title="Cuidados faciais e corporais com planejamento individual."
            className="max-w-xl"
          />
          <Link
            href="/procedimentos"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 py-2.5 text-sm font-bold text-primary hover:text-primary-hover sm:text-base"
          >
            {/* Derivado do dado, não mais um "16+" escrito à mão */}
            <span>Ver todos os {procedures.length} procedimentos</span>
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {featuredProcedures.map((procedure) => (
            <ProcedureCard key={procedure.id} procedure={procedure} />
          ))}
        </Reveal>

        <div className="mt-12 text-center">
          <Button render={<Link href="/procedimentos" />} size="xl">
            Explorar catálogo completo
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          MÉTODO DE ATENDIMENTO
          ═══════════════════════════════════════════ */}
      <Section background="dark" id="metodo">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Método de atendimento"
            title="Da avaliação ao acompanhamento, cada etapa tem uma função."
            description="A proposta é alinhar expectativas desde o início, evitando promessas absolutas e respeitando a resposta individual de cada paciente."
            onDark
          />

          <Reveal as="ol" className="space-y-4">
            {method.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 sm:flex-row"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-lg font-bold text-on-dark-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-bold text-on-dark">
                    {step.title}
                  </h3>
                  <p className="text-sm text-on-dark-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SOBRE — resumo, com página dedicada em /sobre
          ═══════════════════════════════════════════ */}
      <Section background="card" id="sobre">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="group relative h-[420px] w-full overflow-hidden rounded-2xl shadow-lifted sm:h-[560px]">
            <Image
              src={siteConfig.images.portrait}
              alt={`Retrato da ${siteConfig.name}`}
              fill
              className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <figcaption className="absolute right-6 bottom-6 left-6 z-20 rounded-xl bg-card/95 px-6 py-4 font-serif text-xl font-bold text-foreground shadow-lifted backdrop-blur">
              {siteConfig.name}
            </figcaption>
          </figure>

          <div>
            <SectionHeading
              eyebrow="Sobre a Dra. Maria Fernanda"
              title="Cuidado estético com técnica, escuta e senso de proporção."
            />
            <div className="mt-6 mb-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                {siteConfig.professional.title},{" "}
                {siteConfig.professional.specializations[0]} e pós-graduada em
                Estética Avançada e Cosmetologia, a {siteConfig.name} conduz
                atendimentos com foco em naturalidade, planejamento individual e
                valorização dos traços reais.
              </p>
              <p>
                O cuidado estético é pensado a partir de escuta, senso de
                proporção e alinhamento de expectativas antes de qualquer
                procedimento.
              </p>
            </div>

            <Button render={<Link href="/sobre" />} variant="outline" size="lg">
              Conhecer a trajetória completa
              <ArrowRightIcon aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          FORMAÇÃO E ABORDAGEM (prova social conforme)

          A Resolução CFBM 241/2019 veda ao biomédico divulgar
          depoimentos de pacientes e imagens de antes/depois com fim
          de captação de clientela. A prova social aqui é construída
          com credenciais verificáveis, pilares de atendimento e
          vínculo institucional — sem depoimento nominal.
          ═══════════════════════════════════════════ */}
      <Section background="muted" id="formacao">
        <SectionHeading
          eyebrow="Formação e abordagem"
          title="A confiança vem da técnica e da conversa, não de promessas."
          description="Em vez de depoimentos e imagens de antes e depois — vedados pelo código de ética da profissão —, o site apresenta o que sustenta o atendimento no dia a dia."
          align="center"
          className="mb-16"
        />

        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: GraduationCapIcon,
              title: siteConfig.professional.title,
              body: "Formação na área da saúde, com atuação em estética facial e corporal.",
            },
            {
              icon: AwardIcon,
              title: "Master em Harmonização Facial",
              body: "Especialização voltada a planejamento facial e senso de proporção.",
            },
            {
              icon: ShieldCheckIcon,
              title: "Estética Avançada e Cosmetologia",
              body: "Pós-graduação com foco em protocolos, segurança e cuidado com a pele.",
            },
            {
              icon: HeartHandshakeIcon,
              title: siteConfig.clinic.name,
              body: `Atendimento em ${siteConfig.clinic.city} - ${siteConfig.clinic.state}, em estrutura de clínica.`,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-subtle"
            >
              <item.icon
                aria-hidden="true"
                className="mb-4 size-7 text-gold-strong"
              />
              <h3 className="mb-2 font-serif text-lg leading-snug font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════════
          CONTEÚDO EDUCATIVO
          ═══════════════════════════════════════════ */}
      <Section background="card" id="conteudo-educativo">
        <SectionHeading
          eyebrow="Conteúdo educativo"
          title="Decisões estéticas pedem informação clara."
          align="center"
          className="mb-16"
        />

        <Reveal className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Resultados variam",
              body: "O site evita promessas de resultado e reforça que cada organismo, anatomia e rotina influenciam a resposta.",
            },
            {
              title: "Avaliação antes da indicação",
              body: "Procedimentos só devem ser definidos depois de uma conversa profissional e análise individual.",
            },
            {
              title: "Instagram como fonte viva",
              body: "O perfil oficial segue como canal de conteúdo, rotina profissional e atualizações.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-muted/50 p-8 transition-shadow hover:shadow-card"
            >
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════════
          DÚVIDAS FREQUENTES
          ═══════════════════════════════════════════ */}
      <Section background="muted" id="duvidas" width="narrow">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Respostas curtas para aproximar a avaliação."
          align="center"
          className="mb-16"
        />
        <Faq items={faqItems} defaultOpenFirst />
      </Section>

      {/* ═══════════════════════════════════════════
          INSTAGRAM E LOCALIZAÇÃO
          ═══════════════════════════════════════════ */}
      <Section background="card" id="localizacao">
        <SectionHeading
          eyebrow="Instagram e localização"
          title="Onde acompanhar e onde encontrar."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <a
              href={siteConfig.instagram.personal}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-border bg-muted/50 p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-lifted"
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"
              >
                <InstagramIcon className="size-6" />
              </span>
              <span>
                <strong className="block font-serif text-lg font-bold text-foreground group-hover:text-primary">
                  {siteConfig.instagram.personalHandle}
                </strong>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  Conteúdo educativo, rotina profissional e orientações sobre
                  cuidados estéticos.
                </span>
              </span>
            </a>

            <a
              href={siteConfig.instagram.clinic}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-border bg-muted/50 p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-lifted"
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-700"
              >
                <InstagramIcon className="size-6" />
              </span>
              <span>
                <strong className="block font-serif text-lg font-bold text-foreground group-hover:text-primary">
                  {siteConfig.instagram.clinicHandle}
                </strong>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  Perfil da {siteConfig.clinic.name}, onde os atendimentos
                  acontecem.
                </span>
              </span>
            </a>

            {/*
              A grade de publicações fica pronta para quando houver
              imagens autorizadas: `instagramPosts` está tipado e
              vazio (docs/instagram-assets-manifest.json não tem
              nenhum post). Enquanto isso, nada é renderizado no lugar.
            */}
            {instagramPosts.length > 0 && (
              <ul className="grid grid-cols-3 gap-3">
                {instagramPosts.map((post) => (
                  <li key={post.id}>
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noreferrer"
                      className="block overflow-hidden rounded-xl"
                    >
                      <Image
                        src={post.image}
                        alt={post.alt}
                        width={300}
                        height={300}
                        className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border shadow-subtle">
              <iframe
                src={siteConfig.clinic.mapsEmbedUrl}
                title={`Mapa da localização da ${siteConfig.clinic.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full border-0"
              />
            </div>

            <dl className="grid gap-3 text-sm">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
                <MapPinIcon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-gold-strong"
                />
                <div>
                  <dt className="font-bold text-foreground">Endereço</dt>
                  <dd className="mt-0.5">
                    <a
                      href={siteConfig.clinic.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.clinic.address}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
                <ClockIcon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-gold-strong"
                />
                <div>
                  <dt className="font-bold text-foreground">Horários</dt>
                  <dd className="mt-0.5 text-muted-foreground">
                    {siteConfig.clinic.hours}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          AGENDAMENTO
          ═══════════════════════════════════════════ */}
      <Section background="muted" id="contato">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Agendamento"
              title="Vamos planejar seu cuidado estético?"
              description="Envie seu interesse e inicie uma conversa para entender qual protocolo combina com o seu momento."
            />

            <div className="mt-10 flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-subtle">
              <Image
                src={siteConfig.images.clinicLogo}
                alt=""
                width={80}
                height={80}
                className="rounded-xl border border-border object-cover"
              />
              <div>
                <strong className="mb-0.5 block font-serif text-base text-foreground">
                  {siteConfig.clinic.name}
                </strong>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Atendimento em estética e saúde em {siteConfig.clinic.city} -{" "}
                  {siteConfig.clinic.state}.
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-h-[380px] flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center shadow-lifted">
            <span
              aria-hidden="true"
              className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-secondary text-brand-700"
            >
              <MessageCircleIcon className="size-7" />
            </span>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">
              Agendamento via WhatsApp
            </h2>
            <p className="mb-8 max-w-sm text-sm text-muted-foreground">
              Fale diretamente conosco para agendar sua avaliação personalizada
              ou tirar dúvidas sobre qualquer procedimento.
            </p>
            <Button
              render={<a href={whatsappUrl} target="_blank" rel="noreferrer" />}
              size="xl"
              className="w-full"
            >
              <WhatsAppIcon className="size-5" />
              Iniciar conversa no WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
