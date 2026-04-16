const options = {
  light: {
    default: {
      color: "#5B626E",
      hover: {
        backgroundColor: "#E5E8EB"
      }
    },
    today: {
      backgroundColor: "#E5E8EB",
      color: "#0E0ADA"
    }
  },
  dark: {
    default: {
      color: "#D4D6DB",
      backgroundColor: "#1a1c1e",
      hover: {
        backgroundColor: "#42474B"
      }
    },
    today: {
      backgroundColor: "#42474B",
      color: "#6DCFFC"
    }
  }
};

const MuiPickersDay = mode => {
  return {
    styleOverrides: {
      root: {
        lineHeight: "12px",
        borderRadius: "8px",
        fontSize: "12px",
        color: options[mode].default.color,
        "&:not(.Mui-selected)": {
          border: "none"
        },
        "&.MuiPickersDay-dayWithMargin": {
          backgroundColor: options[mode].default.backgroundColor
        },
        "&:hover": {
          backgroundColor: options[mode].default.hover.backgroundColor
        },
        "&.Mui-selected": {
          backgroundColor: options[mode].today.backgroundColor,
          color: options[mode].today.color,
          fontWeight: 700,
          "&:hover": {
            backgroundColor: options[mode].default.hover.backgroundColor
          },
          "&:focus": {
            backgroundColor: options[mode].today.backgroundColor,
            color: options[mode].today.color,
            fontWeight: 700
          }
        }
      },
      today: {
        backgroundColor: "none",
        color: options[mode].today.color,
        fontWeight: 700,
        "&:focus": {
          backgroundColor: options[mode].today.backgroundColor,
          color: options[mode].today.color,
          fontWeight: 700
        }
      }
    }
  };
};

export default MuiPickersDay;
