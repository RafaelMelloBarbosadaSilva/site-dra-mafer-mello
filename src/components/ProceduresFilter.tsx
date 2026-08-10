"use client";

import { useState } from "react";
import { Procedure, ProcedureCategory, procedures } from "@/data/procedures";
import ProcedureCard from "./ProcedureCard";

export default function ProceduresFilter() {
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory | "Todos">("Todos");

  const categories: (ProcedureCategory | "Todos")[] = ["Todos", "Facial", "Corporal", "Capilar"];

  const filteredProcedures = selectedCategory === "Todos"
    ? procedures
    : procedures.filter(
        (p) => p.category === selectedCategory || p.secondaryCategory === selectedCategory
      );

  return (
    <div>
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-brand-300 hover:bg-brand-50/50"
              }`}
            >
              {cat === "Todos" ? "Todos os Tratamentos" : cat}
              <span className={`ml-2 text-xs py-0.5 px-2 rounded-full ${
                isActive ? "bg-white/20 text-white" : "bg-stone-100 text-stone-500"
              }`}>
                {cat === "Todos"
                  ? procedures.length
                  : procedures.filter(p => p.category === cat || p.secondaryCategory === cat).length
                }
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProcedures.map((proc) => (
          <ProcedureCard key={proc.id} procedure={proc} />
        ))}
      </div>

      {filteredProcedures.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
          <p className="text-stone-500 font-medium">Nenhum procedimento encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
