import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #222;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 16px;
  }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo href="#">My Portfolio</Logo>
            <NavLinks>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#timeline">Timeline</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </NavLinks>
        </NavbarWrapper>
    );
};

export default Navbar;
