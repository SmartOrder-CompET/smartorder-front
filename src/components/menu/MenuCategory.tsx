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

type Props = {
  category: Category;
};

export const MenuCategory = ({ category }: Props) => {

  const [products, setProducsts] = useState<ProductAPI[]>([])

  const getData = async () => {
    const data = await getProducts()
    setProducsts(data)
    console.log(products)
  }

  useEffect(() => {
    getData()
  }, [products])

  const onClick = () => {
    console.log("clicou");
  };

  const productsFiltereds = products.filter(
    (product) => product.category === category.name
  );

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
        {productsFiltereds.map((product) => (
          <SwiperSlide key={product.id}>
            <MenuCard data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
