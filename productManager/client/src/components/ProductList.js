import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from "@reach/router"; 

const ProductList = (props) => {
    const {productSubmitted} = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch ((err) => console.log(err.data));
    },[productSubmitted]);

    return(
        <>
        <h4>Product List</h4>
        {/* {props.product.map((product, idx) => {
            return <p key={idx}>{product.title}</p>
        })} */}
        {products.map((product, idx) => (
        // <p key={idx}>{product.title}</p>
        <div key={idx}>
            <Link to={`${product._id}`}>{product.title}</Link>
        </div>
        ))}
        </>
    )
};

export default ProductList; 
