import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"

const page = () => {
    return(
        <div className="pt-10 px-6">
            <img src="logo.svg" alt="Logo do Brasas" className="w-[60%] mx-auto"/>

            <p className="text-center mt-7 mb-6 text-primary font-bold">
                Finalize informando seu endereço:
            </p>

            <form className="flex flex-col gap-6 mb-6">
                <Input 
                    type="text"
                    placeholder="Rua"
                />
                <Input 
                    type="number"
                    placeholder="Número"
                />

                <Input 
                    type="text"
                    placeholder="Ponto de referência (opcional)"
                />

                <div className="w-full flex flex-col">
                    <h5 className="text-primary font-bold">Dê um nome ao endereço</h5>
                    <Input 
                        type="text"
                        placeholder="Ex: Casa"
                    />
                </div>

                <div className="flex justify-center items-center">
                    <Link href={'/'}>
                        <Button label="Cadastrar"/>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default page