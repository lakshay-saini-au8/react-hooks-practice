import React, { useState } from "react";

const Hello = () => {
  // to create state useState return state value and a function to change the value of the state

  const [name, setName] = useState("lakshay saini");
  const [number, incCounter] = useState(0);
  return (
    <div>
      this is my name {name}
      <button onClick={() => setName("Rich saini")}>Change name </button>
      <div>
        Conter:{number}
        <button onClick={() => incCounter((prevState) => prevState + 1)}>
          Increase Counter
        </button>
      </div>
    </div>
  );
};

export default Hello;
