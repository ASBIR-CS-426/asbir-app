import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

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
      <Bars />  
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