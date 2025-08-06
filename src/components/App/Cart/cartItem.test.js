import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./CartItem";
import { formatNumber } from "../../../helpers/numberFormatHelper";

const mockItem = {
    id: 1,
    image: "https://i.imgur.com/LRPAyYV.jpeg",
    name: "Playera cerezas",
    quantity: 12,
    price: 299,
    stock: 15,
    handleClickOnRemoveItem: jest.fn(),
    handleClickIncreaseQuantity: jest.fn(),
    handleClickDecreaseQuantity: jest.fn()
};

describe("Tests for CartItem Component", () => {
    it("should display item information correctly", () => {
        render(
            <CartItem 
                id={mockItem.id}
                image={mockItem.image}
                name={mockItem.name}
                quantity={mockItem.quantity}
                price={mockItem.price}
                stock={mockItem.stock}
                handleClickOnRemoveItem={mockItem.handleClickOnRemoveItem}
                handleClickIncreaseQuantity={mockItem.handleClickIncreaseQuantity}
                handleClickDecreaseQuantity={mockItem.handleClickDecreaseQuantity}
            />
        );

        const itemImage = screen.getByAltText(mockItem.name);
        const itemName = screen.getByText(mockItem.name);
        const itemQuantity = screen.getByText(mockItem.quantity.toString());
        const itemPrice = screen.getByText(`MXN ${formatNumber(mockItem.price)}`);

        expect(itemImage).toBeInTheDocument();
        expect(itemName).toBeInTheDocument();
        expect(itemQuantity).toBeInTheDocument();
        expect(itemPrice).toBeInTheDocument();
    });

    it("should call handleClickOnRemoveItem when user clicks on delete button", () => {
        render(
            <CartItem 
                id={mockItem.id}
                image={mockItem.image}
                name={mockItem.name}
                quantity={mockItem.quantity}
                price={mockItem.price}
                stock={mockItem.stock}
                handleClickOnRemoveItem={mockItem.handleClickOnRemoveItem}
                handleClickIncreaseQuantity={mockItem.handleClickIncreaseQuantity}
                handleClickDecreaseQuantity={mockItem.handleClickDecreaseQuantity}
            />
        );

        const deleteButton = screen.getByRole("button", {name: "Icono de bote de basura"});
        fireEvent.click(deleteButton);

        expect(mockItem.handleClickOnRemoveItem).toHaveBeenCalledTimes(1);
        expect(mockItem.handleClickOnRemoveItem).toHaveBeenCalledWith(mockItem.id);
    });

    it("should call handleClickIncreaseQuantity when user clicks on increase button", () => {
        render(
            <CartItem 
                id={mockItem.id}
                image={mockItem.image}
                name={mockItem.name}
                quantity={mockItem.quantity}
                price={mockItem.price}
                stock={mockItem.stock}
                handleClickOnRemoveItem={mockItem.handleClickOnRemoveItem}
                handleClickIncreaseQuantity={mockItem.handleClickIncreaseQuantity}
                handleClickDecreaseQuantity={mockItem.handleClickDecreaseQuantity}
            />
        );

        const increaseButton = screen.getByRole("button", {name: "+"});
        fireEvent.click(increaseButton);

        expect(mockItem.handleClickIncreaseQuantity).toHaveBeenCalledTimes(1);
        expect(mockItem.handleClickIncreaseQuantity).toHaveBeenCalledWith(mockItem.id);
    });

    it("should call handleClickDecreaseQuantity when user clicks on decrease button", () => {
        render(
            <CartItem 
                id={mockItem.id}
                image={mockItem.image}
                name={mockItem.name}
                quantity={mockItem.quantity}
                price={mockItem.price}
                stock={mockItem.stock}
                handleClickOnRemoveItem={mockItem.handleClickOnRemoveItem}
                handleClickIncreaseQuantity={mockItem.handleClickIncreaseQuantity}
                handleClickDecreaseQuantity={mockItem.handleClickDecreaseQuantity}
            />
        );

        const decreaseButton = screen.getByRole("button", {name: "-"});
        fireEvent.click(decreaseButton);

        expect(mockItem.handleClickDecreaseQuantity).toHaveBeenCalledTimes(1);
        expect(mockItem.handleClickDecreaseQuantity).toHaveBeenCalledWith(mockItem.id);
    });

    it("Decrease button should be disabled when quantity is 1", () => {
        render(
            <CartItem 
                id={mockItem.id}
                image={mockItem.image}
                name={mockItem.name}
                quantity={1}
                price={mockItem.price}
                stock={mockItem.stock}
                handleClickOnRemoveItem={mockItem.handleClickOnRemoveItem}
                handleClickIncreaseQuantity={mockItem.handleClickIncreaseQuantity}
                handleClickDecreaseQuantity={mockItem.handleClickDecreaseQuantity}
            />
        );

        const decreaseButton = screen.getByRole("button", {name: "-"});
        expect(decreaseButton).toBeDisabled();
    });

    it("Increase button should be disabled when quantity is the same as the stock", () => {
        render(
            <CartItem 
                id={mockItem.id}
                image={mockItem.image}
                name={mockItem.name}
                quantity={15}
                price={mockItem.price}
                stock={mockItem.stock}
                handleClickOnRemoveItem={mockItem.handleClickOnRemoveItem}
                handleClickIncreaseQuantity={mockItem.handleClickIncreaseQuantity}
                handleClickDecreaseQuantity={mockItem.handleClickDecreaseQuantity}
            />
        );

        const increaseButton = screen.getByRole("button", {name: "+"});
        expect(increaseButton).toBeDisabled();
    });
});