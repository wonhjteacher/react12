import React from 'react';
import Detail from '../components/Detail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserRedirects = () => {
    const user = useSelector((state)=>state.user.value)
    return user  === true ? <Detail /> : <Navigate to="/login" />;
};

export default UserRedirects ;