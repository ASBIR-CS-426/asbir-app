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
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/events'>
            Events
          </NavLink>
          <NavLink to='/annual'>
            Annual Report
          </NavLink>
          <NavLink to='/team'>
            Teams
          </NavLink>
          <NavLink to='/blogs'>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;