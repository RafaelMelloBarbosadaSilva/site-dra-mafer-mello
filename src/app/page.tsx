import Link from "next/link";
import Image from "next/image";
import { getFeaturedProcedures } from "@/data/procedures";
import ProcedureCard from "@/components/ProcedureCard";
import { siteConfig, buildWhatsAppUrl, defaultWhatsAppMessage } from "@/data/site-config";

export default function HomePage() {
  const featuredProcedures = getFeaturedProcedures();

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative flex items-center min-h-[calc(100vh-5rem)] overflow-hidden bg-stone-900 text-white" id="inicio">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/80 to-stone-900/40 z-10" />
          <Image
            src="/assets/maria-fernanda-mello/retratos/maria-fernanda-hero.jpg"
            alt="Dra. Maria Fernanda Mello"
            fill
            priority
            className="object-cover object-[68%_38%]"
            sizes="100vw"
          />
        </div>

        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block text-brand-400 text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase mb-4 animate-slide-up">
              {siteConfig.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.1] text-white mb-6 animate-slide-up-delayed">
              Estética facial e corporal personalizada para valorizar seus traços com leveza.
            </h1>
            <p className="text-base sm:text-lg text-stone-300 mb-10 leading-relaxed animate-slide-up-delayed-2">
              A abordagem da Dra. Maria Fernanda Mello é guiada por naturalidade, planejamento
              individual e cuidado em cada etapa, respeitando as características e os objetivos de
              cada paciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up-delayed-3">
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-lg shadow-brand-500/30 hover:-translate-y-1 transition-all duration-300"
                href={buildWhatsAppUrl(defaultWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
              >
                Quero agendar uma avaliação
              </a>
              <Link
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                href="/procedimentos"
              >
                Conhecer todos os procedimentos →
              </Link>
            </div>

            {/* Proof Items */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <dt className="font-bold text-brand-300 text-sm">Naturalidade</dt>
                <dd className="text-xs text-stone-300 mt-1">valorização dos traços reais</dd>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <dt className="font-bold text-brand-300 text-sm">Avaliação</dt>
                <dd className="text-xs text-stone-300 mt-1">indicação caso a caso</dd>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <dt className="font-bold text-brand-300 text-sm">Segurança</dt>
                <dd className="text-xs text-stone-300 mt-1">expectativas alinhadas antes</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOCIAL STRIP
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-600 text-white py-4" aria-label="Instagram oficial">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left text-sm">
            <span className="text-brand-200 text-xs font-extrabold uppercase tracking-wider">Instagram oficial</span>
            <a
              href={siteConfig.instagram.personal}
              target="_blank"
              rel="noreferrer"
              className="font-bold underline underline-offset-4 hover:text-brand-100 transition-colors"
            >
              {siteConfig.instagram.personalHandle}
            </a>
            <span className="hidden sm:inline text-brand-300">•</span>
            <p className="text-brand-100 text-xs sm:text-sm">Conteúdo educativo, rotina profissional e orientações sobre cuidados estéticos.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PILARS SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" id="instagram">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="max-w-lg">
              <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Do Instagram para o site</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">Uma comunicação clara, acolhedora e centrada em naturalidade.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="bg-stone-50 border border-stone-100 rounded-2xl p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold mb-4 group-hover:scale-110 transition-transform">01</span>
                <h3 className="text-lg font-bold font-serif mb-2 text-stone-900">Autocuidado consciente</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  O site organiza as principais dúvidas antes da avaliação, sem prometer resultados iguais para todas as pessoas.
                </p>
              </article>

              <article className="bg-stone-50 border border-stone-100 rounded-2xl p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold mb-4 group-hover:scale-110 transition-transform">02</span>
                <h3 className="text-lg font-bold font-serif mb-2 text-stone-900">Traços naturais</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  A mensagem prioriza leveza, sutileza e equilíbrio, preservando a identidade facial e corporal.
                </p>
              </article>

              <article className="bg-stone-50 border border-stone-100 rounded-2xl p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group sm:col-span-2">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold mb-4 group-hover:scale-110 transition-transform">03</span>
                <h3 className="text-lg font-bold font-serif mb-2 text-stone-900">Primeiro contato simples</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Os botões direcionam para o WhatsApp com mensagens específicas, de acordo com o interesse da paciente.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OBJETIVOS SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-surface-soft" id="objetivos">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Comece pelo objetivo</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">O procedimento ideal nasce da avaliação, não de uma escolha pronta.</h2>
            <p className="text-base sm:text-lg text-stone-600">
              A orientação profissional ajuda a entender se o caminho envolve estética facial, tratamentos corporais, capilares ou um planejamento combinado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link className="flex flex-col justify-between bg-white/80 backdrop-blur border border-brand-100 p-6 rounded-2xl hover:-translate-y-1.5 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all duration-300 group" href="/procedimentos">
              <span className="text-brand-600 text-xs font-extrabold mb-3 block group-hover:text-brand-700">Harmonia Facial</span>
              <strong className="text-lg font-serif text-stone-900 leading-tight">Valorizar proporções sem descaracterizar</strong>
            </Link>
            <Link className="flex flex-col justify-between bg-white/80 backdrop-blur border border-brand-100 p-6 rounded-2xl hover:-translate-y-1.5 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all duration-300 group" href="/procedimentos">
              <span className="text-brand-600 text-xs font-extrabold mb-3 block group-hover:text-brand-700">Contornos &amp; Volumes</span>
              <strong className="text-lg font-serif text-stone-900 leading-tight">Equilibrar traços com sutileza</strong>
            </Link>
            <Link className="flex flex-col justify-between bg-white/80 backdrop-blur border border-brand-100 p-6 rounded-2xl hover:-translate-y-1.5 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all duration-300 group" href="/procedimentos">
              <span className="text-brand-600 text-xs font-extrabold mb-3 block group-hover:text-brand-700">Firmeza da Pele</span>
              <strong className="text-lg font-serif text-stone-900 leading-tight">Estimular colágeno facial e corporal</strong>
            </Link>
            <Link className="flex flex-col justify-between bg-white/80 backdrop-blur border border-brand-100 p-6 rounded-2xl hover:-translate-y-1.5 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all duration-300 group" href="/procedimentos">
              <span className="text-brand-600 text-xs font-extrabold mb-3 block group-hover:text-brand-700">Tratamentos Corporais</span>
              <strong className="text-lg font-serif text-stone-900 leading-tight">Gordura localizada, celulite e microvasos</strong>
            </Link>
            <Link className="flex flex-col justify-between bg-white/80 backdrop-blur border border-brand-100 p-6 rounded-2xl hover:-translate-y-1.5 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all duration-300 group" href="/procedimentos">
              <span className="text-brand-600 text-xs font-extrabold mb-3 block group-hover:text-brand-700">Saúde Capilar</span>
              <strong className="text-lg font-serif text-stone-900 leading-tight">Cuidados para fortalecimento e queda</strong>
            </Link>
            <a className="flex flex-col justify-between bg-white/80 backdrop-blur border border-brand-100 p-6 rounded-2xl hover:-translate-y-1.5 hover:bg-white hover:border-brand-300 hover:shadow-xl transition-all duration-300 group" href={buildWhatsAppUrl("Olá! Gostaria de tirar uma dúvida inicial antes de decidir o tratamento.")} target="_blank" rel="noreferrer">
              <span className="text-brand-600 text-xs font-extrabold mb-3 block group-hover:text-brand-700">Dúvida Inicial</span>
              <strong className="text-lg font-serif text-stone-900 leading-tight">Conversar antes de decidir o melhor caminho</strong>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCEDIMENTOS EM DESTAQUE
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" id="procedimentos">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Procedimentos em Destaque</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Cuidados faciais e corporais com planejamento individual.</h2>
            </div>
            <Link
              href="/procedimentos"
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 text-sm sm:text-base group shrink-0"
            >
              <span>Ver todos os 16+ procedimentos</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProcedures.map((proc) => (
              <ProcedureCard key={proc.id} procedure={proc} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/procedimentos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-300"
            >
              Explorar Catálogo Completo (Facial, Corporal e Capilar) →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MÉTODO DE ATENDIMENTO
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-stone-900 text-white" id="metodo">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-brand-400 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Método de atendimento</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-6">Da avaliação ao acompanhamento, cada etapa tem uma função.</h2>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                A proposta é alinhar expectativas desde o início, evitando promessas absolutas e
                respeitando a resposta individual de cada paciente.
              </p>
            </div>

            <ol className="space-y-4">
              <li className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-brand-500/20 text-brand-300 font-bold text-lg">01</span>
                <div>
                  <h3 className="text-lg font-bold font-serif text-white mb-1">Escuta e avaliação</h3>
                  <p className="text-stone-400 text-sm">Entendimento das queixas, rotina, histórico e objetivos estéticos.</p>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-brand-500/20 text-brand-300 font-bold text-lg">02</span>
                <div>
                  <h3 className="text-lg font-bold font-serif text-white mb-1">Planejamento</h3>
                  <p className="text-stone-400 text-sm">Definição das possibilidades indicadas e dos cuidados necessários.</p>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-brand-500/20 text-brand-300 font-bold text-lg">03</span>
                <div>
                  <h3 className="text-lg font-bold font-serif text-white mb-1">Procedimento</h3>
                  <p className="text-stone-400 text-sm">Execução com foco em segurança, proporcionalidade e naturalidade.</p>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <span className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-brand-500/20 text-brand-300 font-bold text-lg">04</span>
                <div>
                  <h3 className="text-lg font-bold font-serif text-white mb-1">Orientações</h3>
                  <p className="text-stone-400 text-sm">Cuidados gerais e acompanhamento conforme cada protocolo e resposta individual.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOBRE A DRA. MARIA FERNANDA
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" id="sobre">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <figure className="relative rounded-2xl overflow-hidden shadow-2xl group h-[500px] sm:h-[600px] w-full">
              <Image
                src="/assets/maria-fernanda-mello/retratos/maria-fernanda-sobre.jpg"
                alt="Dra. Maria Fernanda Mello"
                fill
                className="object-cover object-[50%_18%] group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg font-serif font-bold text-xl text-stone-900">
                {siteConfig.name}
              </figcaption>
            </figure>

            <div>
              <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Sobre a Dra. Maria Fernanda</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">Cuidado estético com técnica, escuta e senso de proporção.</h2>
              <div className="space-y-4 text-stone-600 text-base sm:text-lg mb-8 leading-relaxed">
                <p>
                  Biomédica, Master em Harmonização Facial e pós-graduada em
                  Estética Avançada e Cosmetologia, a Dra. Maria Fernanda Mello conduz
                  atendimentos com foco em naturalidade, planejamento individual e valorização dos
                  traços reais.
                </p>
                <p>
                  O cuidado estético é pensado a partir de escuta, senso de proporção e
                  alinhamento de expectativas antes de qualquer procedimento.
                </p>
              </div>

              <div className="grid gap-3.5 text-sm">
                <div className="grid grid-cols-[120px_1fr] gap-4 p-4 bg-stone-50 rounded-xl border-l-4 border-brand-500">
                  <strong className="text-stone-900">Formação</strong>
                  <span className="text-stone-600">{siteConfig.professional.title}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 p-4 bg-stone-50 rounded-xl border-l-4 border-brand-500">
                  <strong className="text-stone-900">Especialização</strong>
                  <span className="text-stone-600">{siteConfig.professional.specializations.join("; ")}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 p-4 bg-stone-50 rounded-xl border-l-4 border-brand-500">
                  <strong className="text-stone-900">Atendimento</strong>
                  <span className="text-stone-600">{siteConfig.clinic.name}, em Ouro Fino - MG</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 p-4 bg-stone-50 rounded-xl border-l-4 border-brand-500">
                  <strong className="text-stone-900">Instagram</strong>
                  <a href={siteConfig.instagram.personal} target="_blank" rel="noreferrer" className="text-brand-600 font-bold hover:underline">
                    Rotina e orientações no {siteConfig.instagram.personalHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTEÚDO EDUCATIVO
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-surface-soft" id="conteudo-educativo">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Conteúdo educativo</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Decisões estéticas pedem informação clara.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-3">Resultados variam</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                O site evita promessas de resultado e reforça que cada organismo, anatomia e rotina influenciam a resposta.
              </p>
            </article>
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-3">Avaliação antes da indicação</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Procedimentos só devem ser definidos depois de uma conversa profissional e análise individual.
              </p>
            </article>
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-3">Instagram como fonte viva</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                O perfil oficial segue como canal de conteúdo, rotina profissional e atualizações.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DÚVIDAS FREQUENTES (FAQ)
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" id="duvidas">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Dúvidas frequentes</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">Respostas curtas para aproximar a avaliação.</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-stone-50 border border-stone-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-2 p-6 font-bold text-stone-900 text-base sm:text-lg">
                Preciso saber qual procedimento quero fazer?
                <span className="shrink-0 rounded-full bg-brand-100 p-2 text-brand-600 group-open:-rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                Não. A avaliação existe justamente para entender suas queixas, analisar suas características e indicar o caminho mais adequado.
              </p>
            </details>

            <details className="group bg-stone-50 border border-stone-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-2 p-6 font-bold text-stone-900 text-base sm:text-lg">
                Os resultados ficam naturais?
                <span className="shrink-0 rounded-full bg-brand-100 p-2 text-brand-600 group-open:-rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                A comunicação do site prioriza naturalidade e equilíbrio. O plano depende da indicação profissional e da resposta individual.
              </p>
            </details>

            <details className="group bg-stone-50 border border-stone-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-2 p-6 font-bold text-stone-900 text-base sm:text-lg">
                Existe contraindicação?
                <span className="shrink-0 rounded-full bg-brand-100 p-2 text-brand-600 group-open:-rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                Alguns procedimentos podem ter restrições. Por isso, histórico de saúde, expectativas e características individuais devem ser avaliados antes da indicação.
              </p>
            </details>

            <details className="group bg-stone-50 border border-stone-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-2 p-6 font-bold text-stone-900 text-base sm:text-lg">
                Como funciona o agendamento?
                <span className="shrink-0 rounded-full bg-brand-100 p-2 text-brand-600 group-open:-rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                Os botões do site direcionam para o WhatsApp com uma mensagem pré-preenchida conforme o procedimento ou interesse selecionado.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTATO E AGENDAMENTO
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-50 via-white to-orange-50" id="contato">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-brand-600 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-3">Agendamento</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">Vamos planejar seu cuidado estético?</h2>
              <p className="text-stone-600 text-base sm:text-lg mb-8 leading-relaxed">
                Envie seu interesse e inicie uma conversa para entender qual protocolo combina com o seu momento.
              </p>

              <div className="space-y-4 mb-10 text-sm">
                <div className="grid grid-cols-[110px_1fr] gap-4 py-3 border-b border-stone-200">
                  <strong className="text-stone-900">Instagram</strong>
                  <div className="flex flex-wrap gap-4 text-brand-600 font-bold">
                    <a href={siteConfig.instagram.personal} target="_blank" rel="noreferrer" className="hover:underline">
                      {siteConfig.instagram.personalHandle}
                    </a>
                    <a href={siteConfig.instagram.clinic} target="_blank" rel="noreferrer" className="hover:underline">
                      {siteConfig.instagram.clinicHandle}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-4 py-3 border-b border-stone-200">
                  <strong className="text-stone-900">Endereço</strong>
                  <a href={siteConfig.clinic.mapsUrl} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-brand-600 transition-colors">
                    {siteConfig.clinic.address}
                  </a>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-4 py-3 border-b border-stone-200">
                  <strong className="text-stone-900">Horários</strong>
                  <span className="text-stone-600">{siteConfig.clinic.hours}</span>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-stone-200">
                <Image
                  src="/assets/maria-fernanda-mello/marca/logo-clinica-amesse.jpg"
                  alt="Logo Clínica Amesse"
                  width={80}
                  height={80}
                  className="rounded-xl border border-stone-100 object-cover"
                />
                <div>
                  <strong className="block text-stone-900 text-base font-serif mb-0.5">{siteConfig.clinic.name}</strong>
                  <p className="text-stone-500 text-xs sm:text-sm">Atendimento em estética e saúde em Ouro Fino - MG.</p>
                </div>
              </div>
            </div>

            {/* Direct Callout Box */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-500/10 border border-stone-200 text-center flex flex-col items-center justify-center min-h-[380px]">
              <span className="text-4xl mb-4">💬</span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Agendamento via WhatsApp</h3>
              <p className="text-stone-600 text-sm mb-8 max-w-sm">
                Fale diretamente conosco para agendar sua avaliação personalizada ou tirar dúvidas sobre qualquer procedimento.
              </p>
              <a
                href={buildWhatsAppUrl(defaultWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold rounded-xl hover:from-brand-600 hover:to-brand-700 shadow-lg shadow-brand-500/30 hover:-translate-y-0.5 transition-all text-base"
              >
                Iniciar Conversa no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
