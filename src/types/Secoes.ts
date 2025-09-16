import { Products } from "./Product"

export type Secoes = {
    id: string,
    nome: string,
    ordem: 1,
    criadoEm: string,
    atualizadoEm: string,
    produtos: Products[]
}