

import { Button } from "@/components/ui/Button";
import { CategoryProducts } from "@/components/category/CategoryProducts";
import { MenuArea } from "@/components/menu/MenuArea";
import { QuantityAction } from "@/components/ui/QuantityAction";
import { Input } from "@/components/ui/Input";

const page = () => {


    return(
        <div className="pb-6">
            <CategoryProducts />

            <MenuArea />

            <Button label="Finalizar"/>

            
            <QuantityAction />
            
            <div className="m-3">
                <Input 
                    placeholder="Nome"
                    type="text"
                />
            </div>
            <div className="m-3">
                <Input 
                    placeholder="Número"
                    type="number"
                />
            </div>
        </div>
    )
}

export default page;