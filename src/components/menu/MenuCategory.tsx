"use client";

import { Category } from "@/types/CategoryType";

import { SectionTitle } from "../SectionTitle";
import { MenuCard } from "./MenuCard";
// Importação Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { getProducts } from "@/services/products";
import { useEffect, useState } from "react";
import { ProductAPI } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import { getCardapio } from "@/services/cardapio";

type Props = {
  category: Category;
};

export const MenuCategory = ({ category }: Props) => {

  
  const { data: products, isLoading, error } = useQuery({ 
    queryKey: ["produtos"], 
    queryFn: getCardapio,
    staleTime: 100000
  })

  // useEffect(() => {
  //   console.log(products)
  // }, [products])

  const onClick = () => {
    console.log("clicou");
  };

  // const productsFiltereds = products?.filter(
  //   (product) => product !== category.name
  // );

  return (
    <div className="mb-8">
      <SectionTitle title={category.name} onClick={onClick} />

      <Swiper
        slidesPerView={1.8}
        spaceBetween={12}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full mt-2"
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3.2,
          },
          1024: {
            slidesPerView: 4.2,
          },
          1280: {
            slidesPerView: 5.2,
          },
        }}
      >
        {products?.map((product) => (
          //@ts-ignore
          <SwiperSlide key={product.produto.id}>
            {/* @ts-ignore */}
            <MenuCard data={product.produto } />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
