import { Product } from "@/types/Product"
import { QuantityAction } from "./ui/QuantityAction"
import { formatPrice } from "@/utils/formatters"

type Props = {
    product: Product
}

export const ProductCart = ({ product }: Props) => {
    return(
        <div className="bg-secondary px-4 py-3 flex justify-between min-w-[300px]">
            <div className="flex flex-col items-start max-w-32">
                <h5 className="text-md text-center">{product.name}</h5>
                {/* <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-[100px] w-[100px] rounded-lg"
                /> */}
                <div className="w-32 h-22 overflow-hidden rounded-md">
                    <img src={product.image} alt="Imagem" className="object-cover w-full h-full" />
                </div>
            </div>

            <div className="w-[1px]  bg-white"></div>

            <div className="flex flex-col items-center justify-between">
                <QuantityAction />

                <div className="text-[#D09D76] text-xs">
                    Ponto da carne: <span className="text-white">dourado</span>
                </div>

                <div className="bg-[#181717] p-2 rounded-full text-primary text-sm">
                    {formatPrice(product.price)}
                </div>
            </div>
        </div>
    )
}