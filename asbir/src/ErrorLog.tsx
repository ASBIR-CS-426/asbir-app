import React from 'react';

import Navbar from './Navbar'

import './ErrorLog.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/error-log',
    secondInfo: 'Error Log',
    thirdLink: '/robot-location',
    thirdInfo: 'Robot Location',
}

export const ErrorLog = () => {
    return (
        <div className='ErrorLog'>
            <Navbar {...NavBarProps} />
            <h1>This is the Error Log</h1>
        </div>
    )
};