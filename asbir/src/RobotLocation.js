import React from 'react';

import Navbar from './Navbar'
import { RobotLocationChart } from './RobotLocationChart';

import './RobotLocation.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/robot-location',
    secondInfo: 'Robot Location',
    thirdLink: '/asbir-model',
    thirdInfo: 'ASBIR Model',
}

export const RobotLocation = () => {
    return (
        <div className='RobotLocation'>
            <Navbar {...NavBarProps} />
            <h1>Robot Location</h1>
            <RobotLocationChart/>
        </div>
    )
};