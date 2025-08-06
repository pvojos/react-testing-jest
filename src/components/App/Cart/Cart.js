import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartBackground, CartContent, CartFooter, CartHeader, CartModal, CartTitle, CloseCartButton, DeleteAllButton, EmptyCartText, TotalContainer, TotalQuantity, TotalText } from "./cartStyles";
import CartItem from "./CartItem";
import { formatNumber } from "../../../helpers/numberFormatHelper";
import { calculateTotal, handleDecreaseQuantity, handleDeleteAll, handleIncreaseQuantity, handleRemoveItem } from "./functions/cartFunctions";

const Cart = ({isCartOpen, setIsCartOpen}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const [cartTotal, setCartTotal] = useState(0)
    
    useEffect(() => {
        const total = calculateTotal(cart);
        setCartTotal(total)
    }, [cart])

    const handleClickOnRemoveItem = (id) => {
        handleRemoveItem(dispatch, id)
    }

    const handleClickIncreaseQuantity = (id) => {
        handleIncreaseQuantity(dispatch, id)
    }

    const handleClickDecreaseQuantity = (id) => {
        handleDecreaseQuantity(dispatch, id)
    }

    const handleClickDeleteAll = () => {
        handleDeleteAll(dispatch)
    }

    return (
        <CartBackground open={isCartOpen}>
            <CartModal open={isCartOpen}>
                <CartHeader>
                    <CartTitle>Mi Carrito</CartTitle>
                    
                    <CloseCartButton
                        onClick={() => setIsCartOpen(false)}
                    >
                        X
                    </CloseCartButton>
                </CartHeader>

                {cart.length > 0 ? (
                    <>
                        <CartContent>
                            {cart.map(item => (
                                <CartItem 
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    quantity={item.quantity}
                                    price={item.price}
                                    stock={item.stock}
                                    handleClickOnRemoveItem={handleClickOnRemoveItem}
                                    handleClickIncreaseQuantity={handleClickIncreaseQuantity}
                                    handleClickDecreaseQuantity={handleClickDecreaseQuantity}
                                />
                            ))}
                        </CartContent>

                        <CartFooter>
                            <TotalContainer>
                                <TotalText>Total <span>IVA incluido</span></TotalText>
                                <TotalQuantity>MXN {formatNumber(cartTotal)}</TotalQuantity>
                            </TotalContainer>

                            <DeleteAllButton
                                onClick={() => handleClickDeleteAll()}
                            >
                                Eliminar todo
                            </DeleteAllButton>
                        </CartFooter>
                    </>
                ) : (
                    <EmptyCartText>El carrito está vacío.</EmptyCartText>
                )}
            </CartModal>
        </CartBackground>
    )
}

export default Cart;