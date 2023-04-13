import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #D3D3D3;
  height: 5rem;
  display: flex;
  justify-content: center;
  padding: 0.2rem calc((100vw - 900px) / 2);
  z-index: 12;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 14rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
    font-weight: bold;
  }
  &:hover {
    color: blue;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
