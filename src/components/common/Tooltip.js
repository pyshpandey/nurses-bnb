import React, { useState } from "react";
import "../../assets/scss/tooltip.scss";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    if (props.for !== "owner") {
      setActive(false);
    } else
      timeout = setTimeout(() => {
        setActive(true);
      }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <>
      <div
        className={props.for == "owner" ? "Tooltip-Wrapper" : ""}
        // When to show the tooltip
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {/* Wrapping */}
        {props.children}
        {active && (
          <div className={`Tooltip-Tip ${props.direction || "top"}`}>
            {/* Content */}
            {props.content}
          </div>
        )}
      </div>
    </>
  );
};

export default Tooltip;
