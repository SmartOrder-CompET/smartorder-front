import React from "react";
import StarRating from "@/components/Rating";

interface PedidoItem {
  nome: string;
  quantidade: number;
  detalhe?: string;
}

interface PedidoCardProps {
  numero: string;
  itens: PedidoItem[];
  data: string;
  valor: string;
  status: string;
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
        {(!itens || itens.length === 0) && (
          <span className="text-gray-400">Nenhum item neste pedido.</span>
        )}
        {(Array.isArray(itens) ? itens : []).map((item, idx) => (
          <div className="justify-between flex pt-2" key={idx}>
            <p className="font-regular text-sm text-[var(--color-primary)]">
              {item.quantidade}x {item.nome}
            </p>
            <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
            <p className="font-regular text-sm">{item.detalhe}</p>
          </div>
        ))}
        <div className="mt-3  rounded">
          <h5 className="text-base font-black mb-2">DETALHES:</h5>
          <div className="flex justify-between pt-2">
            <p className=" font-regular text-sm text-[var(--color-primary)]">
              DATA
            </p>
            <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
            <p className="font-regular text-sm">{data}</p>
          </div>
          <div className="flex justify-between pt-2">
            <p className=" font-regular text-sm text-[var(--color-primary)]">
              VALOR
            </p>
            <div className="flex-1 border-b border-[var(--color-primary)] border-dotted justify-center h-3.5 mx-2 "></div>
            <p className="font-black mb-2  text-[var(--color-primary)] bg-white/5 text-sm rounded-2xl w-20 h-5  items-center text-center">
              {valor}
            </p>
          </div>
        </div>
        {/* Sempre exibe o status do pedido */}
        <div className="mt-5 flex flex-col gap-2">
          <span className="font-regular text-sm text-[var(--color-primary)]">
            STATUS {status.toUpperCase()}
          </span>
          {status === "em_andamento" && onAcompanhar && (
            <button
              className="mt-2 px-4 py-1 bg-[var(--color-primary)] text-white rounded hover:bg-opacity-80 transition"
              onClick={onAcompanhar}
            >
              Acompanhar pedido
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
