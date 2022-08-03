import React from "react";
import Button from "../CountDown/Button/Button";
import styles from "./navigator.module.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineMenu } from "react-icons/ai";
function Navigator(props) {
   const navigate = useNavigate();
   const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
   return (
      <>
         {isHamburgerOpen && (
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
         )}
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
         <Button className={styles.hamburgerButtonContainer}>
            <AiOutlineMenu className={styles.menuIcon} />
         </Button>
      </>
   );
}

export default Navigator;
