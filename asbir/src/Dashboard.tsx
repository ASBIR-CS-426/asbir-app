import React from 'react';
import Navbar from './Navbar'
import { useEffect } from 'react';
import ToggleConnect from "./ToggleConnect"
import { Navigate } from 'react-router-dom';


import './Dashboard.css'

const NavBarProps = {
    firstLink: '/error-log',
    firstInfo: 'Error Log',
    secondLink: '/dashboard',
    secondInfo: 'Dashboard',
    thirdLink: '/robot-location',
    thirdInfo: 'Robot Location',
}


export const Dashboard = () => {

    useEffect(() => {
        console.log(!!localStorage.getItem("name"))
    })

    if (!!localStorage.getItem("name")) {
        return (
            <div className='Dashboard'>
                <Navbar {...NavBarProps}></Navbar>
                <h1>Dashboard</h1>
                <ToggleConnect></ToggleConnect>
            </div>
        )
    }
    else {
        return (
            <Navigate to="/" replace/>
        )
    }
};