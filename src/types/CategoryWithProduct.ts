import { Category } from "./CategoryType";
import { Product } from "./Product";

export type CategoryWithProducts = Category & {
  products: any;
};