import React, { useState } from "react";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";

import "./App.css";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
   const LGS = 75 * 60 * 1000;
   const TYT = 75 * 60 * 1000;
   const AYT = 75 * 60 * 1000;
   const SAT = 75 * 60 * 1000;
   const YDS = 75 * 60 * 1000;
   const NOW_IN_MS = new Date().getTime();

   const dateTimeAfterThreeDays = NOW_IN_MS + LGS;

   const [type, setType] = useState("LGS");

   return (
      <div className="container">
         <h1 className="title">Sınav Sayacı</h1>
         <div className="main-container">
            <SideBar setType={setType} />
            <CountdownTimer type={type} targetDate={dateTimeAfterThreeDays} />
         </div>
      </div>
   );
}
