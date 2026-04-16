const options = {
  light: {
    default: {
      background: "transparent",
      color: "#015ECB",
      borderColor: "#015ECB",
      hoverBackground: "#E5F6FF",
      activeBackground: "#A6D7FF",
      disabledColor: "#A9AEB7",
      secondaryColor: "#0E0ADA",
      disabledBackground: "transparent",
      disabledBorder: "#E7E8EB"
    },
    defaultSmall: {
      disabledBackground: "#ffffff00",
      disabledBorder: "#E5E8EB",
      disabledColor: "##A9AEB7"
    },
    primary: {
      background: "#0280EF",
      color: "#fff",
      hoverBackground: "#015ECB",
      activeBackground: "#0040AD",
      disabledColor: "#A9AEB7",
      disabledBackground: "#E7E8EB"
    },
    secondary: {
      background:
        "linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1)), linear-gradient(170.92deg, #211DD9 -14.01%, rgba(21, 75, 212, 0.92) 90.12%, #2B6DF2 224.2%)",
      color: "#fff",
      hoverColor: "#fff",
      boxShadow: "0px 0px 6px #221EDA",
      disabledBackground: "#E7E8EB",
      disabledColor: "#A9AEB7"
    },
    secondarySmall: {
      background:
        "linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1)), linear-gradient(170.92deg, #211DD9 -14.01%, rgba(21, 75, 212, 0.92) 90.12%, #2B6DF2 224.2%)",
      color: "#fff",
      hoverColor: "#fff",
      boxShadow: "0px 0px 6px #221EDA",
      disabledBackground: "#E7E8EB",
      disabledColor: "#A9AEB7"
    },
    danger: {
      background: "#EC0139",
      color: "#FFFFFF",
      hoverBackground: "#B5153A",
      activeBackground: "#781A30",
      disabledColor: "#A9AEB7",
      disabledBackground: "#E7E8EB"
    },
    dangerSecondary: {
      border: "1px solid rgba(229,232,235)",
      color: "#5B626E",
      hover: {
        color: "#FFFFFF",
        backgroundColor: "#EC223A"
      }
    },
    contained: {
      color: "#5B626E",
      hoverColor: "#5B626E",
      activeColor: "#0E0ADA",
      background: "transparent",
      hoverBackground: "#E5E8EB",
      activeBackground: "#E5E8EB"
    },
    actionPending: {
      color: "#f67d0eb3"
    },
    preview: {
      color: "#687F96",
      hoverColor: "#264769",
      backgroundColor: "#CBD4DB"
    },
    idpRaButton: {
      backgroundColor: "#D4D6DB",
      borderColor: "#D4D6DB",
      color: "#264769"
    },
    primaryPurple: {
      background:
        "linear-gradient(170.92deg, #9D1DD9 -14.01%, rgba(166, 78, 235, 0.92) 90.12%, #D8A6FF 224.2%), linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1))",
      hover: {
        background:
          "linear-gradient(170.92deg, #9D1DD9 -14.01%, rgba(166, 78, 235, 0.92) 90.12%, #D8A6FF 224.2%), linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1))",
        boxShadow: "0px 0px 6px 0px #A64EEB"
      }
    },
    turquoise: {
      backgroundColor: "#057E94"
    },
    deepOcean: {
      backgroundColor: "#264769",
      boxShadow: "0px 0px 10px 0px #D7DADD"
    },
    orange: {
      backgroundColor: "#FFE6C2",
      color: "#CA5E00",
      borderColor: "#FABD63"
    },
    eggSour: {
      color: "#FFF5DB"
    },
    astronaut: {
      color: "#264769"
    }
  },
  dark: {
    default: {
      background: "transparent",
      color: "#6DCFFC",
      borderColor: "#4C515B",
      hoverBackground: "#2E3137",
      activeBackground: "#3D4149",
      disabledColor: "#7E8594",
      secondaryColor: "#D4D6DB",
      disabledBackground: "transparent",
      disabledBorder: "#2E3137"
    },
    defaultSmall: {
      disabledBackground: "#ffffff00",
      disabledBorder: "#414346",
      disabledColor: "#6b728080"
    },
    primary: {
      background: "#0280EF",
      color: "#fff",
      hoverBackground: "#015ECB",
      activeBackground: "#0040AD",
      disabledColor: "#7E8594",
      disabledBackground: "#4C515B"
    },
    secondary: {
      background:
        "linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1)), linear-gradient(170.92deg, #211DD9 -14.01%, rgba(21, 75, 212, 0.92) 90.12%, #2B6DF2 224.2%)",
      color: "#fff",
      hoverColor: "#fff",
      boxShadow: "0px 0px 6px #221EDA",
      disabledBackground: "#4F5154",
      disabledColor: "rgba(212, 214, 219, 0.4)"
    },
    secondarySmall: {
      background:
        "linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1)), linear-gradient(170.92deg, #211DD9 -14.01%, rgba(21, 75, 212, 0.92) 90.12%, #2B6DF2 224.2%)",
      color: "#fff",
      hoverColor: "#fff",
      boxShadow: "0px 0px 6px #221EDA",
      disabledBackground: "#4F5154",
      disabledColor: "rgba(212, 214, 219, 0.4)"
    },
    danger: {
      background: "#EC0139",
      color: "#FFFFFF",
      hoverBackground: "#FE3363",
      activeBackground: "#FE668A",
      disabledColor: "#7E8594",
      disabledBackground: "#4C515B"
    },
    dangerSecondary: {
      border: "1px solid rgba(65, 67, 70)",
      color: "#D4D6DB",
      hover: {
        color: "#FFFFFF",
        backgroundColor: "#EC223A"
      }
    },
    contained: {
      color: "#D4D6DB",
      hoverColor: "#D4D6DB",
      activeColor: "#6DCFFC",
      background: "transparent",
      hoverBackground: "#42474B",
      activeBackground: "#42474B"
    },
    actionPending: {
      color: "#f67d0eb3"
    },
    preview: {
      color: "#9EA0A4",
      hoverColor: "#D4D6DB",
      backgroundColor: "#484A4D"
    },
    idpRaButton: {
      backgroundColor: "#3F4144",
      borderColor: "#D4D6DB",
      color: "#D4D6DB"
    },
    primaryPurple: {
      background:
        "linear-gradient(170.92deg, #9D1DD9 -14.01%, rgba(166, 78, 235, 0.92) 90.12%, #D8A6FF 224.2%), linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1))",
      hover: {
        background:
          "linear-gradient(170.92deg, #9D1DD9 -14.01%, rgba(166, 78, 235, 0.92) 90.12%, #D8A6FF 224.2%), linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1))",
        boxShadow: "0px 0px 6px 0px #A64EEB"
      }
    },
    turquoise: {
      backgroundColor: "#057E94"
    },
    deepOcean: {
      backgroundColor: "#264769",
      boxShadow: "0px 0px 10px 0px #0B3B6B"
    },
    orange: {
      backgroundColor: "#3D2500",
      color: "#FFB549",
      borderColor: "#844F00"
    },
    eggSour: {
      color: "#473300"
    },
    astronaut: {
      color: "#D4D6DB"
    }
  }
};

const MuiButton = mode => {
  return {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: {
        background: `${options[mode].default.background}`,
        color: `${options[mode].default.color}`,
        borderRadius: 20,
        padding: "10px 20px",
        border: `1px solid ${options[mode].default.borderColor}`,
        fontSize: 14,
        fontWeight: 400,
        textTransform: "capitalize",
        lineHeight: "14px",
        letterSpacing: "normal",
        minWidth: "unset",
        "&:hover": {
          background: `${options[mode].default.hoverBackground}`
        },
        "&:active, &[aria-expanded='true']": {
          background: `${options[mode].default.activeBackground}`
        },
        "&.Mui-disabled": {
          background: `${options[mode].default.disabledBackground}`,
          color: `${options[mode].default.disabledColor}`,
          border: `1px solid ${options[mode].default.disabledBorder}`
        }
      }
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          height: "26px",
          padding: "6px 10px",
          fontSize: 12,
          lineHeight: "12px"
        }
      },
      {
        props: { variant: "primary" },
        style: {
          background: `${options[mode].primary.background}`,
          color: `${options[mode].primary.color}`,
          border: "1px solid transparent",
          "&:hover": {
            color: `${options[mode].primary.color}`,
            background: `${options[mode].primary.hoverBackground}`
          },
          "&:active": {
            background: `${options[mode].primary.activeBackground}`
          },
          "&.Mui-disabled": {
            color: `${options[mode].primary.disabledColor}`,
            background: `${options[mode].primary.disabledBackground}`
          }
        }
      },
      {
        props: { variant: "defaultSmall" },
        style: {
          padding: "7px 15px",
          whiteSpace: "nowrap",
          "&.Mui-disabled": {
            color: `${options[mode].defaultSmall.disabledColor}`,
            backgroundColor: `${options[mode].defaultSmall.disabledBackground}`,
            border: `0.5px solid ${options[mode].defaultSmall.disabledBorder}`
          },
          "& .MuiButton-startIcon": {
            marginRight: "5px"
          }
        }
      },
      {
        props: { variant: "actionPending" },
        style: {
          padding: "7px 15px",
          "&.Mui-disabled": {
            color: `#f67d0eb3`,
            backgroundColor: `${options[mode].defaultSmall.disabledBackground}`,
            border: `0.5px solid ${options[mode].defaultSmall.disabledBorder}`
          },
          "& .MuiButton-startIcon": {
            marginRight: "5px",
            color: `${options[mode].actionPending.color}`,
            "&::after": {
              content: "' '",
              width: "1.5px",
              height: "1.5px",
              position: "absolute",
              top: 7.5,
              left: 24,
              borderRadius: "2px",
              backgroundColor: `${options[mode].actionPending.color}`
            }
          }
        }
      },
      {
        props: { variant: "secondary" },
        style: {
          padding: "7px 20px",
          borderRadius: 12,
          color: `${options[mode].secondary.color}`,
          background: `${options[mode].secondary.background}`,
          border: "inherit",
          lineHeight: "16px",
          "&.MuiButton-root:hover": {
            color: `${options[mode].secondary.hoverColor}`,
            background: `${options[mode].secondary.background}`,
            boxShadow: `${options[mode].secondary.boxShadow}`,
            border: "inherit"
          },
          "&.Mui-disabled": {
            background: `${options[mode].secondary.disabledBackground}`,
            color: `${options[mode].secondary.disabledColor}`,
            border: "inherit"
          }
        }
      },
      {
        props: { variant: "secondaryThin" },
        style: {
          padding: "7px 10px",
          marginLeft: "15px",
          borderRadius: 8,
          color: `${options[mode].secondary.color}`,
          background: `${options[mode].secondary.background}`,
          border: "inherit",
          lineHeight: "16px",
          "&.MuiButton-root:hover": {
            color: `${options[mode].secondary.hoverColor}`,
            background: `${options[mode].secondary.background}`,
            boxShadow: `${options[mode].secondary.boxShadow}`,
            border: "inherit"
          },
          "&.Mui-disabled": {
            background: `${options[mode].secondary.disabledBackground}`,
            color: `${options[mode].secondary.disabledColor}`,
            border: "inherit"
          }
        }
      },
      {
        props: { variant: "danger" },
        style: {
          background: `${options[mode].danger.background}`,
          color: `${options[mode].danger.color}`,
          border: `1px solid transparent`,
          "&:hover": {
            background: `${options[mode].danger.hoverBackground}`
          },
          "&:active": {
            background: `${options[mode].danger.activeBackground}`
          },
          "&.Mui-disabled": {
            color: `${options[mode].danger.disabledColor}`,
            background: `${options[mode].danger.disabledBackground}`
          }
        }
      },
      {
        props: { variant: "dangerOutlined" },
        style: {
          background: "transparent",
          color: `${options[mode].danger.background}`,
          borderColor: options[mode].danger.border,
          "&:hover": {
            background: "transparent",
            color: `${options[mode].danger.background}`,
            borderColor: options[mode].danger.border,
            boxShadow: `${options[mode].danger.hoverBoxShadow}`
          }
        }
      },
      {
        props: { variant: "dangerSecondary" },
        style: {
          background: "transparent",
          color: `${options[mode].dangerSecondary.color}`,
          border: `${options[mode].dangerSecondary.border}`,
          "&:hover, &:active": {
            ...options[mode].dangerSecondary.hover,
            border: `1px solid ${options[mode].dangerSecondary.hover.backgroundColor}`
          },
          "&.Mui-disabled": {
            color: `${options[mode].dangerSecondary.color}`,
            border: `${options[mode].dangerSecondary.border}`,
            opacity: 0.6
          }
        }
      },
      {
        props: { variant: "secondarySmall" },
        style: {
          borderRadius: 8,
          color: `${options[mode].secondarySmall.color}`,
          background: `${options[mode].secondarySmall.background}`,
          border: "none",
          padding: "1px 10px",
          "&.MuiButton-root:hover": {
            background: `${options[mode].secondarySmall.background}`,
            color: `${options[mode].secondarySmall.hoverColor}`,
            boxShadow: `${options[mode].secondarySmall.boxShadow}`,
            border: "none"
          },
          "&.Mui-disabled": {
            background: `${options[mode].secondarySmall.disabledBackground}`,
            color: `${options[mode].secondarySmall.disabledColor}`
          }
        }
      },
      {
        props: { variant: "contained" },
        style: {
          minWidth: 30,
          color: `${options[mode].contained.color}`,
          background: `${options[mode].contained.background}`,
          border: "none",
          padding: "8px 7px",
          borderRadius: 8,
          boxShadow: "none",
          "&.MuiButton-root:hover": {
            borderRadius: 8,
            background: `${options[mode].contained.hoverBackground}`,
            border: "none",
            boxShadow: "none",
            color: `${options[mode].contained.hoverColor}`
          },
          "&.MuiButton-root:active": {
            borderRadius: 8,
            background: `${options[mode].contained.activeBackground}`,
            border: "none",
            boxShadow: "none",
            color: `${options[mode].contained.activeColor}`,
            fontWeight: 700
          }
        }
      },
      {
        props: { color: "secondary" },
        style: {
          color: `${options[mode].default.secondaryColor}`
        }
      },
      {
        props: { variant: "preview" },
        style: {
          color: `${options[mode].preview.color}`,
          "&:hover": {
            color: `${options[mode].preview.hoverColor}`,
            backgroundColor: `${options[mode].preview.backgroundColor}`,
            borderColor: "transparent"
          }
        }
      },
      {
        props: { variant: "idpRaButton" },
        style: {
          backgroundColor: options[mode].idpRaButton.backgroundColor,
          border: `1px solid ${options[mode].idpRaButton.borderColor}`,
          borderRadius: "4px",
          color: options[mode].idpRaButton.color,
          fontSize: "10px",
          fontWeight: 500,
          padding: "4px 6px",
          height: "24px"
        }
      },
      {
        props: { variant: "clean" },
        style: {
          backgroundColor: "transparent",
          border: "none",
          fontSize: "12px",
          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      },
      {
        props: { bg_color: "purple" },
        style: {
          background: options[mode].primaryPurple.background,
          "&:hover:not(.Mui-disabled)": {
            background: options[mode].primaryPurple.hover.background,
            boxShadow: options[mode].primaryPurple.hover.boxShadow
          }
        }
      },
      {
        props: { bg_color: "turquoise" },
        style: {
          color: options[mode].turquoise.backgroundColor,
          border: `1px solid ${options[mode].turquoise.backgroundColor}`,
          "&:hover:not(.Mui-disabled)": {
            background: options[mode].turquoise.backgroundColor,
            boxShadow: "0px 0px 5px 1px #057E94"
          }
        }
      },
      {
        props: { bg_color: "deepOcean" },
        style: {
          background: options[mode].deepOcean.backgroundColor,
          "&:hover": {
            background: options[mode].deepOcean.backgroundColor,
            boxShadow: options[mode].deepOcean.boxShadow,
            border: "unset"
          }
        }
      },
      {
        props: { bg_color: "orange" },
        style: {
          backgroundColor: options[mode].orange.backgroundColor,
          color: options[mode].orange.color,
          border: `1px solid ${options[mode].orange.borderColor}`,
          "&:hover:not(.Mui-disabled)": {
            backgroundColor: options[mode].orange.backgroundColor,
            color: options[mode].orange.color,
            border: `1px solid ${options[mode].orange.color}`
          },
          "&.Mui-disabled": {
            background: options[mode].primary.disabledBackground,
            color: options[mode].primary.disabledColor,
            border: "inherit"
          }
        }
      },
      {
        props: { colors: "eggSour" },
        style: {
          backgroundColor: options[mode].eggSour.color,
          "&:hover,&:focus": {
            backgroundColor: options[mode].eggSour.color,
            border: `1px solid ${options[mode].astronaut.color}`
          }
        }
      },
      {
        props: { colors: "lightGreyBackground" },
        style: {
          backgroundColor: options[mode].default.activeBackground
        }
      },
      {
        props: { variant: "borderless" },
        style: {
          background: "transparent",
          border: "0px solid transparent",

          "&:not(.Mui-disabled):hover": {
            color: "var(--button-text-hover)",
            background: "transparent"
          },

          "&:not(.Mui-disabled):active": {
            color: "var(--button-text-press)",
            background: "transparent"
          },

          "&.Mui-disabled": {
            background: "var(--button-primary-bg-disabled)"
          }
        }
      }
    ]
  };
};

export default MuiButton;
