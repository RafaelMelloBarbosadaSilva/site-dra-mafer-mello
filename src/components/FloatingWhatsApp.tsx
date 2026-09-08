import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/data/site-config";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

/**
 * Atalho fixo de agendamento.
 *
 * O `<main>` reserva padding inferior equivalente à altura deste
 * botão (ver layout.tsx), para que ele não cubra o último conteúdo
 * da página nem o elemento com foco de teclado — WCAG 2.2, critério
 * "foco não obscurecido".
 *
 * `pb-[env(safe-area-inset-bottom)]` mantém o botão acima da barra
 * de gestos em celulares sem botão físico.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(defaultWhatsAppMessage())}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex min-h-13 items-center gap-2.5 rounded-full border border-white/20 bg-primary px-5 font-bold text-primary-foreground shadow-float transition-all duration-300 ease-[var(--ease-out-soft)] hover:bg-primary-hover hover:scale-105 active:scale-95 sm:right-6"
    >
      <WhatsAppIcon className="size-6" />
      <span className="text-sm font-extrabold tracking-wide">Agendar</span>
    </a>
  );
}
