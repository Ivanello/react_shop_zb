import { SELECT_PRODUCT } from '../Actions/products'
import { ADD_TO_CART_PRODUCT } from '../Actions/products'
import { createReducer } from 'Helpers/reducer'


const initialState = {
    data: [
        {
            id: 1,
            name: "шарик",
            image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
        },
        {
            id: 2,
            name: "футболка",
            image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
        },
        {
            id: 3,
            name: "шарик 2",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
        },
        {
            id: 4,
            name: "шарик 3",
            image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
        },
        {
            id: 5,
            name: "футболка2",
            image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
        },
        {
            id: 6,
            name: "шарик 4",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
        }
    ],
    selectedProduct: null,
    cart: null
}


const products = {
    [SELECT_PRODUCT]: (state = initialState, action) => {
        console.log("action>>>", action)
        return {
            ...state,
            selectedProduct: action.product
        }
    },
    [ADD_TO_CART_PRODUCT]: (state = initialState, action) => {
        return {
            ...state,
            data: action.data.map(el => {
                if (el.id === action.el.id) {
                    return action.el
                }
                return el
            })
        }
    }
}

export default createReducer(initialState, products)
