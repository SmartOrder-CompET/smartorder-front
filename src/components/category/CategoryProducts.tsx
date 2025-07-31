'use client'

import { categories } from "@/data/category"
import { SectionTitle } from "../SectionTitle"
import { CategoryItem } from "./CategoryItem"


export const CategoryProducts = () => {

    const onClick = () => {
        console.log('clicou')
    }

    return(
        <div className="px-6">
            <SectionTitle
                title="Selecione a categoria"
                onClick={onClick}
            />

            <div className="flex gap-3">
                {categories.map((category) => (
                    <CategoryItem key={category.id} data={category}/>
                ))}
            </div>
        </div>
    )
}