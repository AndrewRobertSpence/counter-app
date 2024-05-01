import React from "react";

export default function Counter({ timesPressed }) {
  return (
    <div>
      <label>Pressed <br></br> {timesPressed} <br></br> Times</label>
    </div>
  );
}
