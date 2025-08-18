import { Product } from "@/types/Product";

export type CartItem = {
    product: Product; 
    quantity: number; 
    observation?: string; 
}