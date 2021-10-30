import React from "react";
import "./AddNewCard.css";

function AddNewCard(props) {
  return (
    <div className="addnewcard">
      <button onClick={props.addCard}>+</button>
    </div>
  );
}

export default AddNewCard;
