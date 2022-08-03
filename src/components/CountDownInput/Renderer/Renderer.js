import React, { useEffect, useRef } from "react";
import styles from "./renderer.module.css";

const Completionist = () => <span>You are good to go!</span>;

function Renderer({
   hours,
   minutes,
   seconds,
   setHours,
   setMinutes,
   setSeconds,
}) {
   // Render a countdown
   const inputReference = useRef(null);
   const handleHourChange = (e) => {
      setHours(e.target.value);
   };
   const handleMinuteChange = (e) => {
      setMinutes(e.target.value);
   };
   const handleSecondChange = (e) => {
      setSeconds(e.target.value);
   };
   useEffect(() => {
      inputReference.current.focus();
   }, []);
   return (
      <div className={styles.mainContainer}>
         <div className={styles.timeTextContainer}>
            <div className={styles.singleTimeContainer}>
               <input
                  value={parseInt(hours)}
                  type="number"
                  className={styles.timeInput}
                  onChange={handleHourChange}
                  ref={inputReference}
               ></input>
               <span className={styles.timeTitle}>Saat</span>
            </div>

            <h1 className={styles.timeText} style={{ marginBottom: "50px" }}>
               :
            </h1>

            <div className={styles.singleTimeContainer}>
               <input
                  value={minutes}
                  type="number"
                  className={styles.timeInput}
                  onChange={handleMinuteChange}
               ></input>
               <span className={styles.timeTitle}>Dakika</span>
            </div>

            <h1 className={styles.timeText} style={{ marginBottom: "50px" }}>
               :
            </h1>

            <div className={styles.singleTimeContainer}>
               <input
                  value={seconds}
                  type="number"
                  className={styles.timeInput}
                  onChange={handleSecondChange}
               ></input>
               <span className={styles.timeTitle}>Saniye</span>
            </div>
         </div>
      </div>
   );
}

export default Renderer;
