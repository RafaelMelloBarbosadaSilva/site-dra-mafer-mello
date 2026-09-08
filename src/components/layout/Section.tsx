import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * Envelope padrão de seção do site.
 *
 * Antes deste redesign o bloco `py-20 md:py-28` + container +
 * `max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8`
 * aparecia literalmente repetido em nove seções da home. Aqui ele
 * existe uma vez só, com as variantes de fundo do sistema.
 *
 * A variante `dark` também aplica a classe `.on-dark`, que troca a
 * cor do anel de foco (o terracota não atinge 3:1 sobre o fundo
 * escuro).
 */
const sectionVariants = cva("relative", {
  variants: {
    background: {
      default: "bg-background",
      card: "bg-card",
      muted: "bg-muted",
      dark: "on-dark bg-surface-dark text-on-dark",
    },
    spacing: {
      default: "py-20 md:py-28",
      compact: "py-12 md:py-16",
      tight: "py-8 md:py-10",
      none: "",
    },
  },
  defaultVariants: {
    background: "default",
    spacing: "default",
  },
});

interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {
  /** Largura do conteúdo interno */
  width?: "default" | "narrow";
  /** Desliga o container interno quando a seção precisa sangrar */
  bleed?: boolean;
}

export function Section({
  className,
  background,
  spacing,
  width = "default",
  bleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ background, spacing }), className)}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <div
          className={cn(
            "container-site",
            width === "narrow" && "max-w-3xl"
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}

interface SectionHeadingProps
  extends Omit<React.ComponentProps<"div">, "title"> {
  /** Rótulo em caixa alta acima do título */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Nível do heading — mantém a hierarquia correta em cada página */
  as?: "h1" | "h2" | "h3";
  align?: "start" | "center";
  /** Usa a paleta de texto de fundo escuro */
  onDark?: boolean;
}

/**
 * Par eyebrow + título serif (+ descrição opcional) que abre cada
 * seção. Aparecia oito vezes na home com marcação idêntica.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "start",
  onDark = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "mx-auto max-w-3xl text-center items-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow mb-3",
            onDark ? "text-on-dark-accent" : "text-brand-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "font-serif font-bold leading-[1.15]",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-[2.75rem]",
          onDark ? "text-on-dark" : "text-foreground"
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            /* 60–75 caracteres por linha */
            "max-w-[62ch]",
            onDark ? "text-on-dark-muted" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
