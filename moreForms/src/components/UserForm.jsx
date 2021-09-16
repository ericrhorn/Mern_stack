import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    // create a javascript object to hold all of the values
    const newUser = { firstName, lastName, email, password, confPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfPassword("");
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          {/* <label htmlFor = "name">Name</label> */}
          <label> First Name: </label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        {firstName.length > 0 ? (
          firstName.length < 2 ? (
            <p>First Name must be at least 2 characters</p>
          ) : null
        ) : null}
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        {lastName.length > 0 ? (
          lastName.length < 2 ? (
            <p>Last Name must be at least 2 characters</p>
          ) : null
        ) : null}
        <div>
          <label>Email Address: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        {email.length > 0 ? (
          email.length < 5 ? (
            <p>Email must be at least 5 characters</p>
          ) : null
        ) : null}
        <div>
          <label>Password: </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {password.length > 0 ? (
          password.length < 8 ? (
            <p>Password must be at least 8 characters</p>
          ) : null
        ) : null}
        {password.length >= 8 && confPassword.length > 0 ? (
          password !== confPassword ? (
            <p>Passwords must match</p>
          ) : null
        ) : null}
        <div>
          <label>Confirm Password: </label>
          <input
            type="text"
            onChange={(e) => setConfPassword(e.target.value)}
            value={confPassword}
          />
        </div>

        <input type="submit" value="Create User" />
      </form>
      <div>
        <h4>Form Data</h4>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Pass: {confPassword}</p>
      </div>
    </>
  );
};

export default UserForm;
