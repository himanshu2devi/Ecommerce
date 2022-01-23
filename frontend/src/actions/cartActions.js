import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'
import { CART_REMOVE_ITEM } from '../constants/cartConstants'
import { useEffect,useState } from 'react'

export const addToCart = (id,qty) => async (dispatch,getState) => {  //getState pull out any state

    const {data} = await axios.get(`/api/products/${id}`)

    dispatch(
        {
            type:CART_ADD_ITEM,
            payload:{
                product:data.id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                qty
            }
        }
    )

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    // const initializeState = () => ({
    //     cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    //   });
      
    //   const [cart, setCart] = useState(initializeState());
      
    //   useEffect(() => {
    //     localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    //   }, [cart.cartItems]);
    

}