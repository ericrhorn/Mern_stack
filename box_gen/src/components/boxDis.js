import React from "react";

const BoxDis = (props) => {
  const { colorArr } = props;

  return (
    <>
      <h4>New Colors</h4>
      {colorArr.map((color, index) => (
        <div
          key={"index"}
          style={{
            display: "inline-block",
            margin: "10px",
            height: "100px",
            width: "100px",
            backgroundColor: color,
          }}
        ></div>
      ))}
    </>
  );
};
export default BoxDis;
