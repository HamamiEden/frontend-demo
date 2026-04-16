const options = {
  light: {
    error: {
      color: "#F41414"
    }
  },
  dark: {
    error: {
      color: "#FF0606"
    }
  }
};

const MuiFormHelperText = mode => {
  return {
    styleOverrides: {
      root: {
        marginLeft: "10px",
        marginRight: "10px",
        fontSize: "11px",
        lineHeight: "13px",
        "&.Mui-error": {
          color: options[mode].error.color
        }
      }
    }
  };
};

export default MuiFormHelperText;
