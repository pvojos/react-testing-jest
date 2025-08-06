import axios from "axios";

export const getProducts = async (endpoint) => {
    try {
        const response = await axios.get(endpoint)
        return response.data
    } catch (error) {
        throw error
    }
}