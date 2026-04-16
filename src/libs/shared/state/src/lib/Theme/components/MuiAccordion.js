const options = {
  light: {
    root: {
      background: "#FFFFFF",
      disabledBackground: "#F9F8F8",
      borderColor: "rgba(0, 0, 0, 0.2)"
    }
  },
  dark: {
    root: {
      background: "#1A1C1E",
      disabledBackground: "#333333",
      borderColor: "rgba(232, 232, 232, 0.3)"
    }
  }
};

const MuiAccordion = mode => {
  return {
    styleOverrides: {
      root: {
        width: "990px",
        borderRadius: "20px",
        border: "1px solid",
        background: options[mode].root.background,
        borderColor: options[mode].root.borderColor,
        height: "100%",
        "&.Mui-expanded": {
          paddingBottom: 16
        },
        "&.Mui-disabled": {
          background: options[mode].root.disabledBackground,
          borderColor: options[mode].root.disabledBackground
        },
        "& .MuiCollapse-root": {
          paddingRight: "16px"
        }
      }
    }
  };
};

export default MuiAccordion;
