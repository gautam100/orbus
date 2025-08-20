import React from "react";
import Child from "./Child";

const Parent = () => {

  const showName = (nm) => {
    alert(nm);
  };

  return (
    <div>
      <h1>Call Parent component from child component</h1>
      <Child showName={showName} name="Raj" />
      <Child showName={showName} name="Rohit" />
      <Child showName={showName} name="Rohan" />
    </div>
  );
};

export default Parent;
