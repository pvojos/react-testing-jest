const initialState = {
    productsList: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_PRODUCTS_LIST":
            return {
                ...state,
                productsList: action.payload
            }
        default:
            return state
    }
}

export default productsReducer;