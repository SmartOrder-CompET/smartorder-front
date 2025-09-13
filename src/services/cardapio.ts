import { cardapio } from "@/types/Cardapio"
import api from "./api"


export const getCardapio = async (): Promise<cardapio> => {
    const response =  await api.get('/api/v1/cardapios')
    return response.data.cardapios[0]
}