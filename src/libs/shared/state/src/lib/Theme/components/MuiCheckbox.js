const options = {
  light: {
    default: {
      color: "#949AA5",
      hover: {
        color: "#5B626E",
        fill: "#F5F6F8"
      }
    },
    indeterminate: {
      color: "#015ECB"
    },
    checked: {
      color: "#015ECB",
      hover: {
        color: "#0040AD"
      }
    },
    disabled: {
      color: "#E1E3E6"
    }
  },
  dark: {
    default: {
      color: "#949AA5",
      hover: {
        color: "#BFC2C9",
        fill: "#2E3137"
      }
    },
    indeterminate: {
      color: "#6DCFFC"
    },
    checked: {
      color: "#6DCFFC",
      hover: {
        color: "#83D6FC"
      }
    },
    disabled: {
      color: "#4C515B"
    }
  }
};

const MuiCheckbox = mode => {
  return {
    styleOverrides: {
      root: {
        color: options[mode].default.color,
        "&.MuiButtonBase-root.MuiCheckbox-root": {
          "&:hover, &:focus": {
            backgroundColor: "transparent"
          }
        },
        "&:not(.Mui-checked, .MuiCheckbox-indeterminate)": {
          "& .MuiSvgIcon-root": {
            "& path": {
              d: 'path("m8,4.5l8,0s3.5,0 3.5,3.5l0,8s0,3.5 -3.5,3.5l-8,0s-3.5,0 -3.5,-3.5l0,-8s0,-3.5 3.5,-3.5")',
              fill: "none",
              stroke: "currentcolor"
            }
          },
          "&:hover": {
            color: options[mode].default.hover.color,
            "& .MuiSvgIcon-root": {
              "& path": {
                fill: options[mode].default.hover.fill
              }
            }
          }
        },
        "&.Mui-checked": {
          "&.Mui-disabled .MuiSvgIcon-root path": {
            color: options[mode].disabled.color
          },
          "& .MuiSvgIcon-root": {
            "& path": {
              d: 'path("m8,3.99999c-2.20914,0 -4,1.79086 -4,4l0,8.00002c0,2.2091 1.79086,4 4,4l8,0c2.2091,0 4,-1.7909 4,-4l0,-8.00002c0,-2.20914 -1.7909,-4 -4,-4l-8,0zm0.09412,8.24633l2.46594,2.50999c0.04656,0.0483 0.10234,0.0868 0.16406,0.1131c0.06173,0.0262 0.12822,0.0398 0.19531,0.0399c0.06709,0.0001 0.1334,-0.0133 0.19519,-0.0395c0.0618,-0.0261 0.11774,-0.0643 0.16443,-0.1125l4.47495,-4.55603c0.0607,-0.06219 0.0946,-0.14555 0.0946,-0.23242c0,-0.08687 -0.0339,-0.17035 -0.0946,-0.23255l-0.6279,-0.64001c-0.0296,-0.03048 -0.0651,-0.05462 -0.1042,-0.07117c-0.0392,-0.01654 -0.0813,-0.02514 -0.1238,-0.02514c-0.0425,0 -0.0846,0.0086 -0.1238,0.02514c-0.0392,0.01655 -0.0746,0.04069 -0.1043,0.07117l-3.74996,3.81909l-1.74096,-1.77307c-0.02973,-0.03051 -0.06525,-0.05473 -0.1045,-0.07129c-0.03924,-0.01656 -0.08142,-0.02514 -0.12402,-0.02514c-0.04259,0 -0.08478,0.00858 -0.12402,0.02514c-0.03925,0.01656 -0.07477,0.04078 -0.10449,0.07129l-0.62793,0.64002c-0.06036,0.06214 -0.09412,0.14542 -0.09412,0.23205c0,0.08663 0.03376,0.16979 0.09412,0.23193z")',
              fillRule: "evenodd",
              color: options[mode].checked.color,
              clipRule: "evenodd",
              fill: "currentColor",
              stroke: "none"
            }
          },
          "&:hover": {
            "& .MuiSvgIcon-root": {
              "& path": {
                color: options[mode].checked.hover.color
              }
            }
          }
        },
        "&.MuiCheckbox-indeterminate": {
          "&.Mui-disabled .MuiSvgIcon-root path": {
            color: options[mode].disabled.color
          },
          "& .MuiSvgIcon-root": {
            "& path": {
              d: 'path("m8,3.99999c-2.20914,0 -4,1.79086 -4,4l0,8.00002c0,2.2091 1.79086,4 4,4l8,0c2.2091,0 4,-1.7909 4,-4l0,-8.00002c0,-2.20914 -1.7909,-4 -4,-4l-8,0zm0.40002,7.25c-0.41421,0 -0.75,0.33578 -0.75,0.75c0,0.41421 0.33579,0.75 0.75,0.75l7.19998,0c0.4142,0 0.75,-0.33579 0.75,-0.75c0,-0.41422 -0.3358,-0.75 -0.75,-0.75l-7.19998,0z")',
              fillRule: "evenodd",
              color: options[mode].indeterminate.color,
              clipRule: "evenodd",
              fill: "currentColor",
              stroke: "none"
            }
          },
          "&:hover": {
            color: options[mode].checked.hover.color
          }
        },
        "&.Mui-disabled": {
          color: options[mode].disabled.color
        }
      }
    },
    variants: [
      {
        props: { variant: "checkboxList" },
        style: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    ]
  };
};

export default MuiCheckbox;
