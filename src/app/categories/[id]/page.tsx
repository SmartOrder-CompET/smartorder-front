"use client";

import { categories } from "@/data/category";
import { MenuArea } from "@/components/menu/MenuArea";
import { useState } from "react";
import { Search } from "lucide-react";

type Props = {
  params: { id: string };
};

export default function CategoryPage({ params }: Props) {
  const categoryId = Number(params.id);
  const category = categories.find((c) => c.id === categoryId);

  const [searchTerm, setSearchTerm] = useState(""); // estado da busca

  if (!category) {
    return <p className="text-white p-4">Categoria não encontrada</p>;
  }

  return (
    <div className="max-w-5xl mx-auto text-white min-h-screen px-4 md:px-8 pt-5">
      {/* Barra de pesquisa */}
      <div className="px-4 md:px-0 mb-6">
        <div className="flex items-center h-10 md:h-12 rounded-full bg-[var(--color-primary)] px-4 md:max-w-md">
          <Search size={16} color="#fff" />
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-white placeholder:text-white ml-2 text-sm"
          />
        </div>
      </div>

      {/* renderizando a categoria específica */}
      <MenuArea categoryId={categoryId} searchTerm={searchTerm} />
    </div>
  );
}
