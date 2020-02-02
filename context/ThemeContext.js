import React from "react";
import PropTypes from "prop-types";

const merchantTheme = {
  color: "#3B74FF",
  white: "#fff",
  grey: "#d9d9d9",
  grey2: "#7b7b7b",
  grey3: "rgb(247, 247, 247)",
  grey4: "rgb(76,76,75)",
  black: "#000",
  danger: "#FA5C17"
};

export const theme = merchantTheme

export const ThemeContext = React.createContext(theme);

export const Theme = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
