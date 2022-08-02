import React from "react";
import CountDown from "../components/CountDown/CountDown";
import styles from "./Home/home.module.css";
function Kpss(props) {
   return (
      <div className={styles.container}>
         <h1>Kpss İçin Zamanlayıcı</h1>
         {
            // <CountDown minutes={165} />
            document.getElementById("radio-one").value === "0" ? (
               <>
                  <CountDown minutes={165} />
                  <h1>AA</h1>
               </>
            ) : (
               <CountDown minutes={90} />
            )
         }
         <div class="switch-field">
            <input
               type="radio"
               id="radio-one"
               name="switch-one"
               value="0"
               checked
            />
            <label for="radio-one">Genel Yetenek-Genel Kültür</label>
            <input type="radio" id="radio-two" name="switch-one" value="1" />
            <label for="radio-two">Eğitim Bilimleri</label>
         </div>
      </div>
   );
}

export default Kpss;
