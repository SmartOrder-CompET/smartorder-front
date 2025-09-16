"use client";
import "./globals.css";
import { CategoryProducts } from "../components/category/CategoryProducts";
import { MenuArea } from "../components/menu/MenuArea";
import {  MapPin, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

const Page = () => {
  return (
    <div
  className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto text-white min-h-screen">

      <Header />

      {/* Endereço */}
      <div className="flex items-center justify-center h-8 mt-2 pt-18">
        <MapPin size={16} color="#D17719" />
        <p className="text-xs pl-1 font-montserrat ">
          Av. José Estevão, 100, Carabeiras
        </p>
      </div>

      {/* Banner promocional */}
      <div className="flex justify-between mx-4 md:mx-8 mt-4 rounded-lg bg-[#222222] overflow-hidden">
        <div className="flex flex-col justify-center p-4 md:p-6 gap-1 md:gap-2">
          <h3 className="text-base md:text-xl font-bold font-montserrat">
            Lorem ipsum dolor
          </h3>
          <p className="text-xs md:text-sm text-gray-300 max-w-md">
            Consectetur adipiscing elit quisque faucibus
          </p>
          <div className="mt-3 md:mt-4">
            <button className="bg-[var(--color-primary)] text-sm md:text-base font-semibold px-4 py-2 cursor-pointer rounded-full hover:brightness-110 transition-all">
              Compre agora!
            </button>
          </div>
        </div>
        <div className="flex items-center pr-2 md:pr-6">
          <img
            src="/classic-brasas.svg"
            alt="Hamburguer do Brasa's"
            className="h-24 md:h-32 lg:h-40"
          />
        </div>
      </div>

      {/* Barra de pesquisa */}
      <div className="px-4 md:px-8 mt-6">
        <div className="flex items-center h-10 md:h-12 rounded-full bg-[var(--color-primary)] px-4 md:max-w-md">
          <Search size={16} color="#fff" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-transparent border-none outline-none w-full text-white placeholder:text-white ml-2 text-sm"
          />
        </div>
      </div>

      {/* Categorias */}
      <div className="mt-6 px-4 md:px-8">
        <CategoryProducts />
      </div>

      {/* Menu de produtos */}
      <div className="mt-4 px-4 md:px-8 pb-20">
        <MenuArea />
      </div>
      <Navbar />
    </div>
  );
  
};

export default Page;
