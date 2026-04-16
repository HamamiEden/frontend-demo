const options = {
  light: {
    gray: "#BFC2C9"
  },
  dark: {
    gray: "#4C515B"
  }
};

const MuiCircularProgress = mode => {
  return {
    variants: [
      {
        props: { color: "gray" },
        style: {
          "& .MuiCircularProgress-svg": {
            color: options[mode].gray
          }
        }
      }
    ]
  };
};

export default MuiCircularProgress;
