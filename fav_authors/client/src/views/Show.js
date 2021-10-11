import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import DeleteAuthor from "../components/DeleteAuthor";
// import "../App.css";
// import "../button.css";

const Show = (props) => {
  const [authorList, setAuthorList] = useState([]);
  const { _id } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthorList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [_id]);

  const removeFromDom = (id) => {
    const newList = authorList.filter((author) => author._id !== id);
    setAuthorList(newList);
  };

  return (
    <>
      <h1>Favorite Authors</h1>
      <Link to="/new">
        <p>Add an Author</p>
      </Link>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authorList.map((author, idx) => (
            <tr key={idx}>
              <td>{author.authorName}</td>
              <td>
                <div className="editDelete">
                  <Link to={"/edit/" + `${author._id}`}>
                    <button>Edit</button>
                  </Link>
                </div>
                <div className="editDelete">
                  <DeleteAuthor id={author._id} removeFromDom={removeFromDom} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Show;
