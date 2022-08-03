import React from "react";
import Button from "../CountDown/Button/Button";
import styles from "./navigator.module.css";
import { useNavigate } from "react-router-dom";

function Navigator(props) {
   const navigate = useNavigate();
   return (
      <div className={styles.container}>
         <Button
            className={styles.buttonContainer}
            onClick={() => navigate("/yks-sayaci")}
         >
            YKS
         </Button>
         <Button
            className={styles.buttonContainer}
            onClick={() => navigate("/lgs-sayaci")}
         >
            LGS
         </Button>
         <Button
            className={styles.buttonContainer}
            onClick={() => navigate("/kpss-sayaci")}
         >
            KPSS
         </Button>
         <Button
            className={styles.buttonContainer}
            onClick={() => navigate("/custom")}
         >
            Özel
         </Button>
      </div>
   );
}

export default Navigator;
