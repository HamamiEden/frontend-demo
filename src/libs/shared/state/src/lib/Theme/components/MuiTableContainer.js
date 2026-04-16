const options = {
  light: {
    scrollbar: {
      bg: "#fff"
    },
    border: {
      color: "#E0E0E0"
    }
  },
  dark: {
    scrollbar: {
      bg: "#1A1C1E"
    },
    border: {
      color: "#23232A"
    }
  }
};

const MuiTableContainer = mode => {
  return {
    styleOverrides: {
      root: {
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          backgroundColor: options[mode].scrollbar.bg
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderColor: options[mode].scrollbar.bg
        }
      }
    },
    variants: [
      {
        props: { variant: "bordered" },
        style: {
          border: "1px solid",
          borderColor: options[mode].border.color,
          borderRadius: "8px",
          maxWidth: "800px"
        }
      }
    ]
  };
};

export default MuiTableContainer;
