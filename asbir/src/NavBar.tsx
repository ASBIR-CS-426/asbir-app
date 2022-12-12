import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <Nav>
      <Bars />  
      <NavMenu>
        <NavLink to='/error-log'>
          Error Log
        </NavLink>
        <NavLink to='/faq'>
          FAQ
        </NavLink>
        <NavLink to='/inspection-database'>
          Inspection Database
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
  
export default Navbar;