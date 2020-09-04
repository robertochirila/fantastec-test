import React, { Component } from "react";
import { Commentary } from "./Commentary";
import { KeyMoments } from "./KeyMoments";
import Title from "./Title";
import Commentators from "./Commentators";
import Date from "./Date";

const Game = (props) => {
  console.log(props);
  return (
    <div>
      <Title title={props.game.title} />
      <Date date={props.game.date} />
      <Commentators commentators={props.game.commentators} />
      <Commentary commentary={props.game.commentary} />
      <KeyMoments keyMoments={props.game.keyMoments} />
    </div>
  );
};

export default Game;
