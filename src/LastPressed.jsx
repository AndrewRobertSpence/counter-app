import React from "react";

export default function LastPressed({ lastPressedAt }) {
  if (lastPressedAt === 0) {
    return (
      <div>
        <label>Button has not been pressed</label>
      </div>
    );
  } else {
    const date = new Date(lastPressedAt);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const times = date.toLocaleString("default", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return (
      <div>
        <label>
          Last Pressed:<br></br>
          {month} {day} {times}
        </label>
      </div>
    );
  }
}
