const options = {
  light: {
    border: "solid #E9F1F3 1px",
    sidebarBtn: {
      active: {
        backgroundColor: "#5E7890"
      }
    },
    entitySelectItem: {
      borderColor: "#E9F1F3",
      hover: {
        backgroundColor: "#F1FBFF",
        icon: {
          boxShadow: "0px 0px 3.5px 1px #353BD259, inset 0px 0px 1px 1px #353BD259"
        }
      },
      selected: {
        backgroundColor: "#F1FBFF",
      },
    },
    darkBlue: {
      color: "#0E0ADA"
    },
    hawkesBlue: {
      color: "#D9D8FD"
    },
    iron: {
      color: "#DBDEE1"
    },
    astronaut: {
      color: "#264769"
    },
    checkboxBlue: {
      color: "#015ECB"
    },
    tabs: {
      background: "#F5F6F8",
      hover: "#E5F6FF"
    }
  },
  dark: {
    border: "1px solid #585C5E",
    sidebarBtn: {
      active: {
        backgroundColor: "#595B5F"
      }
    },
    entitySelectItem: {
      borderColor: "#E9F1F34D",
      hover: {
        backgroundColor: "#2E3137",
        icon: {
          boxShadow: "0px 0px 3.5px 1px #353BD259, inset 0px 0px 1px 1px #353BD259"
        }
      },
      selected: {
        backgroundColor: "#111113"
      }
    },
    darkBlue: {
      color: "#6DCFFC"
    },
    checkboxBlue: {
      color: "#6DCFFC"
    },
    hawkesBlue: {
      color: "#3D4149"
    },
    iron: {
      color: "#D4D6DB"
    },
    astronaut: {
      color: "#D4D6DB"
    },
    tabs: {
      background: "#3D4149",
      hover: "#0F3D52"
    }
  }
};

const MuiListItemButton = mode => {
  return {
    variants: [
      {
        props: { variant: "inputList" },
        style: {
          borderBottom: options[mode].border,
          width: "270px",
          padding: "7.5px 13px",
          "&:last-child": {
            border: "unset"
          }
        }
      },
      {
        props: { variant: "tooltipItem" },
        style: {
          height: "40px",
          padding: "10px 0 10px 16px",
          fontSize: "0.75rem",
          color: "#ffffffd9",
          "&:hover": {
            backgroundColor: "transparent",
            "& .MuiListItemText-root .MuiTypography-root": {
              fontWeight: 500,
              color: "#fff"
            }
          },
          "&:first-of-type": {
            borderTopRightRadius: "12px",
            borderTopLeftRadius: "12px",
            "&:hover": {
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px"
            }
          },
          "&:last-of-type": {
            borderBottomRightRadius: "12px",
            borderBottomLeftRadius: "12px"
          },

          transition: theme =>
            theme.transitions.create(["box-shadow", "background-color"], {
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              duration: "150ms"
            }),
          "&.MuiListItem-root:hover": {
            "&:first-of-type": {
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px"
            }
          },
          "&.Mui-disabled": {
            opacity: 1,
            "& .tooltipItem-text": {
              opacity: 0.4
            }
          }
        }
      },
      {
        props: { variant: "sidebarBtn" },
        style: {
          height: "40px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "13px",
          paddingRight: "13px",
          marginBottom: "19px",
          transition: theme =>
            theme.transitions.create(["box-shadow", "background-color"], {
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              duration: "150ms"
            }),
          "& .SIDEBAR-ITEM-MARKETPLACE .cartOpacity": {
            opacity: 0.5
          },
          "&:hover": {
            backgroundColor: options[mode].sidebarBtn.active.backgroundColor,
            "& .MuiListItemText-root, .MuiListItemIcon-root": {
              color: "#FFFFFF"
            },
            "& .SIDEBAR-ITEM-MARKETPLACE .cartOpacity": {
              opacity: 1
            }
          }
        }
      },
      {
        props: { active: "activeIndicator" },
        style: {
          backgroundColor: options[mode].sidebarBtn.active.backgroundColor,
          "& .MuiListItemText-root, .MuiListItemIcon-root": {
            color: "#FFFFFF"
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            left: 0,
            height: "100%",
            width: 4,
            backgroundColor: "red",
            borderRadius: "0px 10px 10px 0px"
          },
          "& .SIDEBAR-ITEM-MARKETPLACE .cartOpacity": {
            opacity: 1
          }
        }
      },
      {
        props: { active: "activeTooltipItem" },
        style: {
          backgroundColor: options[mode].sidebarBtn.active.backgroundColor,
          "&:hover": {
            backgroundColor: options[mode].sidebarBtn.active.backgroundColor
          }
        }
      },
      {
        props: { variant: "entitySelectItem" },
        style: {
          height: "36px",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor: options[mode].entitySelectItem.borderColor,
          paddingLeft: "10px",
          "&:hover": {
            backgroundColor: "var(--row-selected)",
            "& .MuiListItemIcon-root": {
              visibility: "visible",
              svg: {
                boxShadow: options[mode].entitySelectItem.hover.icon.boxShadow,
                borderRadius: "50%"
              }
            }
          },
          "&.Mui-selected": {
            backgroundColor: "var(--row-selected)",
            "&:hover": {
              backgroundColor: "var(--row-selected)"
            }
          }
        }
      },
      {
        props: { variant: "entityExpandItem" },
        style: {
          "&:hover": {
            backgroundColor: "var(--row-hover)",
            "& .expandIcon": {
              color: "var(--text-enhance)",
              backgroundColor: "var(--row-hover)",
            },
          },
          "&.Mui-selected": {
            backgroundColor: "var(--row-selected)",
            "&:hover": {
              backgroundColor: "var(--row-selected)",
              "& .expandIcon": {
              backgroundColor: "var(--row-selected)",
            },
            },
            "& .entityItemText": {
              color: "var(--text-enhance)",
              fontWeight: 500
            }
          }
        }
      },
      {
        props: { colors: "astronaut" },
        style: {
          color: options[mode].astronaut.color,
          borderLeft: `4px solid ${options[mode].iron.color}`,
          "&:hover": {
            color: `${options[mode].darkBlue.color}`,
            backgroundColor: `${options[mode].hawkesBlue.color}`
          },
          "&.Mui-selected": {
            borderColor: `${options[mode].darkBlue.color}`,
            color: `${options[mode].darkBlue.color}`,
            backgroundColor: `${options[mode].hawkesBlue.color}`
          },
          "&.Mui-selected:hover": {
            color: `${options[mode].darkBlue.color}`,
            backgroundColor: `${options[mode].hawkesBlue.color}`
          }
        }
      },
      {
        props: { colors: "tabs" },
        style: {
          backgroundColor: options[mode].tabs.background,
          "&:hover": {
            color: options[mode].checkboxBlue.color,
            backgroundColor: options[mode].tabs.hover,
            "&.Mui-selected": {
              color: options[mode].checkboxBlue.color,
              backgroundColor: options[mode].tabs.hover
            }
          },
          "&.Mui-selected": {
            color: options[mode].checkboxBlue.color,
            backgroundColor: options[mode].tabs.hover
          }
        }
      },
      {
        props: { colors: "selected" },
        style: {
          "&:hover": {
            "&.Mui-selected": {
              "& .MuiListItemText-root": {
                color: options[mode].checkboxBlue.color
              }
            }
          },
          "&.Mui-selected": {
            "& .MuiListItemText-root": {
              color: options[mode].checkboxBlue.color
            }
          }
        }
      }
    ]
  };
};

export default MuiListItemButton;
