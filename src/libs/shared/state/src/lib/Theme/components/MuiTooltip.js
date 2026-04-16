const option = {
  light: {
    tooltip: {
      backgroundColor: "#EDEEF0",
      color: "#264769",
      boxShadow: "0px 0px 5px 0px #BFC2C9"
    },
    secondary: { backgroundColor: "#FFFFFF" }
  },
  dark: {
    tooltip: {
      backgroundColor: "#2E3137",
      color: "#D4D6DB",
      boxShadow: "0px 0px 5px 0px #BFC2C9"
    },
    secondary: { backgroundColor: "#3D4149" }
  }
};

const MuiTooltip = mode => {
  return {
    styleOverrides: {
      tooltip: {
        backgroundColor: option[mode].tooltip?.backgroundColor,
        filter: option[mode]?.tooltip?.filter,
        padding: "10px 16px",
        borderRadius: 5,
        color: option[mode].tooltip.color,
        fontSize: 12,
        fontWeight: 400,
        whiteSpace: "pre-line",
        boxShadow: option[mode]?.tooltip?.boxShadow,
        "&.secondary": {
          filter: option[mode]?.tooltip?.secondary?.filter
        },
        "&.secondary-bg": {
          backgroundColor: option[mode].secondary.backgroundColor
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderColor: option[mode].tooltip.backgroundColor
        }
      },
      arrow: {
        color: option[mode].tooltip.backgroundColor,
        "&::before": {
          boxShadow: option[mode]?.tooltip?.boxShadow
        },
        "&.secondary-bg": {
          color: option[mode].secondary.backgroundColor
        }
      }
    }
  };
};

export default MuiTooltip;
