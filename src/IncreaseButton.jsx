import React from "react";

export default function IncreaseButton({ timesPressed, setTimesPressed, setLastPressedAt }) {
  return (
    <div>
       <button onClick={() => setTimesPressed(timesPressed + 1)}
        onMouseDown={() => setLastPressedAt(Date.now())}>
        Press Me
      </button>
   </div>
  );
}
