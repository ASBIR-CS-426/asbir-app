import React from 'react';

import Navbar from './Navbar'

import './ErrorLog.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/faq',
    secondInfo: 'FAQ',
    thirdLink: '/inspection-database',
    thirdInfo: 'Inspection Database',
}

export const ErrorLog = () => {
    return (
        <div className='ErrorLog'>
            <Navbar {...NavBarProps} />
            <h1>This is the Error Log</h1>
        </div>
    )
};