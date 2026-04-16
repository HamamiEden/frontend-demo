const options = {
  light: {
    entitySelect: {
      color: "#211DD9",
      hover: {
        icon: {
          boxShadow: "0px 0px 3.5px 1px #353BD259, inset 0px 0px 1px 1px #353BD259"
        }
      }
    }
  },
  dark: {
    entitySelect: {
      color: "#6DCFFC",
      hover: {
        icon: {
          boxShadow: "0px 0px 3.5px 1px #D3F5FF59, inset 0px 0px 1px 1px #D3F5FF59"
        }
      }
    }
  }
};

const MuiListItemIcon = mode => {
  return {
    variants: [
      {
        props: { variant: "menu" },
        style: {
          "&.MuiListItemIcon-root": {
            paddingLeft: 6
          }
        }
      },
      {
        props: { variant: "entitySelectIcon" },
        style: {
          color: options[mode].entitySelect.color,
          minWidth: "24px",
          "&.hover": {
            svg: {
              boxShadow: options[mode].entitySelect.hover.icon.boxShadow,
              borderRadius: "50%"
            }
          }
        }
      }
    ]
  };
};

export default MuiListItemIcon;
