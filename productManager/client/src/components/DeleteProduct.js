// import React, {useState, useEffect} from "react";
import axios from 'axios';
import {navigate} from "@reach/router";

const DeleteProduct = (props) => {

    const {id, product, setProduct, afterDelete} = props;

    const removeFromDom = (id) => {
        const newList = product.filter((product) => product._id !== id);
        setProduct(newList);
    };

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                if(product){
                    removeFromDom(id);
                }
                else{
                    navigate('/');
                }
                afterDelete(id);
            })
            .catch ((err) => console.log(err.data));
    };

    return (
        <div>
        <button onClick = {(e) => deleteHandler()}>
            Delete
        </button>
        </div>
    )
}

export default DeleteProduct;