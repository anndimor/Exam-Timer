import React from "react";
import CountDown from "../components/CountDown/CountDown";
import styles from "./Home/home.module.css";
function Lgs(props) {
   return (
      <div className={styles.container}>
         <h1>LGS İçin Zamanlayıcı</h1>
         <CountDown minutes={90} />
      </div>
   );
}

export default Lgs;
