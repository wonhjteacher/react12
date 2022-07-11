import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useSelector ,useDispatch } from "react-redux";
import { logout } from '../store/user/userSlice';
import "./Nav.css";
const Nav = () => {
    const cart=useSelector(state=>state.cart)
    const user=useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
            {
                user ? 
                ( <span className="user" onClick={()=>{dispatch(logout(false))}}>로그아웃</span>) : 
                (<span className="user"  onClick={() => navigate("/login")}>로그인</span>) 

            }
        </nav>
    );
};

export default Nav;