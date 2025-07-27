export type Product = {
    id: number,
    name: string,
    description?: string,
    categoryId: number,
    ingredients: string,
    price: number,
    image?: string,
    available: boolean
}