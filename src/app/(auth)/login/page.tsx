'use client'

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"
import Cookies from 'js-cookie';

// Forms dependecies
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from "@/components/ui/PhoneInput"
import { validarCliet } from "@/services/clients"
import { useRouter } from "next/navigation"


const Page = () => {

    const router = useRouter()

    const formSchema = z.object({
        name: z.string().min(3, "O nome é obrigatório"),
        tel: z
            .string()
            .min(14, "Telefone incompleto")
            .regex(/^\(\d{2}\) \d{4}-\d{4}$/, "Telefone inválido")
    })

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    type FormData = z.infer<typeof formSchema>

    const login = async (data: FormData) => {
        const unmaskedTel = data.tel.replace(/\D/g, "")
        const response = await validarCliet(unmaskedTel)

        if(response){
            Cookies.set('accessToken', response.data.acessToken, {
                expires: 1,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
            });
            //@ts-ignore
            localStorage.setItem('id', response.data.user.id as string)
            router.push('/checkout')
        }else {
            alert('Erro, cliente não existe!')
        }
    }

    return(
        <div className="pt-10 px-6">
            <img src="logo.svg" alt="Logo do Brasas" className="w-[80%] mx-auto"/>

            <p className="text-center mt-7 mb-6 text-primary">
                Peça em poucos segundos! Só precisamos do seu número para começar!
            </p>

            <form onSubmit={handleSubmit(login)} className="flex flex-col gap-6">
                <Input 
                    type="text"
                    placeholder="Nome"
                    error={!!errors.name}
                    {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm -mt-5">{errors.name.message}</p>}

                <PhoneInput
                    name="tel"
                    control={control}
                    errors={errors}
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

export default Page