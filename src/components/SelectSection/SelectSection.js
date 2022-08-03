import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import styles from "./SelectSection.module.css";

const containerBgColor = getComputedStyle(
   document.documentElement
).getPropertyValue("--card-bg-color");
const buttonBgColor = getComputedStyle(
   document.documentElement
).getPropertyValue("--button-bg-color");
const buttonSelectedColor = getComputedStyle(
   document.documentElement
).getPropertyValue("--tint-color");

function SelectSection(props) {
   return (
      <FormControl sx={formContainerStyle}>
         <span className={styles.text}>Sınav Oturumu:</span>
         <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={props.handleChange}
            value={props.value}
         >
            <FormControlLabel
               value="0"
               control={
                  <Radio
                     sx={{
                        color: buttonBgColor,
                        "&.Mui-checked": {
                           color: buttonSelectedColor,
                        },
                     }}
                  />
               }
               label={props.label1}
               sx={{
                  color: "white",
                  "&.MuiTypography-root": {
                     fontWeight: "bold",
                  },
               }}
            />
            <FormControlLabel
               value="1"
               control={
                  <Radio
                     sx={{
                        color: buttonBgColor,
                        "&.Mui-checked": {
                           color: buttonSelectedColor,
                        },
                     }}
                  />
               }
               label={props.label2}
               sx={{
                  color: "white",
               }}
            />
            {props.label3 && (
               <FormControlLabel
                  value="2"
                  control={
                     <Radio
                        sx={{
                           color: buttonBgColor,
                           "&.Mui-checked": {
                              color: buttonSelectedColor,
                           },
                        }}
                     />
                  }
                  label={props.label3}
                  sx={{
                     color: "white",
                  }}
               />
            )}
         </RadioGroup>
      </FormControl>
   );
}

const formContainerStyle = {
   backgroundColor: containerBgColor,
   borderRadius: "15px",
   padding: "2rem",
   /*box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;*/
   boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
   userSelect: "none",
   width: "250px",
   display: "flex",
   flexDirection: "column",
};

export default SelectSection;
