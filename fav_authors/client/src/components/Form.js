import React from "react";
import { navigate } from "@reach/router";


const Form = (props) => {
  const { onSubmitHandler, author, setAuthor, errors } = props;

  const onInputHandler = (e) => {
    let newStateObject = { ...author };
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setAuthor(newStateObject);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Author</label>
          <br />
          <input
            type="text"
            onChange={onInputHandler}
            name="authorName"
            value={author.authorName}
          />
          {errors && errors.authorName && <p>{errors.authorName.message}</p>}
        </div>
        <button className="btn btn-primary" onClick={(e)=>navigate("/")}>Cancel</button>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
};
export default Form;
