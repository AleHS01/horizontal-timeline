import React, { useState } from "react";
import "../css/HoverBox.css";

const HoverBox = ({ children, content, bgColor }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 10);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div
      className="hoverbox-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div
          className={`hoverbox left`}
          style={{
            backgroundColor: bgColor,
            "--tooltip-arrow-color": bgColor,
          }}
        >
          <h5 className="deadline">{content.deadline}</h5>
          <p className="description">{content.description}</p>
        </div>
      )}
    </div>
  );
};

export default HoverBox;
