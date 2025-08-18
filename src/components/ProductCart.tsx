"use client";

import { QuantityAction } from "./ui/QuantityAction";
import { formatPrice } from "@/utils/formatters";
import { CartItem } from "@/types/CartItem";
import { useCart } from "@/contexts/CartContext";

type Props = {
  cartItem: CartItem;
};

export const ProductCart = ({ cartItem }: Props) => {
    const { dispatch } = useCart();

    const handleChangeQuantity = (newValue: number) => {
        if (newValue > cartItem.quantity) {
            dispatch({ type: "ADD_QUANTITY", payload: { product: cartItem.product } });
        } else if (newValue < cartItem.quantity) {
            dispatch({ type: "LOW_QUANTITY", payload: { product: cartItem.product } });
        }
    };

    return (
        <div className="bg-secondary px-4 py-3 flex justify-between min-w-[300px]">
            <div className="flex flex-col items-start max-w-32">
                <h5 className="text-md text-center">{cartItem.product.name}</h5>

                <div className="w-32 h-22 overflow-hidden rounded-md">
                    <img
                    src={cartItem.product.image}
                    alt="Imagem"
                    className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <div className="w-[1px] bg-white"></div>

            <div className="flex flex-col items-center justify-between">
                <QuantityAction
                    value={cartItem.quantity}
                    setValue={handleChangeQuantity}
                    inCart
                />

                <div className="text-[#D09D76] text-xs">
                    Ponto da carne: <span className="text-white">dourado</span>
                </div>

                <div className="bg-[#181717] p-2 rounded-full text-primary text-sm">
                    {formatPrice(cartItem.product.price * cartItem.quantity)}
                </div>
            </div>
        </div>
    );
};
