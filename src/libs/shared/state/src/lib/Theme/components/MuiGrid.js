const colorOptions = {
  light: {
    athensGray: "#F5F6F8",
    spaceGray: "#EDEEF0",
    shuttleGray: "#D4D6DB",
    paleSky: "#5B626E",
    tableExpandBackground: "#F7F8F9",
    moonRaker: "#DBDAFA",
    athensGrey: "#F5F6F8",
    mabel: "#D6F1FE",
    deepCerulean: "#087EA5",
    sideContent: {
      borderColor: "#E9F1F3"
    },
    tablePagination: {
      borderColor: "#E9F1F3"
    },
    tableHeaderTwoCell: {
      backgroundColor: "rgba(38, 71, 105, 0.03)"
    },
    CTRC: {
      border: "1px solid #20C4C6"
    },
    CWAF: {
      border: "1px solid #5278F4"
    },
    CDDOS: {
      border: "1px solid #6C59B9"
    },
    CBOT: {
      border: "1px solid #FFC46D"
    },
    SYSTEM: {
      border: "1px solid #264769"
    },
    fwaasFilterBar: {
      borderColor: "#E5E5E580"
    },
    usageOuterCard: {
      backgroundColor: "#FFFFFF"
    },
    usageInnerCard: {
      backgroundColor: "#FBFBFC"
    },
    overusageInnerCard: {
      backgroundColor: "#FFE5EB"
    },
    drawerBottom: {
      background: "linear-gradient(0deg, #FFFFFF 27.6%, rgba(255, 255, 255, 0) 163.85%)"
    },
    infoBox: {
      active: {
        backgroundColor: "#F9F9FB"
      },
      expired: {
        backgroundColor: "#FFE5EB"
      }
    },
    radioHover: {
      color: "#211DD9"
    },
    iconButton: {
      hover: {
        backgroundColor: "#CBD4DB"
      }
    },
    oceanBlue: {
      backgroundColor: "#EAF6FF"
    },
    whatsNewImage: {
      boxShadow: "0px 0px 10px 3px rgba(82, 82, 82, 0.8)",
      hover: {
        backgroundColor: "rgba(229, 229, 229, 0.28)"
      }
    },
    gray: {
      backgroundColor: "#F2F4F6"
    },
    headergrid: {
      primary: "#F5F6F8"
    }
  },
  dark: {
    athensGray: "#3D4149",
    spaceGray: "#5B626E",
    shuttleGray: "#5B626E",
    paleSky: "#D4D6DB",
    tableExpandBackground: "#000000",
    moonRaker: "#4C515B",
    athensGrey: "#2E3137",
    mabel: "#0F3D52",
    deepCerulean: "#2CCCFF",
    sideContent: {
      borderColor: "#585C5E"
    },
    tablePagination: {
      borderColor: "#585C5E"
    },
    tableHeaderTwoCell: {
      backgroundColor: "rgba(212, 214, 219, 0.1)"
    },
    CTRC: {
      border: "1px solid #20C4C6"
    },
    CWAF: {
      border: "1px solid #5278F4"
    },
    CDDOS: {
      border: "1px solid #6C59B9"
    },
    CBOT: {
      border: "1px solid #FFC46D"
    },
    SYSTEM: {
      border: "1px solid #D4D6DB"
    },
    fwaasFilterBar: {
      borderColor: "#E5E5E54D"
    },
    usageOuterCard: {
      backgroundColor: "#1A1C1E"
    },
    usageInnerCard: {
      backgroundColor: "#3D4149"
    },
    overusageInnerCard: {
      backgroundColor: "#300D15"
    },
    drawerBottom: {
      background: "linear-gradient(0deg, #080809 24.7%, rgba(8, 8, 9, 0) 154.67%)"
    },
    infoBox: {
      active: {
        backgroundColor: "#303132"
      },
      expired: {
        backgroundColor: "#35050B"
      }
    },
    radioHover: {
      color: "#3B77EE"
    },
    iconButton: {
      hover: {
        backgroundColor: "#484A4D"
      }
    },
    oceanBlue: {
      backgroundColor: "#0A2B43"
    },
    whatsNewImage: {
      boxShadow: "0px 0px 10px 3px rgba(137, 137, 137, 0.8)",
      hover: {
        backgroundColor: "rgba(217, 217, 217, 0.2)"
      }
    },
    gray: {
      backgroundColor: "#3D4149"
    },
    headergrid: {
      primary: "#3D4149"
    }
  }
};

const MuiGrid = mode => {
  return {
    variants: [
      {
        props: { variant: "expand" },
        style: {
          width: "100%",
          marginLeft: 0,
          padding: "10px",
          background: colorOptions[mode].tableExpandBackground
        }
      },
      {
        props: { variant: "scrollableGrid" },
        style: {
          width: "auto",
          height: 0,
          flexGrow: 1,
          flexWrap: "nowrap",
          marginRight: "-15px", // scroll width (10px) + scroll border (5px)
          paddingRight: "15px", // scroll width (10px) + scroll border (5px)
          overflow: "auto", // fallback
          overflowY: "overlay"
        }
      },
      {
        props: { variant: "sideContent" },
        style: {
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "solid 1px",
          borderColor: colorOptions[mode].sideContent.borderColor,
          paddingBottom: "15px"
        }
      },
      {
        props: { variant: "tablePagination" },
        style: {
          borderTop: "solid 1px",
          borderColor: colorOptions[mode].tablePagination.borderColor
        }
      },
      {
        props: { variant: "tableTopBar" },
        style: {
          borderBottom: "solid 1px",
          borderColor: colorOptions[mode].tablePagination.borderColor
        }
      },
      {
        props: { variant: "tableHeaderTwoCell" },
        style: {
          fontWeight: 400,
          paddingLeft: "16px",
          paddingRight: "16px",
          flexWrap: "nowrap",
          backgroundColor: colorOptions[mode].tableHeaderTwoCell.backgroundColor,
          borderRadius: "8px 8px 0 0"
        }
      },
      {
        props: { variant: "CWAF" },
        style: {
          border: colorOptions[mode].CWAF.border
        }
      },
      {
        props: { variant: "CTRC" },
        style: {
          border: colorOptions[mode].CTRC.border
        }
      },
      {
        props: { variant: "CDDOS" },
        style: {
          border: colorOptions[mode].CDDOS.border
        }
      },
      {
        props: { variant: "CBOT" },
        style: {
          border: colorOptions[mode].CBOT.border
        }
      },
      {
        props: { variant: "fwaasFilterBar" },
        style: {
          borderBottom: "solid 1px",
          borderColor: colorOptions[mode].fwaasFilterBar.borderColor
        }
      },
      {
        props: { variant: "usageOuterCard" },
        style: {
          background: colorOptions[mode].usageOuterCard.backgroundColor,
          height: "100%"
        }
      },
      {
        props: { variant: "usageInnerCard" },
        style: {
          paddingLeft: "20px",
          paddingRight: "10px",
          paddingBottom: "11.5px",
          background: colorOptions[mode].usageInnerCard.backgroundColor,
          minWidth: "116px"
        }
      },
      {
        props: { variant: "usageInnerCard", usage: "overUsage" },
        style: {
          background: colorOptions[mode].overusageInnerCard.backgroundColor
        }
      },
      {
        props: { variant: "infoBox", status: "active" },
        style: {
          background: colorOptions[mode].infoBox.active.backgroundColor
        }
      },
      {
        props: { variant: "infoBox", status: "expired" },
        style: {
          background: colorOptions[mode].infoBox.expired.backgroundColor
        }
      },
      {
        props: { variant: "radioHover" },
        style: {
          "&:hover .MuiRadio-root": {
            color: colorOptions[mode].radioHover.color
          }
        }
      },
      {
        props: { variant: "drawerBottom" },
        style: {
          background: colorOptions[mode].drawerBottom.background,
          position: "absolute",
          bottom: 0,
          right: 0,
          paddingTop: "20px",
          paddingRight: "15px"
        }
      },
      {
        props: { variant: "SYSTEM" },
        style: {
          border: colorOptions[mode].SYSTEM.border
        }
      },
      {
        props: { hover: "activeButtonOnHover" },
        style: {
          cursor: "pointer",
          "&:hover .activeOnContainerHover:not(.Mui-disabled)": {
            backgroundColor: colorOptions[mode].iconButton.hover.backgroundColor
          }
        }
      },
      {
        props: { background: "oceanBlue" },
        style: {
          backgroundColor: colorOptions[mode].oceanBlue.backgroundColor
        }
      },
      {
        props: { variant: "messageGrid" },
        style: {
          height: "30px",
          display: "flex",
          alignItems: "center",
          padding: "0 5px 0 10px",
          borderRadius: "8px"
        }
      },
      {
        props: { variant: "whatsNewImageWraper" },
        style: {
          textAlign: "center",
          margin: "12px",
          position: "relative",
          "&:before": {
            content: '" "',
            position: "absolute",
            width: "100%",
            height: "calc(100% - 6px)",
            backgroundColor: colorOptions[mode].whatsNewImage.hover.backgroundColor,
            borderRadius: "4px",
            transition: "opacity .15s",
            cursor: "pointer",
            opacity: 0
          },
          "& .overlay": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "32px",
            cursor: "pointer",
            visibility: "hidden",
            "& .MuiBox-root": {
              width: "32px",
              height: "32px"
            }
          },
          "&:hover": {
            "& .showInModal": {
              boxShadow: colorOptions[mode].whatsNewImage.boxShadow,
              cursor: "pointer"
            },
            "&:before": {
              opacity: 1
            },
            "& .overlay": {
              visibility: "visible"
            }
          }
        }
      },
      {
        props: { variant: "fileUploadContainer" },
        style: {
          border: `1px solid ${colorOptions[mode].shuttleGray}`,
          "&:hover": {
            borderColor: colorOptions[mode].paleSky
          }
        }
      },
      {
        props: { variant: "attackDetailsContainer" },
        style: {
          backgroundColor: colorOptions[mode].gray.backgroundColor
        }
      },
      {
        props: { bg_color: "athensGray" },
        style: {
          backgroundColor: colorOptions[mode].athensGray
        }
      },
      {
        props: { bg_color: "moonRaker" },
        style: {
          backgroundColor: colorOptions[mode].moonRaker
        }
      },
      {
        props: { bg_color: "athensGrey" },
        style: {
          backgroundColor: colorOptions[mode].athensGrey
        }
      },
      {
        props: { bg_color: "mabel" },
        style: {
          backgroundColor: colorOptions[mode].mabel
        }
      },
      {
        props: { colors: "deepCerulean" },
        style: {
          color: colorOptions[mode].deepCerulean
        }
      },
      {
        props: { headergrid: "primary" },
        style: {
          backgroundColor: colorOptions[mode].headergrid.primary
        }
      },
      {
        props: { bg_color: "excludeFilterBackground" },
        style: {
          backgroundColor: colorOptions[mode].athensGray,
          borderColor: colorOptions[mode].spaceGray
        }
      }
    ]
  };
};

export default MuiGrid;
