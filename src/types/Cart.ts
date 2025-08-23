import { CartItem } from "@/types/CartItem";

export type CartType = {
    items: CartItem[], 
    discount: number,
}