import { Product } from "./Product";

type OrderProduct = {
    produtoId: number;
    precounitario: number;
    quantidade: number,
    produto: Product
}

export type Order = {
    id: number,
    idClient: string,
    status: 'pendente' | 'em preparo' | 'saiu para entrega',
    criadoEm: Date,
    precoTotal: string,
    produtos: OrderProduct[]
}