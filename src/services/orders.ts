import { CartItem } from "@/types/CartItem";
import api from "./api";
import { headers } from "next/headers";
import { Order } from "@/types/Order";

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

export const getOrder = async (clienteId: string): Promise<Order[]  | undefined> => {
    try{
        const response = await api.get(`api/v1/pedidos?clienteId=${clienteId}`)
        return response.data.data
    } catch(error: any){
        console.error('Erro ao Buscar os pedidos', error.response?.data || error.message)
    }
}