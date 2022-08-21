import React from "react";
import Button from './Button'
import styles from '../css/board.module.css'

const Board = ({addToDisplay}) => {


const values = [
  {color:"g", value:"AC"},
  {color:"g", value:"+/-"},
  {color:"g", value:"%"},
  {color:"r", value:"÷"},
  {color:"w", value:7},
  {color:"w", value:8},
  {color:"w", value:9},
  {color:"r", value:"*"},
  {color:"w", value:4},
  {color:"w", value:5},
  {color:"w", value:6},
  {color:"r", value:"-"},
  {color:"w", value:1},
  {color:"w", value:2},
  {color:"w", value:3},
  {color:"r", value:"+"},
  {color:"w", value:"Volver"},
  {color:"w", value:0},
  {color:"w", value:"."},
  {color:"r", value:"="},

];


  return (
    <div className={styles.board}> 
      {values.map((value, i) => {
    return <Button key={i} color={value.color} value={value.value} handleClick={addToDisplay}/>
  })}
    </div>
  );
}



export default Board;
