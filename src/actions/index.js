export const getProductsList = (productsList) => {
    return {
        type: "GET_PRODUCTS_LIST",
        payload: productsList
    }
}

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

export const increaseQuantity = (id) => {
    return {
        type: "INCREASE_QUANTITY",
        payload: id
    }
}

export const decreaseQuantity = (id) => {
    return {
        type: "DECREASE_QUANTITY",
        payload: id
    }
}

export const deleteAll = () => {
    return {
        type: "DELETE_ALL"
    }
}