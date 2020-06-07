export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const ADD_TO_CART_PRODUCT = 'ADD_TO_CART_PRODUCT'
export const selectProductAction = (product) => ({
    type: SELECT_PRODUCT,
    product
})

export const addToCartProductAction = (product) => ({
    type: ADD_TO_CART_PRODUCT,
    product
})