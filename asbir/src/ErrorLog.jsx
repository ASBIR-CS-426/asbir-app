
import Navbar from './Navbar'
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./Cylinder3d";

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
            <Cylinder3d/>
        </div>
    )
};