import React from "react";
import { Link } from "react-router-dom";
import Button from "../CountDown/Button/Button";
import styles from "./navigator.module.css";
import { useNavigate } from "react-router-dom";

function Navigator(props) {
   const navigate = useNavigate();
   return (
      <div className={styles.container}>
         <Button
            className={styles.buttonContainer}
            onClick={() => navigate("/tyt-sayaci")}
         >
            TYT
         </Button>
         <Button
            className={styles.buttonContainer}
            onClick={() => navigate("/ayt-sayaci")}
         >
            AYT
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
            onClick={() => alert("Bu sayfaya erişim yetkiniz yok.")}
         >
            Özel
         </Button>
      </div>
   );
}

export default Navigator;
