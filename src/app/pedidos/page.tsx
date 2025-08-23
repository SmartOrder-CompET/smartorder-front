"use client";

import { Header } from "@/components/Header";
import StarRating from "@/components/Rating";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const Page = () => {
  const [rating1, setRating1] = useState(0);
  
  return (
    <div className="max-w-md  w-full md:max-w-3xl lg:max-w-5xl md:mx-auto  min-h-screen">
      <Header />
      {/* Titulo da pagina  */}
      <div className="flex h-full items-center justify-center pt-18">
        <h1 className="text-xl font-bold mt-8 text-[var(--color-primary)]">
          MEUS PEDIDOS
        </h1>
      </div>
      {/* Lista de pedidos */}
      <div className="flex flex-col items-center align-center justify-center">
        <div className="mt-8 bg-[var(--color-secondary)] p-2 rounded-[10px] w-95 h-90 ">
          <div className="flex justify-center mb-5">
            <h3 className="text-lg font-black">PEDIDO #000002</h3>
          </div>
          <div className="items-start pl-2 pr-2">
            {/* ITENS DO PEDIDO */}
            <h5 className="text-base font-black ">ITENS:</h5>
            {/* ITEM 1 */}
            <div className="justify-between flex pt-2">
              <p className="font-regular text-sm text-[var(--color-primary)]">
                2x Barbecue Brasa´s
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>

              <p className="font-regular text-sm">Ao ponto</p>
            </div>
            {/* ITEM 2 */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                1x Suco
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-regular text-sm">Laranja</p>
            </div>
            {/* ITEM 3 */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                1x Refrigerante
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-regular text-sm">Coca-Cola</p>
            </div>
            {/* DETALHES DO PEDIDO */}
            <h5 className="text-base font-black mt-3">DETALHES:</h5>
            {/* DATA DO PEDIDO */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                DATA
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-regular text-sm">21/07/2025</p>
            </div>
            {/* VALOR DO PEDIDO */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                VALOR
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-black mb-2  text-[var(--color-primary)] bg-white/5 text-sm rounded-2xl w-20 h-5  items-center text-center">
                R$ 80,00
              </p>
            </div>
            {/* STATUS DO PEDIDO */}
            <span className="font-regular text-sm text-[var(--color-primary)] mt-5 ">
              PEDIDO EM ANDAMENTO
            </span>
            {/* BOTAO ACOMPANHAR */}
            <div className="flex mt-7 justify-center">
              <Link href={"/pedidos/acompanhar/"}>
                <button className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-50 ">
                  ACOMPANHAR
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-[var(--color-secondary)] p-2 rounded-[10px]  w-95 h-90 ">
          <div className="flex justify-center mb-5">
            <h3 className="text-lg font-black">PEDIDO #000002</h3>
          </div>
          <div className="items-start pl-2 pr-2">
            {/* ITENS DO PEDIDO */}
            <h5 className="text-base font-black ">ITENS:</h5>
            {/* ITEM 1 */}
            <div className="justify-between flex pt-2">
              <p className="font-regular text-sm text-[var(--color-primary)]">
                2x Barbecue Brasa´s
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>

              <p className="font-regular text-sm">Ao ponto</p>
            </div>
            {/* ITEM 2 */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                1x Suco
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-regular text-sm">Laranja</p>
            </div>
            {/* ITEM 3 */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                1x Refrigerante
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-regular text-sm">Coca-Cola</p>
            </div>
            {/* DETALHES DO PEDIDO */}
            <h5 className="text-base font-black mt-3">DETALHES:</h5>
            {/* DATA DO PEDIDO */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                DATA
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-regular text-sm">21/07/2025</p>
            </div>
            {/* VALOR DO PEDIDO */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                VALOR
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-black mb-2  text-[var(--color-primary)] bg-white/5 text-sm rounded-2xl w-20 h-5  items-center text-center">
                R$ 80,00
              </p>
            </div>

            {/* BOTAO AVALIAR E REPETIR */}
            <div className="flex mt-7 justify-around ">
              <Link href={"/pedidos/avaliacao"}>
                <button className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-30 ">
                  AVALIAR
                </button>
              </Link>
              <button className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-30 ">
                REPETIR
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-[var(--color-secondary)]  p-2 rounded-[10px] mb-30 w-95 h-110 ">
          <div className="flex justify-center mb-5">
            <h3 className="text-lg font-black">PEDIDO #000001</h3>
          </div>
          <div className="items-start pl-2 pr-2">
            {/* ITENS DO PEDIDO */}
            <h5 className="text-base font-black ">ITENS:</h5>
            {/* ITEM 1 */}
            <div className="justify-between flex pt-2">
              <p className="font-regular text-sm text-[var(--color-primary)]">
                2x Barbecue Brasa´s
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>

              <p className="font-regular text-sm">Ao ponto</p>
            </div>

            {/* DETALHES DO PEDIDO */}
            <h5 className="text-base font-black mt-3">DETALHES:</h5>
            {/* DATA DO PEDIDO */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                DATA
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-regular text-sm">21/07/2025</p>
            </div>
            {/* VALOR DO PEDIDO */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                VALOR
              </p>
              <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
              <p className="font-black mb-2  text-[var(--color-primary)] bg-white/5 text-sm rounded-2xl w-20 h-5  items-center text-center">
                R$ 80,00
              </p>
            </div>
            {/* AVALIACAO */}
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">
                AVALIAÇÃO
              </p>
              <div>
                <StarRating
                  rating={rating1}
                  onRatingChange={setRating1}
                  showValue={true}
                />
              </div>
            </div>
            {/* TEXTO AVALIACAO */}
            <div className="bg-white/5 w-88 text-xs h-25 p-2 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              molestiae inventore optio et at libero, sit quasi veritatis.
              reiciendis beatae vero non quaerat.
            </div>

            {/* BOTAO AVALIAR E REPETIR */}
            <div className="flex mt-7 justify-center ">
              <button className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-30 ">
                REPETIR
              </button>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};
export default Page;
