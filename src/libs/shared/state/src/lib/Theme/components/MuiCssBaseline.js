const scrollBar = {
  light: {
    track: "#F5F6F8",
    thumb: "#D3D5D9",
    background: "transparent"
  },
  dark: {
    track: "#080809",
    thumb: "#2E3137",
    background: "transparent"
  }
};

const MuiCssBaseline = (mode, options = scrollBar) => {
  return {
    styleOverrides: {
      body: {
        scrollbarWidth: "thin",
        scrollbarColor: `${options[mode].thumb} ${options[mode].background}`,
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          backgroundColor: options[mode].background,
          width: 10,
          height: 10
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: 20,
          backgroundColor: options[mode].thumb,
          minHeight: 24,
          border: `2.5px solid ${options[mode].track}`
        },
        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
          backgroundColor: options[mode].thumb
        },
        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
          backgroundColor: options[mode].thumb
        },
        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
          backgroundColor: options[mode].thumb
        }
      },
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: `${options[mode].thumb} ${options[mode].background}`
      }
    }
  };
};

export default MuiCssBaseline;
