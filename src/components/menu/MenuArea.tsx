import { MenuCategory } from "./MenuCategory"
import { getCardapio } from "@/services/cardapio";
import { useQuery } from "@tanstack/react-query";
import { MenuCard } from "./MenuCard";

type Props = {
  searchTerm?: string;
  categoryId?: number;
};

export const MenuArea = ({ searchTerm, categoryId }: Props) => {

    const { data: cardapio, isLoading, error } = useQuery({ 
        queryKey: ["cardapio"], 
        queryFn: getCardapio,
        staleTime: 100000
    })

    const secao = cardapio?.secoes
    const search = searchTerm as string

    const categoriesToRender = secao?.filter((cat) => (categoryId ? cat.id === String(categoryId) : true))
    .map((category) => ({
      ...category,
      products: category.produtos.filter(
        (p) =>
          p.produto.id === category.id &&
          p.produto.nome.toLowerCase().includes(search.toLowerCase())
      ),
    }));

    return(
        <section>
            {/* {secao?.map((secao) => (
                <MenuCategory key={secao.id} secao={secao}/>
            ))} */}

            {categoriesToRender?.map((category) => category.produtos.length > 0 &&
                (categoryId ? (
                    <div key={category.id} className="space-y-4">
                        <h2 className="text-xl font-bold mb-4">{category.nome}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {category.produtos.map((product) => (
                                <MenuCard key={product.produto.id} data={product.produto} />
                            ))}
                        </div>
                    </div>
                ): (
                    <MenuCategory key={category.id} secao={category} />
                ))
            )}
        </section>
    )
}