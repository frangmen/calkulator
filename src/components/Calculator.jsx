import React from "react";
import Board from "./Board";
import Display from "./Display";
import styles from "../css/calculator.module.css";
import { useState } from "react";

const Calculator = () => {

  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState("");
  
  const addToDisplay = (value) => {
    
      if (value === "AC") {
        clearDisplay()
    }
      else if (value === "=") {
        calculate()
    }

    else if (value === "Volver") {
      deleteLast()
    }
    
    else if (value === "+/-") {
      setDisplay(display * -1);
    }
    else if (value === "%") {
      setDisplay(display / 100);
    }
    else {
      if (display === "0") {
        setDisplay(value);
      }
      else {
        setDisplay(display.toString() + value.toString());
      }
    }
  }

  const clearDisplay = () => {
    setDisplay("0");
    setResult("");
  }


  const deleteLast = () => {
    setDisplay(display.toString().slice(0, -1));
  }

  const calculate = () => {
    setResult(eval(result.toString() + display.toString()));
        setDisplay(eval(result.toString() + display.toString()));
  } 

  return (
    <div className={styles.calculator}>
      <Display display={display} result={result}/>
      <Board addToDisplay={addToDisplay} />
    </div>
  );
};

export default Calculator;
