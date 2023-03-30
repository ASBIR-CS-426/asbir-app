import React from 'react';

import Navbar from './Navbar'
import { RobotLocationChart } from './RobotLocationChart';
import { StatusCard } from './StatusCard';
import { Sidebar } from './Sidebar';

import './RobotLocation.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/robot-location',
    secondInfo: 'Robot Location',
    thirdLink: '/asbir-model',
    thirdInfo: 'ASBIR Model',
}

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
      return <StatusCard style={{ width: "100% !important" }} key={index} status={card.status} title={card.title} description={card.description} />;
    });
  };

export const RobotLocation = () => {
    return (
        <>
        <Sidebar />
        <div className='RobotLocation'>
            <Navbar {...NavBarProps} />
            <h1>Robot Location</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "70%", margin: "0 auto" }}>
                {renderCards()}
            </div>
            {/* <StatusCard status="green" title="Card Title" description="This is a description of the card." />
            <StatusCard status="yellow" title="Another Card" description="This card has a different title and description." />
            <StatusCard status="red" title="Third Card" description="This is the description of the third card." /> */}
            {/* <RobotLocationChart/> */}
        </div>
        </>
    )
};