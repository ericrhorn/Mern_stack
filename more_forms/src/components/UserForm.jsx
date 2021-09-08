import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFristNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1){
            setFristNameError("Frist Name must be entered")
        } else if(e.target.value.length < 2) {
            setFristNameError("First Name must be at least 2 characters")
        } else {
            setFristNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1){
            setLastNameError("Last Name must be entered")
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters")
        } else {
            setLastNameError("");
        }
    }

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

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1){
            setPasswordError("Password must be entered")
        } else if(e.target.value.length < 2) {
            setPasswordError("Password must be at least 2 characters")
        } else {
            setPasswordError("");
        }
    }
    

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
        setHasBeenSubmitted(true);
    }

    const formMessage = () => {
        if (hasBeenSubmitted){
            return "Thank you for submitting the form";
        }
        else{
            return "Please submit the form";
        }
    };
    
    return (
        <>
        <form onSubmit = {createUser}>
             { // form message as a tennary opperation
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
            }
            <div>
                <h3>{formMessage()}</h3>
            </div>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName }/>
                {
                    firstNameError ?
                    <p>{firstNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p>{lastNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfPassword(e.target.value)} value = {confPassword} />
            </div>
            {
                firstNameError ?
                <input type="submit" value="Create User" disabled /> : 
                <input type="submit" value="Create User" />
            }
            {/* {
                lastNameError ?
                <input type="submit" value="Create User" disabled /> : 
                <input type="submit" value="Create User" />
            } */}
            {/* <input type="submit" value="Create User" /> */}
        </form>
        </>
    );
};
    
export default UserForm;