import React from 'react';
import {useParams} from "react-router-dom"
const Detail = () => {
    let params = useParams();
    console.log('params',params.id)
    return (
        <div>
              <h1>상품상세페이지</h1>
              <h2>제품아이디는 {params.id}</h2>
        </div>
    );
};

export default Detail;