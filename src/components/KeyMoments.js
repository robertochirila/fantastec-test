import React, { Component } from "react";

export class KeyMoments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { keyMoments } = this.props;
    console.log(keyMoments);
    let displayKeyMoments = keyMoments.map((value, index) => {
      return (
        <React.Fragment>
          <li key={index}>
            {value.minute}, {value.event}
          </li>
        </React.Fragment>
      );
    });
    return <ul>{displayKeyMoments}</ul>;
  }
}

export default KeyMoments;
