import { Product } from "@/types/Product"
import api from "./api"

export const getProduct = async (id: string): Promise<Product> => {
    const response =  await api.get('/api/v1/produtos')
    const product = response.data.produtos.find((item: Product) => item.id === id)
    return product
}