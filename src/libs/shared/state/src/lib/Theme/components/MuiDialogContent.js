const options = {
  light: {
    title: {
      color: "#5B626E"
    },
    backdrop: {
      backgroundColor: "#C4C4C4CC"
    },
    paper: {
      backgroundColor: "#fff"
    },
    content: {
      borderColor: "#EDEEF0",
      text: {
        color: "#5B626E"
      }
    }
  },
  dark: {
    title: {
      color: "#D4D6DB"
    },
    backdrop: {
      backgroundColor: "#494646E5"
    },
    paper: {
      backgroundColor: "#212225"
    },
    content: {
      borderColor: "#DADADA4D",
      text: {
        color: "#D4D6DB"
      }
    }
  }
};

const MuiDialogContent = mode => {
  return {
    styleOverrides: {
      root: {
        borderTop: `1px solid ${options[mode].content.borderColor}`,
        borderBottom: "unset",
        padding: "28px 20px 28px 20px"
      }
    }
  };
};

export default MuiDialogContent;
