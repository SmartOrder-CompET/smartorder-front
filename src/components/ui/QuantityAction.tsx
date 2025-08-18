'use client'

import { useState } from "react"
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";

type Props = {
    value: number,
    setValue: (a: number) => void,
    inCart?: boolean
}

export const QuantityAction = ({ value, setValue, inCart }: Props) => {

    const minusQt = () => {
        if(value > 1 && !inCart){
            setValue(value - 1)
        } else if (inCart){
            setValue(value - 1)
        }
    }

    

    return(
        <div className="flex justify-center items-center">
            <span className="bg-secondary p-1 rounded-full flex items-center gap-3">
                <button
                    className="bg-white rounded-full p-2 text-black cursor-pointer hover:opacity-75"
                    onClick={minusQt}
                >
                    {value === 1 && inCart && <CiTrash />}
                    {value > 1 && inCart && <LuMinus />}
                    {value > 0 && !inCart && <LuMinus />}
                </button>
                <h6>{value}</h6>
                <button
                    className="bg-primary rounded-full p-2 cursor-pointer hover:opacity-75"
                    onClick={() => setValue(value + 1)}
                >
                    <FiPlus />
                </button>
            </span>
        </div>
    )
}