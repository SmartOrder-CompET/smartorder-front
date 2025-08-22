"use client";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import StarRating from "@/components/Rating";
import { useState } from "react";

const page = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(4);
  return (
    <div className="max-w-md w-full md:max-w-3xl lg:max-w-5xl mx-auto  min-h-screen">
      <Header />
      <div className="flex flex-col items-center">
        <Link href={"/pedidos"}>
          <div className="flex gap-2 justify-start w-100 ml-5 mt-5 text-gray-300">
            <ArrowLeft />
            <span>Voltar</span>
          </div>
        </Link>
        <div className="flex h-full items-center justify-center">
          <h1 className="text-xl font-bold mt-5 text-[var(--color-primary)]">
            AVALIAÇÃO
          </h1>
        </div>
        <div className="flex flex-col items-center align-center justify-center">
          <div className="mt-8 bg-[var(--color-secondary)] p-2 rounded-[10px] w-95 h-160 ">
            <div className="flex justify-center mb-5">
              <h3 className="text-lg font-black">PEDIDO #000001</h3>
            </div>
            <div className="items-start pl-2 pr-2">
              <h5 className="text-base font-black ">
                Avaliação Geral:{" "}
                <strong className="text-[var(--color-primary)]">*</strong>
              </h5>
              <textarea
                className="bg-white/5 w-88 text-xs h-25 p-2 mt-2 resize-none"
                rows={5}
              ></textarea>
            </div>
            <div className="flex justify-center pt-2">
              <StarRating
                rating={rating1}
                onRatingChange={setRating1}
                showValue={true}
              />
            </div>
            {/* PONTO DA CARNE */}
            <div className="items-start pt-5 pl-2 pr-2">
              <h5 className="text-base font-black ">Ponto da carne:</h5>
              <textarea
                className="bg-white/5 w-88 text-xs h-25 p-2 mt-2 resize-none"
                rows={5}
              ></textarea>
            </div>
            {/* PONTO DO PEDIDO */}
            <div className="items-start pt-5 pl-2 pr-2">
              <h5 className="text-base font-black ">Atendimento:</h5>
              <textarea
                className="bg-white/5 w-88 text-xs h-25 p-2 mt-2 resize-none"
                rows={5}
              ></textarea>
            </div>
            <div className="flex mt-7 justify-center ">
              <button className="font-black text-lg bg-[var(--color-primary)] cursor-pointer h-8 rounded-2xl w-30 ">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
