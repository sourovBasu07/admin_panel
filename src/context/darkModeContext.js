import { createContext, useEffect, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE, () => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? JSON.parse(localTheme) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state));
  }, [state]);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
