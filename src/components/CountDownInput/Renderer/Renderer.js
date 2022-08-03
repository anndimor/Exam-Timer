import React from "react";
import styles from "./renderer.module.css";

const Completionist = () => <span>You are good to go!</span>;

function Renderer({ hours, minutes, seconds, completed }) {
   // Render a countdown
   return (
      <div className={styles.mainContainer}>
         <div className={styles.timeTextContainer}>
            <div className={styles.singleTimeContainer}>
               <span className={styles.timeText}>{hours}</span>
               <span className={styles.timeTitle}>Saat</span>
            </div>

            <h1 className={styles.timeText} style={{ marginBottom: "50px" }}>
               :
            </h1>

            <div className={styles.singleTimeContainer}>
               <span className={styles.timeText}>{minutes}</span>
               <span className={styles.timeTitle}>Dakika</span>
            </div>

            <h1 className={styles.timeText} style={{ marginBottom: "50px" }}>
               :
            </h1>

            <div className={styles.singleTimeContainer}>
               <span className={styles.timeText}>{seconds}</span>
               <span className={styles.timeTitle}>Saniye</span>
            </div>
         </div>
      </div>
   );
}

export default Renderer;
