import React from "react";
import "../css/Timeline.css";

const Timeline = () => {
  const months = [
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
  ];
  const items = () => {
    return <li></li>;
  };

  return (
    <div className="timeline-wrapper">
      <div className="line-wrapper">
        <div className="line"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="items-wrapper">
        {months.map((month, index) => (
          <div className="item" key={index}>
            <p>{month}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
