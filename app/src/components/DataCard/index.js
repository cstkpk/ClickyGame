import React from "react";
import "./style.css";

function DataCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} className="card-img-top" 
        onClick={() => props.checkClicked(props.id)} 
        />
      </div>
    </div>
  );
}

export default DataCard;