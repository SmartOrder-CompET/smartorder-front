import { categories } from "@/data/category"
import { MenuCategory } from "./MenuCategory"


export const MenuArea = () => {
    return(
        <section>
            {categories.map((category) => (
                <MenuCategory key={category.id} category={category}/>
            ))}
        </section>
    )
}