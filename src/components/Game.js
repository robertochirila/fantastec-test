import React, { Component } from "react";
import { Commentary } from "./Commentary";
import { KeyMoments } from "./KeyMoments";
import Title from "./Title";

export class Game extends Component {
  componentDidMount() {
    console.log("it rendered");
  }
  render() {
    const { game } = this.props;
    console.log(game);
    return (
      <div>
        <Title title={game.title} />
        <Commentary />
        <KeyMoments />
      </div>
    );
  }
}

export default Game;
