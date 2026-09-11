"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "cn";

import {
  procedures,
  type Procedure,
  type ProcedureCategory,
} from "@/data/procedures";
import ProcedureCard from "./ProcedureCard";
import { Flip, gsap, motionTokens, useGSAP } from "@/components/motion/gsap-setup";
import { Counter } from "@/components/motion/Counter";

type Filter = ProcedureCategory | "Todos";

const FILTERS: Filter[] = ["Todos", "Facial", "Corporal", "Capilar"];

const SLUG_TO_FILTER: Record<string, Filter> = {
  todos: "Todos",
  facial: "Facial",
  corporal: "Corporal",
  capilar: "Capilar",
};

function matches(procedure: Procedure, filter: Filter) {
  return (
    filter === "Todos" ||
    procedure.category === filter ||
    procedure.secondaryCategory === filter
  );
}

/**
 * Filtro do catálogo.
 *
 * Optamos por um grupo de botões `aria-pressed` em vez do padrão
 * tablist: `tablist` implica painéis, e painéis desmontam ao trocar
 * de aba — o que impediria o Flip de rastrear os cards que
 * permanecem entre um filtro e outro. Com uma grade única e
 * persistente o Flip anima quem fica, quem entra e quem sai.
 *
 * A categoria vive na URL (`?categoria=facial`), então o filtro é
 * compartilhável e sobrevive ao botão voltar.
 */
export default function ProceduresFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected: Filter =
    SLUG_TO_FILTER[(searchParams.get("categoria") ?? "").toLowerCase()] ??
    "Todos";

  const gridRef = useRef<HTMLDivElement>(null);
  const [flipState, setFlipState] = useState<Flip.FlipState | null>(null);

  const visible = useMemo(
    () => procedures.filter((p) => matches(p, selected)),
    [selected]
  );

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map((f) => [f, procedures.filter((p) => matches(p, f)).length])
      ) as Record<Filter, number>,
    []
  );

  const handleSelect = useCallback(
    (filter: Filter) => {
      if (filter === selected) return;

      /* Captura a posição atual dos cards ANTES do re-render */
      if (gridRef.current) {
        setFlipState(Flip.getState(gridRef.current.children));
      }

      const params = new URLSearchParams(searchParams.toString());
      if (filter === "Todos") params.delete("categoria");
      else params.set("categoria", filter.toLowerCase());

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams, selected]
  );

  /* Reproduz a transição depois que o React aplicou o novo layout */
  useGSAP(
    () => {
      if (!flipState || !gridRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const anim = Flip.from(flipState, {
          duration: 0.45,
          ease: motionTokens.ease.out,
          scale: true,
          absolute: true,
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0.92 },
              { opacity: 1, scale: 1, duration: 0.35, stagger: 0.03 }
            ),
          onLeave: (elements) =>
            gsap.to(elements, {
              opacity: 0,
              scale: 0.92,
              /* Saída mais curta que a entrada: parece mais responsivo */
              duration: 0.25,
            }),
        });
        return () => anim.kill();
      });

      return () => mm.revert();
    },
    { dependencies: [flipState], scope: gridRef }
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar procedimentos por categoria"
        className="mb-12 flex flex-wrap items-center justify-center gap-2.5"
      >
        {FILTERS.map((filter) => {
          const active = filter === selected;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={active}
              onClick={() => handleSelect(filter)}
              className={cn(
                /* min-h-11 = 44px de alvo de toque */
                "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl px-5 text-sm font-bold",
                "transition-all duration-200 ease-[var(--ease-out-soft)]",
                active
                  ? "bg-primary text-primary-foreground shadow-lifted"
                  : "border border-border bg-card text-muted-foreground hover:border-brand-300 hover:bg-accent hover:text-foreground"
              )}
            >
              {filter === "Todos" ? "Todos os tratamentos" : filter}
              <span
                aria-hidden="true"
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs tabular-nums",
                  active ? "bg-white/20" : "bg-muted text-muted-foreground"
                )}
              >
                <Counter value={counts[filter]} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Anuncia a mudança sem mover o foco */}
      <p role="status" aria-live="polite" className="sr-only">
        {visible.length}{" "}
        {visible.length === 1
          ? "procedimento encontrado"
          : "procedimentos encontrados"}
        {selected !== "Todos" && ` na categoria ${selected}`}.
      </p>

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8"
      >
        {visible.map((procedure) => (
          <ProcedureCard
            key={procedure.id}
            procedure={procedure}
            /* data-flip-id deixa o Flip rastrear o card entre filtros */
            data-flip-id={procedure.id}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="rounded-2xl border border-border bg-card py-16 text-center">
          <p className="font-medium text-muted-foreground">
            Nenhum procedimento encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}
