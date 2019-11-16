import React from "react";
import "./style.css";

class Score extends React.Component {
state = {
    score: this.props.score,
    highScore: this.props.highScore
}

  render (){
      return (<><h3 className="display-4">Score: {this.state.score}</h3>
  <h3 className="display-4">High Score: {this.state.highScore}</h3></>)}
}

export default Score;