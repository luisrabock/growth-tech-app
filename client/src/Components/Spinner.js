import React from "react";

const Spinner = () => {
  return (
    <div className="ui active inverted dimmer" data-test="component-spinner">
      <div className="ui text loader">Loading</div>
    </div>
  );
};

export default Spinner;
