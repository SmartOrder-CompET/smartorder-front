import api from "./api"

type customer = {
    id: string,
    cellphone: string,
    name: string
}

export const createClient = async (name: string, cellphone: string, email?: string) => {
    try {
        const response = await api.post('/api/v1/clientes', {
            nome: name,
            celular: cellphone, 
            senha: 'cachorrocomasas7A.',
            email
        });
        console.log('Usuário criado com sucesso:', response.data);
        return response
    } catch (error: any) {
        console.error('Erro ao criar usuário:', error.response?.data || error.message);
    }
}


export const getClients = async () => {
    const response =  await api.get('/api/v1/autenticacao')
    return response.data.customers
}

export const validarCliet = async (cellphone: string) => {
    try {
        const response = await api.post('/api/v1/autenticacao', {
            celular: cellphone, 
            senha: 'cachorrocomasas7A.'
        });
        console.log('Usuário autenticado com sucesso:', response.data);
        return response
    } catch (error: any) {
        console.error('Erro ao autenticar usuário:', error.response?.data || error.message);
    }
}