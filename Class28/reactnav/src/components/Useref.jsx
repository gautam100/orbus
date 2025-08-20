import { useRef } from "react";

const Useref = () => {
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userEmail = email.current.value;
    const userPwd = password.current.value;
    console.log(userEmail, userPwd);
    document.querySelector("#result_container").innerHTML =
      "Entered value is " + userEmail + " & " + userPwd;
  };
  return (
    <div>
      <h1>UnControlled Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={email}
          id="user_email"
          placeholder="Enter Email"
        />
        <br />
        <input
          type="password"
          ref={password}
          id="user_pwd"
          placeholder="Enter Password"
        />
        <br />
        <button>Submit</button>
      </form>

      <div id="result_container"></div>
    </div>
  );
};

export default Useref;
