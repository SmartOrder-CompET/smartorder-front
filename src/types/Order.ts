import { Address } from "./Address"

type OrderProduct = {
    productId: number;
    priceAtOrder: number;
    quantity: number
}

export type Order = {
    id: number,
    products: OrderProduct[],
    idClient: number,
    status: 'em confirmação' | 'em preparo' | 'saiu para entrega',
    created_at: Date,
    total: number,
    address: Address
}