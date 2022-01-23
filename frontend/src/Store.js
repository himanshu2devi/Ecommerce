import { createStore,combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({  //combine multiple reducers. look state in devtools
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState ={
    cart:{cartItems:cartItemsFromStorage}
}

const middleware = [thunk ]

const store =createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware))) //.. is spread operator


export default store