import React from "react";
import "../css/Timeline.css";
import HoverBox from "./HoverBox";
import deadline_data from "../deadline";

const Timeline = () => {
  const bubbles = (items) => {
    return items.map((item, index) => {
      let content = {
        deadline: item.deadline,
        description: item.description,
      };
      return (
        <HoverBox key={index} content={content} bgColor={item.bgColor}>
          <div
            className="bubble"
            style={{ backgroundColor: item.bgColor }}
          ></div>
        </HoverBox>
      );
    });
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
        {deadline_data.map((data, index) => (
          <div className="item" key={index}>
            <p className="month">{data.month}</p>
            <div className="deadlines-bubble">{bubbles(data.items)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
