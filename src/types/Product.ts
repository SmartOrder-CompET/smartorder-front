export type Product = {
    id: number,
    name: string,
    description?: string,
    categoryId: number,
    ingredients: string,
    price: number,
    image?: string,
    available: boolean,
    quantity: number
}

export type ProductAPI = {
    name: string,
    id: string,
    category: string,
    unitPrice: string,
    image: string,
    ingredients: string
}