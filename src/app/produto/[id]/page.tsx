"use client";

import { Additional } from "@/components/Additional";
import { Button } from "@/components/ui/Button";
import { QuantityAction } from "@/components/ui/QuantityAction";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/product";
import { formatPrice } from "@/utils/formatters";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { MessageCircleMore, X, Share2 } from "lucide-react";

const Page = () => {
  const { dispatch } = useCart();
  const router = useRouter();

  const meatPoints = [
    { id: "medium", label: "Carne ao ponto" },
    { id: "rare", label: "Carne mal passada" },
    { id: "wellDone", label: "Carne bem passada" },
  ];

  const productId = usePathname().slice(9);
  const product = products.filter((item) => item.id === parseInt(productId));
  const [quantity, setQuantity] = useState(1);

  const observationRef = useRef<HTMLInputElement>(null);
  const [selectedPoint, setSelectedPoint] = useState<string>("");

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { product: product[0], observation: observationRef, quantity },
    });
    router.push("/");
  };

  return (
    <main className="relative inset-0 z-50 bg-[#111] flex flex-col">
      <div className="px-3 pt-2">
        <img
          src={product[0].image}
          alt={product[0].name}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <div className="bg-[#22222280] px-5 rounded-t-4xl flex-1">
        <div className="flex justify-between font-bold items-center mt-5">
          <h2 className="text-3xl break-words">{product[0].name}</h2>

          <div className="text-xl">{formatPrice(product[0].price)}</div>
        </div>

        <div>
          <h4 className="mt-5 mb-3 text-lg">Ingredientes:</h4>

          <p>{product[0].ingredients}</p>
        </div>

        <div>
          <h4 className="mt-5 text-lg">Deseja adicionar algum ingrediente?</h4>

          <p className="text-sm mb-3">Selecione no máximo 20 itens</p>

          <div className="flex flex-col gap-1">
            <Additional />
            <Additional />
            <Additional />
            <Additional />
            <Additional />
          </div>
        </div>

        <div>
          <h4 className="mt-5 text-lg">
            Qual o ponto da carne? <span className="text-primary">*</span>
          </h4>

          {meatPoints.map(({ id, label }) => (
            <label
              key={id}
              htmlFor={id}
              className="flex flex-row-reverse justify-between items-center cursor-pointer select-none mt-2"
            >
              <input
                id={id}
                type="radio"
                name="meatPoint"
                value={id}
                checked={selectedPoint === id}
                onChange={() => setSelectedPoint(id)}
                className="form-radio h-5 w-5 accent-orange-400 focus:ring-orange-400 border-primary"
              />
              <span className=" text-gray-300 hover:text-orange-400">
                {label}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-5">
          <div className="flex items-center">
            <MessageCircleMore className="text-lg mr-2" />

            <h4 className="text-lg">Alguma observação?</h4>
            <div className="text-sm text-gray-300">(opcional)</div>
          </div>

          <input
            type="text"
            placeholder="Ex: Tirar o tomate"
            ref={observationRef}
            className="border border-gray-300 outline-none p-3 rounded-md w-full mt-2 focus:border-primary"
          />
        </div>

        <div className="mt-5 pb-5 flex justify-between w-full">
          <QuantityAction value={quantity} setValue={setQuantity} />

          <Button
            label={"Adicionar " + formatPrice(product[0].price * quantity)}
            onClick={handleAddToCart}
          />
        </div>
      </div>

      <div className="w-screen px-3 flex items-center justify-between text-4xl absolute top-2">
        <Link href={"/"}>
          <X />
        </Link>

        <Share2 />
      </div>
    </main>
  );
};

export default Page;
