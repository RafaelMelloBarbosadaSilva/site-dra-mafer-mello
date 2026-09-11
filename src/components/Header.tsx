"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import {
  siteConfig,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/data/site-config";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/procedimentos", label: "Procedimentos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/#metodo", label: "Abordagem" },
  { href: "/#contato", label: "Contato" },
] as const;

/** Marca a rota atual — âncoras da home não contam como rota */
function isActive(href: string, pathname: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Fecha o menu ao navegar */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const whatsappUrl = buildWhatsAppUrl(defaultWhatsAppMessage());

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[var(--ease-out-soft)]",
        isScrolled
          ? "border-b border-border bg-background/95 shadow-subtle backdrop-blur-lg"
          : "border-b border-transparent bg-background/70 backdrop-blur-md"
      )}
    >
      <div className="container-site">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Marca */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 rounded-lg"
            aria-label={`${siteConfig.name} — página inicial`}
          >
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-base font-bold text-primary-foreground shadow-subtle transition-colors duration-300 group-hover:bg-primary-hover"
            >
              MM
            </span>
            <span className="flex min-w-0 flex-col">
              {/* min-w-0 + truncate: sem isso o nome não encolhia e
                  empurrava o header para além de 375px. O nome
                  completo continua no aria-label do link. */}
              <strong className="truncate font-serif text-base leading-tight font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                {siteConfig.name}
              </strong>
              {/* muted-foreground: 7.8:1 — o stone-400 anterior ficava em ~2.5:1 */}
              <small className="mt-0.5 hidden text-xs text-muted-foreground sm:block">
                {siteConfig.tagline}
              </small>
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Menu principal"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    /* min-h-11 = 44px: o py sozinho deixava os links em 40px */
                    "flex min-h-11 items-center rounded-lg px-4 text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-accent text-brand-700"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              render={
                <a href={whatsappUrl} target="_blank" rel="noreferrer" />
              }
              size="lg"
              className="hidden lg:inline-flex"
            >
              <WhatsAppIcon className="size-4" />
              Agendar avaliação
            </Button>

            {/* Menu mobile — Sheet traz focus trap, Esc e inert no
                conteúdo de trás. A versão anterior usava max-h-0 +
                opacity-0, o que deixava os links focáveis por teclado
                mesmo com o menu fechado. */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon-lg" className="lg:hidden" />
                }
              >
                <MenuIcon className="size-5" />
                <span className="sr-only">Abrir menu de navegação</span>
              </SheetTrigger>

              <SheetContent side="right" className="w-[86vw] max-w-sm gap-0">
                <SheetHeader className="border-b border-border p-6">
                  <SheetTitle className="font-serif text-lg">
                    {siteConfig.name}
                  </SheetTitle>
                  <SheetDescription>{siteConfig.tagline}</SheetDescription>
                </SheetHeader>

                {/*
                  Entrada em cascata: cada item desliza da direita com
                  um atraso crescente. Anima só `transform` via
                  animation-delay do CSS — o item nunca fica
                  invisível, mesmo que a animação não rode.
                */}
                <nav
                  className="flex flex-col gap-1 p-4"
                  aria-label="Menu principal"
                >
                  {navLinks.map((link, index) => {
                    const active = isActive(link.href, pathname);
                    return (
                      <SheetClose
                        key={link.href}
                        render={
                          <Link
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            style={{
                              animationDelay: `${60 + index * 45}ms`,
                            }}
                            className={cn(
                              /* min-h-12 = 48px de alvo de toque */
                              "menu-item-cascata flex min-h-12 items-center rounded-xl px-4 text-base font-medium transition-colors",
                              active
                                ? "bg-accent text-brand-700"
                                : "text-foreground hover:bg-accent"
                            )}
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    );
                  })}
                </nav>

                <div className="mt-auto border-t border-border p-4">
                  <Button
                    render={
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" />
                    }
                    size="xl"
                    className="w-full"
                  >
                    <WhatsAppIcon className="size-5" />
                    Agendar avaliação
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
