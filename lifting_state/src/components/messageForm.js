import React, { useState } from 'react';
    
const MessageForm = (props) => {

        const {messArr, setMessArr} = props; 
        const [msg, setMsg] = useState("");
        

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessArr ([...messArr, msg]);

        setMsg ("")
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                name ="msg"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
export default MessageForm;