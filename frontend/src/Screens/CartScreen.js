import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Row,Col,ListGroup,Image,Form,Button,Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
import ProductScreen from './ProductScreen'
import { CART_ADD_ITEM } from '../constants/cartConstants'
import { CART_REMOVE_ITEM } from '../constants/cartConstants'

const EMPTY_CART = { cartItems: [] };

function CartScreen({match,location,history}) {
    console.log("dispatch",match)
    //const {productId} = useParams();
    const productId=match.dispatch
   //const { productId } = useParams(); //useparams is hook
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    //const qty = location.search ? Number(location.search.split('=')[1]) : 1
   console.log('qty:',qty)

   const dispatch=useDispatch()

//    const cart = useSelector(state => state.cart)
//    const {cartItems} = cart
   const cart = useSelector(state => state.cart || EMPTY_CART);
    const { cartItems } = cart;
   console.log('cartItems:',cartItems)

   useEffect(() => {
    if(productId){
        dispatch(addToCart(productId,qty))
    }

   },[dispatch,productId,qty])

    return (
        <div>
            <Row>
                <Col md={3}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ?(
                    <Message variant ='info'>
                        your cart is empty<Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item =>(
                                <ListGroup.Item key ={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt ={item.name} fluid rounded/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to ={`/products/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        <Col md={3}>
                                        <Form.Control
                                        
                                        as = "select"
                                        value={item.qty}
                                        onChange={(e) => dispatch(addToCart(item.product,e.target.value))}

                                        >

                                    {
                                        
                                        [...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ) )
                                    }


                                        </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                        ))}

                    </ListGroup>
                )}
                </Col>
                <Col md={4}>

                </Col>
            </Row>
        </div>
    )
}

export default CartScreen


