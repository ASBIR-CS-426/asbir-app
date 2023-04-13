
import Navbar from './Navbar'
import Cylinder3d from "./Cylinder3d";

import './ASBIRModel.css'
import { Sidebar } from './Sidebar';

const NavBarProps = {
    firstLink: '/dashboard',
    firstInfo: 'Dashboard',
    secondLink: '/asbir-model',
    secondInfo: 'ASBIR Model',
    thirdLink: '/robot-location',
    thirdInfo: 'Robot Location',
}

export const ASBIRModel = () => {

    return (
        <div className='ASBIRModel'>
            <Sidebar />
            <Navbar {...NavBarProps} />
            <Cylinder3d/>
        </div>
    )
};