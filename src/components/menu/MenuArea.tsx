"use client";

import { categories } from "@/data/category";
import { products } from "@/data/product";
import { MenuCategory } from "./MenuCategory";
import { CategoryWithProducts } from "@/types/CategoryWithProducts";

type Props = {
  searchTerm: string;
};

export const MenuArea = ({ searchTerm }: Props) => {
  const categoriesWithProducts: CategoryWithProducts[] = categories.map(
    (category) => ({
      ...category,
      products: products.filter(
        (p) =>
          p.categoryId === category.id &&
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })
  );

  return (
    <section>
      {categoriesWithProducts.map(
        (category) =>
          category.products.length > 0 && (
            <MenuCategory key={category.id} category={category} />
          )
      )}
    </section>
  );
};
