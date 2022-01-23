import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  Row ,Col} from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


function HomeScreen() {
    // const [products,setProducts] =useState([])
     const dispatch = useDispatch()  
     const productList =  useSelector(state => state.productList)
     const {error,loading,products} = productList

    useEffect(() => {
        dispatch(listProducts())     //firing action and updating store.see in devtools

    //    async function fetchProducts(){
    //     const {data}  = await axios.get('/api/products/')
    //     setProducts(data)

    //     }
    //     fetchProducts()
       
        
    }, [dispatch]);

    //const products = []

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader />
            :error ? <Message variant='danger'>{error}</Message>
            :
            <Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} md={6} Lg={4} xL={3}>
                    <Product product={product} />
                    </Col>
                ))}
            </Row>
}
        </div>
    )
}

export default HomeScreen
