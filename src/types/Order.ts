import { Address } from "./Address"
import { Product } from "./Product"

export type Order = {
    id: number,
    products: Product[],
    idClient: number,
    status: 'em confirmação' | 'em preparo' | 'saiu para entrega',
    created_at: Date,
    total: number,
    address: Address
}