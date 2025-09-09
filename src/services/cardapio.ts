import { ProductAPI } from "@/types/Product"
import api from "./api"

type secao = {
    id: string,
    produtos: ProductAPI[]
}

export const getCardapio = async (): Promise<ProductAPI[]> => {
    const response =  await api.get('/api/v1/cardapios')
    return response.data.cardapios[0].secoes[0].produtos
}