// import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";


const Main = () => {
    const [productSubmitted, setProductSubmitted] =useState(false);
    // const [product, setProduct] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/products")
    //         .then(res=>{setProduct(res.data); setLoaded(true);});
    // },[])
  return (
    <div>
      <ProductForm 
      setProductSubmitted={setProductSubmitted}
      productSubmitted={productSubmitted}
      />
      <hr />
      <ProductList productSubmitted={productSubmitted}/>
      {/* {loaded && <ProductList product={product}/>} */}
    </div>
  );
};
export default Main;
