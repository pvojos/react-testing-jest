import { addToCart } from "../../../actions"

export const handleAddToCart = (id, productsList, dispatch) => {
    const productToAdd = productsList.filter(product => product.id === id)[0]
    dispatch(addToCart(productToAdd))
}