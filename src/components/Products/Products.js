import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions";
import { CategoryTitle, MainContainer, ProductsContainer } from "./productsStyles";
import ProductCard from "./ProductCard";

const Products = ({isCartOpen}) => {

    const dispatch = useDispatch()
    const productsList = useSelector(state => state.products.productsList)

    const handleAddToCart = (id) => {
        const productToAdd = productsList.filter(product => product.id === id)[0]
        dispatch(addToCart(productToAdd))
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
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </ProductsContainer>
        </MainContainer>
    )
}

export default Products;