import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Update = (props) => {
  const { _id } = props;
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${_id}`).then((res) => {
      setTitle(res.data.title);
      setPrice(res.data.price);
      setDescription(res.data.description);
    });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${_id}`, {
        title: title,
        price: price,
        description: description,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Update;
