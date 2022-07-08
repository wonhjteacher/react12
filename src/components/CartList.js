import React from "react";
import CartItem from "./CartItem";
import  { useState } from "react";
import { useSelector } from "react-redux";

const CartList = () => {
     const cart=useSelector(state=>state.cart);
     const cartItem=cart.length >= 1 ? cart.map((item , idx) => { 
        return <CartItem key={item.id} item={item}  />
       }) : <div className="cart-emty">장바구니가 비어 있습니다.</div>


    return (
        <section className="cart-list">
            <h2 className="cart-list-title">장바구니</h2>
            {cartItem}
        </section>
    );
};

export default CartList;