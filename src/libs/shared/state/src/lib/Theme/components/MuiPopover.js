const options = {
  light: {
    select: {
      backgroundColor: "transparent",
      selected: {
        backgroundColor: "rgba(236, 242, 248, 0.6)",
        hover: {
          backgroundColor: "rgba(225, 227, 230, 0.25)"
        }
      },
      notLastChild: {
        borderColor: "#E9F1F3"
      },
      color: "#5B626E"
    },
    card: {
      boxShadow: "2px 2px 8px 0px #00000040",
      bgColor: "#fff"
    },
    turquoise: {
      backgroundColor: "#057E94"
    }
  },
  dark: {
    select: {
      backgroundColor: "#212225",
      selected: {
        backgroundColor: "#111113",
        hover: {
          backgroundColor: "#2C2D31"
        }
      },
      notLastChild: {
        borderColor: "rgba(233, 241, 243, 0.3)"
      },
      color: "#D4D6DB"
    },
    card: {
      boxShadow: "2px 2px 8px 0px #55555559",
      bgColor: "#1A1C1E"
    },
    turquoise: {
      backgroundColor: "#045462"
    }
  }
};

const MuiPopover = mode => {
  return {
    styleOverrides: {
      root: {
        "&#country-menu": {
          maxHeight: 300
        },
        "&#country-menu .MuiMenuItem-root": {
          backgroundColor: options[mode].select.backgroundColor,
          "&.Mui-selected": {
            backgroundColor: options[mode].select.selected.backgroundColor
          },
          "&.Mui-selected:hover": {
            backgroundColor: options[mode].select.selected.hover.backgroundColor
          },
          "&:not(:last-child)": {
            borderBottom: "0.5px solid",
            borderColor: options[mode].select.notLastChild.borderColor
          },
          "&:hover": {
            backgroundColor: options[mode].select.selected.hover.backgroundColor
          },
          "& .MuiTouchRipple-root": {
            display: "none"
          },
          color: options[mode].select.color,
          fontSize: "12px",
          fontWeight: "400"
        }
      }
    },
    variants: [
      {
        props: { type: "cardPopover" },
        style: {
          "& .MuiPopover-paper": {
            boxShadow: options[mode].card.boxShadow,
            backgroundColor: options[mode].card.bgColor
          }
        }
      },
      {
        props: { bg_color: "turquoise" },
        style: {
          "& .MuiPopover-paper": {
            backgroundColor: options[mode].turquoise.backgroundColor
          }
        }
      }
    ]
  };
};

export default MuiPopover;
