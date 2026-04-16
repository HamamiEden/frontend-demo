const MuiToggleButtonGroup = mode => {
  return {
    variants: [
      {
        props: { variant: "tabs" },
        style: {
          "& .MuiToggleButtonGroup-grouped": {
            marginLeft: 5,
            marginRight: 5,
            border: 0,
            "&.Mui-disabled": {
              border: 0
            },
            "&:not(:first-of-type)": {
              borderRadius: 4
            },
            "&:first-of-type": {
              marginLeft: 0,
              borderRadius: 4
            }
          }
        }
      },
      {
        props: { variant: "contained-tabs" },
        style: {
          "& .MuiToggleButtonGroup-grouped": {
            marginLeft: 5,
            marginRight: 5,
            border: 0,
            "&.Mui-disabled": {
              border: 0
            },
            "&:not(:first-of-type)": {
              marginLeft: 5,
              borderLeft: "none",
              borderRadius: 8
            },
            "&:first-of-type": {
              marginLeft: 0,
              borderRadius: 8
            }
          }
        }
      }
    ]
  };
};

export default MuiToggleButtonGroup;
