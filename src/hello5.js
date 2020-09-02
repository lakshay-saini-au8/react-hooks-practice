import React, { useRef, useEffect } from "react";

const Hello5 = () => {
  // we can use ref as kto make a instance variable and also to target a dom node
  //   useref value deosnt change on start change [[]]
  //   const api = useRef("https//api.razarpor.com/ver");

  const inputref = useRef(null);

  useEffect(() => {
    console.log("updating");
    // console.log(api);
    // const script = document.createElement("script");
    // script.src = api.current;
  });
  return (
    <div>
      <button onClick={() => console.log(inputref.current)}>onClick</button>
      <input type="text" ref={inputref} />
    </div>
  );
};

export default Hello5;
