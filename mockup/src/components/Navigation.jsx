import React, { useState } from "react";
import styles from "../styles/Nav.module.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar expand="md" className={styles.navigation}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                style={{
                  color: "#ffffff",
                }}
                href="/"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{
                  color: "#ffffff",
                }}
                href="/about"
              >
                Download
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{
                  color: "#ffffff",
                }}
                href="/about"
              >
                Support
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
