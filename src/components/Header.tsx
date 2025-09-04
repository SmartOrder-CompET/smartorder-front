"use client";

import { useCart } from "@/contexts/CartContext";
import { User, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onProfileClick?: () => void;
}

export const Header = ({ onProfileClick }: HeaderProps) => {
  const path = usePathname();
  const { state } = useCart();

  return (
    <header className="fixed top-0 left-0 z-50 flex h-18 w-full justify-between items-center px-4 md:px-8 py-2 bg-[#100A06]">
      <button
        onClick={onProfileClick}
        className="flex items-center p-3 rounded-full bg-transparent hover:bg-primary/20 transition"
      >
        <User size={20} />
      </button>

      <Link href="/" className="flex items-center mt-2">
        <img src="/logo.svg" alt="Logotipo do Brasa's" className="h-12" />
      </Link>

      <Link
        href={path === "/meucarrinho" ? "/" : "/meucarrinho"}
        className={`flex items-center p-3 rounded-full relative ${
          path === "/meucarrinho" ? "bg-primary" : "bg-transparent"
        }`}
      >
        <ShoppingCart size={20} />
        {state.items.length > 0 && path !== "/meucarrinho" && (
          <div className="bg-primary flex justify-center items-center rounded-full w-5 h-5 absolute -right-1 -top-1">
            {state.items.length}
          </div>
        )}
      </Link>
    </header>
  );
};
