import React from "react";

const MessageDisplay = (props) => {
  const { messArr } = props;

  return (
    <>
      <h1>Current Message</h1>
      {messArr.map((message, index) => (
        <div>
          <p>{message}</p>
        </div>
      ))}
             
    </>
  );
};

export default MessageDisplay;
