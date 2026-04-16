const options = {
  light: {
    paper: {
      backgroundColor: "#fff",
      boxShadow: "rgba(85, 85, 85, 0.15)"
    },
    backdrop: {
      backgroundColor: "#C4C4C4CC"
    }
  },
  dark: {
    paper: {
      backgroundColor: "#1A1C1E",
      boxShadow: "rgba(85, 85, 85, 0.15)"
    },
    backdrop: {
      backgroundColor: "#494646E5"
    }
  }
};

const MuiDialog = mode => {
  return {
    styleOverrides: {
      root: {
        "& .MuiBackdrop-root": {
          backgroundColor: options[mode].backdrop.backgroundColor
        }
      },
      paper: {
        borderRadius: "8px",
        boxShadow: `1px 1px 10px ${options[mode].paper.boxShadow}`,
        backgroundColor: options[mode].paper.backgroundColor,
        backgroundImage: "unset",
        minWidth: 450
      }
    }
  };
};

export default MuiDialog;
