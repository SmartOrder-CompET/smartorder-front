import { Product, ProductAPI } from "@/types/Product";

export type CartItem = {
    product: ProductAPI; 
    quantity: number; 
    observation?: string; 
}