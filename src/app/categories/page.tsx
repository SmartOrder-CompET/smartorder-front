"use client"

import { categories } from "@/data/category"
import Link from "next/link"

export default function CategoriesPage() {
  return (
    <div className="max-w-5xl mx-auto text-white min-h-screen px-4 md:px-8 pt-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Todas as Categorias</h2>

      {/* grid 2 colunas */}
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group bg-secondary rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <div
              className="h-32 md:h-40 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${category.img})` }}
            ></div>
            <div className="p-3 md:p-4">
              <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
