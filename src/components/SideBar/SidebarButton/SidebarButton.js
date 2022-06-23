import React from "react";
import "./SidebarButton.css";

function SidebarButton(props) {
   return (
      <button className="sidebar-btn" onClick={props.onClick}>
         {props.text}
      </button>
   );
}

export default SidebarButton;
