const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            const itemExist = state.cart.some(item => item.id === action.payload.id)

            if(!itemExist) {
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity: 1}]
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        if (item.id === action.payload.id) {
                            if (item.quantity < item.stock) {
                                return {...item, quantity: item.quantity + 1}
                            } else return item
                        } else return item})
                }
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        if (item.quantity < item.stock) {
                            return {...item, quantity: item.quantity + 1}
                        } else return item
                    } else return item
                })
            }
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        if (item.quantity > 1) {
                            return {...item, quantity: item.quantity - 1}
                        } else return item
                    } else return item
                })
            }
        case "DELETE_ALL":
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export default cartReducer;