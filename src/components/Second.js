import React, { useState, useEffect } from 'react';

const Second = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   setCounter((counter) => {
    //     return counter+1;
    //   })
    // }, 1000);
    const timer = setInterval(() => {
      setCounter(counter => counter+1);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    console.log("Everytime");

    return () => {
      console.log("Called before unmounting");
    }
  }, []);

  return <span>You spent {counter} seconds</span>;
}

export default Second;