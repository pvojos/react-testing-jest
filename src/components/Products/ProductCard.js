import { formatNumber } from "../../helpers/numberFormatHelper";
import { ProductCardContainer, ProductImage, ProductContent, ProductInfoContainer, ProductName, ProductPrice, AddToCartButton } from "./productsStyles";

const ProductCard = ({id, image, name, price, handleClickAddToCart}) => {
    return (
        <ProductCardContainer>
            <ProductImage src={image} alt={name} />

            <ProductContent>
                <ProductInfoContainer>
                    <ProductName>{name}</ProductName>
                    <ProductPrice>MXN {formatNumber(price)}</ProductPrice>
                </ProductInfoContainer>

                <AddToCartButton
                    onClick={() => handleClickAddToCart(id)}
                >
                    Agregar al carrito
                </AddToCartButton>
            </ProductContent>
        </ProductCardContainer>
    )
}

export default ProductCard;