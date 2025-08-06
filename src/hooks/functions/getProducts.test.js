import { getProducts } from "./getProducts";
import axios from "axios";

jest.mock("axios");

describe("Tests for the getProducts function used in custom hook useAxios", () => {
    it("should return data when the request is successful", async () => {
        const mockProducts = [
            {
                "id": 1,
                "name": "Playera cerezas",
                "image": "https://i.imgur.com/LRPAyYV.jpeg",
                "price": 299,
                "stock": 15
            },
            {
                "id": 2,
                "name": "Playera gráfico flores",
                "image": "https://i.imgur.com/FRYUEtL.jpeg",
                "price": 449,
                "stock": 8
            }
        ];
        const endpoint = "https://6882c56f21fa24876a9bb010.mockapi.io/pigmentolab/tshirt";
        const mockRes = { data: mockProducts};

        axios.get.mockResolvedValue(mockRes);

        const products = await getProducts(endpoint);

        expect(axios.get).toHaveBeenCalledWith(endpoint);
        expect(products).toEqual(mockProducts);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
    it("should throw an error when the request fails", async () => {
        const errorMessage = 'Network Error';
        const endpoint = "https://6882c56f21fa24876a9bb010.mockapi.io/pigmentolab/tshirt";
        const mockError = new Error(errorMessage);

        axios.get.mockRejectedValue(mockError);
        
        await expect(getProducts(endpoint)).rejects.toThrow(errorMessage);
        expect(axios.get).toHaveBeenCalledWith(endpoint);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});