import { Category } from "@/types/CategoryType"

type Props = {
    data: Category
}

export const CategoryItem = ({ data }: Props) => {
    return(
        <div className="bg-secondary flex items-center gap-3 rounded-full py-1 px-2 md:py-2 md:px-4 hover:bg-primary transition-all hover:scale-105">
            <div 
                className="bg-[url('/categoria.jpg')] bg-cover bg-center h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-[#00000038]"
                ></div>

            <h6 className="text-sm md:text-base">{data.name}</h6>
        </div>
    )
}