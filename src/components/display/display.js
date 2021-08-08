import React from "react";

import "./display.css";

const Display = (props) => {

  const {value} = props;

  return <div className="display">{value}</div>
}

export default Display;