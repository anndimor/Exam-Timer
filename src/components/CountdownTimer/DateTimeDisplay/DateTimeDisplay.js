import React from "react";
import "./DateTimeDisplay.css";

const DateTimeDisplay = ({ value, type, isDanger }) => {
   return (
      <div className="countdown">
         <p className="value-text">{value}</p>
         <span className="type-text">{type}</span>
      </div>
   );
};

export default DateTimeDisplay;
