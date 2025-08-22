'use client'

import { useState } from 'react'
import { Home, Phone, List } from 'lucide-react' // substitua pelos ícones que quiser

export const Navbar = () => {
  const [active, setActive] = useState('cardapio')

  const tabs = [
    { name: 'cardapio', icon: Home },
    { name: 'Whatsapp', icon: Phone },
    { name: 'pedidos', icon: List },
  ]

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#0E0701] text-white flex justify-around items-center h-20 border-t border-[#222] z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = active === tab.name
        return (
          <button
            key={tab.name}
            onClick={() => setActive(tab.name)}
            className="flex flex-col items-center justify-center relative focus:outline-none"
          >
            <Icon size={24} className={`${isActive ? 'text-[#D17719]' : 'text-gray-400'}`} />
            <span className={`text-xs mt-1 ${isActive ? 'text-[#D17719]' : 'text-gray-400'}`}>
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
            </span>

            {/* Indicador laranja */}
            {isActive && (
              <span className="absolute -bottom-1 w-6 h-1 bg-[#D17719] rounded-full"></span>
            )}
          </button>
        )
      })}
    </nav>
  )
}


