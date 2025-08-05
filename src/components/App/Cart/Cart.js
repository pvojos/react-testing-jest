import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartBackground, CartContent, CartFooter, CartHeader, CartModal, CartTitle, CloseCartButton, DeleteAllButton, EmptyCartText, TotalContainer, TotalQuantity, TotalText } from "./cartStyles";
import CartItem from "./CartItem";
import { formatNumber } from "../../../helpers/numberFormatHelper";
import { decreaseQuantity, deleteAll, increaseQuantity, removeFromCart } from "../../../actions";

const Cart = ({isCartOpen, setIsCartOpen}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const [cartTotal, setCartTotal] = useState(0)
    
    useEffect(() => {
        const total = cart.reduce((total, item) => total + (item.price * item.quantity),0)
        setCartTotal(total)
    }, [cart])

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id))
    }

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id))
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
                                    handleRemoveItem={handleRemoveItem}
                                    handleIncreaseQuantity={handleIncreaseQuantity}
                                    handleDecreaseQuantity={handleDecreaseQuantity}
                                />
                            ))}
                        </CartContent>

                        <CartFooter>
                            <TotalContainer>
                                <TotalText>Total <span>IVA incluido</span></TotalText>
                                <TotalQuantity>MXN {formatNumber(cartTotal)}</TotalQuantity>
                            </TotalContainer>

                            <DeleteAllButton
                                onClick={() => dispatch(deleteAll())}
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