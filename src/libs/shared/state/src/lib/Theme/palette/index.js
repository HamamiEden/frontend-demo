import { blue } from "@mui/material/colors";

const basicPalette = {
  elevations: {
    menu: 1
  },
  elementWidth: {
    notification: "400px",
    user: "300px",
    sidebar: "240px",
    sidebarDrawer: "250px",
    miniSidebar: "48px",
    miniSidebarDrawer: "58px",
    action: "150px"
  },
  clockIcon: {
    color: "#5D5F61",
    formControlMargin: 0.875,
    formControlPadding: 0,
    inputBaseFlexDirection: "row-reverse",
    inputBaseDisplay: "flex",
    boxPosition: "relative",
    boxTop: 2
  },
  elementHeight: {
    header: "50px"
  },
  table: {
    tableRow: {
      height: "58px"
    }
  },
  itemComp: {
    svg: {
      activeColor: "#fff",
      inactiveColor: "#737373"
    },
    span: {
      activeColor: "#fff",
      inactiveColor: "#ffffff4d",
      activeFontWeight: "bold",
      inActiveFontWeight: 400
    }
  },
  resetButton: {
    color: "#000000de",
    background: "#e0e0e0",
    hover: "#d5d5d5"
  },
  filters: {
    item: {
      selected: {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
      }
    }
  },
  sidebar: {
    backgroundColor: "1F2023",
    item: {
      backgroundColor: "rgba(255,255,255,0.08)"
    },
    toggleIcon: {
      backgroundColor: "#FF2B44",
      color: "#fff"
    }
  },
  transitions: {
    hover: "0.2s"
  },
  highlightText: {
    backgroundColor: "rgba(59, 119, 238, 0.3)",
    border: "1px solid #3B77EE",
    borderRadius: 0.5
  },
  certificateExpirationIcon: {
    color: "#99DAFF"
  },
  certificateExpired: {
    color: "#FF0606"
  }
};

const palette = mode => {
  switch (mode) {
    case "light":
      return {
        mode,
        primary: blue,
        cornflowerBlue: "#0C6FDD",
        torchRed: "#FE001E",
        icons: {
          successIcon: {
            backgroundColor: "#156C42",
            color: "#FFFFFF"
          },
          errorIcon: {
            backgroundColor: "#B5153A",
            color: "#FFFFFF"
          }
        },
        dialog: {
          background: "#fff",
          borderTop: "1px solid #DADADA",
          divider: "#E9F1F3"
        },
        scienceBlue: "#015ECB",
        chip: {
          background: "#e0e0e0",
          icon: "#3c4144",
          color: "#3c4144",
          default: "#EFF2F3",
          hover: "#d5d5d5",
          deleteIcon: "#ffffffb3",
          textColor: "#fff"
        },
        clockIconMode: {
          color: "#5D5F61"
        },
        cloudServicesLogo: {
          color: "#202020"
        },
        active: {
          color: "#32cd32",
          background: "#deffed"
        },
        actions: {
          activate: "#1abc9c",
          support: "#949494",
          deactivate: "#ff1100"
        },
        navbar: {
          background: "#f5f6f880"
        },
        background: {
          default: "#F3F5F7",
          paper: "#fff"
        },
        mainCard: {
          border: "none",
          background: "#FFF",
          borderColor: "rgba(60, 65, 68, 0.1)",
          borderRadius: "20px",
          padding: "8px",
          disabled: {
            background: "#FBFBFC"
          },
          cardHeader: {
            hover: {
              background: "#eaeef1"
            }
          }
        },
        alertSecurity: {
          label: {
            color: "#5B626E" //"#6B7280",
          },
          text: {
            color: "#5B626E" //"#6B7280",
          },
          title: {
            color: "#4743F8"
          },
          background: "linear-gradient(0deg, #FAFAFA, #FAFAFA), #F1F1F1"
        },
        innerMainCard: {
          border: ".5px solid",
          background: "#FFF",
          borderColor: "#E8E8E8",
          borderRadius: "12px",
          padding: "8px"
        },
        text: {
          primary: "#264769",
          secondary: "#5B626E" //"#6B7280",
        },
        formLabel: {
          color: "#3C4144"
        },
        darkModeLabel: {
          color: "#3C414480"
        },
        tab: {
          indicator: "rgba(136, 200, 233, 1)"
        },
        sdSearch: {
          text: {
            color: "#5B626E" //"#6B7280",
          },
          wrapper: {
            backgroundColor: "#FFF",
            borderColor: "#E7E7E8"
          }
        },
        tooltip: {
          fontWeight: 400,
          sidebar: {
            backgroundColor: "#264769",
            color: "#fff",
            arrow: {
              color: "#264769"
            }
          },
          outOfPlan: {
            backgroundColor: "#3B5E83",
            color: "#fff",
            arrow: {
              color: "#3B5E83"
            }
          }
        },
        viewOnlyChip: {
          backgroundColor: "#E5E8EB"
        },
        cardList: {
          tableHead: {
            color: "rgba(60, 65, 68, 0.6)"
          },
          borderColor: "rgba(60,65,68,0.2)"
        },
        tableRow: {
          selected: {
            backgroundColor: "#F4F7FB"
          },
          disabled: {
            opacity: 0.5
          }
        },
        tableExpand: {
          background: "#fff",
          separatorColor: "#3c414499",
          borderBottom: "1px solid #E9F1F3"
        },
        radioButton: {
          checkbox: {
            color: "rgba(60, 65, 68, 0.2)"
          },
          label: {
            color: "rgba(60, 65, 68, 0.6)"
          }
        },
        sdExport: {
          background: {
            hover: "rgba(60, 65, 68, 0.04)"
          },
          text: {
            color: "#264769",
            fontWeight: 400
          },
          marginRight: 1.25,
          marginLeft: 1.375,
          iconSize: 24
        },
        metaItem: {
          title: "rgba(60, 65, 68, 0.5)"
        },
        textField: {
          backgroundColor: "rgba(246, 246, 246, 0.6)",
          filledInput: {
            color: "rgba(60, 65, 68, 0.8)"
          },
          svg: {
            color: "rgba(60, 65, 68, 0.5)"
          }
        },
        inputLabelTextfield: {
          color: "rgba(60, 65, 68, 0.6)"
        },
        custmCheckBox: {
          checkBox: {
            color: "rgba(60, 65, 68, 0.2)"
          },
          label: {
            color: "rgba(60, 65, 68, 0.6)"
          }
        },
        highlightText: {
          color: "#5B626E" //"#6B7280",
        },
        SdCardListCell: {
          tableCellcolor: "rgba(60, 65, 68, 0.6)"
        },
        pageActionItem: {
          backgroundColor: "#4199C5",
          hoverBackgroundColor: "#1E76A3"
        },
        resetZoom: {
          backgroundColor: "#EEEEEE",
          focusBGColor: "#8E8E8E",
          color: "#4f5b5e"
        },
        entityActionsTitle: {
          color: "rgba(60, 65, 68, 0.5)"
        },
        actionsButton: {
          color: "#3C4144",
          hover: {
            backgroundColor: "rgba(60, 65, 68, 0.04)"
          }
        },
        sdAutoComplete: {
          borderColor: "rgba(46, 88, 148, 0.3)",
          hoverBorderColor: "#3c41441a",
          color: "#264769"
        },
        switch: {
          thumb: {
            color: "#27486A"
          }
        },
        quickRange: {
          border: "0.5px solid #C0CDDF",
          boxShadow: "0px 1px 4px rgba(37, 49, 53, 0.15)",
          backgroundColor: "#FFFFFF",
          color: "#3C4144",
          hover: {
            // backgroundColor: "#D9F2FF",
            color: ""
          }
        },
        timeRange: {
          border: "0.5px solid #C0CDDF",
          boxShadow: "0px 1px 4px rgba(37, 49, 53, 0.15)"
        },
        overviewSecurity: {
          text: {
            color: "#5B626E" //"#6B7280",
          }
        },
        overviewData: {
          borderRightColor: "#E9F1F3"
        },
        trafficPlaceholder: {
          border: "1px solid #E9F1F3"
        },
        monitoringTopAttacks: {
          timeRange: {
            backgroundColor: "#3C4144",
            hover: {
              backgroundColor: "#E5E5E5",
              color: "#000"
            }
          },
          attackBar: {
            backgroundColor: "#E5E8EB"
          },
          units: {
            selected: {
              backgroundColor: "#C5C5C5"
            }
          }
        },
        bellIcon: {
          color: "#264769",
          background: "#CBD4DB"
        },
        mainSearch: {
          icon: {
            color: "#211DD9"
          }
        },
        sendBtn: {
          color: "#1C658A"
        },
        sdAvatar: {
          backgroundColor: "#264769",
          secondaryTitle: {
            color: "#5B626E" //"#6B7280",
          }
        },
        tabs: {
          borderColor: "#28496a80"
        },
        rowTitle: {
          color: "#4743F8"
        },
        signatureCard: {
          backgroundColor: "#E9EFF7", // "#F4F7FB",
          grid: {
            color: "#5B626E" //"#6B7280",
          },
          itemValue: {
            color: "#A343F7"
          }
        },
        sidebar: {
          backgroundColor: "#264769",
          listColor: "#FFFFFF80",
          activeColor: "#FF2B44"
        },
        invite: {
          textColor: "#6B7280",
          iconColor: "#FF2B44",
          listItem: {
            hover: {
              backgroundColor: "#E1E3E640"
            }
          }
        },
        previewReport: {
          color: "#5B626E" //"#6B7280",
        },
        outlinedInput: {
          borderColor: "#355CD5"
        },
        autoCompletePlaceholder: {
          color: "#5B626E" //"#6B7280",
        },
        multipleTable: {
          borderColor: "#E9F1F3"
        },
        accountUsageSections: {
          color: "#5278F4"
        },
        fieldset: {
          disabled: {
            card: {
              borderColor: "#B5B8BF80"
            },
            header: {
              color: "#6b728080"
            }
          }
        },
        tryUnifiedBtn: {
          boxShadow: "0px 0px 5px rgba(3, 0, 138, 0.5)",
          tooltip: {
            wordBetaColor: "#641BC9",
            wordNewColor: "#0E0ADA"
          }
        },
        iconButtonWithHover: {
          hover: {
            backgroundColor: "#CBD4DB"
          }
        },
        iconWithoutHoverBg: {
          info: {
            color: "#264769B2",
            hover: {
              color: "#264769"
            }
          }
        },
        footer: {
          backgroundColor: "#F5F6F8",
          color: "#5B626E",
          hover: {
            color: "#264769CC"
          }
        },
        externalFilters: {
          clearAll: {
            color: "#0E0ADA"
          }
        },
        datepicker: {
          backgroundColor: "#fff",
          color: "#5B626E", //"#6B7280",
          selected: {
            color: "#0E0ADA",
            backgroundColor: "#E5E8EB",
            hover: {
              backgroundColor: "#E5E8EB"
            }
          },
          hover: {
            color: "#0E0ADA",
            backgroundColor: "#E5E8EB"
          },
          disabled: {
            color: "rgba(107, 114, 128, 0.3)"
          },
          clock: {
            backgroundColor: "#00000012"
          }
        },
        warningIcon: {
          color: "#D30019"
        },
        serviceType: {
          color: "#264769"
        },
        secondaryWarning: {
          color: "#BF360C"
        },
        synced: {
          icon: {
            color: "#24BE74"
          }
        },
        notSynced: {
          icon: {
            color: "#DF8808"
          }
        },
        successIcon: {
          color: "#24BE74"
        },
        pendingIcon: {
          color: "#E48A00"
        },
        failedIcon: {
          color: "#B5153A"
        },
        inProgressIcon: {
          color: "#CA5E00"
        },
        archiveIcon: {
          color: "#4E536F"
        },
        filters: {
          item: {
            selected: {
              backgroundColor: "rgba(0, 0, 0, 0.08)"
            }
          }
        },
        popover: {
          backgroundColor: "#FFF"
        },
        greenish: "#DEF4EB",
        magneta: "#B5153A",
        lillyWhite: "#0F3D52"
      };
    case "dark":
      return {
        mode,
        scienceBlue: "#6DCFFC",
        primary: blue,
        cornflowerBlue: "#6DCFFC",
        torchRed: "#FF2B44",
        icons: {
          successIcon: {
            backgroundColor: "#31D887",
            color: "#1A1C1E"
          },
          errorIcon: {
            backgroundColor: "#FE3363",
            color: "#1A1C1E"
          }
        },
        dialog: {
          background: "#080809",
          borderTop: "1px solid #D4D6DB",
          divider: "#e9f1f34d"
        },
        chip: {
          background: "#616161",
          icon: "#FFFFFF",
          color: "#FFFFFF",
          default: "#4F5154",
          hover: "#4F5164",
          deleteIcon: "#ffffffb3",
          textColor: "#fff"
        },
        clockIconMode: {
          color: "#D4D6DB"
        },
        cloudServicesLogo: {
          color: "#D0D2D3"
        },
        avatar: {
          dropShadow: "drop-shadow(0px 0px 6px #52CBFF);"
        },
        active: {
          color: "#deffed",
          background: "#32cd32"
        },
        actions: {
          activate: "#1abc9c7a",
          support: "#9494947a",
          deactivate: "#ff11007a"
        },
        navbar: {
          background: "#08080980"
        },
        background: {
          default: "#080809",
          // paper: "#212225",
          paper: "#1A1C1E"
        },
        mainCard: {
          border: "none",
          background: "#1A1C1E",
          borderColor: "#36484e",
          borderRadius: "20px",
          padding: "8px",
          disabled: {
            background: "#17181A"
          },
          cardHeader: {
            hover: {
              background: "#28282A"
            }
          }
        },
        alertSecurity: {
          title: {
            color: "#0D99FF"
          },
          label: {
            color: "#D4D6DB"
          },
          text: {
            color: "#D4D6DB"
          },
          background: "#000000"
        },
        innerMainCard: {
          border: ".5px solid",
          background: "#253135",
          borderColor: "#E8E8E8",
          borderRadius: "12px",
          padding: "8px"
        },
        text: {
          primary: "#D4D6DB",
          secondary: "#D4D6DB"
        },
        darkModeLabel: {
          color: "#fff"
        },
        formLabel: {
          color: "#FFFFFF"
        },
        sdSearch: {
          text: {
            color: "#D4D6DB"
          },
          wrapper: {
            backgroundColor: "#253135",
            borderColor: "rgba(212, 214, 219, 0.7)"
          }
        },
        tooltip: {
          fontWeight: 400,
          sidebar: {
            backgroundColor: "#1f2023",
            color: "#FFF",
            arrow: {
              color: "#1f2023"
            }
          },
          outOfPlan: {
            backgroundColor: "#515253",
            color: "#fff",
            arrow: {
              color: "#515253"
            }
          }
        },
        viewOnlyChip: {
          backgroundColor: "#4F5154"
        },
        cardList: {
          tableHead: {
            color: "rgba(255, 255, 255, 0.5)"
          },
          borderColor: "#354348"
        },
        tableRow: {
          selected: {
            backgroundColor: "#000000"
          },
          disabled: {
            opacity: 0.5
          }
        },
        tableExpand: {
          background: "#000000",
          separatorColor: "#3c414499",
          borderBottom: "1px solid #e9f1f34d"
        },
        radioButton: {
          checkbox: {
            color: "rgba(255, 255, 255, 0.5)"
          },
          label: {
            color: "rgba(255, 255, 255, 1)"
          }
        },
        sdExport: {
          background: {
            hover: "rgba(255, 255, 255, 0.08)"
          },
          text: {
            color: "#D4D6DB"
          }
        },
        metaItem: {
          title: "rgba(255, 255, 255, 0.5)"
        },
        textField: {
          backgroundColor: "#29383d",
          filledInput: {
            color: "rgba(255, 255, 255, 1)"
          },
          svg: {
            color: "rgba(255, 255, 255, 0.5)"
          }
        },
        inputLabelTextfield: {
          color: "rgba(255, 255, 255, 0.5)"
        },
        sdChip: {
          colorDarkMode: "#fff"
        },
        custmCheckBox: {
          checkBox: {
            color: "rgba(255, 255, 255, 0.5)"
          },
          label: {
            color: "rgba(255, 255, 255, 1)"
          }
        },
        highlightText: {
          color: "#D4D6DB"
        },
        SdCardListCell: {
          tableCellcolor: "rgba(255, 255, 255, 0.5)"
        },
        pageActionItem: {
          backgroundColor: "#44AADD",
          hoverBackgroundColor: "#078CD7"
        },
        resetZoom: {
          backgroundColor: "#556369",
          focusBGColor: "#475A61"
        },
        overviewData: {
          borderRightColor: "#e9f1f34d"
        },
        trafficPlaceholder: {
          border: "1px solid #253135"
        },
        monitoringTopAttacks: {
          timeRange: {
            backgroundColor: "#475A61",
            hover: {
              backgroundColor: "#556369",
              color: "#fff"
            }
          },
          attackBar: {
            backgroundColor: "#5D5E5F"
          },
          selected: {
            backgroundColor: "#7FA1AD"
          }
        },
        entityActionsTitle: {
          color: "rgba(255, 255, 255, 0.5)"
        },
        actionsButton: {
          color: "#fff",
          hover: {
            backgroundColor: "rgba(255, 255, 255, 0.08)"
          }
        },
        sdAutoComplete: {
          borderColor: "rgba(231, 231, 232, 0.7)",
          hoverBorderColor: "#36484e",
          color: "#D4D6DB"
        },
        switch: {
          thumb: {
            color: "#212225"
          }
        },
        quickRange: {
          border: "0.5px solid rgba(212, 214, 219, 0.5)",
          boxShadow: "0px 1px 4px rgba(255, 255, 255, 0.15)",
          backgroundColor: "#253135",
          color: "#FFFFFF",
          hover: {
            backgroundColor: "",
            color: ""
          }
        },
        timeRange: {
          border: "0.5px solid rgba(212, 214, 219, 0.5)",
          boxShadow: "0px 1px 4px rgba(255, 255, 255, 0.15)"
        },
        overviewSecurity: {
          text: {
            color: "#D4D6DB"
          }
        },
        bellIcon: {
          color: "#D4D6DB",
          background: "#484A4D"
        },
        mainSearch: {
          icon: {
            color: "#D4D6DB"
          }
        },
        sendBtn: {
          color: "#88C8E9"
        },
        sdAvatar: {
          backgroundColor: "#3B77EE",
          secondaryTitle: {
            color: "#D4D6DB"
          }
        },
        tabs: {
          borderColor: "#3b77ee80"
        },

        rowTitle: {
          color: "#0D99FF"
        },
        signatureCard: {
          backgroundColor: "#050506",
          grid: {
            color: "#D4D6DB"
          },
          itemValue: {
            color: "#DA14FB"
          }
        },
        sidebar: {
          backgroundColor: "#1F2023",
          listColor: "#FFFFFF80",
          activeColor: "#FF2B44"
        },
        invite: {
          textColor: "#D4D6DB",
          iconColor: "#FF2B44",
          listItem: {
            hover: {
              backgroundColor: "#2C2D31"
            }
          }
        },
        previewReport: {
          color: "rgba(212, 214, 219, 0.7)"
        },
        outlinedInput: {
          borderColor: "#2555D1"
        },
        autoCompletePlaceholder: {
          color: "#D4D6DB"
        },
        multipleTable: {
          borderColor: "#515151"
        },
        accountUsageSections: {
          color: "#A9BDFF"
        },
        fieldset: {
          disabled: {
            card: {
              borderColor: "#464A52"
            },
            header: {
              color: "#d4d6db4d"
            }
          }
        },
        tryUnifiedBtn: {
          boxShadow: "0px 0px 8px rgba(191, 189, 255, 0.8)",
          tooltip: {
            wordBetaColor: "#B37CFF",
            wordNewColor: "#6DCFFC"
          }
        },
        iconButtonWithHover: {
          hover: {
            backgroundColor: "#484A4D"
          }
        },
        iconWithoutHoverBg: {
          info: {
            color: "#999B9F",
            hover: {
              color: "#D4D6DB"
            }
          }
        },
        footer: {
          backgroundColor: "#080809",
          color: "#D4D6DBB3",
          hover: {
            color: "#D4D6DB"
          }
        },
        externalFilters: {
          clearAll: {
            color: "#6DCFFC"
          }
        },
        datepicker: {
          backgroundColor: "#1A1C1E",
          color: "#D4D6DB",
          selected: {
            color: "#4340F6",
            backgroundColor: "#1A1C1E",
            hover: {
              backgroundColor: "#42474B"
            }
          },
          hover: {
            color: "#6DCFFC",
            backgroundColor: "#42474B"
          },
          disabled: {
            color: "rgba(212, 214, 219, 0.5)"
          },
          clock: {
            backgroundColor: "#7c858c"
          }
        },
        warningIcon: {
          color: "#D30019"
        },
        serviceType: {
          color: "#D4D6DB"
        },
        secondaryWarning: {
          color: "#FFB549"
        },
        synced: {
          icon: {
            color: "#24BE74"
          }
        },
        notSynced: {
          icon: {
            color: "#DF8808"
          }
        },
        successIcon: {
          color: "#24BE74"
        },
        pendingIcon: {
          color: "#DBAB00"
        },
        failedIcon: {
          color: "#FF2B44"
        },
        inProgressIcon: {
          color: "#CA5E00"
        },
        archiveIcon: {
          color: "#D4D6DB"
        },
        filters: {
          item: {
            selected: {
              backgroundColor: "rgba(255, 255, 255, 0.08)"
            }
          }
        },
        popover: {
          backgroundColor: "#1a1c1e",
          filter: "drop-shadow(1px 1px 5px rgba(85, 85, 85, 0.25))"
        },
        greenish: "#1F4133",
        magneta: "#FE3363",
        lillyWhite: "#E5F6FF"
      };
    default:
      return {};
  }
};

export { basicPalette, palette };
