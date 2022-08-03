import React from "react";
import CountDown from "../components/CountDown/CountDown";
import SelectSection from "../components/SelectSection/SelectSection";
import styles from "./Home/home.module.css";

function Kpss(props) {
   const [value, setValue] = React.useState("0");
   const handleChange = (event) => {
      setValue(event.target.value);
   };
   return (
      <div className={styles.container}>
         <h1>Kpss İçin Zamanlayıcı</h1>
         {
            // <CountDown minutes={165} />
            value === "0" ? (
               <>
                  <CountDown minutes={130} />
               </>
            ) : (
               <CountDown minutes={100} />
            )
         }
         <SelectSection
            label1="Genel Yetenek-Genel Kültür"
            label2="Eğitim Bilimleri"
            handleChange={handleChange}
            value={value}
         />
      </div>
   );
}

export default Kpss;
