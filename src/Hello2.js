import React, { useState, useEffect } from "react";

const Hello2 = () => {
  const [number, incCounter] = useState(0);
  const [date, setDate] = useState(new Date());

  //   useEffect plays the role of componentdidmount componentdidupdate componentwillunmount
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch("https//reqres.in/api/users");
  //       const data = await response.json();
  //       return data;
  //     };
  //     fetchData();
  //     console.log("invoking", number);
  //   }, [number]);

  useEffect(() => {
    console.log("render");
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    //   here it will work as unmount
    return () => {
      console.log("unmounting");
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      <div>
        Conter:{number}
        Date:{date.toLocaleTimeString()}
        <button onClick={() => incCounter((prevState) => prevState + 1)}>
          Increase Counter
        </button>
      </div>
    </div>
  );
};

export default Hello2;
