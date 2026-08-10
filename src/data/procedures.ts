/* ─────────────────────────────────────────────
   BANCO DE DADOS DE PROCEDIMENTOS
   ───────────────────────────────────────────── */

export type ProcedureCategory = "Facial" | "Corporal" | "Capilar";

export interface Procedure {
  id: string;
  title: string;
  category: ProcedureCategory;
  /** Categorias extras para filtro cruzado (ex: Radiofrequência é Facial E Corporal) */
  secondaryCategory?: ProcedureCategory;
  shortDescription: string;
  /** Se true, aparece na seção de destaques da Home */
  featured: boolean;
  /** Mensagem automática para o WhatsApp */
  whatsappMessage: string;
  /** Ícone Emoji para exibição rápida */
  icon: string;
}

export const procedures: Procedure[] = [
  /* ═══════════════════════════════════════════
     FACIAIS — Destaques
     ═══════════════════════════════════════════ */
  {
    id: "harmonizacao-facial",
    title: "Harmonização Facial",
    category: "Facial",
    shortDescription:
      "Planejamento para equilibrar proporções e valorizar traços com naturalidade, sem padronizar rostos.",
    featured: true,
    whatsappMessage:
      "Olá! Conheci a harmonização facial pelo site e gostaria de saber mais sobre a avaliação.",
    icon: "✨",
  },
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica",
    category: "Facial",
    shortDescription:
      "Aplicação estratégica para suavizar linhas de expressão, preservando a naturalidade dos movimentos faciais.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre toxina botulínica e agendar uma avaliação.",
    icon: "💎",
  },
  {
    id: "preenchimento-acido-hialuronico",
    title: "Preenchimento com Ácido Hialurônico",
    category: "Facial",
    shortDescription:
      "Pode contribuir para valorizar contornos, restaurar volumes e equilibrar proporções, conforme avaliação individual.",
    featured: true,
    whatsappMessage:
      "Olá! Conheci o preenchimento com ácido hialurônico pelo site e gostaria de saber mais.",
    icon: "💧",
  },
  {
    id: "bioestimulador-colageno",
    title: "Bioestimulador de Colágeno",
    category: "Facial",
    secondaryCategory: "Corporal",
    shortDescription:
      "Estímulo à produção natural de colágeno para melhora progressiva da firmeza e qualidade da pele.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre bioestimulador de colágeno e agendar uma avaliação.",
    icon: "🌿",
  },
  {
    id: "skin-booster",
    title: "Skin Booster",
    category: "Facial",
    shortDescription:
      "Hidratação profunda da pele com ácido hialurônico, promovendo luminosidade, viço e melhora da textura.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre skin booster e agendar uma avaliação.",
    icon: "💦",
  },
  {
    id: "rinomodelacao",
    title: "Rinomodelação sem Cirurgia",
    category: "Facial",
    shortDescription:
      "Procedimento para avaliar ajustes estéticos no nariz sem cirurgia, sempre com indicação personalizada e expectativa realista.",
    featured: true,
    whatsappMessage:
      "Olá! Conheci a rinomodelação pelo site e gostaria de saber mais sobre a avaliação.",
    icon: "👃",
  },

  /* ═══════════════════════════════════════════
     FACIAIS — Complementares
     ═══════════════════════════════════════════ */
  {
    id: "laser-co2-fracionado",
    title: "Laser de CO₂ Fracionado",
    category: "Facial",
    shortDescription:
      "Tecnologia para renovação da pele, tratamento de cicatrizes, manchas e melhora da textura cutânea.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o laser de CO2 fracionado.",
    icon: "⚡",
  },
  {
    id: "jato-de-plasma",
    title: "Jato de Plasma",
    category: "Facial",
    shortDescription:
      "Procedimento minimamente invasivo para retração da pele, tratamento de flacidez leve e rejuvenescimento.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o jato de plasma e agendar uma avaliação.",
    icon: "🔥",
  },
  {
    id: "fios-de-pdo",
    title: "Fios de PDO (Lisos e Espiculados)",
    category: "Facial",
    shortDescription:
      "Fios absorvíveis posicionados na pele para promover sustentação, estímulo de colágeno e efeito lifting sutil.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre fios de PDO e agendar uma avaliação.",
    icon: "🧵",
  },
  {
    id: "peelings",
    title: "Peelings",
    category: "Facial",
    shortDescription:
      "Renovação celular controlada para tratar manchas, acne, textura irregular e promover uniformidade da pele.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre peelings e agendar uma avaliação.",
    icon: "🍃",
  },

  /* ═══════════════════════════════════════════
     CORPORAIS
     ═══════════════════════════════════════════ */
  {
    id: "gordura-localizada",
    title: "Gordura Localizada",
    category: "Corporal",
    shortDescription:
      "Protocolos direcionados para redução de medidas em áreas específicas, com avaliação individualizada.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento para gordura localizada.",
    icon: "📐",
  },
  {
    id: "celulite-estrias",
    title: "Celulite e Estrias",
    category: "Corporal",
    shortDescription:
      "Tratamentos que combinam tecnologias e ativos para melhora da aparência da pele, com resultados progressivos.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento para celulite e estrias.",
    icon: "🌸",
  },
  {
    id: "flacidez-corporal-facial",
    title: "Flacidez Corporal e Facial",
    category: "Corporal",
    secondaryCategory: "Facial",
    shortDescription:
      "Protocolos com tecnologias e bioestimuladores para recuperar firmeza e tonicidade da pele.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento para flacidez.",
    icon: "💪",
  },
  {
    id: "radiofrequencia",
    title: "Radiofrequência",
    category: "Corporal",
    secondaryCategory: "Facial",
    shortDescription:
      "Aquecimento profundo dos tecidos para estimular colágeno, melhorar a firmeza e a qualidade da pele.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre radiofrequência e agendar uma avaliação.",
    icon: "📡",
  },
  {
    id: "microvasos-peim",
    title: "Aplicação em Microvasos (PEIM)",
    category: "Corporal",
    shortDescription:
      "Técnica para tratamento de microvasos e vasinhos, com aplicação localizada e resultados progressivos.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o tratamento para microvasos (PEIM).",
    icon: "🩺",
  },

  /* ═══════════════════════════════════════════
     CAPILAR
     ═══════════════════════════════════════════ */
  {
    id: "tratamento-capilar",
    title: "Tratamento Capilar",
    category: "Capilar",
    shortDescription:
      "Avaliação e protocolos personalizados para queda de cabelo, fortalecimento e saúde do couro cabeludo.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento capilar e agendar uma avaliação.",
    icon: "💇",
  },
];

/** Retorna apenas procedimentos de destaque */
export function getFeaturedProcedures(): Procedure[] {
  return procedures.filter((p) => p.featured);
}

/** Retorna procedimentos filtrados por categoria */
export function getProceduresByCategory(
  category: ProcedureCategory | "Todos"
): Procedure[] {
  if (category === "Todos") return procedures;
  return procedures.filter(
    (p) => p.category === category || p.secondaryCategory === category
  );
}

/** Retorna todas as categorias únicas */
export function getCategories(): ProcedureCategory[] {
  return ["Facial", "Corporal", "Capilar"];
}
