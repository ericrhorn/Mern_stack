import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";


const Main = () => {
  const [productSubmitted, setProductSubmitted] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div>
      <ProductForm
        setProductSubmitted={setProductSubmitted}
        productSubmitted={productSubmitted}
      />
      <hr />
      <ProductList
        productSubmitted={productSubmitted}
        />
    </div>
  );
};
export default Main;