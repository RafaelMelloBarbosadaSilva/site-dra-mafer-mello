"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, buildWhatsAppUrl, defaultWhatsAppMessage } from "@/data/site-config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/procedimentos", label: "Procedimentos" },
    { href: "/#metodo", label: "Abordagem" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_4px_30px_-5px_rgba(28,25,23,0.08)] border-b border-stone-100"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
        }`}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Início"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-600 text-white font-serif font-bold text-base group-hover:bg-brand-700 transition-colors duration-300 shadow-md shadow-brand-500/20">
              MM
            </span>
            <span className="flex flex-col">
              <strong className="font-serif text-lg sm:text-xl font-bold leading-tight text-stone-900 group-hover:text-brand-600 transition-colors">
                {siteConfig.name}
              </strong>
              <small className="text-stone-400 text-xs mt-0.5 hidden sm:block">
                {siteConfig.tagline}
              </small>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-stone-500 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA Desktop */}
            <a
              href={buildWhatsAppUrl(defaultWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-bold rounded-xl hover:bg-brand-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-500/20"
            >
              Agendar avaliação
            </a>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-11 h-11 rounded-xl border border-stone-200 bg-white gap-1.5 hover:bg-stone-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-5 h-0.5 bg-stone-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-stone-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-stone-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 bg-white border-t border-stone-100 shadow-xl flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-stone-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buildWhatsAppUrl(defaultWhatsAppMessage())}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-4 py-3 bg-brand-600 text-white text-center font-bold rounded-xl hover:bg-brand-700 transition-colors"
          >
            Agendar avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
