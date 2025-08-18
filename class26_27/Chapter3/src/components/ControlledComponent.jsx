import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <div>
      <h1>Controlled Component</h1>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button>Submit</button>
        <button>Clear</button>
      </form>

      {name}
      <br />
      {password}
      <br /> 
      {email}

    </div>
  );
};

export default ControlledComponent;
