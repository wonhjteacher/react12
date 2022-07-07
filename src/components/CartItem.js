import React from 'react';
import "./CartItem.css";

const CartItem = ({item}) => {
    return (
        <div className="cart-item">
        <img 
        className="cart-item-image"
        alt="cart-item" 
        src={item.product_img}
        />
        <span className="cart-item-name">{item.product_name}</span>
        <span className="cart-item-price">{item.price}</span>
        <i className="fas fa-trash-alt"></i>
    </div>
    );
};

export default CartItem;