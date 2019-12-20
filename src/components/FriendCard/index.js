import React from "react";
import "./style.css"
function FriendCard(props) {
  return (
      <div className="card-deck">
        <div className="card char">
            <img onClick={props.clicked} className="card-img-top img-fluid"alt={props.name} src = {props.image}/>
          </div>
        </div>
  );
}
export default FriendCard;