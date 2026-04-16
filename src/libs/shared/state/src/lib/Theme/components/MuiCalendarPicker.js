const options = {
  light: {
    default: {
      backgroundColor: "#fff",
      borderColor: "#C0CDDF"
    }
  },
  dark: {
    default: {
      backgroundColor: "#1a1c1e",
      borderColor: "#d4d6db80"
    }
  }
};

const MuiCalendarPicker = mode => {
  return {
    styleOverrides: {
      root: {
        backgroundColor: options[mode].default.backgroundColor,
        borderRadius: "6px"
      }
    }
  };
};

export default MuiCalendarPicker;
