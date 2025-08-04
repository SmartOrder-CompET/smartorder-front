import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"

const page = () => {
    return(
        <div className="pt-10 px-6">
            <img src="logo.svg" alt="Logo do Brasas" className="w-[60%] mx-auto"/>

            <p className="text-center mt-7 mb-6 text-primary font-bold">
                REALIZE SEU CADASTRO EM POUCOS PASSOS:
            </p>

            <form className="flex flex-col gap-6 mb-6">
                <Input 
                    type="text"
                    placeholder="Nome"
                />
                <Input 
                    type="text"
                    placeholder="Email: Michele@gmail.com"
                />

                <Input 
                    type="number"
                    placeholder="Telefone: (81) 9 9999-9999"
                />

                <div className="flex justify-center items-center">
                    <Link href={'/enderecos'}>
                        <Button label="Enviar SMS"/>
                    </Link>
                </div>
            </form>

            <p className="text-center">
                Já tem uma conta?
                <Link href={'/login'} className="text-primary pl-1 font-bold">Entrar</Link>
            </p>
        </div>
    )
}

export default page