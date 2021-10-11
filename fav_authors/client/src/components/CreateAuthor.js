import React, { useState } from "react";
import { navigate } from "@reach/router";
import Form from "./Form";
import axios from "axios";

const CreateAuthor = (props) => {
  const { authorList, setAuthorList } = props;
  const [newAuthor, setNewAuthor] = useState({
    authorName: "",
  });
  const [errors, setErrors] = useState({});

  const newAuthorHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", newAuthor)
      .then((res) => {
        console.log(res);
        setAuthorList([...authorList, res.data]);
        navigate('/');

        setNewAuthor({
          authorName: "",
        });
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Form
        author={newAuthor}
        setAuthor={setNewAuthor}
        errors={errors}
        onSubmitHandler={newAuthorHandler}
      />
    </div>
  );
};
export default CreateAuthor;
