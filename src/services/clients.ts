import api from "./api"

type customer = {
    id: string,
    cellphone: string,
    name: string
}

export const createClient = async (name: string, cellphone: string) => {
    try {
        const response = await api.post('/api/v1/customers', {
            name,
            cellphone
        });
        console.log('Usuário criado com sucesso:', response.data);
        return response
    } catch (error: any) {
        console.error('Erro ao criar usuário:', error.response?.data || error.message);
    }
}


export const getClients = async () => {
    const response =  await api.get('/api/v1/customers')
    return response.data.customers
}

export const validarCliet = async (tel: string) => {
    const clientes: customer[] = await getClients()

    const cliente = clientes.filter(client => client.cellphone == tel)

    return cliente[0]
}