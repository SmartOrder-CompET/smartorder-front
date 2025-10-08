"use client";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { PedidoCard } from "@/components/PedidoCard";
import { Title } from "@/components/Title";
import { getOrder } from "@/services/orders";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const clienteId = "437efe9b-3950-43d4-844c-169b1c43d43c";

  const { data: orders, isLoading, error } = useQuery({ 
      queryKey: ["pedido"], 
      queryFn: () => getOrder(clienteId),
      staleTime: 100000
  })

  return (
    <div className="max-w-md w-full md:max-w-3xl lg:max-w-5xl md:mx-auto min-h-screen">
      <Header />
      <div className="flex h-full items-center justify-center">
        <Title text="Meus Pedidos"/>
      </div>
      <div className="flex flex-col items-center align-center justify-center">
        {orders?.length === 0 && <p>Você não tem pedidos!</p>}

        {orders && orders.map((order) => (
          <PedidoCard key={order.id} data={order}/>
        ))}
      </div>

      <Navbar />
    </div>
  );
};
export default Page;