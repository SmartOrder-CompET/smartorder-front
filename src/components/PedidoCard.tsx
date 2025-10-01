import React from "react";
import StarRating from "@/components/Rating";
import Link from "next/link";

interface PedidoItem {
  nome: string;
  quantidade: number;
  detalhe?: string;
}

export type PedidoStatus = "andamento" | "concluido" | "avaliado";

interface PedidoCardProps {
  numero: string;
  itens: PedidoItem[];
  data: string;
  valor: string;
  status: PedidoStatus;
  avaliacao?: number;
  textoAvaliacao?: string;
  onRepetir?: () => void;
  onAvaliar?: () => void;
  onAcompanhar?: () => void;
  onRatingChange?: (rating: number) => void;
}

export function PedidoCard({
  numero,
  itens,
  data,
  valor,
  status,
  avaliacao = 0,
  textoAvaliacao,
  onRepetir,
  onAvaliar,
  onAcompanhar,
  onRatingChange,
}: PedidoCardProps) {
  return (
    <div className="mt-8 bg-[var(--color-secondary)] p-2 rounded-[10px] w-95 h-auto ">
      <div className="flex justify-center mb-5">
        <h3 className="text-lg font-black">PEDIDO #{numero}</h3>
      </div>
      <div className="items-start pl-2 pr-2">
        <h5 className="text-base font-black ">ITENS:</h5>
        {itens.map((item, idx) => (
          <div className="justify-between flex pt-2" key={idx}>
            <p className="font-regular text-sm text-[var(--color-primary)]">
              {item.quantidade}x {item.nome}
            </p>
            <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
            <p className="font-regular text-sm">{item.detalhe}</p>
          </div>
        ))}
        <h5 className="text-base font-black mt-3">DETALHES:</h5>
        <div className="flex justify-between pt-2">
          <p className=" font-regular text-sm text-[var(--color-primary)]">DATA</p>
          <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
          <p className="font-regular text-sm">{data}</p>
        </div>
        <div className="flex justify-between pt-2">
          <p className=" font-regular text-sm text-[var(--color-primary)]">VALOR</p>
          <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
          <p className="font-black mb-2  text-[var(--color-primary)] bg-white/5 text-sm rounded-2xl w-20 h-5  items-center text-center">
            {valor}
          </p>
        </div>
        {status === "andamento" && (
          <>
            <span className="font-regular text-sm text-[var(--color-primary)] mt-5 ">
              PEDIDO EM ANDAMENTO
            </span>
            <div className="flex mt-7 justify-center">
              <button onClick={onAcompanhar} className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-50 ">
                ACOMPANHAR
              </button>
            </div>
          </>
        )}
        {status === "concluido" && (
          <div className="flex mt-7 justify-around ">
            <button onClick={onAvaliar} className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-30 ">
              AVALIAR
            </button>
            <button onClick={onRepetir} className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-30 ">
              REPETIR
            </button>
          </div>
        )}
        {status === "avaliado" && (
          <>
            <div className="flex justify-between pt-2">
              <p className=" font-regular text-sm text-[var(--color-primary)]">AVALIAÇÃO</p>
              <div>
                <StarRating rating={avaliacao} onRatingChange={onRatingChange} showValue={true} />
              </div>
            </div>
            {textoAvaliacao && (
              <div className="bg-white/5 w-88 text-xs h-25 p-2 mt-2">{textoAvaliacao}</div>
            )}
            <div className="flex mt-7 justify-center ">
              <button onClick={onRepetir} className="font-bold text-lg bg-[var(--color-primary)] cursor-pointer rounded-2xl w-30 ">
                REPETIR
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
