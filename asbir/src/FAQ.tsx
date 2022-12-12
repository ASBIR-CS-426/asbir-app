import React from 'react';

import Navbar from './Navbar'

import './FAQ.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/error-log',
    secondInfo: 'Error Log',
    thirdLink: '/inspection-database',
    thirdInfo: 'Inspection Database',
}

export const FAQ = () => {
    return (
        <div className='FAQ'>
            <Navbar {...NavBarProps} />
            <h1>This is the FAQ Page</h1>
        </div>
    )
};