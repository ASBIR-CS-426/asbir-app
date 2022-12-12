import React from 'react';

import Navbar from './Navbar'

import './InspectionDatabase.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/error-log',
    secondInfo: 'Error Log',
    thirdLink: '/faq',
    thirdInfo: 'FAQ',
}

export const InspectionDatabase = () => {
    return (
        <div className='InspectionDatabase'>
            <Navbar {...NavBarProps} />
            <h1>This is the Inspection Database</h1>
        </div>
    )
};