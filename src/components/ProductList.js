import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem"
import "./ProductList.css"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/productList.json").then(response => response.json())
        .then(response => setProducts(response.productList)) 
    }, []);

    const itemList = products.map(item => {
        return <ProductItem key={item.id} item={item}/>
    })

    return (
        <section className="product-list">
            <h2 className="product-list-title">상품 목록</h2>
            <div className="product-item-container">
                {itemList}
            </div>
        </section>
    );
}

export default ProductList;