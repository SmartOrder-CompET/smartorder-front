"use client";
import { Header } from "@/components/Header";
import { ProductCart } from "@/components/ProductCart";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, Check, Soup, Bike } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const { state } = useCart()

  return (
    <>
      <Header />
      <div className="max-w-md w-full md:max-w-3xl lg:max-w-5xl mx-auto min-h-screen pb-6">
        

        <div className="flex flex-col h-full items-center w-full px-4">
          <Link href={"/pedidos"}>
            <div className="flex gap-2 justify-start w-screen pl-5 mt-5 text-gray-300">
              <ArrowLeft />
              <span>Voltar</span>
            </div>
          </Link>

          <div className="mt-8 bg-secondary p-4 rounded-md ">
            <h2 className="text-2xl text-center my-2" style={{ fontFamily: 'primary' }}>
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
              <p className="text-base font-regular text-[var(--color-primary)] mt-3">
                Pagamento confirmado
              </p>
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
          <hr className="border-t-2 border-dotted border-primary w-full mb-5 mt-5" />
          <div className="w-full flex mb-5 justify-start text-lg md:text-xl font-semibold px-4 ">
            <p>Detalhes do pedido: </p>
          </div>
          {/* CARD DETALHE DO PEDIDO */}
          
          <div className="w-full flex flex-col gap-3 mb-4">
            {state.items.map((item) => (
              <ProductCart key={item.product.id} cartItem={item} inOrder/>
            ))}
          </div>

          <div className="flex flex-row text-xl items-end justify-end gap-2">
            <p className="font-medium text-primary ">Total: </p>
            <p className="font-bold texxt-white"> R$ 160,00</p>
          </div>
          {/*====================================== */}
        </div>

        <div className="w-full flex px-4 mb-2 mt-8 justify-start align-center text-xl font-semibold ">
          <p>Endereço de entrega</p>
        </div>
        <div className="flex flex-col w-full px-4 py-2 gap-4 ">
          <div className="flex items-start">
            <div className="mr-2 md:mr-10">
              <img
                src="/endereco_icon.svg
              "
                alt="Icone de endereço"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-xl">Casa</p>
              <p>Rua Dois, Caraibeiras</p>
              <p className="font-light">54 - Caruaru</p>
            </div>
          </div>

          <hr className="border-t-2 border-dotted border-primary w-full my-5" />
        </div>

        {/* LINHA PONTILHADA SEPARADORA */}
        
        
        
        <div className="w-full flex justify-center items-center flex-col gap-5 text-lg md:text-xl px-4">
          <p>Algum problema?</p>
          <button 
              className="bg-[#181717] text-center font-bold px-10 py-4 rounded-md border border-[#35F300]"
          >
              Acompanhar por whatsapp
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
