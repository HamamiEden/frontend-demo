const options = {
  light: {
    root: {
      backgroundColor: "#DFE2E6",
      color: "#264769"
    },
    accountBadgeActive: {
      backgroundColor: "#0D9488"
    },
    accountBadgePoc: {
      backgroundColor: "#DF8808"
    },
    accountBadgeDemo: {
      backgroundColor: "#6B6F85"
    },
    filtersBadge: {
      color: "white",
      backgroundColor: "#0E0ADA"
    },
    green: "#156C42",
    red: "#B5153A",
    shark: "#FFFFFF"
  },
  dark: {
    root: {
      backgroundColor: "#4F5154",
      color: "#D4D6DB"
    },
    accountBadgeActive: {
      backgroundColor: "#24BE74"
    },
    accountBadgePoc: {
      backgroundColor: "#F09510"
    },
    accountBadgeDemo: {
      backgroundColor: "#D4D6DB"
    },
    filtersBadge: {
      color: "#414346",
      backgroundColor: "#6DCFFC"
    },
    green: "#31D887",
    red: "#FE3363",
    shark: "#1A1C1E"
  }
};

const MuiBadge = mode => {
  return {
    variants: [
      {
        props: { variant: "accordionBadge" },
        style: {
          backgroundColor: options[mode].root.backgroundColor,
          borderRadius: "20px",
          padding: "3px 10px",
          minWidth: "34px",
          height: "16px",
          left: "10px",
          // bottom: "2px",
          "& .MuiBadge-badge": {
            color: options[mode].root.color,
            minWidth: "unset",
            padding: "unset",
            top: "50%",
            right: "50%",
            transform: "translate(50%,-50%)",
            height: "unset"
          }
        }
      },
      {
        props: { variant: "filtersBadge" },
        style: {
          "& .MuiBadge-badge": {
            ...options[mode].filtersBadge
          }
        }
      },
      {
        props: { variant: "accountBadge" },
        style: {
          "& .MuiBadge-badge": {
            height: 8,
            minWidth: 8
          }
        }
      },
      {
        props: { status: "ACTIVE" },
        style: {
          "& .MuiBadge-badge": {
            backgroundColor: options[mode].accountBadgeActive.backgroundColor
          }
        }
      },
      {
        props: { status: "POC" },
        style: {
          "& .MuiBadge-badge": {
            backgroundColor: options[mode].accountBadgePoc.backgroundColor
          }
        }
      },
      {
        props: { status: "DEMO" },
        style: {
          "& .MuiBadge-badge": {
            backgroundColor: options[mode].accountBadgeDemo.backgroundColor
          }
        }
      },
      {
        props: { size: "xs" },
        style: {
          "& .MuiBadge-badge": {
            width: "4px",
            minWidth: "4px",
            height: "4px"
          }
        }
      },
      {
        props: { color: "green" },
        style: {
          "& .MuiBadge-badge": {
            backgroundColor: options[mode].green,
            border: `2px solid ${options[mode].shark}`
          }
        }
      },
      {
        props: { color: "red" },
        style: {
          "& .MuiBadge-badge": {
            backgroundColor: options[mode].red,
            border: `2px solid ${options[mode].shark}`
          }
        }
      }
    ]
  };
};

export default MuiBadge;
