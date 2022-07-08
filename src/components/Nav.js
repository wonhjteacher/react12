import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

import "./Nav.css";
const Nav = () => {
    const cart=useSelector(state=>state.cart)
    return (
        <nav className="nav">
            <span className="nav-title"><Link to='/'>SHOP</Link></span>
            <span>
                <Link to='/cart'>
                    <i className="fas fa-shopping-cart">
                        <div className="cart-amount">{cart.length}</div>
                    </i>
                </Link>
            </span>
        </nav>
    );
};

export default Nav;