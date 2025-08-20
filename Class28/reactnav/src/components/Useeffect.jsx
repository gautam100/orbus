import React, { useState, useEffect } from "react";

const Useeffect = () => {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () =>{
    setCounter2(counter2 + 1);
    
  }

  function randomFunc() {
    console.log("Inside randomFunc");
  }
  useEffect(() => {
    randomFunc();
  }, []);

  function randomFunc2() {
    console.log("Inside randomFunc2");
  }
  useEffect(() => {
    randomFunc2();
  }, [counter2]);

  return (
    <div>
      <h1>useEffect</h1>
      <div>
        counter: <button onClick={handleClick}>Counter {counter}</button>
      </div>
      <div>
        counter2: <button onClick={handleClick2}>Counter {counter2}</button>
      </div>
    </div>
  );
};

export default Useeffect;
