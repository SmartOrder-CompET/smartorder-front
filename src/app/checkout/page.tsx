"use client";

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatters";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
    const { state } = useCart();
    const router = useRouter();

    const [opcao, setOpcao] = useState("entrega");
    const [selected, setSelected] = useState("dinheiro");

    // useEffect(() => {
    //     if (state.items.length === 0) {
    //         router.replace('/'); 
    //     }
    // }, [state.items, router]);
    const subtotal = state.items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);


    return (
        <div>
            <Header />

            <main className="mx-4 mt-8">
                <h1 className="text-xl font-bold mb-4">Confirme seu pedido</h1>
                {/* forma de retirada */}
                <div className="mb-4">
                    <label htmlFor="retirada" className="block font-semibold mb-1">
                        Forma de retirada
                    </label>
                    <select
                        id="retirada"
                        value={opcao}
                        onChange={(e) => setOpcao(e.target.value)}
                        className="w-full rounded-lg border border-primary bg-secondary text-white px-5 py-3 focus:outline-none"
                    >
                        <option value="entrega">Entrega</option>
                        <option value="retirar">Retirar no local</option>
                    </select>
                </div>
                {/* forma de pagamento */}
                <div className="flex flex-col gap-3 mb-4">
                    <h2 className="font-semibold mb-2">Selecione a forma de pagamento</h2>

                    <div className="flex flex-col gap-2">
                        {["dinheiro", "cartao", "pix"].map((option) => (
                            <label
                                key={option}
                                className={`flex flex-row-reverse justify-between items-center gap-2 p-3 rounded-lg border-3 cursor-pointer transition
                                    ${selected === option ? "border-primary " : "border-gray-500"}
                                `}
                            >
                            <input
                                type="radio"
                                name="pagamento"
                                value={option}
                                checked={selected === option}
                                onChange={() => setSelected(option)}
                                className="
                                    w-5 h-5 rounded-full border-2
                                    border-gray-400 
                                    checked:border-primary checkd:bg-transparent
                                    accent-primary cursor-pointer
                                "
                            />
                            <span className="capitalize">{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h6 className="mb-4 text-lg">Resumo do Pedido</h6>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <h6>Subtotal</h6>
                            <div>{formatPrice(subtotal)}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <h6>Taxa de Entrega</h6>
                            <div>{formatPrice(0)}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <h6 className="text-lg text-primary">Total</h6>
                            <div className="text-lg">{formatPrice(subtotal)}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center mt-5">
                    <Button label="Confirmar compra"/>
                </div>
            </main>
        </div>
    );
}
