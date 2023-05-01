import React from "react";

import './StatusLight.css'

export const StatusLight = ({ status }) => {
  let color;
  let information;

  switch (status) {
    case "green":
      color = "green";
      information = "The node is green, meaning that it is working as intended!"
      break;
    case "yellow":
      color = "yellow";
      information = "The node is yellow, meaning that it has been down for less than 15 seconds. Don't worry, this can happen from time to time."
      break;
    case "red":
      color = "red";
      information = "The node is red, meaning that the node has been down for more than 15 seconds. This usually requires a system restart, so head to the Dashboard!"
      break;
    default:
      information = "Something is uniquely wrong! Restart the system."
      color = "gray";
      break;
  }

  return <div className='StatusLight' style={{ backgroundColor: color}} onClick={(() => {
    window.alert(information)
  })}></div>;
};