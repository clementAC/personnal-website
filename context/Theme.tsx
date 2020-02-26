import React, { useState } from "react";

const defaultThemes = {
  dark: {
    fontFamily: `"Noto Sans", serif`,
    colors: {
      text: "#fff",
      background: "#343a40",
      link: "#fff",
      linkHover: "#fff"
    }
  },
  light: {
    fontFamily: `"Noto Sans", serif`,
    colors: {
      text: "#000",
      background: "#fff",
      link: "#000",
      linkHover: "#000"
    }
  }
};

const defaultState = {
  theme: {
    fontFamily: "",
    colors: {
      text: "",
      background: "",
      link: "",
      linkHover: ""
    }
  },
  isDark: false,
  toggleDark: () => {}
};
const ThemeContext = React.createContext(defaultState);

export interface ITheme {
  fontFamily: string;
  colors: {
    text: string;
    background: string;
    link: string;
    linkHover: string;
  };
}

interface Props {
  isDark: boolean;
  children: React.ReactChildren;
}

const ThemeContextProvider = (props: Props) => {
  const [isDark, setIsDark] = useState(props.isDark);
  const [actualTheme, setActualTheme] = useState(
    props.isDark ? defaultThemes.dark : defaultThemes.light
  );

  const toggleDark = () => {
    setActualTheme(isDark ? defaultThemes.light : defaultThemes.dark);
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme: actualTheme, isDark, toggleDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export { ThemeContextProvider };
