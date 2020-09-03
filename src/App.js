import React, { createContext, useState } from "react";
import "./App.css";
// import Hello from "./hello";
import Hello5 from "./hello5";
export const DataContext = createContext();
function App() {
  const [state, setState] = useState(false);
  const toggleisLoading = () => {
    setState(!state);
  };
  return (
    <DataContext.Provider
      value={{ state: state, toggleisLoading: toggleisLoading }}
    >
      <div className="App">
        <Hello5 />
      </div>
    </DataContext.Provider>
  );
}

export default App;
