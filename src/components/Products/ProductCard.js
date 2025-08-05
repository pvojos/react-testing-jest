import { formatNumber } from "../../helpers/numberFormatHelper";
import { ProductCardContainer, ProductImage, ProductContent, ProductInfoContainer, ProductName, ProductPrice, AddToCartButton } from "./productsStyles";

const ProductCard = ({id, image, name, price, handleAddToCart}) => {
    return (
        <ProductCardContainer>
            <ProductImage src={image} alt={name} />

            <ProductContent>
                <ProductInfoContainer>
                    <ProductName>{name}</ProductName>
                    <ProductPrice>MXN {formatNumber(price)}</ProductPrice>
                </ProductInfoContainer>

                <AddToCartButton
                    onClick={() => handleAddToCart(id)}
                >
                    Agregar al carrito
                </AddToCartButton>
            </ProductContent>
        </ProductCardContainer>
    )
}

export default ProductCard;