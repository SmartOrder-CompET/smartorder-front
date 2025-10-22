"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { getCardapio } from "@/services/cardapio";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { MenuCard } from "@/components/menu/MenuCard";
import { Title } from "@/components/Title";

export default function CategoryPage() {

    const { data: cardapio, isLoading, error } = useQuery({ 
        queryKey: ["cardapio"], 
        queryFn: getCardapio,
        staleTime: 100000
    })

    const categoryId = usePathname().slice(12);
    const category = cardapio?.secoes.find((c) => c.id === categoryId);

    const [searchTerm, setSearchTerm] = useState(""); // estado da busca

    if (!category) {
        return <p className="text-white p-4">Categoria não encontrada</p>;
    }

  return (
    <div className="max-w-5xl mx-auto text-white min-h-screen px-4 md:px-8">
      <div className="px-4 md:px-0 mb-6">

        <Title text={cardapio?.secoes[0].nome as string}/>

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

      

        <div  className="grid grid-cols-2 gap-2">
            {cardapio?.secoes[0].produtos.map((produtos) => (
                <MenuCard key={produtos.produto.id} data={produtos.produto}/>
            ))}
       </div>
    </div>
  );
}