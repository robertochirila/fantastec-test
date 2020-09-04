import "./App.css";
import Game from "./components/Game";
import games from "./games.json";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games,
      game: "",
      selected: false,
    };
  }

  handleGameChange = (e) => {
    const { selected, games } = this.state;
    this.setState({ selected: true });
    let index = e.target.selectedIndex;
    this.setState({ game: games.games[index] });
    //console.log(games.games[index]);
    /*let el = e.target.childNodes[index];
    let option = el.getAttribute("index");
    console.log("Name, Code", e.target.value, option);*/
  };

  render() {
    const { games, game, selected } = this.state;
    let displayOptions = games.games.map((game, index) => {
      return (
        <React.Fragment key={index}>
          <option key={index} name={index}>
            {game.title}
          </option>
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <h3>Select Game</h3>
        <select onChange={this.handleGameChange} name={"name"}>
          {displayOptions}
        </select>
        {selected === true ? (
          <React.Fragment>
            <Game game={game} />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
