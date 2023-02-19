import React from 'react';

import Navbar from './Navbar'

import './InspectionDatabase.css'

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/inspection-database',
    secondInfo: 'Inspection Database',
    thirdLink: '/error-log',
    thirdInfo: 'Error Log',
}

export const InspectionDatabase = () => {
    return (
        <div className='InspectionDatabase'>
            <Navbar {...NavBarProps} />
            <h1>This is the Inspection Database</h1>
        </div>
    )
};