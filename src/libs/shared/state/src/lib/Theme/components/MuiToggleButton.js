const options = {
  light: {
    default: {
      color: "#264769",
      hover: {
        background: "#EDEEF0",
        color: "#264769"
      },
      selected: {
        background: "#EDEEF0",
        color: "#0C6FDD",
        fwaas: {
          events: {
            color: "#FF2B44"
          },
          packets: {
            color: "#0F41C0"
          },
          volume: {
            color: "#007069"
          }
        }
      },
      disabled: {
        color: "rgba(38, 71, 105, 0.4)"
      }
    },
    tabSmall: {
      color: "#264769",
      hover: {
        background: "#E5E8EB",
        color: "#A22BFF"
      },
      selected: {
        background: "#E5E8EB",
        color: "#0C6FDD"
      },
      disabled: {
        color: "#A8B5C3"
      }
    },
    contained: {
      default: {
        color: "#5B626E"
      },
      hover: {
        background: "#E5E8EB"
      },
      selected: {
        background: "#E5E8EB",
        color: "#0C6FDD"
      }
    },
    graphIcon: {
      default: {
        color: "#60778E",
        borderColor: "#CBD4DB"
      },
      hover: {
        color: "#264769",
        background: "#E4E9EC"
      },
      selected: {
        color: "#264769",
        background: "#CBD4DB"
      },
      disabled: {
        color: "#BDBFC7"
      }
    }
  },
  dark: {
    default: {
      color: "#D4D6DB",
      hover: {
        background: "#3D4149",
        color: "#D4D6DB"
      },
      selected: {
        background: "#3D4149",
        color: "#6DCFFC",
        fwaas: {
          events: {
            color: "#FF5F5F"
          },
          packets: {
            color: "#4B7BF9"
          },
          volume: {
            color: "#00AAA0"
          }
        }
      },
      disabled: {
        color: "#7E8594"
      }
    },
    tabSmall: {
      color: "#D4D6DB",
      hover: {
        background: "#414346",
        color: "#B657FF"
      },
      selected: {
        background: "#3D4149",
        color: "#6DCFFC"
      },
      disabled: {
        color: "#696A6E"
      }
    },
    contained: {
      default: {
        color: "#D4D6DB"
      },
      hover: {
        background: "#42474B"
      },
      selected: {
        background: "#42474B",
        color: "#6DCFFC"
      }
    },
    graphIcon: {
      default: {
        color: "#9EA0A4",
        borderColor: "#414346"
      },
      hover: {
        color: "#DADADA",
        background: "#484A4D"
      },
      selected: {
        color: "#D4D6DB",
        background: "#414346"
      },
      disabled: {
        color: "#575757"
      }
    }
  }
};

const MuiToggleButton = mode => {
  return {
    variants: [
      {
        props: { variant: "tab" },
        style: {
          padding: "7px 15px",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "16px",
          color: `${options[mode].default.color}`,
          letterSpacing: "normal",
          textTransform: "capitalize",
          minHeight: "unset",
          minWidth: 90,
          transition: "background 0.2s ease-in-out",
          "&:hover": {
            background: `${options[mode].default.hover.background}`,
            color: `${options[mode].default.hover.color}`,
            borderRadius: 4,
            "&.EVENT_COUNT": {
              color: `${options[mode].default.selected.fwaas.events.color}`
            },
            "&.PACKET_COUNT": {
              color: `${options[mode].default.selected.fwaas.packets.color}`
            },
            "&.BYTE_COUNT": {
              color: `${options[mode].default.selected.fwaas.volume.color}`
            }
          },
          "&.Mui-selected": {
            background: `${options[mode].default.selected.background}`,
            color: `${options[mode].default.selected.color}`,
            fontWeight: 700,
            borderRadius: 4,
            "&.EVENT_COUNT": {
              color: `${options[mode].default.selected.fwaas.events.color}`
            },
            "&.PACKET_COUNT": {
              color: `${options[mode].default.selected.fwaas.packets.color}`
            },
            "&.BYTE_COUNT": {
              color: `${options[mode].default.selected.fwaas.volume.color}`
            }
          },
          "&.Mui-disabled": {
            color: `${options[mode].default.disabled.color}`
          }
        }
      },
      {
        props: { variant: "tab-small" },
        style: {
          padding: "3px 10px",
          fontSize: 12,
          lineHeight: "14px",
          color: `${options[mode].tabSmall.color}`,
          "&:hover": {
            background: `${options[mode].tabSmall.hover.background}`,
            color: `${options[mode].default.hover.color}`,
            borderRadius: 4
          },
          "&.Mui-selected": {
            background: `${options[mode].tabSmall.selected.background}`,
            color: `${options[mode].tabSmall.selected.color}`,
            borderRadius: 4,
            fontWeight: 700
          },
          "&.Mui-disabled": {
            color: `${options[mode].tabSmall.disabled.color}`
          }
        }
      },
      {
        props: { variant: "contained" },
        style: {
          padding: "8px 7px",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "14px",
          color: `${options[mode].contained.default.color}`,
          letterSpacing: "normal",
          minHeight: "unset",
          minWidth: 30,
          margin: "unset",
          border: "unset",
          transition: "background 0.2s ease-in-out",
          "&:hover": {
            background: `${options[mode].contained.hover.background}`,
            borderRadius: 8
          },
          "&.Mui-selected": {
            background: `${options[mode].contained.selected.background}`,
            color: `${options[mode].contained.selected.color}`,
            fontWeight: 700,
            borderRadius: 8
          }
        }
      },
      {
        props: { variant: "graphToggle" },
        style: {
          "&.MuiToggleButton-root": {
            color: `${options[mode].graphIcon.default.color}`,
            borderColor: `${options[mode].graphIcon.default.borderColor}`,
            "&:hover": {
              color: `${options[mode].graphIcon.hover.color}`,
              background: `${options[mode].graphIcon.hover.background}`
            },
            "&.Mui-selected": {
              color: `${options[mode].graphIcon.selected.color}`,
              background: `${options[mode].graphIcon.selected.background}`
            },
            "&.Mui-disabled": {
              color: `${options[mode].graphIcon.disabled.color}`
            }
          }
        }
      }
    ]
  };
};

export default MuiToggleButton;
