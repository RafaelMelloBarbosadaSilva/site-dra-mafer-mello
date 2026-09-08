import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/data/site-config";

/**
 * next/font substitui o <link> para fonts.googleapis.com que existia
 * aqui: elimina um round-trip de rede no caminho crítico, hospeda os
 * arquivos junto com o site e aplica font-display: swap por padrão,
 * evitando texto invisível durante o carregamento.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    images: [siteConfig.seo.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
};

/** Person + LocalBusiness: identifica a profissional e o local de atendimento */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#profissional`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      jobTitle: siteConfig.professional.title,
      description: siteConfig.description,
      image: `${siteConfig.url}${siteConfig.images.portrait}`,
      sameAs: [siteConfig.instagram.personal, siteConfig.instagram.clinic],
      knowsAbout: [...siteConfig.professional.specializations],
      worksFor: { "@id": `${siteConfig.url}/#clinica` },
    },
    {
      "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": `${siteConfig.url}/#clinica`,
      name: siteConfig.clinic.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.images.clinicLogo}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.clinic.street,
        addressLocality: siteConfig.clinic.city,
        addressRegion: siteConfig.clinic.state,
        postalCode: siteConfig.clinic.postalCode,
        addressCountry: "BR",
      },
      employee: { "@id": `${siteConfig.url}/#profissional` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="relative flex min-h-dvh flex-col bg-background text-foreground antialiased">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        {/*
          pt-20  → compensa o header fixo (h-20).
          pb-28  → reserva espaço para o botão flutuante do WhatsApp,
                   que antes cobria o fim da página e podia esconder
                   o elemento com foco de teclado.
        */}
        <main id="conteudo" className="flex-grow pt-20 pb-28">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
