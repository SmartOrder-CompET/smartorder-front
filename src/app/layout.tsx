'use client'

import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// export const metadata: Metadata = {
//   title: "Brasas Burger",
//   icons: {
//     icon: "/logo.svg",
//   },
// };

const client = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="pt-br">
        <body
          className={` antialiased`}
        >
          <QueryClientProvider client={client}>
            {children}
          </QueryClientProvider>
        </body>
      </html>
    </CartProvider>
  );
}
