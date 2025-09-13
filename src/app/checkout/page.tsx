"use client";

import { Title } from "@/components/Title";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatters";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import CreditCardIcon from "../../../public/credit_card-icon.svg";
import DinheiroIcon from "../../../public/dinheiro-icon.svg";
import PixIcon from "../../../public/pix-icon.svg";
import MercadoPagoIcon from "../../../public/mercado_pago-icon.svg";

export default function CheckoutPage() {
  const { state } = useCart();
  const router = useRouter();

  const [opcao, setOpcao] = useState("entrega");
  const [selected, setSelected] = useState("dinheiro");

  useEffect(() => {
    if (state.items.length === 0) {
      router.replace("/");
    }
  }, [state.items, router]);

  const subtotal = state.items.reduce((acc, item) => {
    return acc + +item.product.precoUnitario * item.quantity;
  }, 0);

  const handleCheckOut = async () => {
    const res = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subtotal }),
    });

    const data = await res.json();
    console.log(data);

    router.push(`/pagamento/${data.id}`);
  };

  const paymentOptions = [
    { value: "dinheiro", label: "Dinheiro", icon: DinheiroIcon },
    { value: "cartao", label: "Cartão", icon: CreditCardIcon },
    { value: "pix", label: "Pix", icon: PixIcon },
    { value: "mercado_pago", label: "Mercado Pago", icon: MercadoPagoIcon },
  ];

  return (
    <div>
      <main className="mx-4 mt-8">
        <Title text="Confirme o pagamento" />

        <div className="mb-4">
          <label htmlFor="retirada" className="block font-semibold mb-1">
            Forma de retirada
          </label>
          <select
            id="retirada"
            value={opcao}
            onChange={(e) => setOpcao(e.target.value)}
            className="w-full rounded-lg border border-primary bg-secondary text-white px-5 py-3 focus:outline-none"
          >
            <option value="entrega">Entrega</option>
            <option value="retirar">Retirar no local</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <h2 className="font-semibold mb-2">Selecione a forma de pagamento</h2>

          <div className="flex flex-col gap-2">
            {paymentOptions.map((option) => (
              <label
                key={option.value}
                className={`flex flex-row-reverse justify-between items-center gap-2 p-3 rounded-lg border-3 cursor-pointer transition
                                    ${
                                      selected === option.value
                                        ? "border-primary "
                                        : "border-gray-500"
                                    }
                                `}
              >
                <input
                  type="radio"
                  name="pagamento"
                  value={option.value}
                  checked={selected === option.value}
                  onChange={() => setSelected(option.value)}
                  className="
                                    w-5 h-5 rounded-full border-2
                                    border-gray-400 
                                    checked:border-primary checkd:bg-transparent
                                    accent-primary cursor-pointer
                                "
                />
                <span className="capitalize flex items-center gap-2">
                  <Image
                    src={option.icon}
                    alt={`${option.label} icon`}
                    width={24}
                    height={24}
                  />
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h6 className="mb-4 text-lg">Resumo do Pedido</h6>

          <div className="flex flex-col gap-1">
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
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-5">
          <Button label="Confirmar compra" onClick={handleCheckOut} big />
        </div>
      </main>
    </div>
  );
}
