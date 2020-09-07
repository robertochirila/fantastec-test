import React from "react";

const Commentators = (props) => {
  return (
    <div>
      <h5>
        Your commentators for today {props.commentators[0]} and{" "}
        {props.commentators[1]}
      </h5>
    </div>
  );
};

export default Commentators;
