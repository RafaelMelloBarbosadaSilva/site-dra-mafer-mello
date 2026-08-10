/* ─────────────────────────────────────────────
   CONFIGURAÇÕES DO SITE
   Centralizamos tudo aqui para fácil manutenção
   ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Dra. Maria Fernanda Mello",
  tagline: "Sua beleza com naturalidade",
  description:
    "Estética facial e corporal personalizada com foco em naturalidade, segurança, autoestima e valorização dos traços individuais.",
  phone: "+55 35 99715-6033",
  whatsappNumber: "5535997156033",
  instagram: {
    personal: "https://www.instagram.com/dra.mafermello/",
    personalHandle: "@dra.mafermello",
    clinic: "https://www.instagram.com/clinica_amesse/",
    clinicHandle: "@clinica_amesse",
  },
  clinic: {
    name: "Clínica Amesse",
    address: "Coronel Nicolino Rossi, 25 - Centro, Ouro Fino - MG, 37570-000",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Coronel%20Nicolino%20Rossi%2C%2025%20-%20Centro%2C%20Ouro%20Fino%20-%20MG%2C%2037570-000",
    hours: "A combinar",
  },
  professional: {
    title: "Biomédica",
    specializations: [
      "Master em Harmonização Facial",
      "Pós-graduação em Estética Avançada e Cosmetologia",
    ],
  },
  seo: {
    ogImage: "/assets/maria-fernanda-mello/retratos/maria-fernanda-hero.jpg",
  },
} as const;

/** Gera URL do WhatsApp com mensagem pré-preenchida */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão para WhatsApp */
export function defaultWhatsAppMessage(): string {
  return `Olá! Vim pelo site e gostaria de agendar uma avaliação com a ${siteConfig.name}.`;
}
