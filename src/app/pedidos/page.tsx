"use client";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { PedidoCard } from "@/components/PedidoCard";
import { useEffect, useState } from "react";

interface PedidoItem {
  itemId: string;
  amount: number;
}

interface PedidoApiItem {
  id: string;
  customerId: string;
  userId: string;
  price: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  items?: PedidoItem[];
}

const Page = () => {
  const [pedidos, setPedidos] = useState<PedidoApiItem[]>([]);
  const [itens, setItens] = useState<any[]>([]);
  const clienteId = "bfda807b-83dc-41ec-85e2-745885e3fd19";

  useEffect(() => {
    async function fetchPedidosEItens() {
      try {
        const token =
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3NzU5MTY3NS0zNGJlLTQyOTYtOTMwMi0xZmM4ZTk4NTE0M2IiLCJpYXQiOjE3NTk0NDI1ODV9.UFVXXZ9xyqcnQl92NvG39UW4gXo6POHDnvlGKTaTLoIwvitIWjahZMH5w4GdmsXNcsO4QaJuGE1yZz0M68Uayk6Vt0eyp5BzWEJgWBDZSJe-WJJI-R4dZ6N29met2-cTwVHrCSLOizdUcxkfdWNw20eYmI5WzrdOvfQDg3mzQucNfHIcKz3MbMl0-kudTufxp-umJyHwbprxg3OpGPoufsKIy1saG-OFKyuupqaPZsqNlcVzbCwBrzdvmBPjo_u53fRZoBcYcDNJYYudE3qO9a8v_kdj2BSWthKVtGy2OzKeecEMt0jXBcSdg8YRa-tMT_uzRtepm5xn3J8VnadacQ";
        // Buscar pedidos
        const resPedidos = await fetch(
          `http://localhost:3333/api/v1/orders?status=pendente`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!resPedidos.ok) throw new Error("Erro ao buscar pedidos");
        const dataPedidos = await resPedidos.json();
        setPedidos(Array.isArray(dataPedidos.orders) ? dataPedidos.orders : []);

        // Buscar itens
        const resItens = await fetch(`http://localhost:3333/api/v1/items`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!resItens.ok) throw new Error("Erro ao buscar itens");
        const dataItens = await resItens.json();
        setItens(Array.isArray(dataItens.items) ? dataItens.items : []);
      } catch (e) {
        console.error(e);
      }
    }
    fetchPedidosEItens();
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
          pedidos.map((pedido) => {
            // Depuração: verifique se os itens do pedido e os itens globais estão corretos
            console.log("pedido.items:", pedido.items, "itens:", itens);
            const pedidoItens = Array.isArray(pedido.items)
              ? pedido.items.map((pi) => {
                  const itemDetalhe = itens.find((i) => i.id === pi.itemId);
                  return {
                    nome: itemDetalhe ? itemDetalhe.name : pi.itemId,
                    quantidade: pi.amount ?? 1,
                    detalhe: itemDetalhe ? itemDetalhe.category : undefined,
                  };
                })
              : [];
            return (
              <PedidoCard
                key={pedido.id}
                numero={pedido.id.slice(0, 8)}
                itens={pedidoItens}
                data={
                  pedido.createdAt
                    ? new Date(pedido.createdAt).toLocaleString("pt-BR")
                    : ""
                }
                valor={`R$ ${pedido.price}`}
                status={pedido.status}
                avaliacao={0}
                textoAvaliacao={""}
                onAcompanhar={() => {
                  window.location.href = `/pedidos/acompanhar/${pedido.id}`;
                }}
                onAvaliar={() => {
                  window.location.href = `/pedidos/avaliacao?pedido=${pedido.id}`;
                }}
                onRepetir={() => {
                  alert("Função de repetir pedido em desenvolvimento");
                }}
              />
            );
          })
        )}
      </div>
      <Navbar />
    </div>
  );
};
export default Page;
