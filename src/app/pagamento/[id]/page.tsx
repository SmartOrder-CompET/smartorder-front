"use client";

import { Title } from "@/components/Title";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/utils/formatters";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

import React, { useEffect, useState } from "react";
import { createOrder } from "@/services/orders";
import { useCart } from "@/contexts/CartContext";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [payment, setPayment] = useState<any>(null);
    const [copied, setCopied] = useState(false);
    const [isPaid, setIsPaid] = useState(false);

    const router = useRouter();
    const { state } = useCart();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(
                payment.point_of_interaction.transaction_data.qr_code
            );
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Erro ao copiar o texto:", err);
        }
    };

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


    const handleClick = async () => {
        const CustomerId = localStorage.getItem('token')

        if(!CustomerId) return

        try{
            const formattedItems = state.items.map((item) => ({
                itemId: item.product.id,
                amount: item.quantity
            }));
            const response = await createOrder(CustomerId as string, formattedItems)
            console.log(response)
            console.log(CustomerId)
            console.log(formattedItems)
            setIsPaid(true)
        } catch (error: any) {
            alert("Erro no Servidor")
        }
    }


    if (!payment) return <p>Carregando...</p>;

    if (isPaid === true) {
        return (
            <div className="min-h-screen flex justify-center items-center flex-col">
                <div className="bg-primary h-22 w-22 flex justify-center items-center rounded-full">
                    <Check className="text-white text-3xl" />
                </div>

                <h2
                    className="text-2xl text-center mt-3"
                    style={{ fontFamily: "primary" }}
                >
                    Pagamento <br /> Confirmado!
                </h2>

                <div className="mt-5 mb-14 text-center">
                    <p className="text-xl text-primary">Ter, 15 Julho, 20:30 PM</p>
                    <p className="text-md">ID do pedido: #131213</p>
                </div>

                <div className="flex flex-col gap-3">
                    <Button
                    label="Acompanhar pedido"
                    big
                    onClick={() => router.push("/pedidos/acompanhar")}
                    />
                    <button className="bg-[#181717] text-center font-bold px-10 py-4 rounded-md border border-[#35F300]">
                    Acompanhar por whatsapp
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 mx-4">
            <Title text="Pagamento via pix" />

            <img
            src={`data:image/png;base64,${payment.point_of_interaction.transaction_data.qr_code_base64}`}
            alt="QR Code Pix"
            className="my-4"
            />

            <p>
            Valor Total:{" "}
            <span className="text-primary">
                {formatPrice(payment.transaction_amount)}
            </span>
            </p>

            <p
            className="mt-10 p-2 border border-primary rounded bg-[#222]"
            onClick={handleCopy}
            >
            {copied ? "Copiado!" : "Copiar Código Pix"}
            </p>

            {payment.status}

            <Button label="Confirmar Compra" onClick={handleClick} />
        </div>
    );
}
