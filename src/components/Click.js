import React, { useState } from "react";

const Click = () => {
  const [counters, setCounters] = useState(0);

  function handleButtonCounter() {
    setCounters(counters+1);
  }

  return (
    <>
      <span>You click {counters} times</span><br />
      <button onClick={handleButtonCounter}>Click me</button>
    </>
  );
}

export default Click;