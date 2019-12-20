import React from "react";
import "./style.css";

function Title(props) {
  return(
  <div>
   <h1 className="title">Gravity Falls Clicker Game!</h1>
   <h2 className="title"> Score:{props.score}</h2>
   <h3 className="score"> {props.message}</h3>
   </div>
  )}

export default Title;