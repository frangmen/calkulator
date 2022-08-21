import React from 'react'
import styles from '../css/button.module.css'

const Button = ({color, value, handleClick}) => {
    let btnColor = "";
    switch (color) {
        case "g":
            btnColor = styles.btnGreen;
            break;
        case "r":
            btnColor = styles.btnRed;
            break;
        case "w":
            btnColor = styles.btnWhite;
            break;
        default:
            break;

    }



  return (
    <div className={styles.containerBtn}>
    <button onClick={()=> handleClick(value)} className={`${styles.btn} ${btnColor}`}>{value}</button>
    </div>
  )
}

export default Button