import type { MetadataRoute } from "next";

import { procedures } from "@/data/procedures";
import { siteConfig } from "@/data/site-config";

/**
 * Sitemap derivado dos dados, não escrito à mão.
 *
 * Um procedimento novo em `src/data/procedures.ts` entra aqui
 * sozinho — não há lista paralela para esquecer de atualizar.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const atualizadoEm = new Date();

  const fixas: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: atualizadoEm,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/procedimentos`,
      lastModified: atualizadoEm,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/sobre`,
      lastModified: atualizadoEm,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const paginasDeProcedimento: MetadataRoute.Sitemap = procedures.map(
    (procedimento) => ({
      url: `${siteConfig.url}/procedimentos/${procedimento.slug}`,
      lastModified: atualizadoEm,
      changeFrequency: "yearly",
      /* Os destaques são as portas de entrada mais prováveis */
      priority: procedimento.featured ? 0.8 : 0.6,
    })
  );

  return [...fixas, ...paginasDeProcedimento];
}
