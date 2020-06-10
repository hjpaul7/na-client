import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <div className="navbar">
      <a href="/">Narcoctics Anonymous</a>
    </div>

    // <header>
    //   <Navbar className="navbar">
    //     <NavbarBrand href="/">Narcotics Anonymous</NavbarBrand>
    //     <Nav className="ml-auto" navbar></Nav>
    //   </Navbar>
    // </header>
  );
};
export default Header;
