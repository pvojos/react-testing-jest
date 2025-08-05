import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderCartIcon, CartContainer, HeaderContainer, HeaderLogo, NotificationBubble } from "./headerStyles";
import logo from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"

const Header = ({setIsCartOpen}) => {

    const cart = useSelector(state => state.cart.cart)
    const [cartLength, setCartLength] = useState(0)
    
    useEffect(() => {
        const cartItems = cart.reduce((total, item) => total + item.quantity ,0)
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