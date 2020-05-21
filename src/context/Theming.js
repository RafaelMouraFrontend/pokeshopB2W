import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export default function ({ children }) {
  const [theme, setTheme] = useState(10);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
