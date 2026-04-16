const options = {
  light: {
    backgroundColor: "#fff",
    boxShadow: "rgba(37, 49, 53, 0.15)",
    menuItem: {
      border: "#C0CDDF",
      color: "#5B626E",
      selected: {
        backgroundColor: "#F4F7FB"
      },
      focused: {
        backgroundColor: "rgba(225, 227, 230, 0.25)"
      },
      subHeader: {
        backgroundColor: "#E9F1F3",
        color: "#5B626E"
      }
    },
    transferlist: {
      noOptions: {
        backgroundColor: "#F8F8F8",
        color: "#5B626E"
      }
    },
    secondaryAutocomplete: {
      borderColor: "#E9F1F3"
    },
    lightPaper: {
      backgroundColor: "#F8F8F8",
      color: "#5B626E"
    },
    softGray: {
      backgroundColor: "#E1E4EA33"
    }
  },
  dark: {
    backgroundColor: "#212225",
    boxShadow: "rgba(255, 255, 255, 0.15)",
    menuItem: {
      border: "rgba(212, 214, 219, 0.5)",
      color: "#D4D6DB",
      selected: {
        backgroundColor: "#111113"
      },
      focused: {
        backgroundColor: "#2C2D31"
      },
      subHeader: {
        backgroundColor: "rgba(233, 241, 243, 0.3)",
        color: "#D4D6DB"
      }
    },
    transferlist: {
      noOptions: {
        backgroundColor: "#191B1E",
        color: "#D4D6DB"
      }
    },
    secondaryAutocomplete: {
      borderColor: "#E9F1F31A"
    },
    lightPaper: {
      backgroundColor: "#2E3137",
      color: "#D4D6DB"
    },
    softGray: {
      backgroundColor: "#E1E4EA0D"
    }
  }
};

const MuiPaper = mode => {
  return {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        boxShadow: "none"
      }
    },
    variants: [
      {
        props: { variants: "select" },
        style: {
          borderColor: "#d4d6db80",
          borderWidth: 0.5,
          borderStyle: "solid",
          "&.MuiPaper-root.MuiMenu-paper.MuiPaper-root.MuiPopover-paper": {
            // maxHeight: "193px",
            borderColor: options[mode].menuItem.border,
            borderRadius: "8px",
            backgroundColor: options[mode].backgroundColor,
            boxShadow: `0px 1px 4px ${options[mode].boxShadow}`,
            backgroundImage: "none",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "transparent"
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderColor: options[mode].backgroundColor
            }
          },
          "& .MuiList-root.MuiMenu-list": {
            padding: 0,
            "& .MuiListSubheader-root": {
              color: options[mode].menuItem.subHeader.color,
              padding: "6px 16px 6px 16px",
              lineHeight: 1.5,
              fontSize: "12px",
              fontWeight: "400",
              borderBottom: "0.5px solid",
              borderColor: options[mode].menuItem.subHeader.backgroundColor
            }
          }
        }
      },
      {
        props: { variants: "hide" },
        style: {
          display: "none"
        }
      },
      {
        props: { variants: "dateTimePicker" },
        style: {
          border: `solid 1px ${options[mode].menuItem.border}`,
          backgroundImage: "none",
          borderRadius: "6px",
          boxShadow: "0px 1px 4px rgba(37, 49, 53, 0.15)"
        }
      },
      {
        props: { papertype: "transferlist" },
        style: {
          "& .MuiAutocomplete-listbox": {
            height: 216,
            overflow: "auto"
          },
          "& .MuiAutocomplete-option": {
            lineHeight: 1,
            fontSize: 12
          },
          "& .MuiAutocomplete-noOptions": {
            ...options[mode].transferlist.noOptions,
            height: 216,
            fontSize: "12px",
            lineHeight: "14px",
            padding: "11px 10px"
          }
        }
      },
      {
        props: { variants: "secondaryAutocomplete" },
        style: {
          "&.MuiPaper-root.MuiPaper-elevation": {
            // boxShadow: "none",
            borderColor: options[mode].secondaryAutocomplete.borderColor
          }
        }
      },
      {
        props: { variants: "lightPaper" },
        style: {
          ...options[mode].lightPaper
        }
      },
      {
        props: { variants: "softGray" },
        style: {
          ...options[mode].softGray
        }
      }
    ]
  };
};

export default MuiPaper;
