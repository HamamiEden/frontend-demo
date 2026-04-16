const options = {
  light: {
    paper: {
      boxShadow: "0px 1px 4px rgba(37, 49, 53, 0.15)",
      backgroundColor: "#fff",
      borderColor: "#C0CDDF",
      scrollbar: {
        color: "#fff"
      }
    },
    option: {
      borderBottom: "0.5px solid #E9F1F3",
      backgroundColor: {
        default: "#fff",
        selected: "#F4F7FB",
        focused: "rgba(225, 227, 230, 0.25)"
      },
      typography: {
        color: "#5B626E"
      }
    },
    groupLabel: {
      color: "#264769",
      backgroundColor: "#fff",
      borderBottom: "0.5px solid #E9F1F3"
    },
    rootDomain: {
      Block: {
        color: "#F60E0E"
      },
      Captcha: {
        color: "#E77729"
      },
      Crypto: {
        color: "#641BC9"
      }
    },
    colors: {
      blue: "#211DD9"
    }
  },
  dark: {
    paper: {
      boxShadow: "0px 1px 4px rgba(255, 255, 255, 0.15)",
      backgroundColor: "#212225",
      borderColor: "#D4D6DB80",
      scrollbar: {
        color: "#212225"
      }
    },
    option: {
      borderBottom: "0.5px solid rgba(233, 241, 243, 0.3)",
      backgroundColor: {
        default: "#212225",
        selected: "#111113",
        focused: "#2C2D31"
      },
      typography: {
        color: "#D4D6DB"
      }
    },
    groupLabel: {
      color: "#D4D6DB",
      backgroundColor: "#212225",
      borderBottom: "0.5px solid rgba(233, 241, 243, 0.3)"
    },
    rootDomain: {
      Block: {
        color: "#F60E0E"
      },
      Captcha: {
        color: "#E77729"
      },
      Crypto: {
        color: "#BF92FF"
      }
    },
    colors: {
      blue: "#3B77EE"
    }
  }
};

const MuiAutocomplete = mode => {
  return {
    variants: [
      {
        props: { variant: "search" },
        style: {
          "&.MuiOutlinedInput-root": {
            "& .MuiAutocomplete-endAdornment": {
              lineHeight: 1
            }
          }
        }
      },
      {
        props: { variant: "rotatorSelect" },
        style: {
          "& .MuiOutlinedInput-root": {
            "& .MuiAutocomplete-input": {
              fontWeight: 400,
              color: options[mode].option.typography.color
            }
          }
        }
      },
      {
        props: { variant: "rootDomainBlock" },
        style: {
          "& .MuiOutlinedInput-root": {
            "& .MuiAutocomplete-input": {
              color: options[mode].rootDomain.Block.color
            }
          }
        }
      },
      {
        props: { variant: "rootDomainCaptcha" },
        style: {
          "& .MuiOutlinedInput-root": {
            "& .MuiAutocomplete-input": {
              color: options[mode].rootDomain.Captcha.color
            }
          }
        }
      },
      {
        props: { variant: "rootDomainCrypto" },
        style: {
          "& .MuiOutlinedInput-root": {
            "& .MuiAutocomplete-input": {
              color: options[mode].rootDomain.Crypto.color
            }
          }
        }
      }
    ],
    styleOverrides: {
      root: {
        width: 300,
        "& span.MuiBox-root, .MuiIconButton-root": {
          height: 20,
          width: 20
        }
      },
      popper: {
        paddingTop: 1
      },
      paper: {
        borderRadius: 8,
        boxShadow: options[mode].paper.boxShadow,
        backgroundColor: options[mode].paper.backgroundColor,
        borderColor: options[mode].paper.borderColor,
        borderWidth: 0.5,
        borderStyle: "solid",
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          backgroundColor: options[mode].paper.scrollbar.color
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderColor: options[mode].paper.scrollbar.color
        }
      },
      groupUl: {
        "& .MuiAutocomplete-option": {
          padding: "10px",
          height: 36
        }
      },
      listbox: {
        padding: 0,
        "& .MuiAutocomplete-option": {
          height: 36,
          padding: "10px"
        },
        '& .MuiAutocomplete-option[aria-selected="true"]': {
          backgroundColor: options[mode].option.backgroundColor.selected
        },
        '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
          backgroundColor: options[mode].option.backgroundColor.selected
        },
        "& .MuiAutocomplete-option.Mui-focused": {
          backgroundColor: options[mode].option.backgroundColor.focused
        }
      },
      groupLabel: {
        color: options[mode].groupLabel.color,
        backgroundColor: options[mode].groupLabel.backgroundColor,
        borderBottom: options[mode].groupLabel.borderBottom
      },
      option: {
        borderBottom: options[mode].option.borderBottom,
        backgroundColor: options[mode].option.backgroundColor.default,
        height: 36,
        ".MuiTypography-root, .MuiGrid-root": {
          color: options[mode].option.typography.color,
          lineHeight: 1,
          fontSize: 12
        },
        '&[aria-selected="true"]': {
          backgroundColor: options[mode].option.backgroundColor.selected
        },
        '&[aria-selected="true"].Mui-focused': {
          backgroundColor: options[mode].option.backgroundColor.selected
        },
        ".Mui-focused": {
          backgroundColor: options[mode].option.backgroundColor.focused
        },
        "&:hover": {
          backgroundColor: options[mode].option.backgroundColor.focused
        },
        "& svg": {
          transform: "scale(0.625)",
          marginLeft: -4.5,
          marginRight: -4.5
        }
      }
    }
  };
};

export default MuiAutocomplete;
