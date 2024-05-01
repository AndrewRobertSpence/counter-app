import "./MainView.css";
import React, { useState } from "react";
import IncreaseButton from "./IncreaseButton";
import LastPressed from "./LastPressed";
import Counter from "./Counter";

function MainView() {
  const [timesPressed, setTimesPressed] = useState(0);
  const [lastPressedAt, setLastPressedAt] = useState(0);

  return (
    <div className="counter_container">
      <Counter timesPressed={timesPressed} />
      <IncreaseButton setTimesPressed={setTimesPressed} timesPressed={timesPressed} setLastPressedAt={setLastPressedAt} />
      <LastPressed lastPressedAt={lastPressedAt} />
    </div>
  );
}

export default MainView;
