import React from "react";
import CountDown from "../components/CountDown/CountDown";
import SelectSection from "../components/SelectSection/SelectSection";
import styles from "./Home/home.module.css";

function Yks(props) {
   const [value, setValue] = React.useState("0");
   const handleChange = (event) => {
      setValue(event.target.value);
   };
   return (
      <div className={styles.container}>
         <h1>
            {value === "0" ? "TYT" : value === "1" ? "AYT" : "YDT"} İçin
            Zamanlayıcı
         </h1>
         <>
            {
               // <CountDown minutes={165} />
               value === "0" && <CountDown minutes={165} />
            }
            {
               // <CountDown minutes={165} />
               value === "1" && <CountDown minutes={180} />
            }
            {
               // <CountDown minutes={165} />
               value === "2" && <CountDown minutes={120} />
            }
         </>
         <SelectSection
            label1="Temel Yeterlilik Testi (TYT)"
            label2="Alan Yeterlilik Testi (AYT)"
            label3="Yabancı Dil Testi (YDT)"
            handleChange={handleChange}
            value={value}
         />
      </div>
   );
}

export default Yks;
