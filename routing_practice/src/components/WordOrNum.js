import React from "react";

const WordOrNum = (props) => {
  const { wordNum } = props;
  if (isNaN(wordNum)) {
    return <h1>The word is: {wordNum} </h1>;
  } else {
    return <h1>The number is: {wordNum}</h1>;
  }
};

export default WordOrNum;
