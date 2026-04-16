const options = {
  light: {
    backgroundColor: "transparent",
    tabHoverColor: "#0E0ADA",
    tabBtnHoverBackground: "#CBD4DB"
  },
  dark: {
    backgroundColor: "transparent",
    tabBoverColor: "#6DCFFC",
    tabBtnHoverBackground: "#484A4D"
  }
};

const MuiTabs = mode => {
  return {
    styleOverrides: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: `${options[mode].backgroundColor}`
        },
        "& .MuiTabs-scrollButtons": {
          transition: "color 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            backgroundColor: options[mode].tabBtnHoverBackground
          },

          "& .MuiTouchRipple-root": {
            display: "none"
          }
        },
        "& .MuiTabs-scrollButtons.Mui-disabled": { opacity: 0.3, width: "20px", boxShadow: "unset" }
      }
    }
  };
};

export default MuiTabs;
