"use client";
import { Header } from "@/components/Header";
import { ArrowLeft, Check, Soup, Bike } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-md w-full md:max-w-3xl lg:max-w-5xl mx-auto  min-h-screen">
      <Header />
      <div className="flex flex-col h-full items-center">
        <Link href={"/pedidos"}>
          <div className="flex gap-2 justify-start w-100 ml-5 mt-5 text-gray-300">
            <ArrowLeft />
            <span>Voltar</span>
          </div>
        </Link>
        <div className="mt-8 bg-[var(--color-secondary)]  p-2 rounded-[10px] w-95 h-140 ">
          <h2 className="text-2xl font-bold text-center mt-2">
            ACOMPANHAMENTO
          </h2>
          <p className="text-center text-xl  text-[var(--color-primary)]">
            ID pedido: 000002
          </p>
          {/* Pagamento confirmado */}
          <div className="flex items-center justify-center flex-col w-90 mt-5">
            <div className="flex items-center mt-3 justify-center w-13 h-13 rounded-full bg-[var(--color-primary)]">
              <Check className="w-10 h-10 text-white" />
            </div>
            <p className="text-base font-regular mt-3">Pagamento confirmado</p>
          </div>
          {/* Barra separadora */}
          <div className="flex items-center justify-center mt-5">
            <div className="w-[2px] h-6 bg-gray-500"></div>
          </div>
          {/* Pedido em preparo */}
          <div className="flex items-center justify-center flex-col w-90 mt-5">
            <div className="flex items-center mt-3 justify-center w-13 h-13 rounded-full bg-white/10">
              <Soup className="w-10 h-10 text-white" />
            </div>
            <p className="text-base font-regular mt-3">Pedido em preparo</p>
          </div>
          {/* Saiu para entrega */}

          {/* Barra separadora */}
          <div className="flex items-center justify-center mt-5">
            <div className="w-[2px] h-6 bg-gray-500"></div>
          </div>
          {/* Pedido em preparo */}
          <div className="flex items-center justify-center flex-col w-90 mt-5">
            <div className="flex items-center mt-3 justify-center w-13 h-13 rounded-full bg-white/10">
              <Bike className="w-10 h-10 text-white" />
            </div>
            <p className="text-base font-regular mt-3">Saiu para entrega</p>
          </div>
        </div>
        <div>
          <p className="text-center text-xl font-semibold pt-5">
            Previsão de Entrega: 21:30hrs
          </p>
        </div>
        {/* LINHA PONTILHADA SEPARADORA */}
        <hr className="border-t-2 border-dotted border-[var(--color-primary)] w-100 mb-5 mt-5" />
        <div className="w-100 flex mb-5 justify-start text-xl font-semibold ">
          <p>Detalhes do pedido: </p>
        </div>
        {/* CARD DETALHE DO PEDIDO */}
        <div className="w-97 h-30 p-2 bg-[var(--color-secondary)] justify-between rounded-[8px] mb-3 flex  ">
          <div className="w-35  ml-2  h-22 mt-1 flex justify-center text-center">
            <img
              src="/sertão-brasas.svg"
              alt="Imagem do Hamburguer do Brasa's barbecue"
              className="object-cover rounded-xl  "
            />
          </div>
          <div className="h-19 justify-center flex align-center text-center mt-3 w-0.5 bg-white/10"></div>
          <div className="flex flex-col gap-2 align-center justify-center items-center">
            <p className="font-black">2X Barbecue Brasa`s</p>
            <p>
              {" "}
              <strong className="text-[var(--color-primary)] font-light">
                Ponto da carne:
              </strong>{" "}
              Ao ponto
            </p>

            <p className="font-black mb-2  text-[var(--color-primary)] bg-white/5 text-sm rounded-2xl flex justify-center w-25 h-12  items-center text-center">
              R$ 80,00
            </p>
          </div>
        </div>
        {/*====================================== */}
        {/* CARD DETALHE DO PEDIDO */}
        <div className="w-97 h-30 p-2 bg-[var(--color-secondary)] justify-between rounded-[8px] mb-3 flex  ">
          <div className="w-35  ml-2  h-22 mt-1 flex justify-center text-center">
            <img
              src="/sertão-brasas.svg"
              alt="Imagem do Hamburguer do Brasa's barbecue"
              className="object-cover rounded-xl  "
            />
          </div>
          <div className="h-19 justify-center flex align-center text-center mt-3 w-0.5 bg-white/10"></div>
          <div className="flex flex-col gap-2 align-center justify-center items-center">
            <p className="font-black">2X Barbecue Brasa`s</p>
            <p>
              {" "}
              <strong className="text-[var(--color-primary)] font-light">
                Ponto da carne:
              </strong>{" "}
              Ao ponto
            </p>

            <p className="font-black mb-2  text-[var(--color-primary)] bg-white/5 text-sm rounded-2xl flex justify-center w-25 h-12  items-center text-center">
              R$ 80,00
            </p>
          </div>
        </div>
        <div className="flex flex-row text-xl items-end justify-end w-100 gap-2">
          <p className="font-medium text-[var(--color-primary)] ">Total: </p>
          <p className="font-bold texxt-white"> R$ 160,00</p>
        </div>
        {/*====================================== */}
      </div>
    </div>
  );
};

export default page;
