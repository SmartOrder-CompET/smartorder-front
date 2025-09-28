"use client";

import { categories } from "@/data/category";
import { MenuArea } from "@/components/menu/MenuArea";

type Props = {
  params: { id: string };
};

export default function CategoryPage({ params }: Props) {
  const categoryId = Number(params.id);
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return <p className="text-white p-4">Categoria não encontrada</p>;
  }

  return (
    <div className="max-w-5xl mx-auto text-white min-h-screen px-4 md:px-8 pb-20">
      <h1 className="text-2xl font-bold mb-6">{category.name}</h1>

      {/* renderizando a categoria específica */}
      <MenuArea categoryId={categoryId} />
    </div>
  );
}
