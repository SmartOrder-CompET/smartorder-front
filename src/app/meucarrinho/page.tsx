"use client";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { ProductCart } from "@/components/ProductCart";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatters";
import { useRouter } from "next/navigation";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";
import Image from "next/image";

const Page = () => {
  const { state } = useCart();
  const router = useRouter();

  const message = [
    "Olá, quero fazer um pedido e esses são os itens:",
    ...state.items.map((item) => `${item.quantity}x ${item.product.name}`),
  ].join("\n");

  const phoneNumber = "558194020566";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  const subtotal = state.items.reduce((acc, item) => {
    return acc + +item.product.unitPrice * item.quantity;
  }, 0);

  const handleFinish = () => {
    const token = localStorage.getItem('token')

    if(!token){
      router.push('/login')
    } else{
      router.push('/checkout')
    }


  }

  if (state.items.length === 0) {
    return (
      <div className="h-screen">
        <Header />

        <main className="w-full h-180 flex justify-center items-center">
          <div className="flex  mt-20 flex-col items-center justify-center">
            <img
              src="/cart_empty-icon.png"
              alt="Icone de carrinho vazio."
              className="w-24 h-24 "
            />
            <p
              className="text-xl mt-10 mb-10 text-white"
              style={{ fontFamily: "primary" }}
            >
              Seu carrinho está vazio
            </p>

            <Button label="Voltar para para tela inicial" big onClick={() => router.push('/')}/>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />

      <main className="mx-4 pb-20">
        <Title text="Meu Carrinho" />

        <div className="flex flex-col gap-4 overflow-y-auto h-[50vh]">
          {state.items.map((item, index) => (
            <ProductCart key={`${item.product.id}-${index}`} cartItem={item} />
          ))}
        </div>

        <div className="h-[1px] w-full bg-white my-4"></div>

        <div className="mx-2 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h6>Subtotal</h6>
            <div>{formatPrice(subtotal)}</div>
          </div>
          <div className="flex items-center justify-between">
            <h6>Taxa de Entrega</h6>
            <div>{formatPrice(0)}</div>
          </div>
          <div className="flex items-center justify-between">
            <h6 className="text-lg text-primary">Total</h6>
            <div className="text-lg">{formatPrice(subtotal)}</div>
          </div>

          <div className="flex flex-col justify-center mt-3  gap-3 mx-auto">
            <Button
              label="Finalizar "
              onClick={handleFinish}
            />
            <div className="flex flex-row gap-2 py-2 px-2 justify-evenly rounded-full  border bg-[#181717] border-[#35F300]">
              <button
                className=" text-center font-bold "
                onClick={handleClick}
              >
                Finalizar por whatsapp
              </button>
              <Image
                src={WhatsappIcon}
                alt="Whatsapp Icon"
                width={22}
                height={22}
              />
            </div>
          </div>
        </div>
      </main>

      <Navbar />
    </div>
  );
};

export default Page;
