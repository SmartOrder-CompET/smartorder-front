import { Product } from "@/types/Product"
import { formatPrice } from "@/utils/formatters"

type Props = {
    data: Product
}

export const MenuCard = ({ data }: Props) => {
    return(
        <div className="bg-secondary mb-2 rounded-md">
            <div className={` bg-cover bg-center h-[100px] sm:h-[200px] md-[300px] w-full rounded-t-md`}
                style={{ backgroundImage: `url(${data.image})` }}
            ></div>


            <div className="flex flex-col gap-2 p-3">
                <div className="flex items-center justify-between">
                    <h3 className=" font-bold text-xs">{data.name}</h3>
                    <h5 className="text-primary bg-[#3c3c3c] p-1 rounded-full font-bold text-[10px]">
                        {formatPrice(data.price)}
                    </h5>
                </div>

                <p className="text-[#e3e1e1] text-xs">{data.ingredients}</p>
            </div>
        </div>
    )
}