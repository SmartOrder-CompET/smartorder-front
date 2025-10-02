import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import LayoutClient from "@/components/LayoutClient";
import { ProfileSidebarProvider } from "@/contexts/ProfileSidebarContext";

export const metadata: Metadata = {
  title: "Brasas Burger",
  icons: { icon: "logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ProfileSidebarProvider>
          <html lang="pt-BR">
            <body className="bg-[#100A06] text-white">
              <LayoutClient>{children}</LayoutClient>
            </body>
          </html>
      </ProfileSidebarProvider>
    </CartProvider>
  );
}
