import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (endpoint) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await axios.get(endpoint)
                const data = response.data

                setProducts(data)
            } catch (error) {
                console.error("Error fetching products: ", error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        getProducts()
    }, [endpoint])

    return {
        products,
        loading,
        error
    }
}

export default useAxios;