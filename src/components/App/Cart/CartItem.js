import { CartItemBottomInfo, CartItemCard, CartItemDeleteIcon, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, CartItemQuantityControl, CartItemTopInfo, QuantityControlButton, QuantityText } from "./cartStyles";
import trashcanIcon from "../../../assets/trashcan-icon.svg"
import { formatNumber } from "../../../helpers/numberFormatHelper";

const CartItem = ({id, image, name, quantity, price, stock, handleRemoveItem, handleIncreaseQuantity, handleDecreaseQuantity}) => {
    
    return (
        <CartItemCard>
            <CartItemImage src={image} alt={name} />

            <CartItemInfo>
                <CartItemTopInfo>
                    <CartItemName>{name}</CartItemName>

                    <CartItemQuantityControl>
                        <QuantityControlButton 
                            onClick={() => handleDecreaseQuantity(id)}
                            disabled={quantity === 1}
                        >
                            -
                        </QuantityControlButton>
                        <QuantityText>{quantity}</QuantityText>
                        <QuantityControlButton 
                            onClick={() => handleIncreaseQuantity(id)}
                            disabled={quantity === stock}
                        >
                            +
                        </QuantityControlButton>
                    </CartItemQuantityControl>
                </CartItemTopInfo>

                <CartItemBottomInfo>
                    <CartItemPrice>MXN {formatNumber(price)}</CartItemPrice>
                    <CartItemDeleteIcon onClick={() => handleRemoveItem(id)}>
                        <img src={trashcanIcon} alt="Icono de bote de basura" />
                    </CartItemDeleteIcon>
                </CartItemBottomInfo>
            </CartItemInfo>
        </CartItemCard>
    )
}

export default CartItem;