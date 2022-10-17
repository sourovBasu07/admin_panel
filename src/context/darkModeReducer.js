const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      localStorage.setItem("theme", false);
      return {
        darkMode: false,
      };
    case "DARK":
      localStorage.setItem("theme", true);
      return {
        darkMode: true,
      };
    case "TOGGLE":
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default DarkModeReducer;
