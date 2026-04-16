const options = {
  light: {
    color: "#5B626E",
    backgroundColor: "transparent",
    borderBottomColor: "#E9F1F3",
    tableCellHead: {
      backgroundColor: "#ffffff",
      color: "#264769",
      tableSortLabelRoot: {
        hover: {
          color: "#264769"
        },
        icon: {
          color: "#264769"
        }
      }
    },
    featureCell: {
      default: {
        color: "#264769"
      },
      service: {
        cwaf: {
          planType: {
            standard: {
              color: "#4C649F"
            },
            advanced: {
              color: "#4033AB"
            },
            complete: {
              color: "#B4915D"
            }
          }
        },
        ctrc: {
          planType: {
            free: {
              color: "#5278F4"
            },
            essential: {
              color: "#5278F4"
            },
            pro: {
              color: "#5278F4"
            }
          }
        }
      },

      disabled: {
        color: "#6b728080"
      }
    },
    woodsmoke: "#fff"
  },
  dark: {
    color: "#D4D6DB",
    backgroundColor: "transparent",
    borderBottomColor: "rgba(233, 241, 243, 0.3)",
    tableCellHead: {
      backgroundColor: "#1A1C1E",
      color: "#D4D6DB",
      tableSortLabelRoot: {
        hover: {
          color: "#D4D6DB"
        },
        icon: {
          color: "#D4D6DB"
        }
      }
    },
    featureCell: {
      default: {
        color: "#D4D6DB"
      },
      service: {
        cwaf: {
          planType: {
            standard: {
              color: "#AAD1FF"
            },
            advanced: {
              color: "#907AFF"
            },
            complete: {
              color: "#C79F63"
            }
          }
        },
        ctrc: {
          planType: {
            free: {
              color: "#1ECACA"
            },
            essential: {
              color: "#1ECACA"
            },
            pro: {
              color: "#1ECACA"
            }
          }
        }
      },

      disabled: {
        color: "#77797c80"
      }
    },
    woodsmoke: "#080809"
  }
};

const MuiTableCell = mode => {
  return {
    styleOverrides: {
      root: {
        fontSize: 12,
        color: options[mode].color,
        backgroundColor: options[mode].backgroundColor,
        borderBottomColor: options[mode].borderBottomColor,
        padding: "5px 16px",
        "&.MuiTableCell-paddingCheckbox": {
          padding: "0 0 0 4px"
        },
        "&.MuiTableCell-paddingNone": {
          padding: "0"
        },
        "&.MuiTableCell-root.MuiTableCell-head": {
          fontSize: 14,
          backgroundColor: options[mode].tableCellHead.backgroundColor,
          color: options[mode].tableCellHead.color,
          padding: "12px 16px 0 16px",
          verticalAlign: "top",
          "& .MuiTableSortLabel-root": {
            "& .MuiTableSortLabel-icon": {
              color: options[mode].tableCellHead.tableSortLabelRoot.icon.color,
              fontSize: 12
            }
          },
          "& .MuiTableSortLabel-root:hover": {
            color: options[mode].tableCellHead.tableSortLabelRoot.hover.color
          },
          "&.MuiTableCell-paddingCheckbox": {
            padding: "0 0 0 4px"
          },
          "&.MuiTableCell-paddingNone": {
            padding: "0"
          }
        },
        "&.actionCell": {
          paddingRight: "5px"
        }
      }
    },
    variants: [
      {
        props: { variants: "featureCell" },
        style: {
          padding: "5px",
          color: options[mode].featureCell.default.color
        }
      },
      {
        props: { variants: "featureCell", plan: "STANDARD", service: "CWAF" },
        style: {
          color: options[mode].featureCell.service.cwaf.planType.standard.color
        }
      },
      {
        props: { variants: "featureCell", plan: "ADVANCED", service: "CWAF" },
        style: {
          color: options[mode].featureCell.service.cwaf.planType.advanced.color
        }
      },
      {
        props: { variants: "featureCell", plan: "COMPLETE", service: "CWAF" },
        style: {
          color: options[mode].featureCell.service.cwaf.planType.complete.color
        }
      },
      {
        props: { variants: "featureCell", plan: "FREE", service: "CTRC" },
        style: {
          color: options[mode].featureCell.service.ctrc.planType.free.color
        }
      },
      {
        props: { variants: "featureCell", plan: "ESSENTIAL", service: "CTRC" },
        style: {
          color: options[mode].featureCell.service.ctrc.planType.essential.color
        }
      },
      {
        props: { variants: "featureCell", plan: "PRO", service: "CTRC" },
        style: {
          color: options[mode].featureCell.service.ctrc.planType.pro.color
        }
      },
      {
        props: { variants: "featureCell", disabled: true },
        style: {
          color: options[mode].featureCell.disabled.color
        }
      },
      {
        props: { bgcolor: "woodsmoke", type: "headerCell" },
        style: {
          "&.MuiTableCell-root.MuiTableCell-head": {
            backgroundColor: options[mode].woodsmoke
          }
        }
      }
    ]
  };
};

export default MuiTableCell;
