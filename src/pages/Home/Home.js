import React from "react";
import CountDown from "../../components/CountDown/CountDown";
import styles from "./home.module.css";

function Home(props) {
   return (
      <div className={styles.container}>
         <CountDown minutes={165} />
      </div>
   );
}

export default Home;
