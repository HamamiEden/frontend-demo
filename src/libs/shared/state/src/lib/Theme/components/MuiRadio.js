const options = {
  light: {
    default: {
      color: "#949AA5",
      hover: {
        color: "#5B626E"
      }
    },
    checked: {
      color: "#0C6FDD",
      hover: {
        color: "#0040AD"
      }
    },
    disabled: {
      color: "#E1E3E6",
      primaryDisabled: {
        color: "#E6E6EB"
      },
      highlightDisabled: {
        color: "#BFBFC0"
      }
    }
  },
  dark: {
    default: {
      color: "#949AA5",
      hover: {
        color: "#BFC2C9"
      }
    },
    checked: {
      color: "#6DCFFC",
      hover: {
        color: "#83D6FC"
      }
    },
    disabled: {
      color: "#4C515B",
      primaryDisabled: {
        color: "#77797C"
      },
      highlightDisabled: {
        color: "#d4d6db80"
      }
    }
  }
};

const MuiRadio = mode => {
  return {
    styleOverrides: {
      root: {
        color: options[mode].default.color,
        "&:hover": {
          backgroundColor: "unset",
          color: options[mode].default.hover.color
        },
        "&.Mui-checked": {
          color: options[mode].checked.color,
          "&:hover": {
            color: options[mode].checked.hover.color
          }
        },
        "&.Mui-disabled": {
          color: options[mode].disabled.color
        }
      }
    },
    variants: [
      {
        props: { disabled_type: "disabled" },
        style: {
          "&.Mui-disabled": {
            color: options[mode].disabled.primaryDisabled.color
          }
        }
      },
      {
        props: { disabled_type: "highlight" },
        style: {
          "&.Mui-disabled": {
            color: options[mode].disabled.highlightDisabled.color
          }
        }
      }
    ]
  };
};

export default MuiRadio;
