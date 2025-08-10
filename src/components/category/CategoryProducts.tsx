"use client";

import { categories } from "@/data/category";
import { SectionTitle } from "../SectionTitle";
import { CategoryItem } from "./CategoryItem";
// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// Import required modules
import { FreeMode } from "swiper/modules";

export const CategoryProducts = () => {
  const onClick = () => {
    console.log("clicou");
  };

  return (
    <div className="w-full">
      <SectionTitle title="Selecione a categoria" onClick={onClick} />

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
