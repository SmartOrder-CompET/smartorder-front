import { Order } from "@/types/Order";
import React from "react";
import { Button } from "./ui/Button";
import { formatPrice } from "@/utils/formatters";

type Props = {
  data: Order
}

export const PedidoCard = ({ data }: Props) => {
    return (
        <div className="mt-8 bg-secondary p-2 rounded-[10px] h-auto mx-5">
            <div className="flex justify-center mb-5">
                <h3 className="text-lg font-black">PEDIDO #55</h3>
            </div>

            <div className="items-start pl-2 pr-2">
                <h5 className="text-base font-black ">ITENS:</h5>

                {(!data.produtos || data.produtos.length === 0) && (
                    <span className="text-gray-400">Nenhum item neste pedido.</span>
                )}

                {data.produtos.map((product) => (
                    <div className="justify-between flex pt-2" key={product.produtoId}>
                        <p className="font-regular text-sm text-primary">
                            {product.quantidade}x {product.produto.nome}
                        </p>
                        <div className="flex-1 border-b border-primary border-dotted justify-center h-3.5 mx-2 "></div>
                        <p className="font-regular text-sm">{product.produto.descricao}</p>
                    </div>
                ))}
                <div className="mt-3  rounded">
                    <h5 className="text-base font-black mb-2">DETALHES:</h5>

                    <div className="flex items-center justify-between pt-2">
                        <p className=" font-regular text-sm text-primary">
                            DATA
                        </p>
                        <div className="flex-1 bg-primary justify-center h-[1px] mx-2"></div>
                        <p className="font-regular text-sm">23/12</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <p className=" font-regular text-sm text-primary">
                            VALOR
                        </p>
                        <div className="flex-1 bg-primary justify-center h-[1px] mx-2"></div>
                        <p className="font-black mb-2  text-primary bg-white/5 text-sm rounded-2xl px-4 py-1 items-center text-center">
                            {formatPrice(Number(data.precoTotal))}
                        </p>
                    </div>
                </div>
                {/* Sempre exibe o status do pedido */}
                <div className="mt-5 flex flex-col gap-2">
                    <span className="font-bold text-sm text-primary mb-4">
                        {data.status.toUpperCase()}
                    </span>
                    {data.status === "pendente" && (
                        <div className="w-3/4 mx-auto">
                            <Button label="Acompanhar Pedido"/>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    );
}
