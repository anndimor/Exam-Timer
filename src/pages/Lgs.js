import React from "react";
import CountDown from "../components/CountDown/CountDown";
import SelectSection from "../components/SelectSection/SelectSection";
import styles from "./Home/home.module.css";

function Lgs(props) {
   const [value, setValue] = React.useState("0");
   const handleChange = (event) => {
      setValue(event.target.value);
   };
   return (
      <div className={styles.container}>
         <h1>LGS İçin Zamanlayıcı</h1>
         {
            // <CountDown minutes={165} />
            value === "0" ? (
               <>
                  <CountDown minutes={75} />
               </>
            ) : (
               <CountDown minutes={80} />
            )
         }
         <SelectSection
            label1="Sözel"
            label2="Sayısal"
            handleChange={handleChange}
            value={value}
         />
      </div>
   );
}

export default Lgs;
