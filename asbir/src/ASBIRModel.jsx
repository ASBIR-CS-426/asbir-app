
import Navbar from './Navbar'
import Cylinder3d from "./Cylinder3d";

import './ASBIRModel.css'
import { Sidebar } from './Sidebar';
import { Navigate } from 'react-router-dom';

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/asbir-model',
    secondInfo: 'ASBIR Model',
    thirdLink: '/robot-location',
    thirdInfo: 'Robot Location',
}

export const ASBIRModel = () => {

    if (!!localStorage.getItem("name")) {
        return (
            <div className='ASBIRModel'>
                <Sidebar />
                <Navbar {...NavBarProps} />
                <Cylinder3d/>
            </div>
        )
    }
    else {
        return (
            <Navigate to="/" replace/>
        )
    }
};