import React, { useState } from 'react'
import { Link } from "@reach/router";
import CreateAuthor from "../components/CreateAuthor";



const Main = (props) => {

    const [newAuthor, setNewAuthor] = useState({});
    const [authorList, setAuthorList] = useState([]);
    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">
            <p>Home</p>
            </Link>
            <h4>Add a new Author</h4>
            <CreateAuthor
            newAuthor={newAuthor}
            setNewAuthor={setNewAuthor}
            authorList={authorList}
            setAuthorList={setAuthorList}
            />
        </div>
    )
}
export default Main;