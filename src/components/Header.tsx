import { User, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
    return(
        <header className="flex h-14 md:h-16 w-full justify-between items-center px-4 md:px-8 py-2">
            <div className="flex items-center">
                <a
                    href="/"
                    className="p-2 hover:bg-[#222222] rounded-full transition-colors"
                >
                <User size={20} className="md:w-6 md:h-6" />
                </a>
            </div>

            <div className="flex items-center">
                <img
                    src="/logo.svg"
                    alt="Logotipo do Brasa's"
                    className="h-14 md:h-16"
                />
            </div>

            <Link href={'/meucarrinho'} className="flex items-center">
                <ShoppingCart size={20} className="md:w-6 md:h-6" />
            </Link>
        </header>
    )
}