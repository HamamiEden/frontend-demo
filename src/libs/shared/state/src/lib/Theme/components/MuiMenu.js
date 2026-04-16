const options = {
  light: {
    boxShadow: "0px 0px 5px 0px #BFC2C9",
    border: "1px solid #C0CDDF",
    bgColor: "#fff",

    secondary: {
      boxShadow: "2px 2px 8px 0px #00000040",
      bgColor: "#fff"
    }
  },
  dark: {
    boxShadow: "0px 0px 5px 0px #00000040",
    border: "1px solid #E9F1F34D",
    bgColor: "#1a1c1e",

    secondary: {
      boxShadow: "2px 2px 8px 0px #55555559",
      bgColor: "#1A1C1E"
    }
  }
};

const MuiMenu = mode => {
  return {
    variants: [
      {
        props: { variant: "menu" },
        style: {
          "& .MuiMenu-paper": {
            borderRadius: 12,
            boxShadow: options[mode].boxShadow,
            border: options[mode].border,
            marginTop: "10px"
          },
          "& .MuiMenu-list": {
            padding: 0
          }
        }
      },
      {
        props: { type: "quickFilter" },
        style: {
          "& .MuiPaper-root.MuiMenu-paper.MuiPaper-root.MuiPopover-paper": {
            boxShadow: options[mode].boxShadow,
            border: options[mode].border,
            borderRadius: "6px",
            padding: "15px",
            marginTop: "5px",
            backgroundImage: "none",
            backgroundColor: options[mode].bgColor
          },
          "& .MuiMenu-list": {
            p: 0
          }
        }
      },
      {
        props: { type: "selectMenu" },
        style: {
          "& .MuiMenu-paper": {
            borderRadius: 8,
            boxShadow: options[mode].boxShadow
          },
          "& .MuiMenu-list": {
            padding: 0
          }
        }
      },
      {
        props: { type: "secondaryMenu" },
        style: {
          "& .MuiMenu-paper": {
            borderRadius: "20px",
            backgroundImage: "none",
            boxShadow: options[mode].secondary.boxShadow,
            backgroundColor: options[mode].secondary.bgColor
          },
          "& .MuiMenu-list": {
            padding: 0
          }
        }
      },
      {
        props: { variants: "searchListFilter" },
        style: {
          "& .MuiMenu-paper": {
            marginTop: "7px"
          },

          "& .MuiMenu-list": {
            padding: "20px"
          }
        }
      }
    ]
  };
};

export default MuiMenu;
