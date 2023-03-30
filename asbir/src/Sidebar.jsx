import React, { useState } from "react";
import { StatusCard } from "./StatusCard";

import './Sidebar.css'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cardData = [
    { status: "green", title: "Card Title 1", description: "This is a description of the first card." },
    { status: "yellow", title: "Card Title 2", description: "This card has a different title and description." },
    { status: "red", title: "Card Title 3", description: "This is the description of the third card." },
    { status: "green", title: "Card Title 4", description: "This is a description of the fourth card." },
    { status: "yellow", title: "Card Title 5", description: "This card has a different title and description." },
    { status: "red", title: "Card Title 6", description: "This is the description of the sixth card." },
    { status: "green", title: "Card Title 7", description: "This is a description of the seventh card." },
    { status: "yellow", title: "Card Title 8", description: "This card has a different title and description." },
    { status: "red", title: "Card Title 9", description: "This is the description of the ninth card." },
  ];

  const renderCards = () => {
    return cardData.map((card, index) => {
      return <StatusCard key={index} status={card.status} title={card.title} description={card.description} />;
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button
        style={{
          position: "fixed",
          top: "20px",
          left: isOpen ? "25rem" : "0rem",
          transition: "left 0.5s ease-in-out",
        }}
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Open"}
      </button>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {renderCards()}
      </div>
    </>
  );
};