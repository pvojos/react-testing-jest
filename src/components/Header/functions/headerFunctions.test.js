import { calculateCartItems } from "./headerFunctions";

describe("Tests for the calculateCartItems function of the Header", () => {
    it("should get the number of items in the cart", () => {
        const mockCart = [
            {id: 3, name: "Playera Korea", image: "https://i.imgur.com/atdOKxu.jpeg", price: 299, stock: 21, quantity: 2},
            {id: 4, name: "Playera Mickey Mouse", image: "https://i.imgur.com/9feARwj.jpeg", price: 549, stock: 4, quantity: 1}
        ];

        const totalItems = calculateCartItems(mockCart);

        expect(totalItems).toBe(3);
    });

    it("should return 0 if the cart is empty", () => {
        const mockCart = [];

        const totalItems = calculateCartItems(mockCart);

        expect(totalItems).toBe(0);
    });
});