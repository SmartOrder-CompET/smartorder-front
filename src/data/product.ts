import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Sertão Brasas",
    description: "Pizza clássica com molho de tomate, mussarela e manjericão.",
    categoryId: 1,
    ingredients: "Molho de tomate, mussarela, manjericão",
    price: 39.9,
    image: "/sertão-brasas.svg",
    available: true
  },
  {
    id: 2,
    name: "Barbecue Brasas",
    description: "Calabresa fatiada com cebola roxa.",
    categoryId: 1,
    ingredients: "Calabresa, cebola roxa, molho de tomate, mussarela",
    price: 42.5,
    image: "/barbecue-brasas.svg",
    available: true
  },
  {
    id: 3,
    name: "Refrigerante Lata",
    description: "350ml de Coca-Cola gelada.",
    categoryId: 2,
    ingredients: "Água gaseificada, açúcar, cafeína, corante",
    price: 6.0,
    image: "https://via.placeholder.com/150",
    available: true
  },
  {
    id: 4,
    name: "Brownie com Sorvete",
    description: "Brownie de chocolate servido com sorvete de baunilha.",
    categoryId: 3,
    ingredients: "Chocolate, ovos, manteiga, açúcar, sorvete de baunilha",
    price: 18.0,
    image: "https://via.placeholder.com/150",
    available: false
  }
];