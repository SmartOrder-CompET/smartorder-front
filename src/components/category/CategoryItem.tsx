"use client"

import { Category } from "@/types/CategoryType"
import Link from "next/link"

type Props = {
  data: Category
}

export const CategoryItem = ({ data }: Props) => {
  return (
    <Link href={`/categories/${data.id}`}>
      <div className="bg-secondary flex items-center gap-3 rounded-full py-1 px-2 md:py-2 md:px-4 hover:bg-primary transition-all hover:scale-105 cursor-pointer">
        <div
          className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-[#00000038] bg-cover bg-center"
          style={{ backgroundImage: `url(${data.img})` }}
        ></div>

        <h6 className="text-sm md:text-base">{data.name}</h6>
      </div>
    </Link>
  )
}