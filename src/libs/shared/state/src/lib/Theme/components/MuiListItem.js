const options = {
  light: {
    borderColor: "rgba(38, 71, 105, 0.2)",
    aggregatorAccount: {
      color: "#264769"
    },
    resellerAccount: {
      color: "#264769"
    },
    customerAccount: {
      color: "#5B626E"
    },
    infoRowAvatar: {
      color: "#5B626E"
    },
    fwaasCell: {
      color: {
        bypass: {
          text: "#4C3B8E",
          avatar: "#DFCFF4"
        },
        acl: {
          text: "#AC45DC",
          avatar: "#F5DFFF"
        },
        geo: {
          text: "#19999B",
          avatar: "#C9F1F1"
        },
        connectionLimit: {
          text: "#F01C69",
          avatar: "#FCD7E5"
        },
        eaaf: {
          text: "#DB8300",
          avatar: "#FFEACA"
        },
        signatue: {
          text: "#1145F0",
          avatar: "#CDD8FC"
        },
        ddos: {
          text: "#024A74",
          avatar: "#CDF3FF"
        }
      }
    }
  },
  dark: {
    borderColor: "rgba(212, 214, 219, 0.2)",
    aggregatorAccount: {
      color: "#3B77EE"
    },
    resellerAccount: {
      color: "#3B77EE"
    },
    customerAccount: {
      color: "#D4D6DB"
    },
    infoRowAvatar: {
      color: "#D4D6DB"
    },
    fwaasCell: {
      color: {
        bypass: {
          text: "#98B0FF",
          avatar: "#273560"
        },
        acl: {
          text: "#C19FF2",
          avatar: "#43276C"
        },
        geo: {
          text: "#20C4C6",
          avatar: "#034849"
        },
        connectionLimit: {
          text: "#F88EB5",
          avatar: "#6A1B38"
        },
        eaaf: {
          text: "#DB8300",
          avatar: "#452E0B"
        },
        signatue: {
          text: "#6DCFFC",
          avatar: "#144962"
        },
        ddos: {
          text: "#BDF3FF",
          avatar: "#004374"
        }
      }
    }
  }
};

const MuiListItem = mode => {
  return {
    variants: [
      {
        props: { variant: "overviewAvatar" },
        style: {
          padding: 0,
          display: "flex",
          gap: 14,
          "& .MuiBadge-badge": {
            height: 12,
            minWidth: 12,
            padding: 0,
            right: "16%"
          },
          "& .MuiAvatar-root": {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: options[mode].borderColor,
            transition: "border .1s ease-in-out",
            width: 59,
            height: 59,
            "&:hover": {
              borderWidth: 2
            }
          },
          "& .MuiListItemText-root": {
            margin: 0,
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1,
            "& .MuiTypography-root": {
              textTransform: "capitalize",
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: 7
            }
          }
        }
      },
      {
        props: { variant: "infoRowAvatar" },
        style: {
          padding: 0,
          display: "flex",
          gap: 9,
          "& .MuiListItemText-root .MuiListItemText-primary": {
            fontSize: "12px"
          },
          "& .MuiListItemText-root .MuiListItemText-secondary": {
            fontSize: "12px",
            color: options[mode].infoRowAvatar.color
          },
          "& .MuiBadge-badge": {
            height: 12,
            minWidth: 12,
            padding: 0,
            right: "16%"
          },
          "& .MuiAvatar-root": {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: options[mode].borderColor,
            transition: "border .1s ease-in-out",
            width: 40,
            height: 40
          },
          "& .MuiListItemText-root": {
            margin: 0,
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1
          },
          "& .MuiListItemAvatar-root": {
            minWidth: 0
          }
        }
      },
      {
        props: { variant: "menu" },
        style: {
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 16,
          paddingBottom: 16
        }
      },
      {
        props: { variant: "contextSelector_ResellerAccount" },
        style: {
          "&.MuiAutocomplete-option .MuiTypography-root": {
            color: options[mode].resellerAccount.color
          },
          "& .MuiSvgIcon-root": {
            color: options[mode].resellerAccount.color,
            fontSize: "14px"
          }
        }
      },
      {
        props: { variant: "contextSelector_MASTER" },
        style: {
          "&.MuiAutocomplete-option .MuiTypography-root": {
            color: options[mode].resellerAccount.color
          },
          "& .MuiSvgIcon-root": {
            color: options[mode].resellerAccount.color,
            fontSize: "14px"
          }
        }
      },
      {
        props: { variant: "contextSelector_ISP" },
        style: {
          "&.MuiAutocomplete-option .MuiTypography-root": {
            color: options[mode].resellerAccount.color
          },
          "& .MuiSvgIcon-root": {
            color: options[mode].resellerAccount.color,
            fontSize: "14px"
          }
        }
      },
      {
        props: { variant: "contextSelector_RESELLER" },
        style: {
          "&.MuiAutocomplete-option .MuiTypography-root": {
            color: options[mode].resellerAccount.color
          },
          "& .MuiSvgIcon-root": {
            color: options[mode].resellerAccount.color,
            fontSize: "14px"
          }
        }
      },
      {
        props: { variant: "contextSelector_AggregatorAccount" },
        style: {
          "&.MuiAutocomplete-option .MuiTypography-root": {
            color: options[mode].aggregatorAccount.color
          },
          "& .MuiSvgIcon-root": {
            color: options[mode].aggregatorAccount.color,
            fontSize: "14px"
          }
        }
      },
      {
        props: { variant: "contextSelector_CustomerAccount" },
        style: {
          "&.MuiAutocomplete-option .MuiTypography-root": {
            color: options[mode].customerAccount.color
          }
        }
      },
      {
        props: { variant: "contextSelector_STANDARD" },
        style: {
          "&.MuiAutocomplete-option .MuiTypography-root": {
            color: options[mode].customerAccount.color
          }
        }
      },
      {
        props: { variant: "fwaasCell" },
        style: {
          "& .MuiListItemAvatar-root": {
            minWidth: "unset",
            "& .MuiAvatar-root": {
              width: 25,
              height: 25
            }
          },
          "& .MuiListItemText-root": {
            whiteSpace: "nowrap",
            marginLeft: 8,
            "& .MuiListItemText-primary": {
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "14px",
              "& .MuiChip-root": {
                fontWeight: 400
              }
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_BYPASS" },
        style: {
          color: options[mode].fwaasCell.color.bypass.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.bypass.avatar,
            color: options[mode].fwaasCell.color.bypass.text,
            "& svg": {
              height: 17,
              width: 17
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_ACL" },
        style: {
          color: options[mode].fwaasCell.color.acl.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.acl.avatar,
            color: options[mode].fwaasCell.color.acl.text,
            "& svg": {
              height: 19,
              width: 19
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_GEO" },
        style: {
          color: options[mode].fwaasCell.color.geo.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.geo.avatar,
            color: options[mode].fwaasCell.color.geo.text,
            "& svg": {
              height: 17,
              width: 17
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_CONNECTIONLIMIT" },
        style: {
          color: options[mode].fwaasCell.color.connectionLimit.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.connectionLimit.avatar,
            color: options[mode].fwaasCell.color.connectionLimit.text,
            "& svg": {
              height: 15,
              width: 15
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_EAAF" },
        style: {
          color: options[mode].fwaasCell.color.eaaf.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.eaaf.avatar,
            color: options[mode].fwaasCell.color.eaaf.text,
            "& svg": {
              height: 19,
              width: 19
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_SIGNATURE" },
        style: {
          color: options[mode].fwaasCell.color.signatue.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.signatue.avatar,
            color: options[mode].fwaasCell.color.signatue.text,
            "& svg": {
              height: 17,
              width: 17
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_IPS" },
        style: {
          color: options[mode].fwaasCell.color.signatue.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.signatue.avatar,
            color: options[mode].fwaasCell.color.signatue.text,
            "& svg": {
              height: 17,
              width: 17
            }
          }
        }
      },
      {
        props: { variant: "fwaasCell", type: "FWAAS_TYPE_DDOS" },
        style: {
          color: options[mode].fwaasCell.color.ddos.text,
          "& .MuiAvatar-root": {
            backgroundColor: options[mode].fwaasCell.color.ddos.avatar,
            color: options[mode].fwaasCell.color.ddos.text,
            "& svg": {
              height: 15,
              width: 15
            }
          }
        }
      }
    ]
  };
};

export default MuiListItem;
