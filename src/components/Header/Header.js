import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderCartIcon, CartContainer, HeaderContainer, HeaderLogo, NotificationBubble } from "./headerStyles";
import logo from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import { calculateCartItems } from "./functions/headerFunctions";

const Header = ({setIsCartOpen}) => {

    const cart = useSelector(state => state.cart.cart)
    const [cartLength, setCartLength] = useState(0)
    
    useEffect(() => {
        const cartItems = calculateCartItems(cart)
        setCartLength(cartItems)
    }, [cart])

    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="Logo Pigmento Lab" />

            <CartContainer 
                onClick={() => setIsCartOpen(true)}
            >
                <HeaderCartIcon src={cartIcon} alt="Icono de carrito" />
                <NotificationBubble>{cartLength}</NotificationBubble>
            </CartContainer>
        </HeaderContainer>
    )
}

export default Header;