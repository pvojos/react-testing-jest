import { useState, useEffect } from "react";
import { getProducts } from "./functions/getProducts";

const useAxios = (endpoint) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const getProductsList = async () => {
            try {
                setLoading(true)
                setError(null)

                const data = await getProducts(endpoint)
                setProducts(data)
            } catch (err) {
                console.error("Error fetching products: ", err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        getProductsList()
    }, [endpoint])

    return {
        products,
        loading,
        error
    }
}

export default useAxios;