import React, { useState } from "react";
import axios from "axios";
const ProductForm = (props) => {
  // const {loaded, setLoaded} = props;
  const { productSubmitted, setProductSubmitted } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if ((title.length, price.length, description.length === 0)) {
      return;
    }
    const newProductData = {
      title,
      price,
      description,
    };
    axios
      .post("http://localhost:8000/api/products", newProductData)
      .then((res) => {
        console.log(res);
        setTitle("");
        setPrice("");
        setDescription("");
        // setLoaded(!loaded);
        setProductSubmitted(!productSubmitted);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Add a New Product</h1>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </p>
        <button type="submit">Create</button>
      </form>
    </>
  );
};
export default ProductForm;
