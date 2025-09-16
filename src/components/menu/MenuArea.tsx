import { MenuCategory } from "./MenuCategory"
import { getCardapio } from "@/services/cardapio";
import { useQuery } from "@tanstack/react-query";

export const MenuArea = () => {

    const { data: cardapio, isLoading, error } = useQuery({ 
        queryKey: ["cardapio"], 
        queryFn: getCardapio,
        staleTime: 100000
    })

    return(
        <section>
            {cardapio?.secoes.map((secao) => (
                <MenuCategory key={secao.id} secao={secao}/>
            ))}
        </section>
    )
}