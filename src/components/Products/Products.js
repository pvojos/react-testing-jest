import { useDispatch, useSelector } from "react-redux";
import { CategoryTitle, MainContainer, ProductsContainer } from "./productsStyles";
import ProductCard from "./ProductCard";
import { handleAddToCart } from "./functions/productsFunctions";

const Products = ({isCartOpen}) => {

    const dispatch = useDispatch()
    const productsList = useSelector(state => state.products.productsList)

    const handleClickAddToCart = (id) => {
        handleAddToCart(id, productsList, dispatch)
    }

    return (
        <MainContainer open={isCartOpen}>
            <CategoryTitle>Colección de verano</CategoryTitle>

            <ProductsContainer>
                {productsList.map(product => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        handleClickAddToCart={handleClickAddToCart}
                    />
                ))}
            </ProductsContainer>
        </MainContainer>
    )
}

export default Products;