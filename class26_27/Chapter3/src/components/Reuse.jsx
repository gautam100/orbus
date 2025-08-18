import React from "react";
import { useState } from "react";
const Reuse = ({ userData }) => {
  return (
    <>

    <ul>
      {userData.map((user, index) => (
        <li key={index}>
          {user.name} -- {user.email}
        </li>
      ))}
    </ul>
    </>
  );
};

export default Reuse;
