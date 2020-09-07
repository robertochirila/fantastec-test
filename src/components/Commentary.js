import React, { Component } from "react";

export class Commentary extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  /*displayCommentary = () => {
    const { commentary } = this.props;
    return commentary.map((value, index) => {
      return <li key={index}>{value}</li>;
    });
  };*/
  render() {
    const { commentary } = this.props;
    const displayCommentary = commentary.map((value, index) => {
      return (
        <React.Fragment>
          <li key={index}>
            {value.minute}, {value.text}
          </li>
        </React.Fragment>
      );
    });
    return <ul>{displayCommentary}</ul>;
  }
}

export default Commentary;
