import React, { useState, useContext } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../context/Theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar
        color={isDark ? "dark" : "light"}
        light={!isDark}
        dark={isDark}
        expand="md"
        fixed="top"
      >
        <Link href="/">
          <NavbarBrand to="/">Clément Aceituno</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href={`${process.env.PUBLIC_URL}/clementAceituno.pdf`}
                download
              >
                Télécharger mon CV
              </NavLink>
            </NavItem>
            <NavItem>
              <Link href="/contact">
                <NavLink to="/contact" activeClassName="active">
                  Me contacter
                </NavLink>
              </Link>
            </NavItem>
            <NavItem className="d-flex align-items-center py-2">
              <ThemeToggler />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
