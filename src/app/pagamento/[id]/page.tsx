"use client";

import { Title } from "@/components/Title";
import { formatPrice } from "@/utils/formatters";
import React, { useEffect, useState } from "react";

export default function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [payment, setPayment] = useState<any>(null);

  useEffect(() => {
    async function fetchPayment() {
      const res = await fetch(`/api/get-payment?id=${id}`);
      const data = await res.json();
      setPayment(data);
    }

    fetchPayment();

    // polling a cada 5s
    const interval = setInterval(fetchPayment, 5000);
    return () => clearInterval(interval);
  }, [id]);

  if (!payment) return <p>Carregando...</p>;

  return (
    <div className="flex flex-col items-center justify-center p-4 mx-4">
      <Title text="Pagamento via pix"/>

      <img
        src={`data:image/png;base64,${payment.point_of_interaction.transaction_data.qr_code_base64}`}
        alt="QR Code Pix"
        className="my-4"
      />

      <p>Valor Total: <span className="text-primary">{formatPrice(payment.transaction_amount)}</span></p>

      <p className=" p-2 border rounded bg-[#222]">
        {payment.point_of_interaction.transaction_data.qr_code}
      </p>

      <p className="mt-4">
        Status: <b>{payment.status}</b>
      </p>
    </div>
  );
}
