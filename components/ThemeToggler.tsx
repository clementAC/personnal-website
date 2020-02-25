import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import themeTogglerStyles from "./ThemeToggler.styles";

const ThemeToggler = () => {
  return (
    <div className="switch-container d-flex align-items-center">
      <FontAwesomeIcon icon={faSun} />
      <label className="switch m-0 mx-1">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <FontAwesomeIcon icon={faMoon} />
      <style jsx>{themeTogglerStyles}</style>
    </div>
  );
};

export default ThemeToggler;
