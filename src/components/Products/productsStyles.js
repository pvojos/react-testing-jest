import styled from "styled-components";

const MainContainer = styled.main`
    flex: 1;
    padding: 1.2rem 5rem 3rem 5rem;
    color: #202020;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-height: ${prop => prop.open ? "82.3vh" : "100%"};
    overflow: hidden;
`;

const CategoryTitle = styled.h1`
    font-family: "Kanit", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;
`;

const ProductsContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.2rem;
    row-gap: 2.5rem;
`;

const ProductCardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    max-width: 100%;

    &:hover {
        button {
            opacity: 1;
            pointer-events: auto;
        }
    }
`;

const ProductImage = styled.img`
    width: 100%;
`;

const ProductContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
`;

const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-family: "Montserrat", sans-serif;
`;

const ProductName = styled.p`
    font-size: 0.78rem;
    font-weight: 200;
`;

const ProductPrice = styled.p`
    font-size: 0.9rem;
    font-weight: 800;
`;

const AddToCartButton = styled.button`
    opacity: 0;
    pointer-events: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    padding: 0 0.7rem;
    color: #202020;
    height: 100%;
    background-color: #e1e1e1;
    border: none;
    cursor: pointer;
    transition: all 0.05s ease-in-out;

    &:hover {
        background-color: #f0da0eff;
        transform: scale(1.05);
    }
`;

export {
    MainContainer,
    CategoryTitle,
    ProductsContainer,
    ProductCardContainer,
    ProductImage,
    ProductContent,
    ProductInfoContainer,
    ProductName,
    ProductPrice,
    AddToCartButton,
}