

import { Button } from "@/components/ui/Button";
import { CategoryProducts } from "@/components/category/CategoryProducts";
import { MenuArea } from "@/components/menu/MenuArea";
import { QuantityAction } from "@/components/ui/QuantityAction";

const page = () => {


    return(
        <div className="pb-6">
            <CategoryProducts />

            <MenuArea />

            <Button label="Finalizar"/>

            
            <QuantityAction />
            
        </div>
    )
}

export default page;