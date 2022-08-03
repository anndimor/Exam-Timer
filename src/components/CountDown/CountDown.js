import React from "react";
import Countdown, { CountdownApi } from "react-countdown";
import { useTimer } from "use-timer";
import Button from "./Button/Button";
import useAudio from "../../hooks/useAudio";
import Renderer from "./Renderer/Renderer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ReplayIcon from "@mui/icons-material/Replay";
import toast from "react-hot-toast";

function CountDown(props) {
   const url = require("../../audio/dingdong.wav");
   const [isCompleted, setIsCompleted] = React.useState(false);
   const [initialTime, setInitialTime] = React.useState(50);
   const [playing, toggle] = useAudio(url);
   const { time, start, pause, reset, status } = useTimer({
      initialTime: props.seconds | (props.minutes * 60),
      timerType: "DECREMENTAL",
      endTime: 0,
      onTimeOver: async () => {
         setIsCompleted(true);
         toggle();
         toast.success("Süre Doldu!", { duration: 5000 });
         reset();
      },
   });
   let hours = Math.floor(time / 3600);
   let minutes = Math.floor((time % 3600) / 60);
   let seconds = Math.floor(time % 60);
   // Render a complete state
   if (isCompleted) {
      console.log("isCompleted");
   }
   const handleClick = () => {
      if (status === "STOPPED" || status === "PAUSED") {
         start();
      } else {
         pause();
      }
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
         <Renderer hours={hours} minutes={minutes} seconds={seconds} />

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
               {status === "STOPPED" || status === "PAUSED" ? (
                  <PlayArrowIcon fontSize="large" />
               ) : (
                  <PauseIcon fontSize="large" />
               )}
            </Button>
            <Button
               onClick={reset}
               style={{
                  borderRadius: 50,
                  width: "5rem",
                  height: "5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <ReplayIcon fontSize="large" />
            </Button>
         </div>
      </div>
   );
}

export default CountDown;
