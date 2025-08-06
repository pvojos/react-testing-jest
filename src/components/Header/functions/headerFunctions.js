export const calculateCartItems = (cart) => {
    return cart.reduce((total, item) => total + item.quantity ,0)
}