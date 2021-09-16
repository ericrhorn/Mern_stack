import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [dummyBool, setDummyBool] = useState("false");
  const [anotherDummyBool, setAnotherDummyBool] = useState("false");
  const [moreDummyBool, setMoreDummyBool] = useState("false");
  const [emailError, setEmailError] = useState("email must be at least 2 characters");

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

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1){
        setEmailError("Email must be entered")
    } else if(e.target.value.length < 2) {
        setEmail("Email must be at least 2 characters")
    } else {
        setEmailError("");
    }
}

  const isAnotherDummyTrue = () => {
      if (anotherDummyBool) {
          return <p>dummy is true</p>
      } else {
          return <p>dummy is false</p>
      }
  };

  return (
    // conditional statements
    <>
    {/* one more way to call a function */}
    {moreDummyBool && <p>dummy is true</p>}
    <button onClick={(e) => setMoreDummyBool(!moreDummyBool)}>Dummy again</button>

    {/* calling a function with an if statement outside of the return */}
    {isAnotherDummyTrue()}
    <button onClick={(e) => setAnotherDummyBool(!anotherDummyBool)}>Dummy</button>

    {/* set conditional statemetns inside jsx */}
    {/* or dummyBool ?( */}
    {/* below is a turinary */}
      {dummyBool ===true ? (
        <p>Dummy Bool is True</p>
      ) : (
        <p>Dummy Bool is False</p>
      )}
      <button onClick={() => setDummyBool(!dummyBool)}>Turn Dummy</button>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          {
            firstName.length > 0 ?
                firstName.length < 2 ?
                    <p>first name must be more than 2 characters</p>
                : null 
            : null
          }
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          {lastName.length < 2 && <p>Last name must be at least 2 characters</p>}
        </div>
        <div>
          <label>Email Address: </label>
          <input type="text" onChange={handleEmail}/>
          {
              emailError ?
              <p>{emailError}</p> :
              ''
          }
          {/* <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          /> */}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
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
      <h4>Form Data</h4>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Pass: {confPassword}</p>
    </>
  );
};

export default UserForm;
