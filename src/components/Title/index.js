import React from "react";
import "./style.css";

function Title(props) {
  return (<div className="jumbotron">
  <h1 className="display-4">{props.children}</h1>
  <p className="lead">Clicky memory game!! Click on a different image every time.</p>
  <hr className="my-4"/>
  <p>If you click on a repeated image, you lose! The game will restart.</p>
</div>);
}

export default Title;