import React, { useReducer } from "react";
import UserList from "./UserList";

const actionTypes = {
  SET_USERS: "SET_USERS",
  TOGGLE_LOADING: "TOGGLE_LOADING",
};

const initialState = {
  users: null,
  isLoading: false,
};

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_USERS:
      return { ...state, users: payload };
    case actionTypes.TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};

export const UserContext = React.createContext();

const App1 = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div>
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

export default App1;
