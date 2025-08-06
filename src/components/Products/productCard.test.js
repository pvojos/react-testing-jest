import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { formatNumber } from "../../helpers/numberFormatHelper";

const mockProduct = {
    id: 1,
    image: "https://i.imgur.com/LRPAyYV.jpeg",
    name: "Playera cerezas",
    price: 299,
    handleClickAddToCart: jest.fn()
};

describe("Tests for ProductCard Component", () => {
    it("should display product information correctly", () => {
        render(
            <ProductCard
                id={mockProduct.id}
                image={mockProduct.image}
                name={mockProduct.name}
                price={mockProduct.price}
                handleClickAddToCart={mockProduct.handleClickAddToCart}
            />
        );

        const productImage = screen.getByAltText(mockProduct.name);
        const productName = screen.getByText(mockProduct.name);
        const productPrice = screen.getByText(`MXN ${formatNumber(mockProduct.price)}`);

        expect(productImage).toBeInTheDocument();
        expect(productName).toBeInTheDocument();
        expect(productPrice).toBeInTheDocument();
    });

    it("should call handleClickAddToCart when user clicks on add button", () => {
        render(
            <ProductCard
                id={mockProduct.id}
                image={mockProduct.image}
                name={mockProduct.name}
                price={mockProduct.price}
                handleClickAddToCart={mockProduct.handleClickAddToCart}
            />
        );

        const addButton = screen.getByRole("button", {name: "Agregar al carrito"});
        fireEvent.click(addButton);

        expect(mockProduct.handleClickAddToCart).toHaveBeenCalledTimes(1);
        expect(mockProduct.handleClickAddToCart).toHaveBeenCalledWith(mockProduct.id);
    });
});