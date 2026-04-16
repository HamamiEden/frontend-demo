const options = {
  light: {
    root: {
      hover: {
        backgroundColor: "#F7F8F9"
      },
      selected: {
        backgroundColor: "#F4F7FB",
        hover: {
          backgroundColor: "#F4F7FB"
        }
      }
    },
    actions: {
      default: {
        highlight: {
          backgroundColor: "#CBD4DB",
          color: "#264769"
        }
      }
    },
    system: {
      backgroundColor: "#F9F8FF"
    },
    pendingApply: {
      backgroundColor: "rgba(255, 251, 245, 1)"
    },
    freeTrial: {
      selected: {
        backgroundColor: "#F4F7FB"
      }
    },
    dnsRecords: {
      highlight: {
        backgroundColor: "#F4F7FB"
      }
    },
    managedCertificates: {
      highlight: {
        backgroundColor: "#FFFBF5"
      }
    },
    indication: {
      error: "rgba(255, 43, 68, 0.05)"
    }
  },
  dark: {
    root: {
      hover: {
        backgroundColor: "#28282A"
      },
      selected: {
        backgroundColor: "#000000",
        hover: {
          backgroundColor: "#000000"
        }
      }
    },
    actions: {
      default: {
        highlight: {
          backgroundColor: "#484A4D",
          color: "#D4D6DB"
        }
      }
    },
    system: {
      backgroundColor: "rgba(160, 144, 255, 0.10)"
    },
    pendingApply: {
      backgroundColor: "rgba(47, 37, 20, 1)"
    },
    freeTrial: {
      selected: {
        backgroundColor: "#2C2D31"
      }
    },
    dnsRecords: {
      highlight: {
        backgroundColor: "#2C2D31"
      }
    },
    managedCertificates: {
      highlight: {
        backgroundColor: "#2B2112"
      }
    },
    indication: {
      error: "#571921"
    }
  }
};

const MuiTableRow = mode => {
  return {
    styleOverrides: {
      root: {
        height: "50px",
        "&.MuiTableRow-head": {
          height: "50px"
        },
        "&.MuiTableRow-hover:hover": {
          backgroundColor: options[mode].root.hover.backgroundColor,
          "&:not(:has(:is(.default-highlight, .stop-default-highlight):hover)) .default-highlight:not(.Mui-disabled)": {
            backgroundColor: options[mode].actions.default.highlight.backgroundColor,
            color: options[mode].actions.default.highlight.color
          },
          "& .hidden": {
            visibility: "visible"
          }
        },
        "&.Mui-selected": {
          backgroundColor: options[mode].root.selected.backgroundColor
        },
        "&.Mui-selected:hover": {
          backgroundColor: options[mode].root.selected.hover.backgroundColor
        },
        "&.row-notifications-system-true, &.row-reports-system-true, &.row-templates-blockData_defaultTemplate-true": {
          "&:not(.Mui-selected)": {
            backgroundColor: options[mode].system.backgroundColor
          }
        },
        "&.row-securityPolicies-securityPolicyStatus-pendingApply, &.row-templates-blockData_status-PENDING,  &.row-templates-blockData_status-PROVISIONING":
          {
            "&:not(.Mui-selected)": {
              backgroundColor: options[mode].pendingApply.backgroundColor
            }
          },
        "&.row-dnsRecords-systemGenerated-true": {
          "&:not(.Mui-selected)": {
            backgroundColor: options[mode].dnsRecords.highlight.backgroundColor
          }
        },
        "&.row-managedCertificates-status-PENDING, &.row-managedCertificates-status-PENDING_IN_PROGRESS": {
          "&:not(.Mui-selected)": {
            backgroundColor: options[mode].managedCertificates.highlight.backgroundColor
          }
        },
        "&.row-attack-analysis-protocol-traffic-timePeriod-Attack_Time, &.row-attack-analysis-protocol-traffic-timePeriod-Attack_time, &.row-attack-analysis-source-addresses-timePeriod-Attack_time, &.row-attack-analysis-source-addresses-timePeriod-Attack_Time, &.row-attack-analysis-target-addresses-timePeriod-Attack_time, &.row-attack-analysis-target-addresses-timePeriod-Attack_Time, &.row-attack-analysis-destination-port-timePeriod-Attack_Time, &.row-attack-analysis-destination-port-timePeriod-Attack_time, &.row-attack-analysis-source-port-timePeriod-Attack_Time, &.row-attack-analysis-source-port-timePeriod-Attack_time, &.row-attack-analysis-tcp-timePeriod-Attack_Time, &.row-attack-analysis-tcp-timePeriod-Attack_time":
          {
            "&:not(.Mui-selected)": {
              backgroundColor: options[mode].indication.error
            }
          },
        "&.row": {
          "&-wafPathAccessRules, &-wafSqlInjectionRules, &-wafSignatureBasedProtectionRules": {
            "&-isDeleted-true .MuiTableCell-root:not(.actionCell) > *": {
              opacity: 0.5
            }
          }
        }
      }
    },
    variants: [
      {
        props: { selected_row: "select" },
        style: {
          backgroundColor: options[mode].freeTrial.selected.backgroundColor
        }
      }
    ]
  };
};

export default MuiTableRow;
