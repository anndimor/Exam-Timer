import React from "react";
import styles from "./button.module.css";

function Button(props) {
   return (
      <button className={styles.buttonContainer} {...props}>
         {props.children}
      </button>
   );
}

export default Button;
