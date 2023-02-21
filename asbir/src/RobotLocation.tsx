import React from 'react';

import Navbar from './Navbar'

import './RobotLocation.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/robot-location',
    secondInfo: 'Robot Location',
    thirdLink: '/error-log',
    thirdInfo: 'Error Log',
}

export const RobotLocation = () => {
    return (
        <div className='RobotLocation'>
            <Navbar {...NavBarProps} />
            <h1>This is the Robot Location tab</h1>
        </div>
    )
};