import React, { useState } from "react";
import MessageForm from "./components/messageForm";
import MessageDisplay from "./components/messageDisplay";

function App() {
  // Lifting State includes creating it in a common parent that can pass data down to ALL
  //    components that will need access to the getter, setter or both
  // const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const [messArr, setMessArr] = useState([]);

  // const youveGotMail = ( newMessage ) => {
  //   setCurrentMsg( newMessage );
  // }

  return (
    <>
      {/* <MessageForm />
            <MessageDisplay message={ "This is a message to display" } /> */}
      {/* We pass in our function that will take in a string and update our state in our App component */}
      <MessageForm messArr={messArr} setMessArr={setMessArr} />
      {/* We pass our state getter from our App component down to MessageDisplay through props
            for displaying its value */}
      <MessageDisplay messArr={messArr} />
    </>
  );
}
export default App;
