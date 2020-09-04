import React, { Component } from "react";

export class Commentary extends Component {
  displayList = () => {
    return (
      <div>
        <p>Display List</p>
      </div>
    );
  };
  render() {
    return <div>{this.displayList()}</div>;
  }
}

export default Commentary;
