const options = {
  light: {
    currentTime: {
      backgroundColor: "#E5E8EB",
      color: "#0E0ADA"
    }
  },
  dark: {
    currentTime: {
      backgroundColor: "#42474B",
      color: "#6DCFFC"
    }
  }
};

const MuiYearPicker = mode => {
  return {
    styleOverrides: {
      root: {
        "& .PrivatePickersYear-root": {
          "& .Mui-selected": {
            backgroundColor: options[mode].currentTime.backgroundColor,
            color: options[mode].currentTime.color,
            fontWeight: 700,
            "&:hover": {
              backgroundColor: options[mode].currentTime.backgroundColor
            },
            "&:focus": {
              backgroundColor: options[mode].currentTime.backgroundColor,
              color: options[mode].currentTime.color,
              fontWeight: 700
            }
          }
        }
      }
    }
  };
};

export default MuiYearPicker;
