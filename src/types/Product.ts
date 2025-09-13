export type Products = {
    id: string,
    preco: string,
    disponivel: boolean,
    ordem: 1,
    destaque: boolean,
    criadoEm: string,
    atualizadoEm: string,
    produto: Product
}

export type Product = {
    id: string,
    nome: string,
    descricao: string,
    imagem: string,
    ingredients: string,
    precoUnitario: string,
    categoriaId: string,
    criadoEm: string,
    atualizadoEm: string,
}