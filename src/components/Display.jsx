import React from 'react'
import styles from '../css/display.module.css'

const Display = ({display, operation, result}) => {
  return (
    <div className={styles.display}>
      <div className={styles.mode}>
        <span className={styles.containerBtn}>
          <button className={`${styles.modeBtn} ${styles.modeDark}`}>☀️</button>
          <button className={`${styles.modeBtn} ${styles.modeLight}`}>🌙</button>
        </span>
      </div>
      <div className={styles.operation}> 
        <span className={styles.operador}> {result} </span> 
       </div>
     <div className={styles.result}> {display}</div>
   </div>
      
  );
  
};





export default Display