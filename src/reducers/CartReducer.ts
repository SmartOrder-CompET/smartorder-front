import { CartType } from "@/types/Cart";
import { CartItem } from "@/types/CartItem";
import { ReducerActionType } from "@/types/ReducerAction";

export const cartInitialState: CartType = {
    items: [],
    discount: 0,
}

export const cartReducer = (state = cartInitialState, action: ReducerActionType): CartType => {
    switch(action.type) {
        case 'ADD_PRODUCT': {
            const existingItemIndex = state.items.findIndex(item => item.product.id === action.payload.product.id);
            
            if (existingItemIndex >= 0) {
                const updatedItems = state.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return { ...state, items: updatedItems };
            } else {
                const newItem: CartItem = { product: action.payload.product, quantity: action.payload.quantity, observation: action.payload.observation };
                return { ...state, items: [...state.items, newItem] };
            }
        }

        case 'REMOVE_PRODUCT': {
            const updatedItems = state.items.filter(item => item.product.id !== action.payload.product.id);
            return { ...state, items: updatedItems };
        }

        case 'ADD_QUANTITY': {
            const updatedItems = state.items.map(item => {
                if (item.product.id === action.payload.product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return { ...state, items: updatedItems };
        }

        case 'LOW_QUANTITY': {
            const updatedItems = state.items.flatMap(item => {
                if (item.product.id === action.payload.product.id) {
                    if (item.quantity > 1) {
                        return [{ ...item, quantity: item.quantity - 1 }];
                    } 
                    return []; 
                }
                return [item];
            });

            return { ...state, items: updatedItems };
        }

        default:
            return state;
    }
}

