const colorOptions = {
  light: {
    iron: "#5B626E",
    shadow: "0px 0px 5px 0px #BFC2C9",
    backgroundColor: "#fff",
    success: {
      borderColor: "#24BE74",
      textColor: "#5B626E",
      closeButtonColor: "#264769"
    },
    info: {
      backgroundColor: "#D6F1FE",
      iconColor: "#165A79",
      textColor: "#165A79"
    },
    error: {
      borderColor: "#FF2B44",
      textColor: "#5B626E",
      closeButtonColor: "#264769"
    },
    warning: {
      color: "#B5153A",
      backgroundColor: "#FFE5EB",
      borderLeftColor: "#B5153A",
      iconColor: "#B5153A",
      hover: {
        shadow: "0px 0px 8px 0px #D300196E"
      }
    },
    attention: {
      color: "#264769",
      backgroundColor: "rgba(255, 187, 51, 0.33)",
      borderLeftColor: "#FF9900",
      iconColor: "#FF9900"
    },
    inProgress: {
      borderLeftColor: "#FF9A01",
      color: "#264769",
      backgroundColor: "rgba(255, 154, 1, 0.14)"
    },
    trial: {
      color: "#264769",
      backgroundColor: "#D3DFEA",
      hover: {
        shadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25);"
      }
    },
    beta: {
      color: "#264769",
      backgroundColor: "#E0D4FF4D",
      link: "#0E0ADA"
    },
    notActive: {
      backgroundColor: "#F5F6F8",
      color: "#5B626E"
    },
    secondarySuccess: {
      backgroundColor: "#E5FAF0",
      color: "#1FA262"
    },
    secondaryError: {
      backgroundColor: "#FFF0F1",
      color: "#FE001E"
    },
    secondaryInProgress: {
      backgroundColor: "#FFFBF5",
      color: "#CC5F00"
    },
    secondaryWarning: {
      color: "#BF360C",
      backgroundColor: "#FFF7EB"
    },
    magneta: "#B5153A",
    newSuccess: {
      backgroundColor: "#E5FAF0",
      textColor: "#5B626E",
      outline: "#156C42"
    },
    newError: {
      backgroundColor: "#FFE5EB",
      textColor: "#5B626E",
      outline: "#B5153A"
    },
    greenBanner: {
      color: "#156C42",
      backgroundColor: "#E5FAF0"
    },
    greyBanner: {
      color: "#5B626E",
      backgroundColor: "#F5F6F8"
    }
  },
  dark: {
    iron: "#D4D6DB",
    shadow: "0px 0px 5px 0px #BFC2C9",
    backgroundColor: "#1A1C1E",
    success: {
      borderColor: "#24BE74",
      textColor: "#D4D6DB",
      closeButtonColor: "#D4D6DB"
    },
    info: {
      backgroundColor: "#0C7ACA4D",
      iconColor: "#58B9FF",
      textColor: "#58B9FF"
    },
    error: {
      borderColor: "#FF2B44",
      textColor: "#D4D6DB",
      closeButtonColor: "#D4D6DB"
    },
    warning: {
      color: "#D4D6DB",
      backgroundColor: "#35050B",
      borderLeftColor: "#D30019",
      iconColor: "#D30019",
      hover: {
        shadow: "0px 0px 8px 0px #FF586C91"
      }
    },
    attention: {
      color: "#D4D6DB",
      backgroundColor: "#38260A",
      borderLeftColor: "#FF9A01",
      iconColor: "#FF9A01"
    },
    inProgress: {
      borderLeftColor: "#FF9A01",
      color: "#D4D6DB",
      backgroundColor: "rgba(255, 153, 0, 0.19)"
    },
    trial: {
      color: "#D4D6DB",
      backgroundColor: "#0C2742",
      hover: {
        shadow: "0px 0px 8px 0px rgba(255, 255, 255, 0.3)"
      }
    },
    beta: {
      color: "#D4D6DB",
      backgroundColor: "#221A2E",
      link: "#6DCFFC"
    },
    notActive: {
      backgroundColor: "#484A4D",
      color: "#D4D6DB"
    },
    secondarySuccess: {
      backgroundColor: "#09341F",
      color: "#31D887"
    },
    secondaryError: {
      backgroundColor: "#3F1218",
      color: "#FF2B44"
    },
    secondaryInProgress: {
      backgroundColor: "#3D2500",
      color: "#FFB549"
    },
    secondaryWarning: {
      color: "#FFB549",
      backgroundColor: "#3D2500"
    },
    magneta: "#FE3363",
    newSuccess: {
      backgroundColor: "#09341F",
      textColor: "#D4D6DB",
      outline: "#31D887"
    },
    newError: {
      backgroundColor: "#300D15",
      textColor: "#D4D6DB",
      outline: "#FE3363"
    },
    greenBanner: {
      color: "#31D887",
      backgroundColor: "#09341F"
    },
    greyBanner: {
      color: "#D4D6DB",
      backgroundColor: "#3D4149"
    }
  }
};

const MuiAlert = mode => {
  return {
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          minWidth: "614px",
          maxWidth: "calc(100vw - 104px)",
          borderRadius: "20px",
          width: "100%",
          backgroundColor: colorOptions[mode].backgroundColor,
          "& .MuiAlert-message": {
            fontSize: "16px",
            lineHeight: "28px"
          },
          "& .MuiAlert-icon": {
            marginRight: "10px"
          },
          "& .MuiAlert-action": {
            marginRight: "unset",
            padding: "8px 0 0 16px"
          },
          "& .MuiButtonBase-root.MuiIconButton-root": {
            width: "30px",
            height: "30px",
            "& .MuiSvgIcon-root": {
              width: "unset"
            }
          }
        }
      },
      {
        props: { severity: "success" },
        style: {
          border: `2px solid ${colorOptions[mode].success.borderColor}`,
          color: colorOptions[mode].success.textColor,
          "& .MuiButtonBase-root.MuiIconButton-root": {
            color: colorOptions[mode].success.closeButtonColor
          }
        }
      },
      {
        props: { severity: "info" },
        style: {
          backgroundColor: colorOptions[mode].info.backgroundColor,
          color: colorOptions[mode].info.textColor,
          "& .MuiAlert-icon": {
            color: colorOptions[mode].info.iconColor
          }
        }
      },
      {
        props: { severity: "error" },
        style: {
          border: `2px solid ${colorOptions[mode].error.borderColor}`,
          color: colorOptions[mode].error.textColor,
          "& .MuiButtonBase-root.MuiIconButton-root": {
            color: colorOptions[mode].error.closeButtonColor
          },
          "& .MuiAlert-message": {
            flexGrow: 1
          },
          "& .MuiAlert-action": {
            paddingLeft: 1
          }
        }
      },
      {
        props: { severity: "warning" },
        style: {
          backgroundColor: colorOptions[mode].warning.backgroundColor,
          padding: "0 8px",
          height: 30,
          "& .MuiAlert-icon": {
            margin: "0 10px 0 5px",
            padding: 0,
            paddingTop: "5px",
            height: 20,
            width: 20,
            color: colorOptions[mode].magneta
          },
          "& .MuiAlert-message": {
            display: "flex",
            alignItems: "center",
            padding: 0,
            color: colorOptions[mode].magneta
          },
          "&:hover": {
            boxShadow: colorOptions[mode].warning.hover.shadow
          }
        }
      },
      {
        props: { variant: "attention" },
        style: {
          backgroundColor: colorOptions[mode].attention.backgroundColor,
          padding: 0,
          height: 30,
          borderLeft: `5px solid ${colorOptions[mode].attention.borderLeftColor}`,
          borderTop: `0px`,
          borderBottom: `0px`,
          borderRight: `0px`,
          paddingRight: "10px",
          "& .MuiAlert-icon": {
            margin: "0 10px 0 5px",
            padding: 0,
            paddingTop: "5px",
            height: 20,
            width: 20,
            color: colorOptions[mode].attention.borderLeftColor
          },
          "& .MuiAlert-message": {
            display: "flex",
            alignItems: "center",
            padding: 0,
            color: colorOptions[mode].attention.color
          }
        }
      },
      {
        props: { variant: "in_progress" },
        style: {
          alignItems: "center",
          backgroundColor: colorOptions[mode].inProgress.backgroundColor,
          padding: "5px",
          border: "none",
          borderLeft: `5px solid ${colorOptions[mode].inProgress.borderLeftColor}`,
          "& .MuiAlert-icon": {
            marginRight: "10px",
            padding: 0,
            height: 25,
            width: 25,
            color: colorOptions[mode].inProgress.borderLeftColor
          },
          "& .MuiAlert-message": {
            display: "flex",
            alignItems: "center",
            padding: 0,
            color: colorOptions[mode].inProgress.color
          }
        }
      },
      {
        props: { variant: "trial" },
        style: {
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0 10px",
          height: 30,
          backgroundColor: colorOptions[mode].trial.backgroundColor,
          color: colorOptions[mode].trial.color,
          border: "none",
          cursor: "pointer",
          "& .MuiAlert-icon": {
            margin: 0,
            padding: 0,
            height: "max-content",
            width: "max-content"
          },
          "& .MuiAlert-message": {
            display: "flex",
            alignItems: "center",
            padding: 0
          },
          "&:hover": {
            boxShadow: colorOptions[mode].trial.hover.shadow
          }
        }
      },
      {
        props: { variant: "beta" },
        style: {
          borderRadius: "8px",
          paddingTop: "3px",
          paddingBottom: "3px",
          paddingRight: "10px",
          paddingLeft: "10px",
          lineHeight: "18px",
          backgroundColor: colorOptions[mode].beta.backgroundColor,
          color: colorOptions[mode].beta.color,
          "& .link": {
            color: colorOptions[mode].beta.link
          }
        }
      },
      {
        props: { actions: "clickable" },
        style: {
          cursor: "pointer"
        }
      },
      {
        props: { variant: "notActive" },
        style: {
          backgroundColor: colorOptions[mode].notActive.backgroundColor,
          color: colorOptions[mode].notActive.color
        }
      },
      {
        props: { variant: "secondarySuccess" },
        style: {
          backgroundColor: colorOptions[mode].secondarySuccess.backgroundColor,
          color: colorOptions[mode].secondarySuccess.color
        }
      },
      {
        props: { variant: "secondaryError" },
        style: {
          backgroundColor: colorOptions[mode].secondaryError.backgroundColor,
          color: colorOptions[mode].secondaryError.color
        }
      },
      {
        props: { variant: "secondaryInProgress" },
        style: {
          backgroundColor: colorOptions[mode].secondaryInProgress.backgroundColor,
          color: colorOptions[mode].secondaryInProgress.color
        }
      },
      {
        props: { variant: "secondaryWarning" },
        style: {
          backgroundColor: colorOptions[mode].secondaryWarning.backgroundColor,
          color: colorOptions[mode].secondaryWarning.color
        }
      },
      {
        props: { colors: "magneta" },
        style: {
          color: colorOptions[mode].magneta
        }
      },
      {
        props: { colors: "magentaError" },
        style: {
          backgroundColor: colorOptions[mode].newError.backgroundColor,
          color: colorOptions[mode].newError.textColor,
          outline: `1px solid ${colorOptions[mode].newError.outline}`,
          boxShadow: colorOptions[mode].shadow,
          "& .MuiButtonBase-root.MuiIconButton-root": {
            color: colorOptions.iron
          }
        }
      },
      {
        props: { colors: "seaGreenSuccess" },
        style: {
          backgroundColor: colorOptions[mode].newSuccess.backgroundColor,
          color: colorOptions[mode].newSuccess.textColor,
          outline: `1px solid ${colorOptions[mode].newSuccess.outline}`,
          boxShadow: colorOptions[mode].shadow,
          "& .MuiButtonBase-root.MuiIconButton-root": {
            color: colorOptions[mode].iron
          }
        }
      },
      {
        props: { type: "banner" },
        style: {
          padding: "0 8px",
          height: 30,
          border: "1px solid",
          borderRadius: "4px",
          "& .MuiAlert-icon": {
            marginRight: "5px",
            padding: 0,
            paddingTop: "5px",
            height: 20,
            width: 20
          },
          "& .MuiAlert-message": {
            display: "flex",
            alignItems: "center",
            padding: 0
          },
          "&:hover": { boxShadow: "none" }
        }
      },
      {
        props: { colors: "unclassified" },
        style: {
          backgroundColor: colorOptions[mode].greyBanner.backgroundColor,
          color: colorOptions[mode].greyBanner.color,
          borderColor: colorOptions[mode].greyBanner.color,
          "& .MuiAlert-icon": {
            color: colorOptions[mode].greyBanner.color
          }
        }
      },
      {
        props: { colors: "ignore" },
        style: {
          backgroundColor: colorOptions[mode].greenBanner.backgroundColor,
          color: colorOptions[mode].greenBanner.color,
          borderColor: colorOptions[mode].greenBanner.color,
          "& .MuiAlert-icon": {
            color: colorOptions[mode].greenBanner.color
          }
        }
      },
      {
        props: { colors: "monitor" },
        style: {
          backgroundColor: colorOptions[mode].secondaryWarning.backgroundColor,
          color: colorOptions[mode].secondaryWarning.color,
          borderColor: colorOptions[mode].secondaryWarning.color,
          "& .MuiAlert-icon": {
            color: colorOptions[mode].secondaryWarning.color
          }
        }
      },
      {
        props: { colors: "block" },
        style: {
          backgroundColor: colorOptions[mode].newError.backgroundColor,
          color: colorOptions[mode].magneta,
          borderColor: colorOptions[mode].magneta,
          "& .MuiAlert-icon": {
            color: colorOptions[mode].magneta
          }
        }
      }
    ]
  };
};

export default MuiAlert;
