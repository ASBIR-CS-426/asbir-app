import React from 'react';
import Navbar from './Navbar'

import './Dashboard.css'

const NavBarProps = {
    firstLink: '/error-log',
    firstInfo: 'Error Log',
    secondLink: '/faq',
    secondInfo: 'FAQ',
    thirdLink: '/inspection-database',
    thirdInfo: 'Inspection Database',
}

export const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <Navbar {...NavBarProps}></Navbar>
            <h1>This is the Dashboard</h1>
        </div>
    )
};