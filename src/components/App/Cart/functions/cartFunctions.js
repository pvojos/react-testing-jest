import { removeFromCart, increaseQuantity, decreaseQuantity, deleteAll } from "../../../../actions"

export const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity),0)
}

export const handleRemoveItem = (dispatch, id) => {
    dispatch(removeFromCart(id))
}

export const handleIncreaseQuantity = (dispatch, id) => {
    dispatch(increaseQuantity(id))
}

export const handleDecreaseQuantity = (dispatch, id) => {
    dispatch(decreaseQuantity(id))
}

export const handleDeleteAll = (dispatch) => {
    dispatch(deleteAll())
}