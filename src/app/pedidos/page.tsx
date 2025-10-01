"use client";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { PedidoCard, PedidoStatus } from "@/components/PedidoCard";
import { useEffect, useState } from "react";
import Link from "next/link";

interface PedidoApiItem {
  id: string;
  numero: string;
  itens: { nome: string; quantidade: number; detalhe?: string }[];
  data: string;
  valor: string;
  status: PedidoStatus;
  avaliacao?: number;
  textoAvaliacao?: string;
}

const Page = () => {
  const [pedidos, setPedidos] = useState<PedidoApiItem[]>([]);
  // TODO: trocar pelo id do cliente autenticado
  const clienteId = "bfda807b-83dc-41ec-85e2-745885e3fd19";

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `http://localhost:3333/api/v1/orders?status=pendente`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) throw new Error("Erro ao buscar pedidos");
        const data = await res.json();
        setPedidos(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchPedidos();
  }, [clienteId]);

  return (
    <div className="max-w-md w-full md:max-w-3xl lg:max-w-5xl md:mx-auto min-h-screen">
      <Header />
      <div className="flex h-full items-center justify-center">
        <h1 className="text-xl font-bold mt-8 text-[var(--color-primary)]">
          MEUS PEDIDOS
        </h1>
      </div>
      <div className="flex flex-col items-center align-center justify-center">
        {pedidos.length === 0 ? (
          <span className="mt-10 text-gray-400">Nenhum pedido encontrado.</span>
        ) : (
          pedidos.map((pedido) => (
            <PedidoCard
              key={pedido.id}
              numero={pedido.numero}
              itens={pedido.itens}
              data={pedido.data}
              valor={pedido.valor}
              status={pedido.status}
              avaliacao={pedido.avaliacao}
              textoAvaliacao={pedido.textoAvaliacao}
              onAcompanhar={() => {
                // Exemplo: redirecionar para acompanhamento
                window.location.href = `/pedidos/acompanhar/${pedido.id}`;
              }}
              onAvaliar={() => {
                window.location.href = `/pedidos/avaliacao?pedido=${pedido.id}`;
              }}
              onRepetir={() => {
                // Exemplo: lógica para repetir pedido
                alert("Função de repetir pedido em desenvolvimento");
              }}
            />
          ))
        )}
      </div>
      <Navbar />
    </div>
  );
};
export default Page;
