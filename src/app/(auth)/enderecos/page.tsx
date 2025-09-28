'use client'

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

// Form dependecies
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import CepInput from "@/components/ui/CepInput"
import { useEffect } from "react"

const Page = () => {

    const formSchema = z.object({
        street: z.string().min(3, "Digite uma rua válida"),
        district: z.string().min(3, "Digite um bairro válido"),
        number: z.string()
                .min(1, "Informe o número")
                .transform((val) => Number(val))
                .refine((val) => !isNaN(val), { message: "Número inválido" }),
        reference: z.string().optional(),
        name: z.string().min(1, "Adicione um nome ao endereço"),
        cep: z
            .string()
            .min(9, "CEP incompleto")
            .regex(/^\d{5}-\d{3}$/, "CEP inválido"),
    })

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    })

    const cepValue = watch("cep")

    useEffect(() => {
        const fetchAddress = async () => {
        const rawCep = cepValue?.replace(/\D/g, "")

        if (rawCep?.length !== 8) return

        try {
            const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`)
            const data = await response.json()

            if (data.erro) return // CEP inválido

            // Preenche os campos automaticamente
            setValue("street", data.logradouro || "")
            setValue("district", data.bairro || "")
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error)
        }
    }

    fetchAddress()
    }, [cepValue, setValue])

    return(
        <div className="pt-10 px-6">
            <img src="logo.svg" alt="Logo do Brasas" className="w-[60%] mx-auto"/>

            <p className="text-center mt-7 mb-6 text-primary font-bold">
                Finalize informando seu endereço:
            </p>

            <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-6 mb-6">
                <CepInput
                    name="cep"
                    control={control}
                    errors={errors}
                />
    
                <Input 
                    type="text"
                    placeholder="Rua"
                    error={!!errors.street}
                    {...register("street")}
                />
                {errors.street && <p className="text-red-500 text-sm -mt-5">{errors.street.message}</p>}

                <Input 
                    type="text"
                    placeholder="Bairro"
                    error={!!errors.district}
                    {...register("district")}
                />
                {errors.district && <p className="text-red-500 text-sm -mt-5">{errors.district.message}</p>}

                <Input 
                    type="number"
                    placeholder="Número"
                    error={!!errors.number}
                    {...register("number")}
                />
                {errors.number && <p className="text-red-500 text-sm -mt-5">{errors.number.message}</p>}

                <Input 
                    type="text"
                    placeholder="Ponto de referência (opcional)"
                    {...register("reference")}
                />


                <div className="w-full flex flex-col">
                    <h5 className="text-primary font-bold">Dê um nome ao endereço</h5>
                    <Input 
                        type="text"
                        placeholder="Ex: Casa"
                        error={!!errors.name}
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="flex justify-center items-center">
                    <Button label="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Page