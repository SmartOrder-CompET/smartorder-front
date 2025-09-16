import { CartItem } from "@/types/CartItem";
import api from "./api";
import { headers } from "next/headers";

export const createOrder = async (id: string, token: string , items: { itemId: string, amount: number }[]) => {
    try{
        const response = await api.post('/api/v1/pedido', {
            clienteId: id,
            produtos: items.map(item => ({
                produtoId: item.itemId,
                quantidade: item.amount,
            }))
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log('Pedido criado com sucesso:', response.data);
        return response
    } catch (error: any) {
        console.error('Erro ao criar Pedido:', error.response?.data || error.message);
    }
}