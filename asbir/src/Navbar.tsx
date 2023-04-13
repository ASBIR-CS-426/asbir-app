import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import { Sidebar } from './Sidebar';

interface NavBarProps {
  firstLink: string,
  firstInfo: string,
  secondLink: string,
  secondInfo: string,
  thirdLink: string,
  thirdInfo: string,
}
  
const Navbar = (props: NavBarProps) => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to={props.firstLink}>
          {props.firstInfo}
        </NavLink>
        <NavLink to={props.secondLink}>
          {props.secondInfo}
        </NavLink>
        <NavLink to={props.thirdLink}>
          {props.thirdInfo}
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
  
export default Navbar;