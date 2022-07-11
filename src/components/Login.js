import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const loginUser=(e)=>{
        e.preventDefault();
        dispatch(login(true))
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={(e)=>loginUser(e)}>
                 <div>
                    <div><label htmlFor='userId'>아이디</label></div>
                    <div><input type="text" id="userId"  placeholder='아이디입력' /></div>
                 </div>
                 <div>
                    <div><label htmlFor='userPass'>비밀번호</label></div>
                    <div><input type="password"  id="userPass" /></div>
                 </div>
                 <div>
                     <input type="submit" value="로그인"  />
                 </div>
            </form>
        </div>
    );
};

export default Login;