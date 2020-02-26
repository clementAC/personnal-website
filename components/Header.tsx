/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../context/Theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-md fixed-top  ${
          isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <Link href="/">
          <a className="navbar-brand">Clément Aceituno</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="contentToCollapse"
        >
          <ul className="navbar-nav ml-auto d-flex align-items-center">
            <li className="nav-item active">
              <a
                className="nav-link"
                href={`${process.env.PUBLIC_URL}/clementAceituno.pdf`}
                download
              >
                Télécharger mon CV
              </a>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Me contacter</a>
              </Link>
            </li>
            <li className="nav-item">
              <ThemeToggler />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
