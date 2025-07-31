'use client'

import { useState } from "react"
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";

export const QuantityAction = () => {

    const [quantity, setQuantity] = useState(2)

    const minusQt = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="flex justify-center items-center">
            <span className="bg-secondary p-1 rounded-full flex items-center gap-3">
                <button
                    className="bg-white rounded-full p-2 text-black cursor-pointer hover:opacity-75"
                    onClick={minusQt}
                >
                    {quantity === 1 && <CiTrash />}
                    {quantity > 1 && <LuMinus />}
                </button>
                <h6>{quantity}</h6>
                <button
                    className="bg-primary rounded-full p-2 cursor-pointer hover:opacity-75"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    <FiPlus />
                </button>
            </span>
        </div>
    )
}