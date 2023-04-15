import React from 'react';

import Navbar from './Navbar'
import { RobotLocationChart } from './RobotLocationChart';
import { StatusCard } from './StatusCard';
import { Sidebar } from './Sidebar';

import { Link } from "react-router-dom"

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
        <>
        <Sidebar />
        <div className='RobotLocation'>
            <Sidebar />
            <Navbar {...NavBarProps} />
            <h1>Robot Location</h1>
            {/* <RobotLocationChart/> */}
        </div>
        <div className="footer">
            <Link className="link-btn" to="/about-us">Learn More</Link>
        </div>
        </>
    )
};