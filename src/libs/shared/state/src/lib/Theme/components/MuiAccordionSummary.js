const options = {
  light: {
    expandedIcon: {
      backgroundColor: "#CBD4DB",
      color: "#211DD9"
    },
    darkBlue: {
      color: "#0E0ADA"
    },
    hawkesBlue: {
      color: "#D9D8FD"
    },
    athensGray: {
      color: "#F2F4F6"
    },
    astronaut: {
      color: "#264769"
    },
    aluminium: {
      color: "#A9AEB7"
    },
    iron: {
      color: "#E1E3E6"
    }
  },
  dark: {
    expandedIcon: {
      backgroundColor: "#484A4D",
      color: "#ffffff80"
    },
    darkBlue: {
      color: "#6DCFFC"
    },
    hawkesBlue: {
      color: "#3D4149"
    },
    athensGray: {
      color: "#3D4149"
    },
    astronaut: {
      color: "#D4D6DB"
    },
    aluminium: {
      color: "#7E8594"
    },
    iron: {
      color: "#4C515B"
    }
  }
};

const MuiAccordionSummary = mode => {
  return {
    styleOverrides: {
      root: {
        minHeight: 58,
        "&:hover": {
          "& .accordionExpand": {
            backgroundColor: options[mode].expandedIcon.backgroundColor
          }
        },
        "& .accordionExpand": {
          color: options[mode].expandedIcon.color
        },
        "& .MuiAccordionSummary-content": {
          margin: 0
        },
        "&.Mui-disabled": {
          opacity: "1",
          "& .MuiAccordionSummary-content": {
            opacity: "0.5"
          },
          "& .accordionExpand": {
            color: options[mode].expandedIcon.disabledColor,
            opacity: "0.5"
          }
        }
      }
    },
    variants: [
      {
        props: { variant: "switchAccordion" },
        style: {
          "&.MuiAccordionSummary-root": {
            paddingRight: "20px"
          }
        }
      },
      {
        props: { colors: "astronaut" },
        style: {
          color: `${options[mode].astronaut.color}`,
          backgroundColor: `${options[mode].athensGray.color}`,
          border: "none",
          "&.Mui-expanded": {
            border: `1px solid ${options[mode].darkBlue.color}`,
            backgroundColor: `${options[mode].hawkesBlue.color}`,
            color: `${options[mode].darkBlue.color}`
          },
          "&:hover": {
            color: `${options[mode].darkBlue.color}`,
            backgroundColor: `${options[mode].hawkesBlue.color}`
          },
          "&.Mui-disabled:not(:hover)": {
            color: `${options[mode].aluminium.color}`,
            backgroundColor: `${options[mode].iron.color}`,
            outline: "none"
          }
        }
      }
    ]
  };
};

export default MuiAccordionSummary;
