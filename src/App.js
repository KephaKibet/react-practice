// import { useState, useEffect } from "react"


// const ClockUsingHooks = props => {
//   const [time, setTime] = useState(new Date())

//   const changeTime = () => {
//       setTime(new Date())
//   }

//   useEffect(() => {
//       const tick = setInterval(() => {
//           changeTime()
//       }, 1000)
//       return () => clearInterval(tick)
//   })
//   return (
//       <div className="clock">
//           <h1>Hello! This is a function component clock.</h1>
//           <h2>It is {time.toLocaleTimeString()}.</h2>
//       </div>
//   )
// }

// export default ClockUsingHooks;


import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;


