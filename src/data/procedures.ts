/* ═══════════════════════════════════════════════════════════
   BANCO DE DADOS DE PROCEDIMENTOS

   ⚠️  REVISÃO PROFISSIONAL PENDENTE
   Os campos de página (`longDescription`, `indications`,
   `howItWorks`, `aftercare`, `faq`) foram redigidos a partir do
   que já estava aprovado no site — o `shortDescription` de cada
   item — em linguagem descritiva, sem promessa de resultado,
   sem número de sessões e sem tempo de duração.

   `docs/site-content-mapping.md` registra que não havia conteúdo
   real suficiente para páginas individuais. Enquanto
   `needsReview` for `true`, o site exibe um aviso de revisão em
   desenvolvimento (invisível em produção) para lembrar que o
   texto precisa do aval da profissional antes de publicar.
   ═══════════════════════════════════════════════════════════ */

import {
  Droplet,
  Droplets,
  Dumbbell,
  Flame,
  Layers,
  Leaf,
  RadioTower,
  Ruler,
  Scan,
  Scissors,
  Sparkles,
  Spline,
  Stethoscope,
  Syringe,
  WavesHorizontal,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type ProcedureCategory = "Facial" | "Corporal" | "Capilar";

export interface ProcedureFaq {
  question: string;
  answer: string;
}

export interface Procedure {
  id: string;
  /** Igual ao `id` — os ids já são slug-safe */
  slug: string;
  title: string;
  category: ProcedureCategory;
  /** Categoria extra para filtro cruzado (ex.: Radiofrequência é Facial E Corporal) */
  secondaryCategory?: ProcedureCategory;
  shortDescription: string;
  /** Se true, aparece na seção de destaques da Home */
  featured: boolean;
  /** Mensagem automática para o WhatsApp */
  whatsappMessage: string;
  /** Ícone Lucide — nunca emoji */
  icon: LucideIcon;

  /* ── Conteúdo da página dedicada ── */
  longDescription: string;
  /** Queixas que costumam motivar a avaliação */
  indications: string[];
  /** Como costuma ser conduzido o atendimento */
  howItWorks: string[];
  /** Orientações gerais de cuidado */
  aftercare: string[];
  faq: ProcedureFaq[];
  /** Ids sugeridos na seção "procedimentos relacionados" */
  relatedIds: string[];
  /** Texto derivado, ainda não validado pela profissional */
  needsReview: boolean;
}

/** Ressalva usada em todas as páginas de procedimento */
export const individualizationNotice =
  "Indicação, protocolo e resposta ao tratamento variam conforme anatomia, histórico de saúde, rotina e objetivos de cada pessoa. Nada aqui substitui a avaliação profissional presencial.";

export const procedures: Procedure[] = [
  /* ═══════════════════════════════════════════
     FACIAIS — Destaques
     ═══════════════════════════════════════════ */
  {
    id: "harmonizacao-facial",
    slug: "harmonizacao-facial",
    title: "Harmonização Facial",
    category: "Facial",
    shortDescription:
      "Planejamento para equilibrar proporções e valorizar traços com naturalidade, sem padronizar rostos.",
    featured: true,
    whatsappMessage:
      "Olá! Conheci a harmonização facial pelo site e gostaria de saber mais sobre a avaliação.",
    icon: Sparkles,
    longDescription:
      "Harmonização facial não é um procedimento único, e sim um planejamento. A partir da análise do rosto como conjunto — proporções, simetria relativa, sustentação e qualidade da pele — define-se quais recursos podem ser combinados para valorizar os traços que já existem. O ponto de partida é entender o que incomoda a paciente, não aplicar um modelo pronto de rosto.",
    indications: [
      "Sensação de que alguma região do rosto está desproporcional em relação ao conjunto",
      "Vontade de suavizar sinais de tempo mantendo a própria identidade facial",
      "Dúvida sobre qual procedimento seria mais adequado entre várias opções",
      "Interesse em um plano combinado em vez de intervenções isoladas",
    ],
    howItWorks: [
      "Escuta das queixas, do histórico de saúde e dos objetivos estéticos",
      "Análise facial considerando proporções, sustentação e qualidade da pele",
      "Apresentação das possibilidades indicadas para o caso, com o que cada uma pode e não pode entregar",
      "Execução do que for acordado e definição do acompanhamento",
    ],
    aftercare: [
      "Seguir as orientações específicas de cada técnica utilizada no plano",
      "Comunicar qualquer reação fora do esperado",
      "Manter os retornos combinados para acompanhar a resposta individual",
    ],
    faq: [
      {
        question: "Preciso decidir tudo na primeira consulta?",
        answer:
          "Não. A avaliação existe para mapear as possibilidades e esclarecer dúvidas. O plano pode ser feito por etapas, respeitando o seu tempo.",
      },
      {
        question: "Meu rosto vai ficar com aparência artificial?",
        answer:
          "A condução prioriza naturalidade e senso de proporção. O objetivo é valorizar seus traços, não substituí-los. Ainda assim, a resposta é individual e é discutida antes de qualquer procedimento.",
      },
    ],
    relatedIds: [
      "preenchimento-acido-hialuronico",
      "toxina-botulinica",
      "bioestimulador-colageno",
    ],
    needsReview: true,
  },
  {
    id: "toxina-botulinica",
    slug: "toxina-botulinica",
    title: "Toxina Botulínica",
    category: "Facial",
    shortDescription:
      "Aplicação estratégica para suavizar linhas de expressão, preservando a naturalidade dos movimentos faciais.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre toxina botulínica e agendar uma avaliação.",
    icon: Syringe,
    longDescription:
      "A toxina botulínica atua reduzindo temporariamente a contração de músculos específicos da face, o que pode suavizar as linhas formadas pela expressão. O planejamento define quais pontos tratar e com que intensidade — a proposta é manter a expressividade do rosto, e não congelá-la.",
    indications: [
      "Linhas de expressão na testa, entre as sobrancelhas ou ao redor dos olhos",
      "Desejo de suavizar marcas dinâmicas mantendo a mímica facial",
      "Assimetrias de expressão notadas na avaliação",
    ],
    howItWorks: [
      "Avaliação da musculatura em movimento e em repouso",
      "Definição dos pontos de aplicação conforme o padrão de expressão de cada pessoa",
      "Aplicação com agulha fina, em sessão ambulatorial",
      "Retorno para conferir a resposta e ajustar o que for necessário",
    ],
    aftercare: [
      "Evitar massagear ou pressionar a região tratada nas horas seguintes",
      "Evitar atividade física intensa, calor excessivo e deitar de bruços no período orientado",
      "O efeito é gradual e não aparece imediatamente após a aplicação",
    ],
    faq: [
      {
        question: "O efeito é permanente?",
        answer:
          "Não. O efeito é temporário e o tempo de duração varia de pessoa para pessoa, conforme metabolismo, musculatura e rotina.",
      },
      {
        question: "Existe contraindicação?",
        answer:
          "Sim. Algumas condições de saúde, uso de determinados medicamentos, gestação e amamentação são situações que precisam ser avaliadas antes da indicação.",
      },
    ],
    relatedIds: [
      "harmonizacao-facial",
      "preenchimento-acido-hialuronico",
      "skin-booster",
    ],
    needsReview: true,
  },
  {
    id: "preenchimento-acido-hialuronico",
    slug: "preenchimento-acido-hialuronico",
    title: "Preenchimento com Ácido Hialurônico",
    category: "Facial",
    shortDescription:
      "Pode contribuir para valorizar contornos, restaurar volumes e equilibrar proporções, conforme avaliação individual.",
    featured: true,
    whatsappMessage:
      "Olá! Conheci o preenchimento com ácido hialurônico pelo site e gostaria de saber mais.",
    icon: Droplet,
    longDescription:
      "O ácido hialurônico é uma substância compatível com o organismo, usada para repor volume ou definir contornos em regiões específicas do rosto. A escolha do produto, da região e da quantidade parte da análise facial — o objetivo é o equilíbrio do conjunto, não o volume pelo volume.",
    indications: [
      "Perda de volume percebida em regiões específicas do rosto",
      "Contornos que a paciente gostaria de ver mais definidos",
      "Sulcos e depressões que incomodam na avaliação do próprio rosto",
      "Busca por equilíbrio de proporções dentro de um plano de harmonização",
    ],
    howItWorks: [
      "Análise facial e definição das regiões que fazem sentido tratar",
      "Escolha do produto adequado para cada área e profundidade",
      "Aplicação com técnica compatível com a região tratada",
      "Retorno de acompanhamento para avaliar a acomodação do produto",
    ],
    aftercare: [
      "Evitar calor intenso, atividade física vigorosa e massagem local no período orientado",
      "Inchaço e sensibilidade nos primeiros dias estão dentro do esperado",
      "Comunicar imediatamente dor intensa, palidez ou alteração de coloração na região",
    ],
    faq: [
      {
        question: "O resultado é definitivo?",
        answer:
          "Não. O ácido hialurônico é reabsorvido pelo organismo ao longo do tempo, em ritmo que varia conforme a pessoa, a região e o produto utilizado.",
      },
      {
        question: "Dá para fazer só uma região?",
        answer:
          "Sim. O plano pode ser pontual ou combinado — isso é definido na avaliação, a partir da sua queixa.",
      },
    ],
    relatedIds: ["harmonizacao-facial", "rinomodelacao", "skin-booster"],
    needsReview: true,
  },
  {
    id: "bioestimulador-colageno",
    slug: "bioestimulador-colageno",
    title: "Bioestimulador de Colágeno",
    category: "Facial",
    secondaryCategory: "Corporal",
    shortDescription:
      "Estímulo à produção natural de colágeno para melhora progressiva da firmeza e qualidade da pele.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre bioestimulador de colágeno e agendar uma avaliação.",
    icon: Leaf,
    longDescription:
      "Os bioestimuladores não repõem volume diretamente: eles estimulam o próprio organismo a produzir colágeno na região tratada. Por isso a mudança é progressiva e depende da resposta biológica de cada pessoa. Podem ser indicados tanto na face quanto no corpo, conforme a queixa avaliada.",
    indications: [
      "Perda de firmeza e sensação de pele menos sustentada",
      "Textura e qualidade da pele que a paciente gostaria de melhorar",
      "Flacidez leve a moderada em face ou corpo, conforme avaliação",
      "Preferência por uma abordagem de mudança gradual",
    ],
    howItWorks: [
      "Avaliação da qualidade da pele e do grau de flacidez",
      "Definição das áreas a tratar e do protocolo adequado",
      "Aplicação na região indicada, em sessão ambulatorial",
      "Acompanhamento ao longo das semanas, já que o efeito é progressivo",
    ],
    aftercare: [
      "Realizar a massagem local se e como for orientado no seu protocolo",
      "Evitar exposição solar intensa e calor excessivo no período indicado",
      "Manter hidratação e fotoproteção na rotina",
    ],
    faq: [
      {
        question: "Quando começo a perceber diferença?",
        answer:
          "Como o efeito depende da produção de colágeno pelo próprio organismo, a percepção é gradual e o tempo varia de pessoa para pessoa.",
      },
      {
        question: "Serve para o corpo também?",
        answer:
          "Pode ser indicado para regiões corporais, dependendo da queixa e da avaliação individual.",
      },
    ],
    relatedIds: [
      "harmonizacao-facial",
      "flacidez-corporal-facial",
      "radiofrequencia",
    ],
    needsReview: true,
  },
  {
    id: "skin-booster",
    slug: "skin-booster",
    title: "Skin Booster",
    category: "Facial",
    shortDescription:
      "Hidratação profunda da pele com ácido hialurônico, promovendo luminosidade, viço e melhora da textura.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre skin booster e agendar uma avaliação.",
    icon: Droplets,
    longDescription:
      "O skin booster usa ácido hialurônico de baixa densidade aplicado de forma superficial, com foco em hidratação e qualidade da pele — não em volume ou contorno. É uma abordagem voltada a viço, textura e luminosidade.",
    indications: [
      "Pele com aspecto ressecado ou sem viço",
      "Textura irregular e linhas finas superficiais",
      "Desejo de melhorar a qualidade da pele sem alterar o contorno do rosto",
      "Regiões como rosto, pescoço ou mãos, conforme avaliação",
    ],
    howItWorks: [
      "Avaliação da qualidade e do grau de hidratação da pele",
      "Definição das áreas e do protocolo",
      "Aplicação superficial em microdepósitos na região tratada",
      "Acompanhamento da resposta e definição de manutenção, se indicada",
    ],
    aftercare: [
      "Pequenas pápulas e vermelhidão nas primeiras horas estão dentro do esperado",
      "Evitar maquiagem, sol intenso e atividade física vigorosa no período orientado",
      "Reforçar hidratação e fotoproteção na rotina",
    ],
    faq: [
      {
        question: "É a mesma coisa que preenchimento?",
        answer:
          "Não. Embora ambos usem ácido hialurônico, o skin booster trabalha a qualidade e a hidratação da pele, enquanto o preenchimento atua em volume e contorno.",
      },
    ],
    relatedIds: [
      "preenchimento-acido-hialuronico",
      "peelings",
      "bioestimulador-colageno",
    ],
    needsReview: true,
  },
  {
    id: "rinomodelacao",
    slug: "rinomodelacao",
    title: "Rinomodelação sem Cirurgia",
    category: "Facial",
    shortDescription:
      "Procedimento para avaliar ajustes estéticos no nariz sem cirurgia, sempre com indicação personalizada e expectativa realista.",
    featured: true,
    whatsappMessage:
      "Olá! Conheci a rinomodelação pelo site e gostaria de saber mais sobre a avaliação.",
    icon: Scan,
    longDescription:
      "A rinomodelação usa preenchedores para trabalhar o contorno aparente do nariz, atuando em pequenas irregularidades e na projeção percebida. É importante entender o alcance da técnica: ela não reduz o tamanho do nariz nem substitui a cirurgia, e nem todo caso tem indicação.",
    indications: [
      "Pequenas irregularidades no dorso do nariz",
      "Percepção de ponta pouco projetada ou caída",
      "Assimetrias discretas percebidas de perfil",
      "Interesse em avaliar alternativas antes de considerar cirurgia",
    ],
    howItWorks: [
      "Avaliação anatômica detalhada da região, de frente e de perfil",
      "Alinhamento de expectativas sobre o que a técnica alcança e o que não alcança",
      "Aplicação com técnica específica para a região, quando houver indicação",
      "Retorno de acompanhamento",
    ],
    aftercare: [
      "Evitar óculos apoiados sobre a região no período orientado",
      "Evitar calor intenso, sol forte e manipulação local",
      "Procurar atendimento imediatamente diante de dor intensa, alteração de cor ou mudança na visão",
    ],
    faq: [
      {
        question: "Substitui a cirurgia?",
        answer:
          "Não. É uma técnica com alcance diferente da rinoplastia e nem todo caso tem indicação. Isso é avaliado individualmente.",
      },
      {
        question: "Por que a avaliação é tão importante aqui?",
        answer:
          "A região do nariz tem particularidades anatômicas que exigem análise cuidadosa antes de qualquer indicação.",
      },
    ],
    relatedIds: [
      "preenchimento-acido-hialuronico",
      "harmonizacao-facial",
      "toxina-botulinica",
    ],
    needsReview: true,
  },

  /* ═══════════════════════════════════════════
     FACIAIS — Complementares
     ═══════════════════════════════════════════ */
  {
    id: "laser-co2-fracionado",
    slug: "laser-co2-fracionado",
    title: "Laser de CO₂ Fracionado",
    category: "Facial",
    shortDescription:
      "Tecnologia para renovação da pele, tratamento de cicatrizes, manchas e melhora da textura cutânea.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o laser de CO2 fracionado.",
    icon: Zap,
    longDescription:
      "O laser de CO₂ fracionado promove uma renovação controlada da pele, estimulando o processo natural de reparo. É usado em queixas de textura, cicatrizes e marcas, com parâmetros ajustados conforme o tipo de pele e o objetivo do tratamento.",
    indications: [
      "Cicatrizes de acne e irregularidades de textura",
      "Manchas e alterações de tom, conforme avaliação",
      "Poros dilatados e pele com aspecto irregular",
      "Linhas finas superficiais",
    ],
    howItWorks: [
      "Avaliação do tipo de pele, do histórico de manchas e das queixas",
      "Preparo prévio da pele, quando indicado",
      "Aplicação com parâmetros ajustados ao caso",
      "Orientação detalhada de recuperação e acompanhamento",
    ],
    aftercare: [
      "Fotoproteção rigorosa é indispensável no período de recuperação",
      "Vermelhidão e descamação nos dias seguintes fazem parte do processo",
      "Seguir à risca a rotina de cuidados indicada, sem improvisar produtos",
    ],
    faq: [
      {
        question: "Preciso de afastamento das atividades?",
        answer:
          "O período de recuperação varia conforme a intensidade escolhida e o tipo de pele. Isso é conversado antes, para você se organizar.",
      },
      {
        question: "Serve para qualquer tipo de pele?",
        answer:
          "Peles com maior tendência a manchas exigem cuidado adicional no preparo e nos parâmetros. Por isso a avaliação prévia é obrigatória.",
      },
    ],
    relatedIds: ["peelings", "jato-de-plasma", "skin-booster"],
    needsReview: true,
  },
  {
    id: "jato-de-plasma",
    slug: "jato-de-plasma",
    title: "Jato de Plasma",
    category: "Facial",
    shortDescription:
      "Procedimento minimamente invasivo para retração da pele, tratamento de flacidez leve e rejuvenescimento.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o jato de plasma e agendar uma avaliação.",
    icon: Flame,
    longDescription:
      "O jato de plasma atua em pontos muito superficiais da pele, promovendo retração localizada do tecido. É usado em queixas de flacidez leve em áreas delicadas, com indicação avaliada caso a caso.",
    indications: [
      "Flacidez leve em regiões delicadas, como a pálpebra superior",
      "Pequenas linhas em áreas de pele fina",
      "Lesões superficiais de pele, conforme avaliação",
    ],
    howItWorks: [
      "Avaliação da região, do grau de flacidez e do tipo de pele",
      "Aplicação pontual, sob anestesia tópica",
      "Formação de crostas superficiais que fazem parte do processo",
      "Acompanhamento até a completa recuperação da pele",
    ],
    aftercare: [
      "Não remover as crostas — a queda precisa ser espontânea",
      "Fotoproteção rigorosa durante toda a recuperação",
      "Seguir a rotina de cuidados indicada, sem produtos por conta própria",
    ],
    faq: [
      {
        question: "É doloroso?",
        answer:
          "O procedimento é feito com anestésico tópico. A sensibilidade varia de pessoa para pessoa e é conversada antes.",
      },
    ],
    relatedIds: ["laser-co2-fracionado", "fios-de-pdo", "radiofrequencia"],
    needsReview: true,
  },
  {
    id: "fios-de-pdo",
    slug: "fios-de-pdo",
    title: "Fios de PDO (Lisos e Espiculados)",
    category: "Facial",
    shortDescription:
      "Fios absorvíveis posicionados na pele para promover sustentação, estímulo de colágeno e efeito lifting sutil.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre fios de PDO e agendar uma avaliação.",
    icon: Spline,
    longDescription:
      "Os fios de PDO são absorvíveis e posicionados sob a pele. Os lisos trabalham principalmente o estímulo de colágeno; os espiculados têm ancoragem e podem atuar no reposicionamento de tecidos. A escolha entre eles — e a indicação em si — depende do grau de flacidez avaliado.",
    indications: [
      "Flacidez leve a moderada com perda de definição do contorno",
      "Desejo de sustentação sem procedimento cirúrgico",
      "Interesse em estímulo de colágeno associado à sustentação",
    ],
    howItWorks: [
      "Avaliação do grau de flacidez e da qualidade da pele",
      "Definição do tipo de fio e dos vetores de sustentação",
      "Inserção sob anestesia local",
      "Orientação de recuperação e retornos de acompanhamento",
    ],
    aftercare: [
      "Evitar movimentos amplos do rosto, mastigação de alimentos duros e massagem local no período orientado",
      "Dormir de barriga para cima nos primeiros dias, conforme orientação",
      "Inchaço e sensibilidade nos primeiros dias estão dentro do esperado",
    ],
    faq: [
      {
        question: "Os fios precisam ser retirados depois?",
        answer:
          "Não. São absorvíveis e reabsorvidos pelo organismo ao longo do tempo.",
      },
      {
        question: "Substitui uma cirurgia de lifting?",
        answer:
          "Não. O alcance é diferente e depende do grau de flacidez. Casos mais avançados podem não ter indicação para a técnica.",
      },
    ],
    relatedIds: [
      "bioestimulador-colageno",
      "flacidez-corporal-facial",
      "radiofrequencia",
    ],
    needsReview: true,
  },
  {
    id: "peelings",
    slug: "peelings",
    title: "Peelings",
    category: "Facial",
    shortDescription:
      "Renovação celular controlada para tratar manchas, acne, textura irregular e promover uniformidade da pele.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre peelings e agendar uma avaliação.",
    icon: Layers,
    longDescription:
      "Peelings promovem uma renovação controlada das camadas superficiais da pele. Existem diferentes ativos e profundidades, e a escolha depende da queixa, do tipo de pele e da rotina de exposição solar de cada pessoa.",
    indications: [
      "Manchas e tom irregular, conforme avaliação",
      "Pele com tendência a acne ou marcas residuais",
      "Textura irregular e aspecto opaco",
    ],
    howItWorks: [
      "Avaliação do tipo de pele e da queixa principal",
      "Preparo prévio da pele, quando indicado",
      "Aplicação do ativo escolhido, com tempo controlado",
      "Orientação de cuidados e acompanhamento da resposta",
    ],
    aftercare: [
      "Fotoproteção rigorosa é parte do tratamento, não um detalhe",
      "Descamação e sensibilidade nos dias seguintes podem ocorrer",
      "Não usar ácidos ou esfoliantes por conta própria durante a recuperação",
    ],
    faq: [
      {
        question: "Posso fazer em qualquer época do ano?",
        answer:
          "A exposição solar influencia bastante o resultado e o risco de manchas. Isso é considerado na indicação e no planejamento.",
      },
    ],
    relatedIds: ["laser-co2-fracionado", "skin-booster", "harmonizacao-facial"],
    needsReview: true,
  },

  /* ═══════════════════════════════════════════
     CORPORAIS
     ═══════════════════════════════════════════ */
  {
    id: "gordura-localizada",
    slug: "gordura-localizada",
    title: "Gordura Localizada",
    category: "Corporal",
    shortDescription:
      "Protocolos direcionados para redução de medidas em áreas específicas, com avaliação individualizada.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento para gordura localizada.",
    icon: Ruler,
    longDescription:
      "Os protocolos para gordura localizada combinam recursos voltados a áreas específicas do corpo. São tratamentos de apoio estético: não substituem alimentação adequada, atividade física nem acompanhamento de saúde, e a resposta depende de fatores individuais.",
    indications: [
      "Acúmulo em áreas específicas que não respondem como se gostaria à rotina",
      "Desejo de trabalhar contorno corporal de forma localizada",
      "Interesse em um protocolo combinado com outras frentes de cuidado",
    ],
    howItWorks: [
      "Avaliação das áreas, do histórico de saúde e da rotina",
      "Definição do protocolo e do que ele pode alcançar",
      "Sessões conforme o planejamento acordado",
      "Acompanhamento da resposta ao longo do processo",
    ],
    aftercare: [
      "Manter hidratação adequada",
      "Seguir as orientações específicas do protocolo escolhido",
      "Entender que hábitos de rotina influenciam diretamente a resposta",
    ],
    faq: [
      {
        question: "Substitui dieta e exercício?",
        answer:
          "Não. São tratamentos estéticos de apoio. Rotina alimentar, atividade física e acompanhamento de saúde continuam sendo a base.",
      },
    ],
    relatedIds: ["celulite-estrias", "flacidez-corporal-facial", "radiofrequencia"],
    needsReview: true,
  },
  {
    id: "celulite-estrias",
    slug: "celulite-estrias",
    title: "Celulite e Estrias",
    category: "Corporal",
    shortDescription:
      "Tratamentos que combinam tecnologias e ativos para melhora da aparência da pele, com resultados progressivos.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento para celulite e estrias.",
    icon: WavesHorizontal,
    longDescription:
      "Celulite e estrias têm causas multifatoriais — genética, hormônios, circulação e histórico de variação de peso entram na conta. Os protocolos combinam tecnologias e ativos para trabalhar a aparência da pele, com mudança progressiva e variável entre pessoas.",
    indications: [
      "Irregularidades na superfície da pele em coxas, glúteos ou abdome",
      "Estrias em diferentes estágios, conforme avaliação",
      "Desejo de melhorar textura e aspecto da pele corporal",
    ],
    howItWorks: [
      "Avaliação do grau, do tempo de evolução e dos fatores associados",
      "Definição de um protocolo combinado conforme a queixa",
      "Sessões seriadas, já que a mudança é progressiva",
      "Reavaliação ao longo do processo",
    ],
    aftercare: [
      "Manter hidratação da pele e ingestão adequada de água",
      "Fotoproteção nas áreas expostas",
      "Seguir os intervalos de sessão definidos no planejamento",
    ],
    faq: [
      {
        question: "Estria branca e estria vermelha respondem igual?",
        answer:
          "Não. O estágio da estria influencia bastante a abordagem e a expectativa, e isso é avaliado individualmente.",
      },
      {
        question: "A celulite desaparece por completo?",
        answer:
          "O objetivo do tratamento é trabalhar a aparência da pele. Prometer desaparecimento completo não seria honesto — a resposta é individual e depende de vários fatores.",
      },
    ],
    relatedIds: ["gordura-localizada", "radiofrequencia", "flacidez-corporal-facial"],
    needsReview: true,
  },
  {
    id: "flacidez-corporal-facial",
    slug: "flacidez-corporal-facial",
    title: "Flacidez Corporal e Facial",
    category: "Corporal",
    secondaryCategory: "Facial",
    shortDescription:
      "Protocolos com tecnologias e bioestimuladores para recuperar firmeza e tonicidade da pele.",
    featured: false,
    whatsappMessage: "Olá! Gostaria de saber mais sobre tratamento para flacidez.",
    icon: Dumbbell,
    longDescription:
      "Flacidez pode ser de pele ou muscular, e o tratamento muda conforme o caso. Os protocolos combinam tecnologias e bioestimuladores para trabalhar firmeza e sustentação, com efeito construído ao longo do tempo.",
    indications: [
      "Perda de firmeza após variação de peso",
      "Flacidez de pele em braços, abdome, coxas ou face",
      "Sensação de pele menos sustentada com o passar do tempo",
    ],
    howItWorks: [
      "Avaliação do tipo e do grau de flacidez",
      "Definição do protocolo mais adequado para o caso",
      "Sessões conforme o planejamento",
      "Acompanhamento da resposta, que é progressiva",
    ],
    aftercare: [
      "Manter hidratação da pele",
      "Seguir as orientações específicas de cada tecnologia utilizada",
      "Considerar que fortalecimento muscular e rotina influenciam o conjunto",
    ],
    faq: [
      {
        question: "Flacidez muito avançada tem indicação?",
        answer:
          "Casos mais avançados podem ter alcance limitado com tratamentos estéticos. Isso é dito com clareza na avaliação, antes de qualquer proposta.",
      },
    ],
    relatedIds: ["bioestimulador-colageno", "radiofrequencia", "fios-de-pdo"],
    needsReview: true,
  },
  {
    id: "radiofrequencia",
    slug: "radiofrequencia",
    title: "Radiofrequência",
    category: "Corporal",
    secondaryCategory: "Facial",
    shortDescription:
      "Aquecimento profundo dos tecidos para estimular colágeno, melhorar a firmeza e a qualidade da pele.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre radiofrequência e agendar uma avaliação.",
    icon: RadioTower,
    longDescription:
      "A radiofrequência promove aquecimento controlado das camadas profundas da pele, o que estimula a produção de colágeno. É um recurso não invasivo, usado tanto na face quanto no corpo, geralmente em sessões seriadas.",
    indications: [
      "Flacidez leve a moderada de pele, facial ou corporal",
      "Desejo de estimular colágeno sem procedimento invasivo",
      "Complemento a outros protocolos de firmeza",
    ],
    howItWorks: [
      "Avaliação da região e do grau de flacidez",
      "Aplicação do equipamento com controle de temperatura",
      "Sensação de calor progressivo durante a sessão",
      "Sessões seriadas conforme o planejamento",
    ],
    aftercare: [
      "Manter boa hidratação antes e depois das sessões",
      "Evitar calor intenso na região logo após a sessão",
      "Fotoproteção nas áreas expostas",
    ],
    faq: [
      {
        question: "Tem contraindicação?",
        answer:
          "Sim. Gestação, presença de determinados implantes metálicos ou eletrônicos e algumas condições de saúde precisam ser avaliadas antes.",
      },
    ],
    relatedIds: [
      "flacidez-corporal-facial",
      "bioestimulador-colageno",
      "celulite-estrias",
    ],
    needsReview: true,
  },
  {
    id: "microvasos-peim",
    slug: "microvasos-peim",
    title: "Aplicação em Microvasos (PEIM)",
    category: "Corporal",
    shortDescription:
      "Técnica para tratamento de microvasos e vasinhos, com aplicação localizada e resultados progressivos.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o tratamento para microvasos (PEIM).",
    icon: Stethoscope,
    longDescription:
      "O PEIM (Procedimento Estético Injetável em Microvasos) trata vasos superficiais de pequeno calibre por meio de aplicações localizadas. É um tratamento estético, com sessões seriadas, e a resposta é gradual.",
    indications: [
      "Vasinhos superficiais visíveis, principalmente nas pernas",
      "Microvasos que incomodam esteticamente",
      "Interesse em tratamento localizado e progressivo",
    ],
    howItWorks: [
      "Avaliação dos vasos, do calibre e do histórico circulatório",
      "Aplicação localizada com agulha fina",
      "Sessões seriadas, tratando as áreas por etapas",
      "Acompanhamento da resposta entre as sessões",
    ],
    aftercare: [
      "Usar meia de compressão se e como for orientado",
      "Evitar sol na região tratada e exposição a calor intenso",
      "Manchas temporárias e pequenos hematomas podem ocorrer",
    ],
    faq: [
      {
        question: "Impede o surgimento de novos vasinhos?",
        answer:
          "Não. O tratamento atua nos vasos já existentes; fatores individuais e genéticos continuam influenciando o surgimento de novos.",
      },
      {
        question: "É um tratamento de saúde vascular?",
        answer:
          "Não. É um procedimento estético para microvasos superficiais. Queixas de saúde vascular devem ser acompanhadas pela especialidade médica adequada.",
      },
    ],
    relatedIds: ["celulite-estrias", "gordura-localizada", "radiofrequencia"],
    needsReview: true,
  },

  /* ═══════════════════════════════════════════
     CAPILAR
     ═══════════════════════════════════════════ */
  {
    id: "tratamento-capilar",
    slug: "tratamento-capilar",
    title: "Tratamento Capilar",
    category: "Capilar",
    shortDescription:
      "Avaliação e protocolos personalizados para queda de cabelo, fortalecimento e saúde do couro cabeludo.",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento capilar e agendar uma avaliação.",
    icon: Scissors,
    longDescription:
      "A queda de cabelo tem muitas causas possíveis — hormonais, nutricionais, de estresse ou genéticas. Por isso o ponto de partida é a avaliação do couro cabeludo e do histórico, e não a aplicação imediata de um protocolo. Investigações complementares podem ser necessárias.",
    indications: [
      "Queda de cabelo percebida como acima do habitual",
      "Redução de densidade e afinamento dos fios",
      "Couro cabeludo com queixas de oleosidade, descamação ou sensibilidade",
    ],
    howItWorks: [
      "Avaliação do couro cabeludo, do padrão de queda e do histórico de saúde",
      "Encaminhamento para investigação complementar, quando indicado",
      "Definição do protocolo conforme a causa identificada",
      "Sessões seriadas e acompanhamento da resposta",
    ],
    aftercare: [
      "Seguir a rotina de cuidados domiciliares indicada",
      "Evitar produtos e procedimentos agressivos no período de tratamento",
      "Manter a regularidade das sessões, já que a resposta é gradual",
    ],
    faq: [
      {
        question: "Preciso de exames antes?",
        answer:
          "Em muitos casos sim. A queda capilar pode ter causas que precisam ser investigadas para que o tratamento faça sentido.",
      },
    ],
    relatedIds: ["bioestimulador-colageno", "peelings", "harmonizacao-facial"],
    needsReview: true,
  },
];

/* ── Consultas ───────────────────────────────────────────── */

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

/** Busca um procedimento pelo slug */
export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}

/** Procedimentos relacionados, na ordem declarada, ignorando ids inválidos */
export function getRelatedProcedures(procedure: Procedure): Procedure[] {
  return procedure.relatedIds
    .map((id) => procedures.find((p) => p.id === id))
    .filter((p): p is Procedure => Boolean(p) && p!.id !== procedure.id);
}

/** Quantidade de procedimentos por categoria, para os contadores do filtro */
export function countByCategory(category: ProcedureCategory | "Todos"): number {
  return getProceduresByCategory(category).length;
}
