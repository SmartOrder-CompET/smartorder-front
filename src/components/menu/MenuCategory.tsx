"use client";

import { SectionTitle } from "../SectionTitle";
import { MenuCard } from "./MenuCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import { Secoes } from "@/types/Secoes";
import { useRouter } from "next/navigation";

type Props = {
  secao: Secoes;
};

export const MenuCategory = ({ secao }: Props) => {

  const router = useRouter();

  return (
    <div className="mb-8">
      <SectionTitle title={secao.nome} onClick={() => router.push(`/categories/${secao.id}`)} />

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
        {secao.produtos?.map((product) => (
          <SwiperSlide key={product.produto.id}>
            <MenuCard data={product.produto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
