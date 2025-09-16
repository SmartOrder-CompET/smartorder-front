import { Secoes } from "./Secoes"

export type cardapio = {
    id: string,
    nome: string,
    descricao: string,
    ativo: boolean,
    criadoEm: string,
    atualizadoEm: string,
    secoes: Secoes[]
}