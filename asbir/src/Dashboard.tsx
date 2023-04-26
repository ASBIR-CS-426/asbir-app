import React from 'react';
import Navbar from './Navbar'
import { useEffect } from 'react';
import ToggleConnect from "./ToggleConnect"
import { Navigate } from 'react-router-dom';


import './Dashboard.css'

import { Sidebar } from './Sidebar';

import { Link } from "react-router-dom"

const NavBarProps = {
    firstLink: '/asbir-model',
    firstInfo: 'ASBIR Model',
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
        return( 
            <>
                <div className='Dashboard'>
                    <Sidebar />
                    <Navbar {...NavBarProps}></Navbar>
                    <h1 style={{marginBottom: "5rem"}}>Dashboard</h1>
                    <ToggleConnect />
                </div>
                <div className="footer">
                    <Link className="link-btn" to="/about-us">Learn More</Link>
                </div>
            </>
        )
    }
    else {
        return (
            <Navigate to="/" replace/>
        )
    }
};