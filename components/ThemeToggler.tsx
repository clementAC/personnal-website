import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import themeTogglerStyles from "../style/ThemeToggler.styles";
import ThemeContext from "../context/Theme";

const ThemeToggler = () => {
  const { isDark, toggleDark } = useContext(ThemeContext);
  return (
    <div className="switch-container d-flex align-items-center">
      <FontAwesomeIcon
        icon={faSun}
        className={`${isDark ? "icon-light" : "icon-dark"}`}
      />
      <label className="switch m-0 mx-1">
        <input type="checkbox" checked={isDark} onChange={toggleDark} />
        <span className="slider round" />
      </label>
      <FontAwesomeIcon
        icon={faMoon}
        className={`${isDark ? "icon-light" : "icon-dark"}`}
      />
      <style jsx>{themeTogglerStyles}</style>
    </div>
  );
};

export default ThemeToggler;
