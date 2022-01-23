//reducer is function that take in current state and action (eg load data) what we want to do with current state and return new copy (update store)
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

 } from '../constants/productConstants'



export const productListReducer = (state = {products:[]},action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}

        case PRODUCT_LIST_SUCCESS:      //after api call return some data
             return {loading:false,products:action.payload}  //payload is data

        case PRODUCT_LIST_FAIL:          //when we got bad data or any failure
             return {loading:false,error:action.payload}

        default:
            return state
    }

}

export const productDetailsReducer = (state = {product:{reviews:[]}},action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}

        case PRODUCT_DETAILS_SUCCESS:      //after api call return some data
             return {loading:false,product:action.payload}  //payload is data

        case PRODUCT_DETAILS_FAIL:          //when we got bad data or any failure
             return {loading:false,error:action.payload}

        default:
            return state
    }

}