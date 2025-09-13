"use client";

import { QuantityAction } from "./ui/QuantityAction";
import { formatPrice } from "@/utils/formatters";
import { CartItem } from "@/types/CartItem";
import { useCart } from "@/contexts/CartContext";

type Props = {
  cartItem: CartItem;
  inOrder?: boolean
};

export const ProductCart = ({ cartItem, inOrder }: Props) => {
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

                {!inOrder &&
                    <h5 className="text-md text-center">{cartItem.product.nome}</h5>
                }
                

                <div className="w-32 h-22 overflow-hidden rounded-md">
                    <img
                    src={cartItem.product.imagem}
                    alt="Imagem"
                    className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <div className="w-[1px] bg-white"></div>

            <div className="flex flex-col items-center justify-between">
                

                {!inOrder &&
                    <QuantityAction
                    value={cartItem.quantity}
                    setValue={handleChangeQuantity}
                    inCart
                />
                }

                {inOrder &&
                    <p>{cartItem.quantity}X {cartItem.product.nome}</p>
                }

                <div className="text-[#D09D76] text-xs">
                    Ponto da carne: <span className="text-white">dourado</span>
                </div>

                <div className="bg-[#181717] p-2 rounded-full text-primary text-sm">
                    {formatPrice(parseInt(cartItem.product?.precoUnitario as string) * cartItem.quantity)}
                </div>
            </div>
        </div>
    );
};
