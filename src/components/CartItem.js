import React from 'react';
import "./CartItem.css";
import { useDispatch , useSelector  } from "react-redux";
import { deleteCart } from "../store/cart/cartSlice";

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart)
  
   const restItems =cart.filter((ele,index) => ele.id === item.id)

    return (
        <div className="cart-item">
        <img 
        className="cart-item-image"
        alt="cart-item" 
        src={item.product_img}
        />
        <span className="cart-item-name">{item.product_name}</span>
        <span className="cart-item-price">{item.price}</span>
        <i className="fas fa-trash-alt" onClick={()=>dispatch(deleteCart(restItems))}></i>
    </div>
    );
};

export default CartItem;