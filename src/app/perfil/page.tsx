'use client'

import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title"

const Page = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])
        
    return (
        <div>
            <Header />

            <main className="mx-4">
                <Title text="Meu Perfil" />

                <div
                    className={`flex flex-col gap-4 overflow-y-auto h-[70vh] transform transition-all duration-700 ease-out
                        ${show ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"}`}
                >
                    <p className="text-center text-gray-400">
                        em construção...
                    </p>
                </div>
            </main>
            <Navbar />
        </div>
    )
}

export default Page
