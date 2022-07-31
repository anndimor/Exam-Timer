import React from "react";
import "./MainButton.css";

function MainButton(props) {
   return (
      <button className="main-btn" onClick={props.onClick}>
         {props.text}
      </button>
   );
}

export default MainButton;
