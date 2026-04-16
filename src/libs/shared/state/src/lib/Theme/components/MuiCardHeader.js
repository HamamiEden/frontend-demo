const options = {
  light: {
    athensGray: "#FBFBFC",
    geyser: "#CBD4DB",
    brightGray: "#eaeef1"
  },
  dark: {
    athensGray: "#17181A",
    geyser: "#484A4D",
    brightGray: "#28282A"
  }
};
const MuiCardHeader = mode => {
  return {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        boxShadow: "none"
      }
    },
    variants: [
      {
        props: { variant: "tabCardHeader" },
        style: {
          height: "70px",
          paddingRight: "10px",
          "&.disabled": {
            background: options[mode].athensGray
          },
          "&.expandable-hover:hover": {
            cursor: "pointer",
            "& .expandIcon": {
              backgroundColor: options[mode].geyser
            }
          },
          "&.expandable-hover:not(.expanded):hover": {
            background: options[mode].brightGray
          }
        }
      }
    ]
  };
};

export default MuiCardHeader;
