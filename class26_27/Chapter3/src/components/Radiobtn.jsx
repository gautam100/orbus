import React, { useState } from "react";

const Radiobtn = () => {
  const [gender, setGender] = useState("female");

  return (
    <div>
      <input
        type="radio"
        name="gender"
        id="female"
        value={"female"}
        onChange={(event) => setGender(event.target.value)}
        checked = {gender === 'female'}
      />
      Female
      <br />
      <input
        type="radio"
        name="gender"
        id="male"
        value={"male"}
        onChange={(event) => setGender(event.target.value)}
        checked = {gender === 'male'}

      />
      Male
      <br />
      <div>Selected Gender is {gender}</div>
    </div>
  );
};

export default Radiobtn;
