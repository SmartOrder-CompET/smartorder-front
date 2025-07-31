import { Order } from "@/types/Order";
import { addresses } from "./address";

export const orders: Order[] = [
  {
    id: 1,
    products: [
      { productId: 1, priceAtOrder: 39.9, quantity: 2 },
      { productId: 3, priceAtOrder: 6.0, quantity: 3 }
    ],
    idClient: 101,
    status: "em confirmação",
    created_at: new Date("2025-07-25T14:30:00"),
    total: 45.9,
    address: addresses[0]
  },
  {
    id: 2,
    products: [
      { productId: 2, priceAtOrder: 42.5, quantity: 1 },
      { productId: 4, priceAtOrder: 18.0, quantity: 2 }
    ],
    idClient: 102,
    status: "em preparo",
    created_at: new Date("2025-07-26T19:00:00"),
    total: 60.5,
    address: addresses[1]
  },
  {
    id: 3,
    products: [
      { productId: 3, priceAtOrder: 6.0, quantity: 2 }
    ],
    idClient: 103,
    status: "saiu para entrega",
    created_at: new Date("2025-07-27T12:00:00"),
    total: 6.0,
    address: addresses[0]
  }
];