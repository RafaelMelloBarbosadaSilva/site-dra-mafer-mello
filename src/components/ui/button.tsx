import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/**
 * Base do shadcn (style base-nova) com dois ajustes de projeto:
 *
 * 1. Tamanhos — os defaults do shadcn (h-8 / h-9) miram interfaces
 *    densas de app. Este é um site institucional em que quase todo
 *    botão é um CTA tocado no celular, então `lg` (44px) e `xl`
 *    (48px) atendem o mínimo de alvo de toque e são os tamanhos
 *    usados nas páginas.
 * 2. Variante `whatsapp` — o canal de agendamento do site.
 *
 * O anel de foco usa ring/70 em vez de ring/50 para chegar aos 3:1
 * exigidos pelo indicador de foco.
 */
const buttonVariants = cva(
  "group/button inline-flex max-w-full shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-center font-semibold transition-all duration-200 ease-[var(--ease-out-soft)] outline-none select-none cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/70 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-subtle hover:bg-primary-hover hover:shadow-lifted",
        outline:
          "border-border bg-card text-foreground hover:bg-muted hover:border-brand-300 aria-expanded:bg-muted",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_6%)]",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent",
        /* Para uso sobre --surface-dark: o hover claro garante contraste */
        "outline-dark":
          "border-white/25 bg-white/5 text-on-dark backdrop-blur-sm hover:bg-white/15 hover:border-white/40 focus-visible:ring-on-dark-accent/70",
        whatsapp:
          "bg-primary text-primary-foreground shadow-subtle hover:bg-primary-hover hover:shadow-lifted",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/40",
        link: "text-primary underline underline-offset-4 decoration-brand-300 hover:decoration-primary",
      },
      size: {
        /* Compactos — uso interno de UI, não para CTA em mobile.
           Mantêm nowrap porque o rótulo é curto por definição. */
        sm: "h-8 gap-1.5 rounded-md px-3 text-[0.8rem] whitespace-nowrap [&_svg:not([class*='size-'])]:size-3.5",
        default: "h-10 gap-2 px-4 text-sm whitespace-nowrap",
        /* ≥44px — mínimo de alvo de toque (Apple HIG / WCAG 2.2).
           min-h + py em vez de altura fixa: rótulos longos de CTA
           quebram em duas linhas em telas estreitas em vez de
           esticarem a página. */
        lg: "min-h-11 gap-2 px-6 py-2.5 text-sm",
        xl: "min-h-13 gap-2.5 rounded-xl px-7 py-3.5 text-base",
        icon: "size-10",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
