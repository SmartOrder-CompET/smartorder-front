"use client";

import { categories } from "@/data/category";
import { products } from "@/data/product";
import { MenuCategory } from "./MenuCategory";
import { MenuCard } from "./MenuCard";
import { CategoryWithProducts } from "@/types/CategoryWithProducts";

type Props = {
  searchTerm?: string;
  categoryId?: number;
};

export const MenuArea = ({ searchTerm = "", categoryId }: Props) => {
  const categoriesToRender: CategoryWithProducts[] = categories
    .filter((cat) => (categoryId ? cat.id === categoryId : true))
    .map((category) => ({
      ...category,
      products: products.filter(
        (p) =>
          p.categoryId === category.id &&
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }));

  return (
    <section>
      {categoriesToRender.map(
        (category) =>
          category.products.length > 0 &&
          (categoryId ? (
            // 🔹 Se for uma categoria específica → Grid
            <div key={category.id} className="space-y-4">
              <h2 className="text-xl font-bold mb-4">{category.name}</h2>
              <div className="grid grid-cols-2 gap-4">
                {category.products.map((product) => (
                  <MenuCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          ) : (
            // 🔹 Na página inicial continua o swiper
            <MenuCategory key={category.id} category={category} />
          ))
      )}
    </section>
  );
};
