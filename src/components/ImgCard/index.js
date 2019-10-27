import React from "react";
import "./style.css";

function ImgCard(props) {
    return (
        <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.guessedPicture(props.id)}/>
      </div>
    </div>
    )
}

export default ImgCard