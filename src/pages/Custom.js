import React from "react";
import CountDown from "../components/CountDown/CountDown";
import CountDownInput from "../components/CountDownInput/CountDownInput";
import styles from "./Home/home.module.css";

function Custom(props) {
   const [isSubmitted, setIsSubmitted] = React.useState(false);
   return (
      <div className={styles.container}>
         <h1>Zamanlayıcı</h1>
         {isSubmitted && <CountDown minutes={165} />}
         {!isSubmitted && <CountDownInput minutes={200} />}
         <button onClick={() => setIsSubmitted(true)}>Click me</button>
      </div>
   );
}

export default Custom;
