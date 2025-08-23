'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export const Navbar = () => {
  const path = usePathname()
  const { state } = useCart() 

  
  const message = state.items.length > 0
    ? [
        "Olá, quero fazer um pedido e esses são os itens:",
        ...state.items.map(item => `${item.quantity}x ${item.product.name}`)
      ].join("\n")
    : "Olá, quero fazer um pedido."

  const phoneNumber = '558194020566'
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  const tabs = [
    { name: 'cardapio', src: '/cardapio.svg', href: '/' },
    { name: 'whatsapp', src: '/whatsapp.svg', href: null },
    { name: 'pedidos', src: '/pedidos.svg', href: '/pedidos' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#181411] text-white flex justify-around items-center h-20 border-t border-[#222] z-50">
      {tabs.map((tab) => {
        const isActive = path === tab.href 

        const content = (
          <>
            <div className={`${tab.name === 'whatsapp' ? 'relative -top-8' : ''}`}>
              <img
                src={tab.src}
                alt={tab.name}
                className={`${
                  tab.name === 'whatsapp' ? 'w-16 h-16 opacity-100' : 'w-9 h-9 opacity-100'
                } ${isActive ? 'filter saturate-200 brightness-200' : 'opacity-50'}`}
              />
            </div>

            <span
              className={`text-xs ${
                isActive ? 'text-[#C8C8C8]' : 'text-[#C8C8C8] opacity-50'
              } ${tab.name === 'whatsapp' ? '-mt-6' : 'mt-1'}`}
            >
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
            </span>

            {isActive && (
              <span className="absolute -bottom-3 w-10 h-1 bg-[#D17719] rounded-full"></span>
            )}
          </>
        )

        if (tab.href) {
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className="flex flex-col items-center justify-center relative focus:outline-none"
            >
              {content}
            </Link>
          )
        } else {
          return (
            <button
              key={tab.name}
              onClick={() => window.open(whatsappUrl, '_blank')} 
              className="flex flex-col items-center justify-center relative focus:outline-none"
            >
              {content}
            </button>
          )
        }
      })}
    </nav>
  )
}
