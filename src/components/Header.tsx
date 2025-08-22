"use client";

import { User, ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <div>
      <div className="flex h-14 mt-5 md:h-16 w-full justify-between items-center px-6 md:px-8 py-2">
        <div className="flex items-center">
          <a
            href="/"
            className="p-2 hover:bg-[#222222] rounded-full transition-colors"
          >
            <User size={20} className="md:w-6 md:h-6" />
          </a>
        </div>
        <div className="flex items-center pb-3">
          <img
            src="/logo.svg"
            alt="Logotipo do Brasa's"
            className="h-16 md:h-14 "
          />
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="p-2 hover:bg-[#222222] rounded-full transition-colors"
          >
            <ShoppingCart size={20} className="md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
