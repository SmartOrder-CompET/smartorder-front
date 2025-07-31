import { Category } from "@/types/CategoryType"

type Props = {
    data: Category
}

export const CategoryItem = ({ data }: Props) => {
    return(
        <div className="bg-secondary flex items-center gap-3 rounded-full py-1 px-2 hover:bg-primary">
            <div 
                className="bg-[url('/categoria.jpg')] bg-cover bg-center h-8 w-8 rounded-full border-2 border-[#00000038]"
                ></div>

            <h6>{data.name}</h6>
        </div>
    )
}