'use client'

import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title"

const Page = () => {
        
    return (
        <div>
            <Header />

            <main className="mx-4">
                <Title text="Histórico de Pedidos" />

               <div className="flex flex-col gap-4 overflow-y-auto h-[70vh]">
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
