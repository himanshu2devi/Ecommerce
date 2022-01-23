import { CART_ADD_ITEM } from '../constants/cartConstants'
import { CART_REMOVE_ITEM } from '../constants/cartConstants'



export const cartReducer = (state={cartItems:[]},action) => {
    switch(action.type){

        case CART_ADD_ITEM:
            const item =action.payload
            const existItem = state.cartItems.find(x => x.product === item.product) //check if product is already present in cart


            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x =>
                        x.product == existItem.product ? item : x  //if product matches exist items then replace it wth new item otherwise return x
                        )
                }

            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]  //return original cart items
                }
            }


        default:
            return state
    }

}