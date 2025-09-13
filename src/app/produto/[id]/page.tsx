"use client";

import { Additional } from "@/components/Additional";
import { Button } from "@/components/ui/Button";
import { QuantityAction } from "@/components/ui/QuantityAction";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatters";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { MessageCircleMore, X, Share2 } from "lucide-react";
import { getProduct } from "@/services/products";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const { dispatch } = useCart();
  const router = useRouter();

  const meatPoints = [
    { id: "medium", label: "Carne ao ponto" },
    { id: "rare", label: "Carne mal passada" },
    { id: "wellDone", label: "Carne bem passada" },
  ];

  const productId = usePathname().slice(9);
  
  const { data: product, isLoading, error } = useQuery({ 
    queryKey: ["produto"], 
    queryFn: () => getProduct(productId),
  })

  const [quantity, setQuantity] = useState(1);

  const observationRef = useRef<HTMLInputElement>(null);
  const [selectedPoint, setSelectedPoint] = useState<string>("");

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { product: product, observation: observationRef, quantity },
    });
    router.push("/");
  };

  return (
    <main className="h-screen flex flex-col ">
      <div className="px-3 pt-2">
        <img
          src={product?.imagem}
          alt={product?.nome}
          className="w-full h-auto rounded-xl max-h-[250px]"
        />
      </div>

      <div className="bg-[#22222280] px-5 rounded-t-4xl flex-1">
        <div className="flex justify-between font-bold items-center mt-5">
          <h2 className="text-3xl break-words">{product?.nome}</h2>

          <div className="text-xl">{formatPrice(parseInt(product?.precoUnitario as string))}</div>
        </div>

        <div>
          <h4 className="mt-5 mb-3 text-lg">Ingredientes:</h4>

          <p>{product?.descricao}</p>
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
            label={"Adicionar " + formatPrice(parseInt(product?.precoUnitario as string) * quantity)}
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
