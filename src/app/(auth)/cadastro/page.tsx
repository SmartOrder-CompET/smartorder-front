'use client'

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"

// Form dependecies
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from "@/components/ui/PhoneInput"
import { createClient } from "@/services/clients"
import { useRouter } from "next/navigation"

const Page = () => {

    const router = useRouter()

    const formSchema = z.object({
        name: z.string().min(3, "O nome é obrigatório"),
        email: z.email('Digite um email válido'),
        tel: z
            .string()
            .min(15, "Telefone incompleto")
            .regex(/^\(\d{2}\) 9 \d{4}-\d{4}$/, "Telefone inválido")
    })

    type FormData = z.infer<typeof formSchema>

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    const registerClient = async (data: FormData) => {
        try {
            const response = await createClient(data.name, data.tel)

            console.log("Usuário criado com sucesso:", response?.data)

            router.push("/login")
        } catch (error: any) {
            console.error("Erro ao criar usuário:", error?.response?.data || error.message)
        }


    }

    return(
        <div className="pt-10 px-6">
            <img src="logo.svg" alt="Logo do Brasas" className="w-[60%] mx-auto"/>

            <p className="text-center mt-7 mb-6 text-primary font-bold">
                REALIZE SEU CADASTRO EM POUCOS PASSOS:
            </p>

            <form onSubmit={handleSubmit(registerClient)} className="flex flex-col gap-6 mb-6">
                <Input 
                    type="text"
                    placeholder="Nome"
                    {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm -mt-5">{errors.name.message}</p>}

                <Input 
                    type="text"
                    placeholder="Email: Michele@gmail.com"
                    {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm -mt-5">{errors.email.message}</p>}

                <PhoneInput
                    name="tel"
                    control={control}
                    errors={errors}
                />

                <div className="flex justify-center items-center">
                    
                    <Button label="Enviar SMS"/>
                    
                </div>
            </form>

            <p className="text-center">
                Já tem uma conta?
                <Link href={'/login'} className="text-primary pl-1 font-bold">Entrar</Link>
            </p>
        </div>
    )
}

export default Page