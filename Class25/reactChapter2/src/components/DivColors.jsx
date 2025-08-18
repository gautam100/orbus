import React, { useState } from "react";

const DivColors = () => {
  let [bgColor, setBgColor] = useState("red");

  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "350px",
          border: "1px solid #000",
          backgroundColor: bgColor,
        }}
      >
        {bgColor}
      </div>
      <button onClick={() => setBgColor("red")}>Red</button>
      <button onClick={() => setBgColor("blue")}>Blue</button>
      <button onClick={() => setBgColor("green")}>Green</button>
    </div>
  );
};

export default DivColors;
