const options = {
  light: {
    whitePointer: {
      color: "#FAF0FF"
    },
    hawkesBlue: {
      color: "#CDD8FC"
    },
    iceberg: {
      color: "#C9F1F1"
    },
    sazerac: {
      color: "#FFF3E2"
    },
    purpleHeart: {
      color: "#833DE5"
    },
    blueRibbon: {
      color: "#1145F0"
    },
    genoa: {
      color: "#158284"
    },
    tenn: {
      color: "#DB8300"
    },
    default: {
      backgroundColor: "#EDEEF0",
      border: "#D5DEEA",
      color: "#264769",
      hover: {
        border: "#5278F4",
        background: "#EDEEF0",
        color: "#264769"
      },
      selected: {
        border: "#5278F4",
        background: "#EDEEF0", //"#E5E8EB",
        color: "#015ECB" //"#0C6FDD",
      },
      disabled: {
        border: "#D5DEEA",
        color: "#A9AEB7"
      },
      active: {
        svg: {
          color: "#24BE74",
          border: "#FFF"
        }
      }
    },
    tabSmall: {
      color: "#264769",
      hover: {
        background: "#EDEEF0",
        color: "#264769"
      },
      selected: {
        background: "#EDEEF0",
        color: "#0C6FDD "
      },
      disabled: {
        color: "#A8B5C3"
      }
    },
    tabSmallSimple: {
      hover: {
        background: "#F2F2F2"
      },
      selected: {
        background: "#F2F2F2"
      }
    },
    tabCounterBadge: {
      color: "#264769",
      backgroundColor: "#D7DADD",
      onTabHover: {
        backgroundColor: "#C5C9CC"
      },
      disabled: {
        color: "#92A2B3",
        backgroundColor: "#EAECED"
      }
    },
    protectionTab: {
      border: "1px solid rgba(46, 88, 148, 0.2)",
      disabled: {
        background: "#F8F8F8",
        color: "rgba(107, 114, 128, 0.5)"
      },
      successIcon: {
        background: "#fff",
        border: "1px solid #fff"
      }
    },
    CWAF: {
      hover: {
        background: "rgba(82, 120, 244, 0.1)",
        border: "1px solid #5278F4"
      }
    },
    CDDOS: {
      hover: {
        background: "rgba(108, 89, 185, 0.15)",
        border: "1px solid #6C59B9"
      }
    },
    CBOT: {
      hover: {
        background: "rgba(255, 196, 109, 0.2)",
        border: "1px solid #FFC46D"
      }
    },
    CTRC: {
      hover: {
        background: "rgba(235, 251, 252, 1)",
        border: "1px solid rgba(32, 196, 198, 1)"
      }
    },
    typeTab: {
      border: "1px solid transparent",
      background: "#EFF2F3",
      disabled: {
        background: "rgba(239, 242, 243, 0.5)",
        color: "rgba(107, 114, 128, 0.5)"
      },
      successIcon: {
        background: "#1A1C1E",
        border: "1px solid #1A1C1E"
      },
      default: {
        background: "#F2F4F6",
        hover: {
          border: "#0E0ADA"
        },
        selected: {
          color: "#0E0ADA",
          background: "#CDD8FC"
        }
      }
    },
    application: {
      hover: {
        background: "#EFF2F3",
        border: "1px solid #5278F4"
      },
      selected: {
        background: "rgba(82, 120, 244, 0.25)",
        color: "#0027A1"
      }
    },
    infrastructure: {
      hover: {
        background: "#EFF2F3",
        border: "1px solid #6C59B9"
      },
      selected: {
        background: "rgba(108, 89, 185, 0.25)",
        color: "#1C0086"
      }
    },
    bot: {
      hover: {
        background: "#EFF2F3",
        border: "1px solid #925700"
      },
      selected: {
        background: "#FFF3E2",
        color: "#925700"
      }
    },
    attackReport: {
      selected: {
        background: "#DFF1FF",
        color: "#02548F"
      }
    },
    vertical: {
      backgroundColor: "#F5F6F8",
      hover: {
        color: "#015ECB", //"#0C6FDD",
        backgroundColor: "#E5F6FF"
      },
      selected: {
        color: "#0C6FDD",
        backgroundColor: "#E5F6FF",
        outline: "1px solid #0C6FDD"
      },
      disabled: {
        color: "#A9AEB7",
        backgroundColor: "#F5F6F8"
      }
    },
    counterTab: {
      backgroundColor: "#D7DADD",
      selected: {
        backgroundColor: "#C5C9CC"
      }
    },
    lilyWhite: {
      color: "#E5F6FF"
    },
    scienceBlue: {
      color: "#015ECB"
    },
    athensGray: {
      color: "#F5F6F8"
    },
    astronaut: {
      color: "#264769"
    },
    iron: {
      color: "#E1E3E6"
    },
    onahau: {
      color: "#CCECFF"
    }
  },
  dark: {
    purpleHeart: {
      color: "#C9A8FF"
    },
    blueRibbon: {
      color: "#6DCFFC"
    },
    genoa: {
      color: "#20C4C6"
    },
    tenn: {
      color: "#FFB549"
    },
    whitePointer: {
      color: "#2B0C57"
    },
    hawkesBlue: {
      color: "#144962"
    },
    iceberg: {
      color: "#034849"
    },
    sazerac: {
      color: "#3D2500"
    },
    porcelain: {
      color: "#4F5154"
    },
    default: {
      backgroundColor: "#3D4149",
      border: "#D5DEEA",
      color: "#D4D6DB",
      hover: {
        border: "#5278F4",
        background: "#3D4149",
        color: "#D4D6DB"
      },
      selected: {
        border: "#5278F4",
        background: "#3D4149",
        color: "#6DCFFC"
      },
      disabled: {
        border: "#79797b",
        color: "#7E8594"
      },
      active: {
        svg: {
          color: "#24BE74",
          border: "#1A1C1E"
        }
      }
    },
    tabSmall: {
      color: "#D4D6DB",
      hover: {
        background: "#414346",
        color: "#D4D6DB"
      },
      selected: {
        background: "#414346",
        color: "#6DCFFC"
      },
      disabled: {
        color: "#7E8594"
      }
    },
    tabCounterBadge: {
      color: "#D4D6DB",
      backgroundColor: "#414346",
      onTabHover: {
        backgroundColor: "#2E3032"
      },
      disabled: {
        color: "#797B7F",
        backgroundColor: "#303234"
      }
    },
    tabSmallSimple: {
      hover: {
        background: "#414346"
      },
      selected: {
        background: "#414346"
      }
    },
    protectionTab: {
      border: "1px solid #D4D6DB",
      disabled: {
        background: "#4F5154",
        color: "rgba(212, 214, 219, 0.5)"
      },
      successIcon: {
        background: "#1A1C1E",
        border: "1px solid #1A1C1E"
      }
    },
    CWAF: {
      hover: {
        background: "rgba(82, 120, 244, 0.2)",
        border: "1px solid #5278F4"
      }
    },
    CDDOS: {
      hover: {
        background: "rgba(132, 116, 197, 0.2)",
        border: "1px solid #8474C5"
      }
    },
    CBOT: {
      hover: {
        background: "rgba(255, 196, 109, 0.2)",
        border: "1px solid #FFC46D"
      }
    },
    CTRC: {
      hover: {
        background: "rgba(239, 255, 255, 0.2)",
        border: "1px solid rgba(32, 196, 198, 1)"
      }
    },

    typeTab: {
      border: "1px solid transparent",
      background: "#414346", //"#2C2D31",
      disabled: {
        background: "#4F5154",
        color: "rgba(212, 214, 219, 0.3)"
      },
      successIcon: {
        background: "#1A1C1E",
        border: "1px solid #1A1C1E"
      },
      default: {
        background: "#414346",
        hover: {
          border: "#6DCFFC"
        },
        selected: {
          color: "#6DCFFC",
          background: "#273153"
        }
      }
    },
    application: {
      hover: {
        background: "#2C2D31",
        border: "1px solid #5278F4"
      },
      selected: {
        background: "rgba(82, 120, 244, 0.25)",
        color: "#5278F4"
      }
    },
    infrastructure: {
      hover: {
        background: "#2C2D31",
        border: "1px solid #6C59B9"
      },
      selected: {
        background: "rgba(108, 89, 185, 0.25)",
        color: "#8474C5"
      }
    },
    bot: {
      hover: {
        background: "#2C2D31",
        border: "1px solid #FFEACA"
      },
      selected: {
        background: "#3D2500",
        color: "#FFEACA"
      }
    },
    attackReport: {
      selected: {
        background: "#143349",
        color: "#A5D0F2"
      }
    },
    vertical: {
      backgroundColor: "#3D4149",
      hover: {
        color: "#6DCFFC",
        backgroundColor: "#0F3D52"
      },
      selected: {
        color: "#6DCFFC",
        backgroundColor: "#0F3D52",
        outline: "1px solid #6DCFFC"
      },
      disabled: {
        color: "#7E8594",
        backgroundColor: "#3D4149"
      }
    },
    counterTab: {
      backgroundColor: "#414346",
      selected: {
        backgroundColor: "#2E3032"
      }
    },
    lilyWhite: {
      color: "#0F3D52"
    },
    scienceBlue: {
      color: "#6DCFFC"
    },
    athensGray: {
      color: "#3D4149"
    },
    astronaut: {
      color: "#D4D6DB"
    },
    iron: {
      color: "#4C515B"
    },
    onahau: {
      color: "#165A79"
    }
  }
};

const MuiTab = mode => {
  return {
    styleOverrides: {
      root: {
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
        margin: "0 2.5px",
        borderRadius: 4,
        "&::after": {
          content: "attr(text)",
          visibility: "hidden",
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 0
        },
        "&.tab-with-counter": {
          padding: "7px 7px 7px 15px",
          minWidth: "unset"
        },
        "& .tab-counter": {
          ...options[mode].tabCounterBadge.counter,
          color: options[mode].tabCounterBadge.color,
          backgroundColor: options[mode].tabCounterBadge.backgroundColor,
          padding: "1px 7px",
          fontWeight: 400,
          fontSize: "12px",
          height: "unset",
          "&:hover": {
            color: options[mode].tabCounterBadge.color
          },
          "& .MuiChip-label": {
            paddingLeft: "0",
            paddingRight: "0"
          }
        },
        "&:hover": {
          background: `${options[mode].default.hover.background}`,
          color: `${options[mode].default.hover.color}`,
          "& .tab-counter": {
            ...options[mode].tabCounterBadge.onTabHover
          }
        },
        "&.Mui-selected": {
          background: `${options[mode].default.selected.background}`,
          color: `${options[mode].default.selected.color}`,
          fontWeight: 500,
          "& .tab-counter": {
            color: options[mode].default.selected.color,
            backgroundColor: options[mode].tabCounterBadge.onTabHover.backgroundColor,
            fontWeight: 500
          }
        },
        "&.Mui-disabled": {
          color: `${options[mode].default.disabled.color}`,
          borderColor: `${options[mode].default.disabled.border}`,
          opacity: 1,
          "& .tab-counter": {
            ...options[mode].tabCounterBadge.disabled
          }
        }
      }
    },
    variants: [
      {
        props: { variant: "tab-medium" },
        style: {
          padding: "8px 10px",
          fontSize: 12,
          lineHeight: "14px",
          borderRadius: 4,
          color: `${options[mode].tabSmall.color}`,
          "&:hover": {
            background: `${options[mode].tabSmall.hover.background}`,
            fontWeight: 400
          },
          "&.Mui-selected": {
            background: `${options[mode].tabSmall.selected.background}`,
            color: `${options[mode].tabSmall.selected.color}`,
            fontWeight: 500
          },
          "&.Mui-disabled": {
            color: `${options[mode].tabSmall.disabled.color}`
          }
        }
      },
      {
        props: { variant: "tab-small" },
        style: {
          padding: "3px 10px",
          fontSize: 12,
          lineHeight: "14px",
          borderRadius: 4,
          color: `${options[mode].tabSmall.color}`,
          "&:hover": {
            background: `${options[mode].tabSmall.hover.background}`,
            fontWeight: 400
          },
          "&.Mui-selected": {
            background: `${options[mode].tabSmall.selected.background}`,
            color: `${options[mode].tabSmall.selected.color}`,
            fontWeight: 500
          },
          "&.Mui-disabled": {
            color: `${options[mode].tabSmall.disabled.color}`
          }
        }
      },
      {
        props: { variant: "tab-small-simple" },
        style: {
          padding: "3px 10px",
          fontSize: 12,
          lineHeight: "14px",
          borderRadius: 4,
          "&::after": {
            content: "attr(text)",
            visibility: "hidden",
            fontSize: 12,
            fontWeight: 500
          },
          "&:hover": {
            background: `${options[mode].tabSmallSimple.hover.background}`
          },
          "&.Mui-selected": {
            background: `${options[mode].tabSmallSimple.selected.background}`,
            fontWeight: 500
          }
        }
      },
      {
        props: { margins: "noMargin" },
        style: {
          "&:first-of-type": {
            marginLeft: 0
          }
        }
      },
      {
        props: { variant: "beta" },
        style: {
          padding: "5px 5px 5px 15px"
        }
      },
      {
        props: { variant: "connection-tab" },
        style: {
          minWidth: "auto",
          height: 40,
          padding: "14px 10px",
          lineHeight: "20px",
          fontSize: 14,
          fontWeight: 400,
          borderRadius: 8,
          border: "1px solid",
          "& .MuiTab-iconWrapper": {
            marginRight: "4px"
          }
        }
      },
      {
        props: { color: "connection" },
        style: {
          background: "initial",
          borderColor: `${options[mode].default.border}`,
          "&:hover": {
            background: "initial"
          },
          "&.Mui-selected": {
            "&:hover": {
              background: "initial"
            },
            background: "initial",
            color: `${options[mode].default.color}`,
            borderColor: `${options[mode].default.selected.border}`
          },
          "& .active": {
            color: `${options[mode].default.active.svg.color}`,
            "& svg": {
              color: `${options[mode].default.active.svg.color}`,
              border: "1px solid",
              borderColor: `${options[mode].default.active.svg.border}`,
              borderRadius: "50%",
              boxSizing: "content-box"
            }
          }
        }
      },
      {
        props: { variant: "protection-tab" },
        style: {
          width: 130,
          height: 44,
          margin: 0,
          padding: "6px 10px",
          overflow: "visible",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "16px",
          color: `${options[mode].default.color}`,
          border: `${options[mode].protectionTab.border}`,
          borderRadius: 8,
          textAlign: "left",
          "& .active": {
            color: "#24BE74",
            background: `${options[mode].protectionTab.successIcon.background}`,
            lineHeight: "10px",
            borderRadius: "10px",
            border: `${options[mode].protectionTab.successIcon.border}`
          },
          "&:hover": {
            borderRadius: 8
          },
          "&.Mui-selected": {
            color: `${options[mode].default.color}`,
            background: "initial",
            fontWeight: 500,
            borderRadius: 8
          },
          "&.Mui-disabled": {
            borderColor: "transparent",
            fontWeight: "initial",
            background: `${options[mode].protectionTab.disabled.background}`,
            color: `${options[mode].protectionTab.disabled.color}`,
            opacity: 0.8
          },
          "&.protection-tab-CWAF": {
            "&:hover:not(.Mui-disabled)": {
              background: `${options[mode].CWAF.hover.background}`,
              border: `${options[mode].CWAF.hover.border}`
            },
            "&.Mui-selected:not(.Mui-disabled)": {
              border: `${options[mode].CWAF.hover.border}`
            }
          },
          "&.protection-tab-CDDOS": {
            width: 143,
            "&:hover:not(.Mui-disabled)": {
              background: `${options[mode].CDDOS.hover.background}`,
              border: `${options[mode].CDDOS.hover.border}`
            },
            "&.Mui-selected:not(.Mui-disabled)": {
              border: `${options[mode].CDDOS.hover.border}`
            }
          },
          "&.protection-tab-CBOT": {
            minWidth: 110,
            "&:hover:not(.Mui-disabled)": {
              background: `${options[mode].CBOT.hover.background}`,
              border: `${options[mode].CBOT.hover.border}`
            },
            "&.Mui-selected:not(.Mui-disabled)": {
              border: `${options[mode].CBOT.hover.border}`
            }
          },
          "&.protection-tab-CTRC": {
            minWidth: 110,
            "&:hover:not(.Mui-disabled)": {
              background: `${options[mode].CTRC.hover.background}`,
              border: `${options[mode].CTRC.hover.border}`
            },
            "&.Mui-selected:not(.Mui-disabled)": {
              border: `${options[mode].CTRC.hover.border}`
            }
          }
        }
      },
      {
        props: { variant: "type-tab" },
        style: {
          width: 121,
          height: 44,
          margin: 0,
          fontSize: 12,
          fontWeight: 400,
          padding: "11px",
          lineHeight: "14px",
          justifyContent: "start",
          background: `${options[mode].typeTab.background}`,
          color: `${options[mode].default.color}`,
          border: `${options[mode].typeTab.border}`,
          borderRadius: 12,
          textAlign: "left",
          "&:hover": {
            borderRadius: 12,
            fontWeight: 500
          },
          "&.MuiTab-root>.MuiTab-iconWrapper": {
            marginRight: "5px"
          },
          "&.Mui-selected": {
            color: `${options[mode].default.color}`,
            background: "initial",
            fontWeight: 500,
            borderRadius: 12
          },
          "&.Mui-disabled": {
            borderColor: "transparent",
            fontWeight: "initial",
            background: `${options[mode].typeTab.disabled.background}`,
            color: `${options[mode].typeTab.disabled.color}`,
            opacity: 0.8
          }
        }
      },
      {
        props: { variant: "type-tab", fonts: "not-bold" },
        style: {
          "&:hover": {
            borderRadius: 12,
            fontWeight: 400
          },
          "&.Mui-selected": {
            fontWeight: 400
          }
        }
      },
      {
        props: { variant: "type-tab", color: "default" },
        style: {
          background: `${options[mode].typeTab.default.background}`,
          "&:hover:not(.Mui-disabled)": {
            background: `${options[mode].typeTab.default.background}`,
            border: `1px solid ${options[mode].typeTab.default.hover.border}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].typeTab.default.selected.color}`,
            background: `${options[mode].typeTab.default.selected.background}`
          }
        }
      },
      {
        props: { color: "CWAF" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            background: `${options[mode].application.hover.background}`,
            border: `${options[mode].application.hover.border}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].application.selected.color}`,
            background: `${options[mode].application.selected.background}`
          }
        }
      },
      {
        props: { color: "CDDOS" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            background: `${options[mode].infrastructure.hover.background}`,
            border: `${options[mode].infrastructure.hover.border}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].infrastructure.selected.color}`,
            background: `${options[mode].infrastructure.selected.background}`
          }
        }
      },
      {
        props: { color: "CDDOS_ATTACK" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            background: `${options[mode].infrastructure.hover.background}`,
            border: `${options[mode].infrastructure.hover.border}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].attackReport.selected.color}`,
            border: `${options[mode].attackReport.selected.color}`,
            background: `${options[mode].attackReport.selected.background}`
          }
        }
      },
      {
        props: { color: "CBOT" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            background: `${options[mode].bot.hover.background}`,
            border: `${options[mode].bot.hover.border}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].bot.selected.color}`,
            background: `${options[mode].bot.selected.background}`
          }
        }
      },
      {
        props: { color: "httpManagement_REDIRECT" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            border: `1px solid ${options[mode].purpleHeart.color}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].purpleHeart.color}`,
            background: `${options[mode].whitePointer.color}`
          }
        }
      },
      {
        props: { color: "httpManagement_SECURITY" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            border: `1px solid ${options[mode].blueRibbon.color}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].blueRibbon.color}`,
            background: `${options[mode].hawkesBlue.color}`
          }
        }
      },
      {
        props: { color: "httpManagement_DELIVERY" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            border: `1px solid ${options[mode].genoa.color}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].genoa.color}`,
            background: `${options[mode].iceberg.color}`
          }
        }
      },
      {
        props: { color: "httpManagement_RESPONSE_DELIVERY" },
        style: {
          "&:hover:not(.Mui-disabled)": {
            border: `1px solid ${options[mode].tenn.color}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: `${options[mode].tenn.color}`,
            background: `${options[mode].sazerac.color}`
          }
        }
      },
      {
        props: { variant: "withTooltip" },
        style: {
          "&::after": {
            marginRight: "23px" // tooltip size + padding
          }
        }
      },
      {
        props: { variant: "vertical-tab" },
        style: {
          margin: "1px",
          padding: "8px 10px",
          justifyContent: "flex-start",
          fontSize: 12,
          lineHeight: "14px",
          borderRadius: 4,
          "& .MuiTab-iconWrapper": {
            marginRight: "4px"
          },

          backgroundColor: `${options[mode].vertical.backgroundColor}`,
          "&:hover": {
            color: `${options[mode].vertical.hover.color}`,
            backgroundColor: `${options[mode].vertical.hover.backgroundColor}`
          },
          "&.Mui-selected": {
            fontWeight: 500,
            color: `${options[mode].vertical.selected.color}`,
            backgroundColor: `${options[mode].vertical.selected.backgroundColor}`,
            outline: `${options[mode].vertical.selected.outline}`
          },
          "&.Mui-disabled": {
            color: `${options[mode].vertical.disabled.color}`,
            backgroundColor: `${options[mode].vertical.disabled.backgroundColor}`,
            outline: "none"
          }
        }
      },
      {
        props: { variant: "counter-tab" },
        style: {
          "& .MuiChip-root": {
            backgroundColor: `${options[mode].counterTab.backgroundColor}`,
            color: "inherit",
            height: "20px",
            "& .MuiChip-label": {
              padding: "3px 7px",
              fontWeight: "inherit"
            }
          },
          "&:hover": {
            "& .MuiChip-root": {
              backgroundColor: `${options[mode].counterTab.selected.backgroundColor}`,
              "&:hover": {
                "& .MuiChip-label": {
                  color: "inherit"
                }
              }
            }
          },
          "&.Mui-selected": {
            fontWeight: 500,
            "& .MuiChip-root": {
              backgroundColor: `${options[mode].counterTab.selected.backgroundColor}`
            }
          }
        }
      },
      {
        props: { color: "lilyWhite" },
        style: {
          background: options[mode].athensGray.color,
          color: options[mode].astronaut.color,
          "&:hover:not(.Mui-disabled)": {
            background: options[mode].iron.color,
            border: `1px solid ${options[mode].scienceBlue.color}`
          },
          "&.Mui-selected:not(.Mui-disabled)": {
            color: options[mode].scienceBlue.color,
            background: options[mode].lilyWhite.color,
            "&:hover": {
              background: options[mode].onahau.color
            }
          }
        }
      }
    ]
  };
};

export default MuiTab;
