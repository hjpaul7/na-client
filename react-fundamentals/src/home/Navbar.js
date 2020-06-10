import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

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
              type="button"
              class="btn btn-light"
              onClick={props.clickLogout}
            >
              Sign Out
            </button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
