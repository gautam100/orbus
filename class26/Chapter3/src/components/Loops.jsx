import React from "react";
import Reuse from "./Reuse";

const Loops = () => {
  const userData = [
    {
      id: 1,
      name: "Ajay",
      age: 31,
      email: "ajay@me.in",
    },
    {
      id: 2,
      name: "Sanjay",
      age: 32,
      email: "sanjay@me.in",
    },
    {
      id: 3,
      name: "Amit",
      age: 30,
      email: "amit@me.in",
    },
  ];
  return (
    <div>
        <h2>In Loops</h2>
      <Reuse userData={userData} />
    </div>
  );
};

export default Loops;
