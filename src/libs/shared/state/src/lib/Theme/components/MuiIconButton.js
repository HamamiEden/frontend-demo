const iconColors = {
  light: {
    default: {
      color: "#5B626E", //"#687F96",
      backgroundColor: "#CBD4DB",
      hover: {
        color: "#015ECB"
      }
    },
    secondaryHover: {
      hover: {
        color: "#264769"
      }
    },
    caution: {
      hover: {
        backgroundColor: "#ED4C624D",
        color: "#FF2B44"
      }
    },
    danger: {
      color: "#FF2B44",
      hover: {
        backgroundColor: "#ED4C624D"
      }
    },
    blue: {
      color: "#211DD9",
      secondaryColor: "#355CD5"
    },
    lightBlue: {
      color: "#FFFFFF",
      background: "#439DF7",
      hover: {
        boxShadow: "0px 0px 5px 2px rgba(67, 157, 247, 0.35)"
      }
    },
    assetPending: {
      color: "#F67D0EB2",
      badgeColor: "#F67D0E",
      background: "transparent",
      boxShadow: "none"
    },
    secondary: {
      color: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.3)"
    },
    disabled: {
      color: "#BDBFC7",
      backgroundColor: "#EDEDED"
    },
    primary: {
      color: "#FFFFFF",
      background: "#0280EF",
      hover: {
        background: "#0C6FDD"
      },
      active: {
        background: "#0040AD"
      }
    },
    openWindow: {
      color: "#5B626E", //"#687F96",
      hover: {
        color: "#264769"
      }
    },
    check: {
      backgroundColor: "#BAF2D7",
      color: "#1FA262"
    },
    edit: {
      hover: {
        color: "#264769"
      }
    },
    preview: {
      color: "#6E28CC",
      hoverBackground: "#EBE0FB"
    },
    accountOverviewIntroduction: {
      borderColor: "#1E78FF",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 0px 5px rgba(38, 71, 105, 0.25)",

      hover: {
        backgroundColor: "#E0EEFF"
      }
    },
    filters: {
      default: {
        backgroundColor: "#EFF2F3",
        color: "#5B626E", //"#6B7280",
        hover: {
          boxShadow: "0px 0px 4px 1px #C9CCCD"
        }
      },
      fwaas: {
        bypass: {
          color: "#4C3B8E",
          backgroundColor: "#DFCFF4"
        },
        eaaf: {
          color: "#DB8300",
          backgroundColor: "#FFEACA"
        },
        ips: {
          color: "#1145F0",
          backgroundColor: "#CDD8FC"
        },
        geo: {
          color: "#19999B",
          backgroundColor: "#C9F1F1"
        },
        connectionLimit: {
          color: "#F01C69",
          backgroundColor: "#FCD7E5"
        },
        acl: {
          color: "#AC45DC",
          backgroundColor: "#F5DFFF"
        },
        ddos: {
          color: "#024A74",
          backgroundColor: "#CDF3FF"
        }
      }
    },
    search: {
      color: "#264769"
    },
    pagination: {
      disabled: "#BDBFC7",
      selected: {
        color: "#015ECB",
        backgroundColor: "#EDEEF0"
      }
    },
    backArrowButton: {
      color: "#439DF7",
      background: "#FFFFFF",
      hover: {
        color: "#FFFFFF",
        background: "#439DF7",
        boxShadow: "0px 0px 5px 2px rgba(67, 157, 247, 0.35)"
      }
    },
    audit: {
      color: "#5B626E", //"#6B7280",
      backgroundColor: "#EFF2F3",
      COMPLETED: {
        color: "#1FA262",
        backgroundColor: "#D1FAF1"
      },
      IN_PROGRESS: {
        color: "#E48A00",
        backgroundColor: "#FFEACA"
      },
      FAILED: {
        color: "#FF2B44",
        backgroundColor: "#FFCACA"
      }
    },
    severityIndicator: {
      HIGH: { color: "#FF2B44", background: "#FF2B441A" },
      MEDIUM: { color: "#DB8300", background: "#FFA41D45" },
      LOW: { color: "#FCBE47", background: "#FCEA474D" },
      INFO: { color: "#0C7ACA", background: "#EAF6FF" },
      CRITICAL: { color: "#D60019", background: "#D600191A" }
    },
    assetAttackStatus: {
      ACTIVE: { color: "#FF2B44", background: "#ffEAED" },
      COOLDOWN: { color: "#F97700", background: "#FFE6C2" },
      COMPLETED: { color: "#5B626E", background: "#E6E7E9" }
    },
    attackManagement: {
      attackSummaryIndicator: {
        active: {
          color: "#FC4C5D",
          background: "#FFEFEF",
          animationBorderColor: "#FB7C7C"
        },
        cooldown: {
          color: "#F97700"
        },
        completed: {
          color: "#24BE74"
        }
      }
    },
    send: {
      color: "#7E8594",
      disabled: {
        color: "#BFC2C9"
      },
      hover: {
        color: "#264769",
        background: "#D4D6DB"
      }
    },
    green: {
      color: "#156C42",
      backgroundColor: "#E5FAF0"
    },
    orange: {
      color: "#BF360C",
      backgroundColor: "#FFF7EB"
    },
    gray: {
      color: "#5B626E",
      backgroundColor: "#F5F6F8"
    },
    red: {
      backgroundColor: "#FFE5EB",
      color: "#B5153A"
    },
    purple: {
      color: "#641BC9",
      backgroundColor: "#EBE0FB"
    },
    mediumPurple: {
      color: "#AC45DC"
    },
    scienceBlue: {
      color: "#015ECB"
    },
    blueRibbon: {
      color: "#1145F0"
    },
    easternBlue: {
      color: "#19999B"
    },
    mangoTango: {
      color: "#DB8300"
    },
    blueChalk: {
      color: "#F5DFFF"
    },
    hawkesBlue: {
      color: "#CDD8FC"
    },
    iceberg: {
      color: "#C9F1F1"
    },
    sandyBeach: {
      color: "#FFEACA"
    }
  },
  dark: {
    default: {
      color: "#D4D6DB",
      backgroundColor: "#484A4D",
      hover: {
        color: "#D4D6DB"
      }
    },
    secondaryHover: {
      hover: {
        color: "#D4D6DB"
      }
    },
    caution: {
      color: "#9EA0A4",
      hover: {
        backgroundColor: "#ED4C624D",
        color: "#FF2B44"
      }
    },
    danger: {
      color: "#FF2B44",
      hover: {
        backgroundColor: "#ED4C624D"
      }
    },
    blue: {
      color: "#3B77EE",
      secondaryColor: "#9EA0A4"
    },
    lightBlue: {
      color: "#FFFFFF",
      background: "#439DF7",
      hover: {
        boxShadow: "0px 0px 5px 2px rgba(67, 157, 247, 0.35)"
      }
    },
    assetPending: {
      color: "#F67D0EB2",
      badgeColor: "#F67D0E",
      background: "transparent",
      boxShadow: "none"
    },
    secondary: {
      color: "rgba(0, 0, 0, 0.87)",
      backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
    disabled: {
      color: "#575757",
      backgroundColor: "#333333"
    },
    primary: {
      color: "#FFFFFF",
      background: "#0280EF",
      hover: {
        background: "#0C6FDD"
      },
      active: {
        background: "#0040AD"
      }
    },
    openWindow: {
      color: "#D4D6DB",
      hover: {
        color: "#D4D6DB"
      }
    },
    check: {
      backgroundColor: "rgba(49, 216, 135, 0.2)",
      color: "#31D887"
    },
    edit: {
      hover: {
        color: "#D4D6DB"
      }
    },
    preview: {
      color: "#9E67EA",
      hoverBackground: "#481490"
    },
    accountOverviewIntroduction: {
      borderColor: "#1E78FF",
      backgroundColor: "rgba(30, 120, 255, 0.2)",
      boxShadow: "0px 0px 5px 1px rgba(249, 249, 249, 0.3)",

      hover: {
        backgroundColor: "rgba(30, 120, 255, 0.35)"
      }
    },
    filters: {
      default: {
        backgroundColor: "#4F5154",
        color: "#FFFFFF",
        hover: {
          boxShadow: "0px 0px 6px rgba(221, 221, 221, 0.7)"
        }
      },
      fwaas: {
        bypass: {
          color: "#98B0FF",
          backgroundColor: "#273560"
        },
        eaaf: {
          color: "#DB8300",
          backgroundColor: "#452E0B"
        },
        ips: {
          color: "#6DCFFC",
          backgroundColor: "#144962"
        },
        geo: {
          color: "#20C4C6",
          backgroundColor: "#034849"
        },
        connectionLimit: {
          color: "#F88EB5",
          backgroundColor: "#6A1B38"
        },
        acl: {
          color: "#C19FF2",
          backgroundColor: "#43276C"
        },
        ddos: {
          color: "#BDF3FF",
          backgroundColor: "#004374"
        }
      }
    },
    search: {
      color: "#D4D6DB"
    },
    pagination: {
      disabled: "#575757",
      selected: {
        color: "#015ECB",
        backgroundColor: "#3D4149"
      }
    },
    backArrowButton: {
      color: "#439DF7",
      background: "#080809",
      hover: {
        color: "#439DF7",
        background: "rgba(119, 165, 255, 0.40);",
        boxShadow: "0px 0px 5px 2px rgba(67, 157, 247, 0.35)"
      }
    },
    audit: {
      color: "#D4D6DB",
      backgroundColor: "#484A4D",
      COMPLETED: {
        color: "#31D887",
        backgroundColor: "#09341F"
      },
      IN_PROGRESS: {
        color: "#DBAB00",
        backgroundColor: "#453C0B"
      },
      FAILED: {
        color: "#FE001E",
        backgroundColor: "#571921"
      }
    },
    severityIndicator: {
      HIGH: { color: "#FF2B44", background: "#581B23" },
      MEDIUM: { color: "#F97700", background: "#311E02" },
      LOW: { color: "#FFC700", background: "#4E2F00" },
      INFO: { color: "#58B9FF", background: "#0C7ACA4D" },
      CRITICAL: { color: "#FF0000", background: "#481618" }
    },
    assetAttackStatus: {
      ACTIVE: { color: "#FF2B44", background: "#581B23" },
      COOLDOWN: { color: "#F97700", background: "#311E02" },
      COMPLETED: { color: "#D4D6DB", background: "#484A4D" }
    },
    attackManagement: {
      attackSummaryIndicator: {
        active: {
          color: "#FF2B44",
          background: "#571921",
          animationBorderColor: "#FF2B44"
        },
        cooldown: {
          color: "#F97700"
        },
        completed: {
          color: "#31D887"
        }
      }
    },
    send: {
      color: "#DBDDE1",
      disabled: {
        color: "#4C515B"
      },
      hover: {
        color: "#DBDDE1",
        background: "#3D4149"
      }
    },
    green: {
      color: "#31D887",
      backgroundColor: "#09341F"
    },
    orange: {
      color: "#FFB549",
      backgroundColor: "#3D2500"
    },
    gray: {
      color: "#D4D6DB",
      backgroundColor: "#3D4149"
    },
    red: {
      backgroundColor: "#300D15",
      color: "#FE3363"
    },
    purple: {
      color: "#C9A8FF",
      backgroundColor: "#2B0C57"
    },
    mediumPurple: {
      color: "#C19FF2"
    },
    scienceBlue: {
      color: "#FFFFFF"
    },
    blueRibbon: {
      color: "#6DCFFC"
    },
    easternBlue: {
      color: "#20C4C6"
    },
    mangoTango: {
      color: "#DB8300"
    },
    blueChalk: {
      color: "#43276C"
    },
    hawkesBlue: {
      color: "#144962"
    },
    iceberg: {
      color: "#034849"
    },
    sandyBeach: {
      color: "#452E0B"
    }
  }
};

const MuiIconButton = mode => {
  return {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: {
        padding: 0,
        height: 30,
        width: 30,
        color: iconColors[mode].default.color,
        "&:hover": {
          backgroundColor: iconColors[mode].default.backgroundColor,
          color: iconColors[mode].default.hover.color
        },
        "&.Mui-disabled": {
          color: iconColors[mode].disabled.color
        },
        "&.hidden": {
          visibility: "hidden"
        }
      }
    },
    variants: [
      {
        props: { variant: "search" },
        style: {
          color: iconColors[mode].search.color
        }
      },
      {
        props: { variant: "caution" },
        style: {
          "&:hover": {
            backgroundColor: iconColors[mode].caution.hover.backgroundColor,
            color: iconColors[mode].caution.hover.color
          }
        }
      },
      {
        props: { variant: "danger" },
        style: {
          color: iconColors[mode].danger.color,
          "&:hover": {
            color: iconColors[mode].danger.color,
            backgroundColor: iconColors[mode].danger.hover.backgroundColor
          }
        }
      },
      {
        props: { variant: "inputIcon" },
        style: {
          width: 20,
          height: 20
        }
      },
      {
        props: { variant: "blue" },
        style: {
          color: iconColors[mode].blue.color
        }
      },
      {
        props: { variant: "secondaryBlue" },
        style: {
          color: iconColors[mode].blue.secondaryColor
        }
      },
      {
        props: { size: "small" },
        style: {
          width: 20,
          height: 20,
          "& svg": {
            width: 12
          }
        }
      },
      {
        props: { variant: "secondary" },
        style: {
          color: iconColors[mode].secondary.color,
          "&:hover": {
            backgroundColor: iconColors[mode].secondary.backgroundColor
          }
        }
      },
      {
        props: { variant: "closeDialog" },
        style: {
          position: "absolute",
          top: 10,
          right: 12
        }
      },
      {
        props: { variant: "primary" },
        style: {
          color: iconColors[mode].primary.color,
          background: iconColors[mode].primary.background,
          "&:hover": {
            color: iconColors[mode].primary.color,
            background: iconColors[mode].primary.hover.background
          },
          "&:active": {
            background: iconColors[mode].primary.active.background
          },
          "&.Mui-disabled": {
            background: iconColors[mode].disabled.backgroundColor
          }
        }
      },
      {
        props: { variant: "lightBlue" },
        style: {
          color: iconColors[mode].lightBlue.color,
          background: iconColors[mode].lightBlue.background,
          "&:hover": {
            color: iconColors[mode].lightBlue.color,
            background: iconColors[mode].lightBlue.background,
            boxShadow: iconColors[mode].lightBlue.hover.boxShadow
          }
        }
      },
      {
        props: { variant: "assetPending" },
        style: {
          color: iconColors[mode].assetPending.color,
          "&::after": {
            content: "' '",
            width: "3px",
            height: "3px",
            position: "absolute",
            top: 6,
            right: 7,
            borderRadius: "2px",
            backgroundColor: iconColors[mode].assetPending.badgeColor
          },
          "&:hover": {
            color: iconColors[mode].assetPending.color,
            background: iconColors[mode].assetPending.background,
            boxShadow: iconColors[mode].assetPending.boxShadow
          }
        }
      },
      {
        props: { size: "25" },
        style: {
          width: 25,
          height: 25
        }
      },
      {
        props: { hover: "noBGHover" },
        style: {
          "&:hover": {
            background: "transparent"
          }
        }
      },
      {
        props: { hover: "noHover" },
        style: {
          "&:hover": {
            color: iconColors[mode].default.color,
            background: "transparent"
          }
        }
      },
      {
        props: { iconcolor: "info" },
        style: {
          color: "var(--icon-default)",
          "&:hover": {
            color: "var(--icon-default)"
          },
          "&.Mui-disabled": {
            color: "var(--icon-disabled)"
          }
        }
      },
      {
        props: { iconcolor: "openWindow" },
        style: {
          color: iconColors[mode].openWindow.color,

          "&:hover": {
            color: iconColors[mode].openWindow.hover.color
          }
        }
      },
      {
        props: { iconcolor: "operator" },
        style: {
          color: "var(--text-enhance)",

          "&:hover": {
            color: "var(--text-enhance)"
          }
        }
      },
      {
        props: { variant: "check" },
        style: {
          "&:hover": {
            color: iconColors[mode].check.color,
            backgroundColor: iconColors[mode].check.backgroundColor
          }
        }
      },
      {
        props: { variant: "edit" },
        style: {
          "&:hover": {
            color: iconColors[mode].edit.hover.color
          }
        }
      },
      {
        props: { variant: "preview" },
        style: {
          color: `${iconColors[mode].preview.color}`,
          "&:hover, &.forceHover": {
            backgroundColor: `${iconColors[mode].preview.hoverBackground}`
          }
        }
      },
      {
        props: { variant: "accountOverviewIntroduction" },
        style: {
          border: `1px solid ${iconColors[mode].accountOverviewIntroduction.borderColor}`,
          backgroundColor: iconColors[mode].accountOverviewIntroduction.backgroundColor,
          boxShadow: iconColors[mode].accountOverviewIntroduction.boxShadow,
          "&:hover": {
            width: "34px",
            height: "34px",
            backgroundColor: iconColors[mode].accountOverviewIntroduction.hover.backgroundColor,
            transition: "width 0.2s, height 0.2s"
          },
          "& svg": {
            width: "20px",
            height: "20px",
            "& .megaphoneBorder": {
              fill: iconColors[mode].accountOverviewIntroduction.borderColor
            }
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON" },
        style: {
          "&.MuiIconButton-root": {
            backgroundColor: iconColors[mode].filters.default.backgroundColor,
            color: iconColors[mode].filters.default.color,
            width: "25px",
            height: "25px"
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_BYPASS" },
        style: {
          "&.MuiIconButton-root": {
            "&:hover": {
              ...iconColors[mode].filters.fwaas.bypass
            },
            " svg": {
              height: "17px",
              width: "17px"
            }
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_BYPASS", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.bypass
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_EAAF" },
        style: {
          "&.MuiIconButton-root": {
            "&:hover": {
              ...iconColors[mode].filters.fwaas.eaaf
            },
            " svg": {
              height: "19px",
              width: "19px"
            }
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_EAAF", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.eaaf
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_SIGNATURE" },
        style: {
          "&.MuiIconButton-root:hover": {
            ...iconColors[mode].filters.fwaas.ips
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_SIGNATURE", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.ips
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_IPS" },
        style: {
          "&.MuiIconButton-root:hover": {
            ...iconColors[mode].filters.fwaas.ips
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_IPS", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.ips
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_DDOS" },
        style: {
          "&.MuiIconButton-root": {
            "&:hover": {
              ...iconColors[mode].filters.fwaas.ddos
            },
            " svg": {
              height: "15px",
              width: "15px"
            }
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_DDOS", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.ddos
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_GEO" },
        style: {
          "&.MuiIconButton-root": {
            "&:hover": {
              ...iconColors[mode].filters.fwaas.geo
            },
            " svg": {
              height: "17px",
              width: "17px"
            }
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_GEO", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.geo
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_CONNECTIONLIMIT" },
        style: {
          "&.MuiIconButton-root": {
            "&:hover": {
              ...iconColors[mode].filters.fwaas.connectionLimit
            },
            " svg": {
              height: "17px",
              width: "17px"
            }
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_CONNECTIONLIMIT", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.connectionLimit
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_ACL" },
        style: {
          "&.MuiIconButton-root": {
            "&:hover": {
              ...iconColors[mode].filters.fwaas.acl
            },
            " svg": {
              height: "19px",
              width: "19px"
            }
          }
        }
      },
      {
        props: { variant: "FILTERS_ICONBUTTON", type: "FILTERS_FWAAS_ACL", selected: true },
        style: {
          "&.MuiIconButton-root": {
            ...iconColors[mode].filters.fwaas.acl
          }
        }
      },
      {
        props: { variant: "paginationIconButton", type: "previousNext" },
        style: {
          "&.MuiIconButton-root": {
            margin: "0 3px",
            "&:hover": {
              backgroundColor: "var(--icon-bg-hover)",
              "& svg": {
                color: "var(--icon-selected)"
              }
            },
            "& svg": {
              color: "var(--icon-default)",
              width: "20px",
              height: "20px"
            },
            "&.Mui-disabled": {
              "& svg": {
                color: "var(--icon-disabled)",
                opacity: "1"
              }
            }
          }
        }
      },
      {
        props: { variant: "paginationIconButton", type: "firstLast" },
        style: {
          "&.MuiIconButton-root": {
            margin: "0 3px",
            "&:hover": {
              backgroundColor: "var(--icon-bg-hover)",
              "& svg": {
                color: "var(--icon-selected)"
              }
            },
            "& svg": {
              color: "var(--icon-default)",
              width: "20px",
              height: "20px"
            },
            "&.Mui-disabled": {
              "& svg": {
                color: "var(--icon-disabled)",
                opacity: "1"
              }
            }
          }
        }
      },
      {
        props: { variant: "redirect" },
        style: {
          height: "30px",
          width: "30px",
          "& svg": {
            width: "20px",
            height: "20px"
          },
          "&.MuiIconButton-root:hover": {
            color: "var(--icon-default)"
          }
        }
      },
      {
        props: { variant: "backArrowButton" },
        style: {
          border: `1px solid ${iconColors[mode].backArrowButton.color}`,
          color: iconColors[mode].backArrowButton.color,
          "&:hover": {
            color: iconColors[mode].backArrowButton.hover.color,
            background: iconColors[mode].backArrowButton.hover.background,
            boxShadow: iconColors[mode].backArrowButton.hover.boxShadow
          }
        }
      },
      {
        props: { variant: "AUDIT_FILTERS_ICONBUTTON" },
        style: {
          "&.MuiIconButton-root": {
            backgroundColor: iconColors[mode].filters.default.backgroundColor,
            color: iconColors[mode].filters.default.color,
            width: "30px",
            height: "30px"
            // " svg": {
            //   height: "16px",
            //   width: "16px",
            // },
          },
          "&.COMPLETED": {
            " svg": {
              height: "18px",
              width: "18px"
            },
            "&.small": {
              " svg": {
                height: "16px",
                width: "16px"
              }
            },
            "&:hover": {
              color: iconColors[mode].audit.COMPLETED.color,
              background: iconColors[mode].audit.COMPLETED.backgroundColor
            },
            "&.selected": {
              color: iconColors[mode].audit.COMPLETED.color,
              background: iconColors[mode].audit.COMPLETED.backgroundColor
            }
          },
          "&.IN_PROGRESS": {
            " svg": {
              height: "20px",
              width: "20px"
            },
            "&.small": {
              " svg": {
                height: "18px",
                width: "18px"
              }
            },
            "&:hover": {
              color: iconColors[mode].audit.IN_PROGRESS.color,
              background: iconColors[mode].audit.IN_PROGRESS.backgroundColor
            },
            "&.selected": {
              color: iconColors[mode].audit.IN_PROGRESS.color,
              background: iconColors[mode].audit.IN_PROGRESS.backgroundColor
            }
          },
          "&.FAILED": {
            " svg": {
              height: "16px",
              width: "16px"
            },
            "&.small": {
              " svg": {
                height: "14px",
                width: "14px"
              }
            },
            "&:hover": {
              color: iconColors[mode].audit.FAILED.color,
              background: iconColors[mode].audit.FAILED.backgroundColor
            },
            "&.selected": {
              color: iconColors[mode].audit.FAILED.color,
              background: iconColors[mode].audit.FAILED.backgroundColor
            }
          }
        }
      },
      {
        props: { variant: "Severity_Indicator" },
        style: {
          "&.MuiIconButton-root": {
            width: "30px",
            height: "30px",
            borderRadius: "50%"
          },
          "&.HIGH": {
            color: iconColors[mode].severityIndicator.HIGH.color,
            "&:hover": {
              backgroundColor: iconColors[mode].severityIndicator.HIGH.background
            }
          },
          "&.MEDIUM": {
            color: iconColors[mode].severityIndicator.MEDIUM.color,
            "&:hover": {
              backgroundColor: iconColors[mode].severityIndicator.MEDIUM.background
            }
          },
          "&.LOW": {
            color: iconColors[mode].severityIndicator.LOW.color,
            "&:hover": {
              backgroundColor: iconColors[mode].severityIndicator.LOW.background
            }
          },
          "&.INFO": {
            color: iconColors[mode].severityIndicator.INFO.color,
            "&:hover": {
              backgroundColor: iconColors[mode].severityIndicator.INFO.background
            }
          },
          "&.CRITICAL": {
            color: iconColors[mode].severityIndicator.CRITICAL.color,
            "&:hover": {
              backgroundColor: iconColors[mode].severityIndicator.CRITICAL.background
            }
          }
        }
      },
      {
        props: { type: "AUDIT_FILTERS_DRAWER" },
        style: {
          "&.MuiIconButton-root": {
            width: "24px",
            height: "24px"
          }
        }
      },
      {
        props: { hover: "secondaryOnHover" },
        style: {
          "&:hover": {
            color: iconColors[mode].secondaryHover.hover.color
          }
        }
      },
      {
        props: { variant: "Asset_Attack_Status" },
        style: {
          "&.ACTIVE": {
            color: iconColors[mode].assetAttackStatus.ACTIVE.color,
            "&:hover": {
              backgroundColor: iconColors[mode].assetAttackStatus.ACTIVE.background
            }
          },
          "&.COOLDOWN": {
            color: iconColors[mode].assetAttackStatus.COOLDOWN.color,
            "&:hover": {
              backgroundColor: iconColors[mode].assetAttackStatus.COOLDOWN.background
            }
          },
          "&.COMPLETED": {
            color: iconColors[mode].assetAttackStatus.COMPLETED.color,
            "&:hover": {
              backgroundColor: iconColors[mode].assetAttackStatus.COMPLETED.background
            }
          }
        }
      },
      {
        props: { variant: "attackIndicator" },
        style: {
          "&.MuiIconButton-root": {
            "&.INDICATOR-ACTIVE": {
              width: "34px",
              height: "34px",
              position: "relative",
              background: iconColors[mode].attackManagement.attackSummaryIndicator.active.background,
              color: iconColors[mode].attackManagement.attackSummaryIndicator.active.color,

              "&::before": {
                content: "''",
                display: "block",
                position: "absolute",
                width: "40px",
                height: "40px",
                top: "-3px",
                left: "-3px",
                right: 0,
                bottom: 0,
                animation: "pulse 2s infinite ease-out",
                borderRadius: "50%",
                border: `4px double ${iconColors[mode].attackManagement.attackSummaryIndicator.active.animationBorderColor}`
              },
              "@keyframes pulse": {
                "0%": {
                  transform: "scale(0.1)",
                  opacity: 0
                },
                "25%": {
                  opacity: 1
                },
                "50%": {
                  transform: "scale(1.2)",
                  opacity: 0
                },
                "100%": {
                  transform: "scale(0.1)",
                  opacity: 0
                }
              },
              "& .indicatorIcon": {
                width: "22px",
                height: "22px"
              }
            },
            "&.INDICATOR-COOLDOWN": {
              color: iconColors[mode].attackManagement.attackSummaryIndicator.cooldown.color
            },
            "&.INDICATOR-COMPLETED": {
              color: iconColors[mode].attackManagement.attackSummaryIndicator.completed.color,
              cursor: "auto"
            },
            "& .indicatorIcon": {
              width: "26px",
              height: "26px",
              margin: 0
            }
          }
        }
      },
      {
        props: { variant: "send" },
        style: {
          "&.MuiIconButton-root": {
            "& svg": {
              color: iconColors[mode].send.color
            },
            "&.Mui-disabled": {
              "& svg": { color: iconColors[mode].send.disabled.color }
            },
            "&:hover": {
              "& svg": {
                color: iconColors[mode].send.hover.color,
                backgroundColor: iconColors[mode].send.hover.background
              }
            }
          }
        }
      },
      {
        props: { colors: "green" },
        style: {
          "&.MuiIconButton-root": {
            color: iconColors[mode].green.color,
            backgroundColor: iconColors[mode].green.backgroundColor
          }
        }
      },
      {
        props: { colors: "orange" },
        style: {
          "&.MuiIconButton-root": {
            color: iconColors[mode].orange.color,
            backgroundColor: iconColors[mode].orange.backgroundColor
          }
        }
      },
      {
        props: { colors: "gray" },
        style: {
          "&.MuiIconButton-root": {
            color: iconColors[mode].gray.color,
            backgroundColor: iconColors[mode].gray.backgroundColor
          }
        }
      },
      {
        props: { colors: "red" },
        style: {
          "&.MuiIconButton-root": {
            color: iconColors[mode].red.color,
            backgroundColor: iconColors[mode].red.backgroundColor
          }
        }
      },
      {
        props: { colors: "purple" },
        style: {
          "&.MuiIconButton-root": {
            color: iconColors[mode].purple.color,
            backgroundColor: iconColors[mode].purple.backgroundColor
          }
        }
      },
      {
        props: { iconcolor: "mangoTango" },
        style: {
          color: `${iconColors[mode].mangoTango.color}`
        }
      },
      {
        props: { iconcolor: "blueRibbon" },
        style: {
          color: `${iconColors[mode].blueRibbon.color}`
        }
      },
      {
        props: { iconcolor: "mediumPurple" },
        style: {
          color: `${iconColors[mode].mediumPurple.color}`
        }
      },
      {
        props: { iconcolor: "scienceBlue" },
        style: {
          color: `${iconColors[mode].scienceBlue.color}`
        }
      },
      {
        props: { iconcolor: "easternBlue" },
        style: {
          color: `${iconColors[mode].easternBlue.color}`
        }
      },
      {
        props: { background_color: "blueChalk" },
        style: {
          "&.MuiIconButton-root": {
            backgroundColor: iconColors[mode].blueChalk.color
          }
        }
      },
      {
        props: { background_color: "hawkesBlue" },
        style: {
          "&.MuiIconButton-root": {
            backgroundColor: iconColors[mode].hawkesBlue.color
          }
        }
      },
      {
        props: { background_color: "iceberg" },
        style: {
          "&.MuiIconButton-root": {
            backgroundColor: iconColors[mode].iceberg.color
          }
        }
      },
      {
        props: { background_color: "sandyBeach" },
        style: {
          "&.MuiIconButton-root": {
            backgroundColor: iconColors[mode].sandyBeach.color
          }
        }
      }
    ]
  };
};

export default MuiIconButton;
