import { CartItem } from "@/types/CartItem";
import api from "./api";

export const createOrder = async (id: string, items: { itemId: string, amount: number }[]) => {
    try{
        const response = await api.post('/api/v1/orders', {
            customerId: id,
            items: items.map(item => ({
                itemId: item.itemId,
                amount: item.amount,
            }))
        })

        console.log('Pedido criado com sucesso:', response.data);
        return response
    } catch (error: any) {
        console.error('Erro ao criar Pedido:', error.response?.data || error.message);
    }
}