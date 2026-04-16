const options = {
  light: {
    default: {
      root: {
        color: "#264769",
        asteriskColor: "#FF0606"
      }
    },
    disabled: {
      root: {
        color: "#264769CC"
      }
    }
  },
  dark: {
    default: {
      root: {
        color: "#D4D6DB",
        asteriskColor: "#FF0606"
      }
    },
    disabled: {
      root: {
        color: "#D4D6DBCC"
      }
    }
  }
};

const MuiInputLabel = mode => {
  return {
    styleOverrides: {
      root: {
        color: options[mode].default.root.color,
        fontSize: 12,
        lineHeight: 1,
        fontWeight: 400,
        paddingBottom: 5,
        marginLeft: 10,
        "&.Mui-disabled": {
          color: options[mode].disabled.root.color,
          fontWeight: 400
        },
        "& .MuiInputLabel-asterisk": {
          color: options[mode].default.root.asteriskColor
        }
      }
    },
    variants: [
      {
        props: { reset: "spacing" },
        style: {
          marginLeft: 0,
          paddingBottom: 0
        }
      },
      {
        props: { fontSize: "large" },
        style: {
          fontSize: "0.875rem",
          lineHeight: 1.43,
          letterSpacing: "0.01071em"
        }
      },
      {
        props: { fontWeight: 500 },
        style: {
          fontWeight: 500
        }
      }
    ]
  };
};

export default MuiInputLabel;
