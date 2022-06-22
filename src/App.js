import logo from "./logo.svg";
import "./style.css";
import React from "react";
import Timer from "./components/Timer";
import Onboarding from "./components/Onboarding";

function App() {
   return (
      <div className="container">
         <Onboarding />
         <Timer />
      </div>
   );
}

export default App;
