import React from "react";
import CountDown from "../components/CountDown/CountDown";
import styles from "./Home/home.module.css";
function Ayt(props) {
   return (
      <div className={styles.container}>
         <h1>AYT İçin Zamanlayıcı</h1>
         <CountDown minutes={180} />
      </div>
   );
}

export default Ayt;
