'use client'

import { useCart } from '@/contexts/CartContext'
import { User, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const path = usePathname()

    const { state } = useCart()

    return (
        <>
            <header className="fixed top-0 left-0 z-50 flex h-18 w-full justify-between items-center px-4 md:px-8 py-2 bg-[#100A06] ">
                <div className="flex items-center">
                    <a
                        href="/"
                        className="p-3 hover:bg-[#222222] rounded-full transition-colors"
                    >
                        <User size={20} className="md:w-6 md:h-6" />
                    </a>
                </div>

                <Link href={'/'} className="flex items-center mt-2">
                    <img
                        src="/logo.svg"
                        alt="Logotipo do Brasa's"
                        className="h-12"
                    />
                </Link>

                <Link
                    href={path === '/meucarrinho' ? '/' : '/meucarrinho'}
                    className={`flex items-center p-3 rounded-full relative ${path === '/meucarrinho' ? 'bg-primary' : 'bg-transparent'}`}
                >
                    <ShoppingCart size={20} />
                    {state.items.length > 0 && path !== '/meucarrinho' && (
                        <div className="bg-primary flex justify-center items-center rounded-full w-5 h-5 absolute -right-1 -top-1">
                            {state.items.length}
                        </div>
                    )}
                </Link>
            </header>
        </>
    )
}
