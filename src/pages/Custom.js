import React from "react";
import CountDown from "../components/CountDown/CountDown";
import Button from "../components/CountDownInput/Button/Button";
import CountDownInput from "../components/CountDownInput/CountDownInput";
import styles from "./Home/home.module.css";

function Custom(props) {
   const [isSubmitted, setIsSubmitted] = React.useState(false);
   const [hour, setHour] = React.useState(0);
   const [minute, setMinute] = React.useState(0);
   const [second, setSecond] = React.useState(0);
   let totalSeconds =
      parseInt(hour * 3600) + parseInt(minute * 60) + parseInt(second);
   return (
      <div className={styles.container}>
         <h1>Zamanlayıcı</h1>
         {isSubmitted && <CountDown seconds={totalSeconds} />}
         {!isSubmitted && (
            <CountDownInput
               setSeconds={setSecond}
               setMinutes={setMinute}
               setHours={setHour}
               setIsSubmitted={setIsSubmitted}
            />
         )}
         {isSubmitted && (
            <Button
               className={styles.buttonContainer}
               onClick={() => setIsSubmitted(false)}
            >
               Yeni Zamanlayıcı Ayarla
            </Button>
         )}
      </div>
   );
}

export default Custom;
