/* ─────────────────────────────────────────────
   CONFIGURAÇÕES DO SITE
   Centralizamos tudo aqui para fácil manutenção
   ───────────────────────────────────────────── */

/** Post do Instagram exibido na grade da home. */
export interface InstagramPost {
  id: string;
  /** Caminho em /public — imagem autorizada e baixada localmente */
  image: string;
  alt: string;
  permalink: string;
}

/**
 * Ainda não há nenhuma publicação disponível: a auditoria em
 * `docs/instagram-content-audit.md` registra 0 posts acessíveis e
 * `docs/instagram-assets-manifest.json` está vazio. Assim que as
 * imagens autorizadas forem adicionadas a /public, a grade da seção
 * Instagram passa a renderizar sozinha — o componente já trata os
 * dois estados.
 */
export const instagramPosts: InstagramPost[] = [];

export const siteConfig = {
  name: "Dra. Maria Fernanda Mello",
  shortName: "Maria Fernanda Mello",
  tagline: "Sua beleza com naturalidade",
  description:
    "Estética facial e corporal personalizada com foco em naturalidade, segurança, autoestima e valorização dos traços individuais.",
  url: "https://dramariafernandamello.com.br",
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
    street: "Coronel Nicolino Rossi, 25",
    district: "Centro",
    city: "Ouro Fino",
    state: "MG",
    postalCode: "37570-000",
    address: "Coronel Nicolino Rossi, 25 - Centro, Ouro Fino - MG, 37570-000",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Coronel%20Nicolino%20Rossi%2C%2025%20-%20Centro%2C%20Ouro%20Fino%20-%20MG%2C%2037570-000",
    /** Embed do Google Maps sem chave de API */
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Coronel%20Nicolino%20Rossi%2C%2025%20-%20Centro%2C%20Ouro%20Fino%20-%20MG%2C%2037570-000&t=&z=16&ie=UTF8&iwloc=&output=embed",
    hours: "A combinar",
  },
  professional: {
    title: "Biomédica",
    specializations: [
      "Master em Harmonização Facial",
      "Pós-graduação em Estética Avançada e Cosmetologia",
    ],
    /**
     * PENDENTE — número de inscrição no CRBM.
     * A Resolução CFBM 241/2019 exige que a publicidade do biomédico
     * exiba nome e número de inscrição no conselho regional. Enquanto
     * este campo estiver vazio, o site omite o bloco de registro em
     * vez de exibir um dado inventado.
     */
    registry: "",
    registryState: "MG",
  },
  seo: {
    ogImage: "/assets/maria-fernanda-mello/retratos/maria-fernanda-hero.jpg",
  },
  images: {
    hero: "/assets/maria-fernanda-mello/retratos/maria-fernanda-hero.jpg",
    portrait: "/assets/maria-fernanda-mello/retratos/maria-fernanda-sobre.jpg",
    clinicLogo: "/assets/maria-fernanda-mello/marca/logo-clinica-amesse.jpg",
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

/** Registro profissional formatado, ou null enquanto não informado */
export function professionalRegistry(): string | null {
  const { registry, registryState } = siteConfig.professional;
  return registry ? `CRBM-${registryState} ${registry}` : null;
}
