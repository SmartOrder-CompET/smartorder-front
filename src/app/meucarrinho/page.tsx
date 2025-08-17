import { Header } from "@/components/Header"
import { ProductCart } from "@/components/ProductCart"
import { Title } from "@/components/Title"
import { Button } from "@/components/ui/Button"
import { products } from "@/data/product"

const page = () => {
    return(
        <div>
            <Header />

            <main className="mx-4">
                <Title text="Meu Carrinho"/>

                <div className="flex flex-col gap-4 overflow-y-auto h-[50vh]">
                    {products.map((product) => (
                        <ProductCart key={product.id} product={product} />
                    ))}
                </div>

                <div className="h-[1px] w-full bg-white my-4"></div>

                <div className="mx-2 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <h6>Subtotal</h6>
                        <div>89 conto</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <h6>Taxa de Entrega</h6>
                        <div>1 conto</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <h6 className="text-lg text-primary">Total</h6>
                        <div className="text-lg">90 conto</div>
                    </div>

                    <div className="flex flex-col justify-center mt-3 w-[60%] gap-3 mx-auto">
                        <Button label="Finalizar Compra"/>

                        <button className="bg-[#181717] text-center font-bold py-1 px-3 rounded-full border border-[#35F300]">
                            Finalizar por whatsapp
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page