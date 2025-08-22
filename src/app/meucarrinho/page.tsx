'use client'

import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar";
import { ProductCart } from "@/components/ProductCart"
import { Title } from "@/components/Title"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/contexts/CartContext"
import { formatPrice } from "@/utils/formatters"

const page = () => {

    const { state, dispatch } = useCart();

    const message = [
      "Olá, quero fazer um pedido e esses são os itens:",
      ...state.items.map(item => `${item.quantity}x ${item.product.name}`)
    ].join("\n");

    let phoneNumber = '558194020566'

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    const subtotal = state.items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    if(state.items.length === 0){
        return(
            <div className="h-screen">
                <Header />

                <main className="w-full h-full flex justify-center items-center">
                    Carrinho vazio!
                </main>
                <Navbar />
            </div>
        )
    }

    return(
        <div>
            <Header />

            <main className="mx-4">
                <Title text="Meu Carrinho"/>

                <div className="flex flex-col gap-4 overflow-y-auto h-[50vh]">
                    {state.items.map((item, index) => (
                        <ProductCart key={`${item.product.id}-${index}`} cartItem={item} />
                    ))}
                </div>

                <div className="h-[1px] w-full bg-white my-4"></div>

                <div className="mx-2 flex flex-col gap-1">
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

                    <div className="flex flex-col justify-center mt-3 w-[60%] gap-3 mx-auto">
                        <Button label="Finalizar Compra"/>

                        <button 
                            className="bg-[#181717] text-center font-bold py-1 px-3 rounded-full border border-[#35F300]"
                            onClick={handleClick}
                        >
                            Finalizar por whatsapp
                        </button>
                    </div>                    
                </div>
            </main>
            <Navbar />
        </div>
    )
}

export default page