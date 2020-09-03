import React, { useContext, useEffect } from "react";
import { UserContext } from "./App1";
const UserList = () => {
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https//reqres.in/api/users");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return state.users ? (
    <ul>
      {state.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </ul>
  ) : null;
};

export default UserList;
