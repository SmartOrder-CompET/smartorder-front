"use client";

import { CategoryWithProducts } from "@/types/CategoryWithProducts";
import { SectionTitle } from "../SectionTitle";
import { MenuCard } from "./MenuCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useRouter } from "next/navigation";

type Props = {
  category: CategoryWithProducts;
};

export const MenuCategory = ({ category }: Props) => {
  const router = useRouter();

  const handleVerTudo = () => {
    // Redireciona para a página da categoria usando o ID
    router.push(`/categories/${category.id}`);
  };

  return (
    <div className="mb-8">
      <SectionTitle title={category.name} onClick={handleVerTudo} />

      <Swiper
        slidesPerView={1.8}
        spaceBetween={12}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full mt-2"
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
          1280: { slidesPerView: 5.2 },
        }}
      >
        {category.products.map((product) => (
          <SwiperSlide key={product.id}>
            <MenuCard data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
