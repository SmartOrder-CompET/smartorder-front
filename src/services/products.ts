import { ProductAPI } from "@/types/Product"
import api from "./api"

export const getProducts = async (): Promise<ProductAPI[]> => {
    const response =  await api.get('/api/v1/items')
    return response.data.items
}