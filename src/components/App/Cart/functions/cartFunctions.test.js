import { calculateTotal, handleRemoveItem, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteAll } from "./cartFunctions";
import { removeFromCart, increaseQuantity, decreaseQuantity, deleteAll } from "../../../../actions";

describe("Tests for the calculateTotal function of the Cart", () => {
    it("should get the total price of multiple items in the cart", () => {
        const mockCart = [
            {id: 3, name: "Playera Korea", image: "https://i.imgur.com/atdOKxu.jpeg", price: 299, stock: 21, quantity: 2},
            {id: 4, name: "Playera Mickey Mouse", image: "https://i.imgur.com/9feARwj.jpeg", price: 549, stock: 4, quantity: 1}
        ];

        const total = calculateTotal(mockCart);

        expect(total).toBe(1147);
    });

    it("should return 0 if the cart is empty", () => {
        const mockCart = [];
        
        const total = calculateTotal(mockCart);

        expect(total).toBe(0);
    });

    it("should get the total price of just one item in the cart", () => {
        const mockCart = [
            {id: 4, name: "Playera Mickey Mouse", image: "https://i.imgur.com/9feARwj.jpeg", price: 549, stock: 4, quantity: 1}
        ];

        const total = calculateTotal(mockCart);

        expect(total).toBe(549);
    })
});

describe("Tests for the handleRemoveItem function of the Cart", () => {
    it("should call dispatch with the action removeFromCart and the correct id", () => {
        const mockDispatch = jest.fn();
        const itemId = 1;

        handleRemoveItem(mockDispatch, itemId);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(removeFromCart(itemId));
    });
});

describe("Tests for the handleIncreaseQuantity function of the Cart", () => {
    it("should call dispatch with the action increaseQuantity and the correct id", () => {
        const mockDispatch = jest.fn();
        const itemId = 2;

        handleIncreaseQuantity(mockDispatch, itemId);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(increaseQuantity(itemId));
    });
});

describe("Tests for the handleDecreaseQuantity function of the Cart", () => {
    it("should call dispatch with the action decreaseQuantity and the correct id", () => {
        const mockDispatch = jest.fn();
        const itemId = 3;

        handleDecreaseQuantity(mockDispatch, itemId);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(decreaseQuantity(itemId));
    });
});

describe("Tests for the handleDeleteAll function of the Cart", () => {
    it("should call dispatch with the action deleteAll", () => {
        const mockDispatch = jest.fn();

        handleDeleteAll(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(deleteAll());
    });
});