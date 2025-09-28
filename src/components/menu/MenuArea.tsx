"use client";

import { categories } from "@/data/category";
import { products } from "@/data/product";
import { MenuCategory } from "./MenuCategory";
import { CategoryWithProducts } from "@/types/CategoryWithProducts";

type Props = {
  searchTerm?: string;
  categoryId?: number; 
  productsOverride?: typeof products; 
};

export const MenuArea = ({
  searchTerm = "",
  categoryId,
  productsOverride,
}: Props) => {
  // Decide qual lista de produtos usar
  const allProducts = productsOverride ?? products;

  // Mapeia categorias
  const categoriesToRender: CategoryWithProducts[] = categories
    .filter((cat) => (categoryId ? cat.id === categoryId : true)) 
    .map((category) => ({
      ...category,
      products: allProducts.filter(
        (p) =>
          p.categoryId === category.id &&
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }));

  return (
    <section>
      {categoriesToRender.map(
        (category) =>
          category.products.length > 0 && (
            <MenuCategory key={category.id} category={category} />
          )
      )}
    </section>
  );
};
