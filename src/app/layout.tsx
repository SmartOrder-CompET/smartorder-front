'use client'

import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProfileSidebarProvider } from "@/contexts/ProfileSidebarContext";
import LayoutClient from "@/components/LayoutClient";


// export const metadata: Metadata = {
//   title: "Brasas Burger",
//   icons: {
//     icon: "/logo.svg",
//   },
// };

const client = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
        <ProfileSidebarProvider>
          <html lang="pt-br">
            <body className="bg-[#100A06] text-white">
              <QueryClientProvider client={client}>
                <LayoutClient>{children}</LayoutClient>
              </QueryClientProvider>
            </body>
          </html>
        </ProfileSidebarProvider>
    </CartProvider>
  );
}
