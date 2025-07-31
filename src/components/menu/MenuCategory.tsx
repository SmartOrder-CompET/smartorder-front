'use client'

import { Category } from "@/types/CategoryType"
import { products } from "@/data/product"
import { SectionTitle } from "../SectionTitle"
import { MenuCard } from "./MenuCard"

type Props = {
    category: Category
}

export const MenuCategory = ({ category }: Props) => {

    const onClick = () => {
        console.log('clicou')
    }

    const productsFiltereds = products.filter(product => product.categoryId === category.id)

    return(
        <div className="px-6">
            <SectionTitle
                title={category.name}
                onClick={onClick}
            />

            <div className="grid grid-cols-2 gap-3">
                {productsFiltereds.map((product) => (
                    <MenuCard key={product.id} data={product}/>
                ))}
            </div>
        </div>
    )
}