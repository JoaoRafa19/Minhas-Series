import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="container-fluid navbar sticky-top navbar-dark bg-dark">
      <div className="container d-block">
        <Navbar light expand="md">
          <NavbarBrand tag={Link} to={"/"}>
            Minhas Series
          </NavbarBrand>
          <NavbarToggler className="" onClick={toggle}></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-5" navbar>
              <NavItem>
                <NavLink tag={Link} to={"/generos"}>
                  Generos
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </nav>
  );
}

export default Header;
