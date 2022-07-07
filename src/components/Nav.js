import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css";
const Nav = () => {
    return (
        <nav className="nav">
            <span className="nav-title"><Link to='/'>SHOP</Link></span>
            <span>
                <Link to='/cart'>
                    <i className="fas fa-shopping-cart">
                        <div className="cart-amount"></div>
                    </i>
                </Link>
            </span>
        </nav>
    );
};

export default Nav;