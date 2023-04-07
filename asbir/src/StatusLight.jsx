import React from "react";

import './StatusLight.css'

export const StatusLight = ({ status }) => {
  let color;

  switch (status) {
    case "green":
      color = "green";
      break;
    case "yellow":
      color = "yellow";
      break;
    case "red":
      color = "red";
      break;
    default:
      color = "gray";
      break;
  }

  return <div className='StatusLight' style={{ backgroundColor: color}} onClick={(() => {
    window.alert(status)
  })}></div>;
};