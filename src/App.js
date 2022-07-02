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

///////////////////////useState

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default App;

/////////////////////  useEffect


import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  useEffect(() => { 
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    
    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

export default App;
















