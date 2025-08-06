import { handleAddToCart } from "./productsFunctions";
import { addToCart } from "../../../actions";

describe("Tests for the handleAddToCart function of the Products", () => {
    it("should call dispatch with the action addToCart and the correct id", () => {
        const mockProductsList = [
            {id: 1, name: "Playera cerezas", image: "https://i.imgur.com/LRPAyYV.jpeg", price: 299, stock: 15},
            {id: 2, name: "Playera gráfico flores", image: "https://i.imgur.com/FRYUEtL.jpeg", price: 449, stock: 8}
        ];
        const itemId = 2;
        const mockDispatch = jest.fn();

        handleAddToCart(itemId, mockProductsList, mockDispatch);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(addToCart(mockProductsList[1]));
    });
});