import React from "react";
import "./SideBar.css";
import SidebarButton from "./SidebarButton/SidebarButton";

function SideBar(props) {
   const handleClick = (title) => {
      props.setType(title);
   };
   return (
      <div className="container-sidebar">
         <h2>Sınav Türü</h2>
         <div className="buttons-container">
            <SidebarButton
               text="TYT"
               onClick={() => {
                  handleClick("TYT");
               }}
            />
            <SidebarButton
               text="AYT"
               onClick={() => {
                  handleClick("AYT");
               }}
            />
            <SidebarButton
               text="LGS"
               onClick={() => {
                  handleClick("LGS");
               }}
            />
            <SidebarButton
               text="SAT"
               onClick={() => {
                  handleClick("SAT");
               }}
            />
            <SidebarButton
               text="AP"
               onClick={() => {
                  handleClick("AP");
               }}
            />
         </div>
      </div>
   );
}

export default SideBar;
