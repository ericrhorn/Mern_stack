import React from "react"
import {Link, navigate} from "@reach/router";

const Dashboard = () => {
    const onClickHandler = (e) => {
        e.preventDefault();
        navigate("/")
    }
    return (
        <div>
            <h1>Hello User</h1>
            <Link to="/">Back to Login</Link> 
            <button onClick={onClickHandler}>Back to Login 2</button>
        </div>
        
    );
};

export default Dashboard;