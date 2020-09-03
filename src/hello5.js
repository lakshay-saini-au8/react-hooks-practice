import React, { useRef, useEffect, useContext } from "react";
import { DataContext } from "./App";

const Hello5 = () => {
  // we can use ref as kto make a instance variable and also to target a dom node
  //   useref value deosnt change on start change [[]]
  //   const api = useRef("https//api.razarpor.com/ver");
  // context here we are using data from app
  const { state, toggleisLoading } = useContext(DataContext);
  // const inputref = useRef(null);

  // useEffect(() => {
  //   console.log("updating");
  //   // console.log(api);
  //   // const script = document.createElement("script");
  //   // script.src = api.current;
  // });
  console.log(state, toggleisLoading);
  return (
    <div>
      <div>{state ? "Hi its loading" : null}</div>
      <button onClick={() => toggleisLoading()}>Toggle</button>
    </div>
  );
};

export default Hello5;
