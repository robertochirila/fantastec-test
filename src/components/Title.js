import React from "react";

const Title = (props) => {
  const { title } = props;
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
