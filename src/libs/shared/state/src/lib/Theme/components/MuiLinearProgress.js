const theme = {
  light: {
    "MuiLinearProgress-bar": { backgroundColor: "#6880FF" },
    backgroundColor: "#E5E8EB",
    darkBlue: "#0E0ADA",
    scienceBlue: "#015ECB"
  },
  dark: {
    backgroundColor: "#5D5E5F",
    "MuiLinearProgress-bar": { backgroundColor: "#6880FF" },
    darkBlue: "#6DCFFC",
    scienceBlue: "#6DCFFC"
  }
};

const MuiLinearProgress = mode => {
  return {
    variants: [
      {
        props: { variant: "determinate" },
        style: {
          flexGrow: 1,
          height: "4px",
          "&.MuiLinearProgress-root": {
            backgroundColor: theme[mode].backgroundColor,
            borderRadius: "27px",
            ".MuiLinearProgress-bar": theme[mode]["MuiLinearProgress-bar"]
          }
        }
      },
      {
        props: { colors: "darkBlue" },
        style: {
          "&.MuiLinearProgress-root .MuiLinearProgress-bar": {
            backgroundColor: theme[mode].darkBlue
          }
        }
      },
      {
        props: { colors: "scienceBlue" },
        style: {
          "&.MuiLinearProgress-root .MuiLinearProgress-bar": {
            backgroundColor: theme[mode].scienceBlue
          }
        }
      }
    ]
  };
};

export default MuiLinearProgress;
