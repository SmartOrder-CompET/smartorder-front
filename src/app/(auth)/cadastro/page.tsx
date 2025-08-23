'use client'

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"

// Form dependecies
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from "@/components/ui/PhoneInput"

const Page = () => {

    const formSchema = z.object({
        name: z.string().min(3, "O nome é obrigatório"),
        email: z.email('Digite um email válido'),
        tel: z
            .string()
            .min(15, "Telefone incompleto")
            .regex(/^\(\d{2}\) 9 \d{4}-\d{4}$/, "Telefone inválido")
    })

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    return(
        <div className="pt-10 px-6">
            <img src="logo.svg" alt="Logo do Brasas" className="w-[60%] mx-auto"/>

            <p className="text-center mt-7 mb-6 text-primary font-bold">
                REALIZE SEU CADASTRO EM POUCOS PASSOS:
            </p>

            <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-6 mb-6">
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

export default Page