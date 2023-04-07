import React from "react";
import { StatusLight } from "./StatusLight";

import './StatusCard.css'

export const StatusCard = ({ status, title, description }) => {
  return (
    <div className="StatusCard">
      <div className="StatusCardLight">
        <StatusLight status={status} />
      </div>
      <div className="StatusCardInformation">
        <h3 className="StatusCardHeaderHeading">{title}</h3>
        <p className="StatusCardDescription">{description}</p>
      </div>
    </div>
  );
};