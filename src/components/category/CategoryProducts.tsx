"use client";

import { categories } from "@/data/category";
import { SectionTitle } from "../SectionTitle";
import { CategoryItem } from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

export const CategoryProducts = () => {
  return (
    <div className="w-full">
      {/* Aqui já temos o SectionTitle */}
      <SectionTitle title="Selecione a categoria" href="/categories" />

      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full mt-2"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="!w-auto">
            <CategoryItem data={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
