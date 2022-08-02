import React from "react";
import CountDown from "../components/CountDown/CountDown";
import styles from "./Home/home.module.css";
function Tyt(props) {
   return (
      <div className={styles.container}>
         <h1>TYT İçin Zamanlayıcı</h1>
         <CountDown minutes={165} />
      </div>
   );
}

export default Tyt;
