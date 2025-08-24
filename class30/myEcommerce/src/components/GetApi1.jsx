import React, { useState } from "react";
import axios from "axios";

const GetApi1 = () => {
  let [userList, setUserList] = useState([]);
  let [error, setError] = useState(null);

  const getUsers = async () => {
    setUserList([{ name: "Loading...", id: "loading" }]);
    const apiResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (apiResponse.length === 0) {
      setError("Error in API response");
    } else {
      setUserList(apiResponse.data);
      console.log(apiResponse.data);
    }
  };
  return (
    <div>
      <h2>GET User List</h2>
      <button className="btn btn-success" onClick={getUsers}>
        GET Users
      </button>
      <div className="row">
        <div className="col">
          {error == null ? " " : { error }}
          <ul>
            {userList.length > 0 ? (
              userList.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })
            ) : (
              <h2>Click to Load users</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetApi1;
