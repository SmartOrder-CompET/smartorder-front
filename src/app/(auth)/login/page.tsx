import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"

const page = () => {
    return(
        <div className="pt-10 px-6">
            <img src="logo.svg" alt="Logo do Brasas" className="w-[80%] mx-auto"/>

            <p className="text-center mt-7 mb-6 ">
                Peça em poucos segundos! Só precisamos do seu número para começar!
            </p>

            <form className="flex flex-col gap-6">
                <Input 
                    type="text"
                    placeholder="Nome"
                />

                <Input 
                    type="number"
                    placeholder="Telefone: (81) 9 9999-9999"
                />

                <div className="flex justify-center items-center">
                    <Button label="Entrar"/>
                </div>
            </form>

            <div className="text-center my-3">ou</div>

            
            <div className="flex justify-center items-center mb-6">
                <button className="border border-primary px-4 py-2 rounded-full flex items-center gap-2 font-bold">
                    <img src="google-icon.svg" alt="logo do google" />
                    Entrar com google
                </button>
            </div>
            

            <p className="text-center">
                Não tem uma conta?
                <Link href={'/cadastro'} className="text-primary pl-1 font-bold">Cadastre-se</Link>
            </p>
        </div>
    )
}

export default page