import axios from 'axios'

import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
 } from '../constants/productConstants'

 

//Below function is incharge of making api call that we make on homescrren.We are using redux thunk.It allows to write function within function
 

export const listProducts = () => async (dispatch) => {     
     
    try{
        dispatch({type: PRODUCT_LIST_REQUEST})  //fire first reducer

        const {data} = await axios.get('/api/products/')

        dispatch({type: PRODUCT_LIST_SUCCESS,payload:data})

    }
    catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        })

    }
    




 }                               

 export const listProductDetails = (id) => async (dispatch) => {     
     
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})  //fire first reducer

        const {data} = await axios.get(`/api/products/${id}`)

        dispatch({type: PRODUCT_DETAILS_SUCCESS,payload:data})

    }
    catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        })

    }
    




 }                               