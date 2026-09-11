"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcwIcon, TriangleAlertIcon } from "lucide-react";

import { buildWhatsAppUrl, siteConfig } from "@/data/site-config";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

/**
 * Tela de erro em runtime, na identidade do site.
 *
 * O `reset()` do Next tenta remontar o segmento que falhou, então na
 * maioria dos casos um clique resolve sem recarregar a página.
 * O texto evita jargão: quem chega aqui quer agendar, não depurar.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    /* Sem serviço de telemetria no projeto; o console é o que há. */
    console.error(error);
  }, [error]);

  return (
    <Section background="default" spacing="compact">
      <div className="mx-auto max-w-2xl text-center">
        <span
          aria-hidden="true"
          className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-secondary text-brand-700"
        >
          <TriangleAlertIcon className="size-8" />
        </span>

        <p className="eyebrow mb-3 text-gold-strong">Algo saiu do lugar</p>
        <h1 className="mb-6 font-serif text-3xl leading-tight font-bold text-foreground sm:text-4xl">
          Não conseguimos carregar esta parte do site.
        </h1>
        <p className="mx-auto mb-10 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
          Costuma ser passageiro. Tente de novo — e, se continuar, fale
          diretamente conosco pelo WhatsApp que seguimos o atendimento por lá.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={reset} size="xl">
            <RotateCcwIcon aria-hidden="true" className="size-4" />
            Tentar de novo
          </Button>
          <Button
            render={
              <a
                href={buildWhatsAppUrl(
                  `Olá! Tive um problema para acessar o site da ${siteConfig.name} e gostaria de falar por aqui.`
                )}
                target="_blank"
                rel="noreferrer"
              />
            }
            variant="outline"
            size="xl"
          >
            <WhatsAppIcon className="size-4" />
            Falar no WhatsApp
          </Button>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Ou volte para{" "}
          <Link
            href="/"
            className="font-bold text-primary underline decoration-brand-300 underline-offset-4 transition-colors hover:decoration-primary"
          >
            a página inicial
          </Link>
          .
        </p>

        {error.digest && (
          <p className="mt-6 text-xs text-muted-foreground">
            Código de referência: <code>{error.digest}</code>
          </p>
        )}
      </div>
    </Section>
  );
}
