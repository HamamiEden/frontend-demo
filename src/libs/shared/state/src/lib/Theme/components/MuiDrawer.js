const options = {
  light: {
    paper: {
      boxShadow: "-4px 2px 8px rgba(126, 126, 126, 0.5)",
      background: "#fff"
    },
    backdrop: {
      backgroundColor: "#C4C4C4CC"
    },
    drawer: {
      boxShadow: "4px 4px 5px 5px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      backdrop: {
        backgroundColor: "transparent"
      }
    }
  },
  dark: {
    paper: {
      boxShadow: "-4px 2px 8px rgba(52, 47, 47, 0.5)",
      background: "#1A1C1E"
    },
    backdrop: {
      backgroundColor: "#494646E5"
    },
    drawer: {
      boxShadow: "0px 0px 30px 2px rgba(212, 214, 219, 0.3)",
      backgroundColor: "#080809",
      backdrop: {
        backgroundColor: "transparent"
      }
    }
  }
};

const MuiDrawer = mode => {
  return {
    variants: [
      {
        props: { type: "default" },
        style: {
          position: "relative",
          "& .MuiDrawer-paper": {
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            boxShadow: options[mode].drawer.boxShadow,
            backgroundColor: options[mode].drawer.backgroundColor,
            backgroundImage: "unset"
          }
        }
      },
      {
        props: { type: "main" },
        style: {
          "& .MuiBackdrop-root": {
            backgroundColor: options[mode].backdrop.backgroundColor
          },
          "& .MuiDrawer-paper": {
            background: options[mode].paper.background,
            boxShadow: options[mode].paper.boxShadow,
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            width: "587px",
            maxWidth: "587px"
          }
        }
      },
      {
        props: { type: "drawer" },
        style: {
          position: "relative",
          "& .MuiBackdrop-root": {
            backgroundColor: options[mode].drawer.backdrop.backgroundColor
          },
          "& .MuiDrawer-paper": {
            width: "600px",
            padding: "20px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            boxShadow: options[mode].drawer.boxShadow,
            backgroundColor: options[mode].drawer.backgroundColor,
            backgroundImage: "unset",

            "& .contentContainer": {
              marginRight: "-15px",
              paddingRight: "10px"
            },
            "& .infiniteListContainer": {
              marginRight: "-15px"
            },
            "& .infiniteList": {
              paddingRight: "10px"
            },
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "5px"
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              border: "none"
            }
          }
        }
      }
    ]
  };
};

export default MuiDrawer;
