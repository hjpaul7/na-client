import React, { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar color="faded" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={props.clickLogout}
            >
              Logout
            </button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
