import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from "@reach/router"; 
import DeleteProduct from './DeleteProduct';
import '../App.css';


const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    // const {_id} = props;
    const {productSubmitted} = props;
    // const {removeFromDom} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            setProducts(res.data);
        })
        .catch ((err) => console.log(err.data));
    },[productSubmitted]);

    const updateAfterDelete = (productId) => {
        let updatedProductArray = products.filter((productObj) => {
            return productObj._id !== productId;
        });
        setProducts(updatedProductArray);
    }


    return(
        <>
        <h4>Product List</h4>
        {products.map((product, idx) => (
        <div className ="show" key={idx}>
            <Link to={`${product._id}`}>{product.title}</Link>
            <div>
                <Link to={`${product._id}` + "/edit"}>
                    <button type="button">
                    Edit
                    </button>
                </Link>
            </div>
            <div>
                <DeleteProduct id={product._id} afterDelete={updateAfterDelete}/>
            </div>
        </div>
        ))}
        </>
    )
};

export default ProductList; 
