import axios from "axios"
import api from "./api"

export const getProducts = async () => {
    const response =  await api.get('/api/v1/items')
    return response.data.items
}