'use client'

import { User, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const path = usePathname()

    return(
        <header className="flex h-16 w-full justify-between items-center px-4 md:px-8 py-2">
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
                    className="h-16"
                />
            </Link>

            <Link 
                href={path === '/meucarrinho' ? '/' : '/meucarrinho'} 
                className={`flex items-center p-3 rounded-full ${path === '/meucarrinho' ? 'bg-primary' : 'bg-transparent'}`} 
            >
                <ShoppingCart size={20}/>
            </Link>
        </header>
    )
}