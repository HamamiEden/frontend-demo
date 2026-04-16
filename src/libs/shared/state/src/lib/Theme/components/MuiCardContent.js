const options = {
  light: {
    scrollbar: {
      bg: "#fff"
    },
    preview: {
      background: "#fafafa"
    }
  },
  dark: {
    scrollbar: {
      bg: "#1A1C1E"
    },
    preview: {
      background: "#242627"
    }
  }
};

const MuiCardContent = mode => {
  return {
    styleOverrides: {
      root: {
        overflowY: "auto",
        height: "100%",
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          //backgroundColor: options[mode].scrollbar.bg,
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderColor: options[mode].scrollbar.bg
        },
        "&.MuiCardContent-root": {
          "&:last-child": {
            paddingBottom: "0"
          }
        }
      }
    },
    variants: [
      {
        props: { variant: "overviewCardContent" },
        style: {
          padding: "20px",
          paddingBottom: "16px",
          paddingTop: "13px",
          "&.MuiCardContent-root": {
            "&:last-child": {
              paddingBottom: "16px"
            }
          }
        }
      },
      {
        props: { variant: "preview" },
        style: {
          background: options[mode].preview.background
        }
      },
      {
        props: { variant: "overviewContent" },
        style: {
          padding: "12px",
          "&.MuiCardContent-root": {
            "&:last-child": {
              paddingBottom: "12px"
            }
          },

          "&.header": {
            height: "60px"
          },

          "&.panelContent": {
            padding: 0,
            "&.MuiCardContent-root": {
              "&:last-child": {
                paddingBottom: 0
              }
            }
          },

          "&.filtersBar": {
            padding: "10px",
            "&.MuiCardContent-root": {
              "&:last-child": {
                paddingBottom: "10px"
              }
            }
          }
        }
      }
    ]
  };
};

export default MuiCardContent;
