import React from "react";
import DateTimeDisplay from "./DateTimeDisplay/DateTimeDisplay";
import { useCountdown } from "../../hooks/useCountDown";
import "./CountdownTimer.css";

const ExpiredNotice = () => {
   return (
      <div className="expired-notice">
         <span>Expired!!!</span>
         <p>Please select a future date and time.</p>
      </div>
   );
};

const ShowCounter = ({ days, hours, minutes, seconds, type }) => {
   return (
      <div className="main-counter">
         <h2 className="countdown-title">{type} Sınavı İçin Zamanlayıcı</h2>
         <div className="show-counter">
            <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
            <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
            <DateTimeDisplay
               value={seconds}
               type={"Seconds"}
               isDanger={false}
            />
         </div>
      </div>
   );
};

const CountdownTimer = ({ targetDate, type }) => {
   const [days, hours, minutes, seconds] = useCountdown(targetDate);

   if (days + hours + minutes + seconds <= 0) {
      return <ExpiredNotice />;
   } else {
      return (
         <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            type={type}
         />
      );
   }
};

export default CountdownTimer;
