import React from "react";

const Word = (props) => {
  const {word, textColor, backgroundColor} = props;

  if (isNaN(word)){
    return (
      <h1 style={{color: textColor, backgroundColor: backgroundColor }}>
      {word}
      </h1>
    );
  } else {
      return <h1>The number is: {word}</h1>
  }
};

export default Word;