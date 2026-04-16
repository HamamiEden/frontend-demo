const options = {
  light: {
    mako: "#F5F6F8",
    athensGrey: {
      color: "#5B626E",
      backgroundColor: "#F3F5F7"
    },
    userAvatar: {
      boxShadow: "0px 0px 8px 2px rgb(255 255 255 / 50%)"
    },
    borderColor: {
      active: "#0D9488",
      demo: "#6B6F85",
      poc: "#DF8808"
    },
    check: {
      backgroundColor: "#BAF2D7",
      color: "#1FA262"
    },
    xmark: {
      backgroundColor: "#FF000080",
      color: "#7F000F"
    },
    torchRed: {
      color: "#FE001E",
      backgroundColor: "#FFEBEC"
    },
    deepCerulean: {
      color: "#087EA5",
      backgroundColor: "#D6F1FE"
    },
    purpleHeart: {
      color: "#641BC9",
      backgroundColor: "#EBE0FB"
    },
    attackManagement: {
      attackSummary: {
        summaryItem: {
          active: {
            color: "#FC4C5D",
            background: "#FFEFEF"
          },
          cooldown: {
            color: "#F97700",
            background: "#FEEBD9"
          }
        }
      },
      assetSummaryItem: {
        onCloud: {
          color: "#00AB63",
          background: "#DEF4EB",
          hover: {
            background: "#D7FFEE"
          }
        },
        offCloud: {
          color: "#6B6F85",
          background: "#ECECEF",
          hover: {
            background: "#DEDEDE"
          }
        }
      },
      connectionsSummaryItem: {
        cpe: {
          color: "#4C3B8E",
          background: "#E8E6F0",
          hover: {
            background: "#E0D9FC"
          }
        },
        gre: {
          color: "#048CCB",
          background: "#DEF0F8",
          hover: {
            background: "#C0E8fA"
          }
        },
        crossconnect: {
          color: "#ED9E2B",
          background: "#FFF5E7"
        },
        up: {
          color: "#00AB63",
          background: "#DEF4EB"
        },
        down: {
          color: "#FF2B44",
          background: "#FFE4E4"
        },
        unknown: {
          color: "#5B626E",
          background: "#F3F3F3"
        }
      }
    },
    securityAnalysis: {
      summary: {
        color: "#5B626E",
        background: "#F5F6F8"
      }
    }
  },
  dark: {
    mako: "#3D4149",
    athensGrey: {
      color: "#D4D6DB",
      backgroundColor: "#080809"
    },
    userAvatar: {
      boxShadow: "0px 0px 8px 1.5px rgba(255, 255, 255, 0.35)"
    },
    borderColor: {
      active: "#51DAB9",
      demo: "#D4D6DB",
      poc: "#F09510"
    },
    check: {
      backgroundColor: "rgba(49, 216, 135, 0.2)",
      color: "#31D887"
    },
    xmark: {
      backgroundColor: "#571921",
      color: "#FF2B44"
    },
    torchRed: {
      color: "#FF475D",
      backgroundColor: "#3F1218"
    },
    deepCerulean: {
      color: "#2CCCFF",
      backgroundColor: "#0F3D52"
    },
    purpleHeart: {
      color: "#C9A8FF",
      backgroundColor: "#2B0C57"
    },
    attackManagement: {
      attackSummary: {
        summaryItem: {
          active: {
            color: "#FF2B44",
            background: "#571921"
          },
          cooldown: {
            color: "#F97700",
            background: "#4B2E02"
          }
        }
      },
      assetSummaryItem: {
        onCloud: {
          color: "#31D887",
          background: "#1F4133",
          hover: {
            background: "#346A54"
          }
        },
        offCloud: {
          color: "#D4D6DB",
          background: "#414346",
          hover: {
            background: "#65686B"
          }
        }
      },
      connectionsSummaryItem: {
        cpe: {
          color: "#D5B9FF",
          background: "#33205A",
          hover: {
            background: "#593B96"
          }
        },
        gre: {
          color: "#09AEFA",
          background: "#203D5A",
          hover: {
            background: "#2A5B8C"
          }
        },
        crossconnect: {
          color: "#6B6F85",
          background: "#ECECEF"
        },
        up: {
          color: "#31D887",
          background: "#173D2D"
        },
        down: {
          color: "#FF2B44",
          background: "#480E16"
        },
        unknown: {
          color: "#D4D6DB",
          background: "#37383A"
        }
      }
    },
    securityAnalysis: {
      summary: {
        color: "#D4D6DB",
        background: "#3D4149"
      }
    }
  }
};

const MuiAvatar = mode => {
  return {
    variants: [
      {
        props: { variant: "userAvatar" },
        style: {
          fontWeight: 400,
          cursor: "Pointer",
          width: 30,
          height: 30,
          transition: "0.2s",
          "&:hover": {
            boxShadow: options[mode].userAvatar.boxShadow
          },
          "&.MuiAvatar-img": {
            borderRadius: 50
          }
        }
      },
      {
        props: { variant: "check" },
        style: {
          backgroundColor: options[mode].check.backgroundColor,
          color: options[mode].check.color
        }
      },
      {
        props: { variant: "xmark" },
        style: {
          backgroundColor: options[mode].xmark.backgroundColor,
          color: options[mode].xmark.color
        }
      },
      {
        props: { status: "ACTIVE" },
        style: {
          "&:hover": {
            borderColor: options[mode].borderColor.active
          }
        }
      },
      {
        props: { status: "DEMO" },
        style: {
          "&:hover": {
            borderColor: options[mode].borderColor.demo
          }
        }
      },
      {
        props: { status: "POC" },
        style: {
          "&:hover": {
            borderColor: options[mode].borderColor.poc
          }
        }
      },
      {
        props: { color: "SUMMARY-CLAIMED_INCIDENTS" },
        style: {
          color: options[mode].torchRed.color,
          background: options[mode].torchRed.backgroundColor
        }
      },
      {
        props: { color: "INFO-ITEM" },
        style: {
          color: options[mode].athensGrey.color,
          background: options[mode].mako
        }
      },
      {
        props: { color: "SUMMARY-HACKERS_GROUP" },
        style: {
          color: options[mode].deepCerulean.color,
          background: options[mode].deepCerulean.backgroundColor
        }
      },

      {
        props: { color: "SUMMARY-CLAIMED_DOMAINS" },
        style: {
          color: options[mode].purpleHeart.color,
          background: options[mode].purpleHeart.backgroundColor
        }
      },
      {
        props: { color: "SUMMARY-ACTIVE" },
        style: {
          color: options[mode].attackManagement.attackSummary.summaryItem.active.color,
          background: options[mode].attackManagement.attackSummary.summaryItem.active.background
        }
      },
      {
        props: { color: "SUMMARY-COOLDOWN" },
        style: {
          color: options[mode].attackManagement.attackSummary.summaryItem.cooldown.color,
          background: options[mode].attackManagement.attackSummary.summaryItem.cooldown.background
        }
      },
      {
        props: { color: "SUMMARY-ON_CLOUD" },
        style: {
          color: options[mode].attackManagement.assetSummaryItem.onCloud.color,
          background: options[mode].attackManagement.assetSummaryItem.onCloud.background,
          "&:hover": {
            background: options[mode].attackManagement.assetSummaryItem.onCloud.hover.background
          }
        }
      },
      {
        props: { color: "SUMMARY-OFF_CLOUD" },
        style: {
          color: options[mode].attackManagement.assetSummaryItem.offCloud.color,
          background: options[mode].attackManagement.assetSummaryItem.offCloud.background,
          "&:hover": {
            background: options[mode].attackManagement.assetSummaryItem.offCloud.hover.background
          }
        }
      },
      {
        props: { color: "CONNECTION-CPE" },
        style: {
          color: options[mode].attackManagement.connectionsSummaryItem.cpe.color,
          background: options[mode].attackManagement.connectionsSummaryItem.cpe.background,
          "&:hover": {
            background: options[mode].attackManagement.connectionsSummaryItem.cpe.hover.background
          }
        }
      },
      {
        props: { color: "CONNECTION-GRE" },
        style: {
          color: options[mode].attackManagement.connectionsSummaryItem.gre.color,
          background: options[mode].attackManagement.connectionsSummaryItem.gre.background,
          "&:hover": {
            background: options[mode].attackManagement.connectionsSummaryItem.gre.hover.background
          }
        }
      },
      {
        props: { color: "CONNECTION-CROSSCONNECT" },
        style: {
          color: options[mode].attackManagement.connectionsSummaryItem.crossconnect.color,
          background: options[mode].attackManagement.connectionsSummaryItem.crossconnect.background
        }
      },
      {
        props: { variant: "connection" },
        style: {
          width: "16px",
          height: "16px",
          "&.UP": {
            color: options[mode].attackManagement.connectionsSummaryItem.up.color,
            background: options[mode].attackManagement.connectionsSummaryItem.up.background
          },
          "&.DOWN": {
            color: options[mode].attackManagement.connectionsSummaryItem.down.color,
            background: options[mode].attackManagement.connectionsSummaryItem.down.background
          },
          "&.UNKNOWN": {
            color: options[mode].attackManagement.connectionsSummaryItem.unknown.color,
            background: options[mode].attackManagement.connectionsSummaryItem.unknown.background
          }
        }
      },
      {
        props: { color: "SECURITY-ANALYSIS-SUMMARY" },
        style: {
          color: options[mode].securityAnalysis.summary.color,
          background: options[mode].securityAnalysis.summary.background
        }
      },
      {
        props: { size: "SUMMARY-CLAIMED_INCIDENTS" },
        style: {
          svg: {
            width: "26px",
            height: "23px"
          }
        }
      },
      {
        props: { size: "SUMMARY-HACKERS_GROUP" },
        style: {
          svg: {
            width: "26px",
            height: "30px"
          }
        }
      },
      {
        props: { size: "SUMMARY-CLAIMED_DOMAINS" },
        style: {
          svg: {
            width: "26px",
            height: "26px"
          }
        }
      },
      {
        props: { colors: "athensGrey" },
        style: {
          color: options[mode].athensGrey.color,
          background: options[mode].athensGrey.backgroundColor
        }
      },
      {
        props: { color: "deepCerulean" },
        style: {
          color: options[mode].deepCerulean.color,
          background: options[mode].deepCerulean.backgroundColor
        }
      }
    ]
  };
};

export default MuiAvatar;
