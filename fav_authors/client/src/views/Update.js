import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Update = (props) => {
  const { _id } = props;
  const [updateAuthor, setUpdateAuthor] = useState({
    authorName: "",
  });
  const [errors, setErrors] = useState({});
  // const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${_id}`)
    .then((res) => {
      setUpdateAuthor(res.data);
    })
    .catch((err)=> {
        navigate('/error');
    })
  }, [_id]);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${_id}`, updateAuthor)
      .then((res) => navigate("/"))
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
        <h1>Favorite Authors</h1>
            <Link to="/">
            <p>Home</p>
            </Link>
            <h4>Edit Author</h4>
      <Form
        author={updateAuthor}
        setAuthor={setUpdateAuthor}
        errors={errors}
        onSubmitHandler={updateHandler}
      />
    </div>
  );
};
export default Update;
