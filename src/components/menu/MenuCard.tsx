import { ProductAPI } from "@/types/Product";
import { formatPrice } from "@/utils/formatters";
import Link from "next/link";

type Props = {
  data: ProductAPI;
};

export const MenuCard = ({ data }: Props) => {
  return (
    <Link href={`/produto/${data.id}`}>
      <div className="bg-secondary rounded-md h-full shadow-md transition-transform hover:scale-[1.02] md:hover:shadow-lg">
        <div
          className="bg-cover bg-center h-[150px] md:h-[180px] w-full rounded-t-md"
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>

        <div className="flex flex-col gap-2 p-4 md:p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm md:text-base flex-1 mr-2">{data.name}</h3>
            <h5 className="text-primary bg-[#3c3c3c] p-1 px-2 rounded-full font-bold text-[11px] md:text-xs whitespace-nowrap">
              {formatPrice(+data.unitPrice)}
            </h5>
          </div>

          <p className="text-[#e3e1e1] text-xs md:text-sm line-clamp-2 mt-1">
            {data.ingredients}
          </p>
        </div>
      </div>
    </Link>
  );
};
