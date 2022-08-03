import React from "react";
import Button from "./Button/Button";
import Renderer from "./Renderer/Renderer";
import CheckIcon from "@mui/icons-material/Check";

function CountDown(props) {
   const [hours, setHours] = React.useState(0);
   const [minutes, setMinutes] = React.useState(0);
   const [seconds, setSeconds] = React.useState(0);
   // Render a complete state
   const handleClick = () => {
      props.setSeconds(seconds);
      props.setMinutes(minutes);
      props.setHours(hours);
      props.setIsSubmitted(true);
   };
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "0px solid green",
            padding: "20px",
            width: "30%",
         }}
      >
         <Renderer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
         />

         <div style={{ display: "flex" }}>
            <Button
               onClick={handleClick}
               style={{
                  borderRadius: 50,
                  width: "5rem",
                  height: "5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <CheckIcon fontSize="large" />
            </Button>
         </div>
      </div>
   );
}

export default CountDown;
