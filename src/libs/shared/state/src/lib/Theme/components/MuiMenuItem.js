const options = {
  light: {
    select: {
      backgroundColor: "transparent",
      selected: {
        color: "#015ECB",
        backgroundColor: "#F1FBFF",
        hover: {
          backgroundColor: "rgba(225, 227, 230, 0.25)"
        }
      },
      notLastChild: {
        borderColor: "#E9F1F3",
        secondaryBorderColor: "#E9F1F3"
      },
      color: "#5B626E",
      DEFAULT: {
        primary: {
          background: "transparent"
        },
        hover: {
          background: "#F7F8F9"
        },
        selected: {
          background: "transparent"
        }
      },
      CWAF: {
        primary: {
          background: "#fff"
        },
        hover: {
          background: "#DDE5FF"
        },
        selected: {
          background: "#DDE5FF"
        }
      },
      CDDOS: {
        primary: {
          background: "#fff"
        },
        hover: {
          background: "#E3DCFF"
        },
        selected: {
          background: "#E3DCFF"
        }
      },
      CBOT: {
        primary: {
          background: "#fff"
        },
        hover: {
          background: "#FFF3E2"
        },
        selected: {
          background: "#FFF3E2"
        }
      },
      CTRC: {
        primary: {
          background: "#fff"
        },
        hover: {
          background: "#EBFBFC"
        },
        selected: {
          background: "#EBFBFC"
        }
      },
      ROTATOR_RESPONSE: {
        captcha: {
          color: "#E77729"
        },
        block: {
          color: "#F60E0E"
        },
        crypto: {
          color: "#641BC9"
        }
      },
      SYSTEM: {
        primary: {
          background: "#fff"
        },
        hover: {
          background: "#F4F7FB"
        },
        selected: {
          background: "#F4F7FB"
        }
      },
      iconButton: {
        hover: {
          background: "#CBD4DB"
        }
      }
    },
    colors: {
      blue: "#211DD9"
    }
  },
  dark: {
    select: {
      backgroundColor: "#212225",
      selected: {
        color: "#6DCFFC",
        backgroundColor: "#080809",
        hover: {
          backgroundColor: "#2C2D31"
        }
      },
      notLastChild: {
        borderColor: "rgba(233, 241, 243, 0.3)",
        secondaryBorderColor: "#E9F1F31A"
      },
      color: "#D4D6DB",
      DEFAULT: {
        primary: {
          background: "transparent"
        },
        hover: {
          background: "#2C2D31"
        },
        selected: {
          background: "transparent"
        }
      },
      CWAF: {
        primary: {
          background: "#212225"
        },
        hover: {
          background: "#5278F466"
        },
        selected: {
          background: "#5278F466"
        }
      },
      CDDOS: {
        primary: {
          background: "#212225"
        },
        hover: {
          background: "#8474C580"
        },
        selected: {
          background: "#8474C580"
        }
      },
      CBOT: {
        primary: {
          background: "#212225"
        },
        hover: {
          background: " linear-gradient(0deg, rgba(255, 196, 109, 0.2), rgba(255, 196, 109, 0.2)), #212225"
        },
        selected: {
          background: "#4D4234"
        }
      },
      CTRC: {
        primary: {
          background: "#212225"
        },
        hover: {
          background: "#03373A"
        },
        selected: {
          background: "#03373A"
        }
      },
      SYSTEM: {
        primary: {
          background: "#212225"
        },
        hover: {
          background: "#2C2D31"
        },
        selected: {
          background: "#2C2D31"
        }
      },
      ROTATOR_RESPONSE: {
        captcha: {
          color: "#E77729"
        },
        block: {
          color: "#F60E0E"
        },
        crypto: {
          color: "#BF92FF"
        }
      },
      iconButton: {
        hover: {
          background: "#484A4D"
        }
      }
    },
    colors: {
      blue: "#3B77EE"
    }
  }
};

const MuiMenuItem = mode => {
  return {
    variants: [
      {
        props: { variants: "select" },
        style: {
          backgroundColor: options[mode].select.backgroundColor,
          "&.Mui-selected, &.Mui-selected.Mui-focusVisible": {
            color: "var(--text-enhance)",
            backgroundColor: "var(--row-selected)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: options[mode].select.selected.hover.backgroundColor
          },
          "&:not(:last-child)": {
            borderBottom: "0.5px solid",
            borderColor: options[mode].select.notLastChild.borderColor
          },
          "&:hover:not(.Mui-disabled)": {
            backgroundColor: options[mode].select.selected.hover.backgroundColor,
            "& .icon-button-highlight": {
              backgroundColor: options[mode].select.iconButton.hover.background
            }
          },
          color: options[mode].select.color,
          fontSize: "12px",
          fontWeight: "400",
          "&.DEFAULT": {
            background: options[mode].select.DEFAULT.primary.background,
            "&:hover": {
              background: options[mode].select.DEFAULT.hover.background
            },
            "&:focus": {
              background: options[mode].select.DEFAULT.selected.background
            }
          },
          "&.CWAF": {
            pointerEvents: "auto",
            background: options[mode].select.CWAF.primary.background,
            "&:hover": {
              background: options[mode].select.CWAF.hover.background
            },
            "&:focus": {
              background: options[mode].select.CWAF.selected.background
            }
          },
          "&.CDDOS": {
            pointerEvents: "auto",
            background: options[mode].select.CDDOS.primary.background,
            "&:hover": {
              background: options[mode].select.CDDOS.hover.background
            },
            "&:focus": {
              background: options[mode].select.CDDOS.selected.background
            }
          },
          "&.CBOT": {
            pointerEvents: "auto",
            background: options[mode].select.CBOT.primary.background,
            "&:hover": {
              background: options[mode].select.CBOT.hover.background
            },
            "&:focus": {
              background: options[mode].select.CBOT.selected.background
            }
          },
          "&.CTRC": {
            pointerEvents: "auto",
            background: options[mode].select.CTRC.primary.background,
            "&:hover": {
              background: options[mode].select.CTRC.hover.background
            },
            "&:focus": {
              background: options[mode].select.CTRC.selected.background
            }
          },
          "&.agenticAi": {
            pointerEvents: "auto",
            "&:hover": {
              background: "var(--services-agentic-bg)"
            },
            "&:focus": {
              background: "var(--services-agentic-bg)"
            }
          },
          "&.apiSecurity": {
            pointerEvents: "auto",
            "&:hover": {
              background: "var(--services-api-bg)"
            },
            "&:focus": {
              background: "var(--services-api-bg)"
            }
          },
          "&.SYSTEM": {
            pointerEvents: "auto",
            background: options[mode].select.SYSTEM.primary.background,
            "&:hover": {
              background: options[mode].select.SYSTEM.hover.background
            },
            "&:focus": {
              background: options[mode].select.SYSTEM.selected.background
            }
          },
          "&.ROTATOR_RESPONSE_CAPTCHA": {
            fontWeight: 500,
            color: options[mode].select.ROTATOR_RESPONSE.captcha.color
          },
          "&.ROTATOR_RESPONSE_BLOCK": {
            fontWeight: 500,
            color: options[mode].select.ROTATOR_RESPONSE.block.color
          },
          "&.ROTATOR_RESPONSE_CRYPTOCHALLENGE": {
            fontWeight: 500,
            color: options[mode].select.ROTATOR_RESPONSE.crypto.color
          },
          "&.coloredItemIcon .MuiBox-root.option-icon": {
            "&.blue": {
              color: options[mode].colors.blue
            }
          },
          "&.secondarySelect": {
            borderColor: options[mode].select.notLastChild.secondaryBorderColor
          }
        }
      }
    ]
  };
};

export default MuiMenuItem;
