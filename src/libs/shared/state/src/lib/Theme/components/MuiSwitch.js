const theme = {
  light: {
    switchBase: {
      color: "#fff"
    },
    thumb: {
      backgroundColor: "#fff",
      disabled: {
        backgroundColor: "#F8F8F9",
        checked: {
          backgroundColor: "#F8F8F9"
        }
      }
    },
    track: {
      backgroundColor: "#949AA5",
      checked: {
        backgroundColor: "#0C6FDD"
      },
      disabled: {
        backgroundColor: "#E2E2E4",
        checked: {
          backgroundColor: "#a8b3be"
        }
      }
    },
    hover: {
      checked: {
        track: {
          backgroundColor: "#0040AD"
        }
      },
      track: {
        backgroundColor: "#6B7280"
      }
    }
  },
  dark: {
    switchBase: {
      color: "#1F2023"
    },
    thumb: {
      backgroundColor: "#1A1C1E",
      disabled: {
        backgroundColor: "#1A1C1E",
        checked: {
          backgroundColor: "#1A1C1E"
        }
      }
    },
    track: {
      backgroundColor: "#949AA5",
      checked: {
        backgroundColor: "#6DCFFC"
      },
      disabled: {
        backgroundColor: "#4C515B",
        checked: {
          backgroundColor: "#4C515B"
        }
      }
    },
    hover: {
      checked: {
        track: {
          backgroundColor: "#83D6FC"
        }
      },
      track: {
        backgroundColor: "#BFC2C9"
      }
    }
  }
};

const MuiSwitch = mode => {
  return {
    variants: [
      {
        props: { variant: "ios" },
        style: {
          width: 28,
          height: 14,
          padding: 0,
          display: "flex",
          overflow: "visible",
          "& .MuiSwitch-switchBase": {
            padding: 2,
            paddingLeft: 2,
            color: theme[mode].switchBase.color,
            backgroundColor: "transparent",

            "&.Mui-checked": {
              transform: "translateX(12px)",
              color: theme[mode].switchBase.color,
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme[mode].track.checked.backgroundColor
              }
            }
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 10,
            height: 10,
            borderRadius: 7,
            transition: "width 0.2s ease-in-out",
            backgroundColor: theme[mode].thumb.backgroundColor
          },
          "& .MuiSwitch-track": {
            borderRadius: 7,
            opacity: 1,
            backgroundColor: theme[mode].track.backgroundColor,
            boxSizing: "border-box",
            "&:before": {
              content: '""',
              position: "absolute",
              width: 28,
              height: 14,
              borderRadius: 7,
              zIndex: -1,
              opacity: 0,
              transition: "opacity 0.2s ease-in-out"
            }
          },
          "&:hover": {
            "& .MuiSwitch-track": {
              backgroundColor: theme[mode].hover.track.backgroundColor,
              "&:before": {
                opacity: 1
              }
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              "& + .MuiSwitch-track": {
                backgroundColor: theme[mode].hover.checked.track.backgroundColor,
                "&:before": {
                  opacity: 1
                }
              }
            }
          },
          "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(13.5px)",
            "& + .MuiSwitch-track": {
              "&:before": {
                content: '""',
                position: "absolute",
                width: 28,
                height: 14,
                borderRadius: 7,
                zIndex: -1,
                opacity: 0,
                transition: "opacity 0.2s ease-in-out"
              }
            }
          },
          "& .MuiSwitch-switchBase.Mui-disabled": {
            "& + .MuiSwitch-track": {
              backgroundColor: theme[mode].track.disabled.backgroundColor,
              opacity: 1,
              boxShadow: "none",
              "&:before": {
                boxShadow: "none"
              }
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: theme[mode].thumb.disabled.backgroundColor
            },
            "&.Mui-checked": {
              "& .MuiSwitch-thumb": {
                backgroundColor: theme[mode].thumb.disabled.checked.backgroundColor
              },
              "& + .MuiSwitch-track": {
                backgroundColor: theme[mode].track.disabled.checked.backgroundColor,
                boxShadow: "none"
              }
            }
          }
        }
      }
    ]
  };
};

export default MuiSwitch;
