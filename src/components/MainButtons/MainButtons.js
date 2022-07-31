import React from "react";
import MainButton from "./MainButton";
import "./MainButton.css";

function MainButtons(props) {
   return (
      <div className="btn-container">
         <MainButton text="Start" />
         <MainButton text="Reset" />
      </div>
   );
}

export default MainButtons;
