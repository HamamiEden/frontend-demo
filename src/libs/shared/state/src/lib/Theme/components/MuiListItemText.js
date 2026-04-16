const options = {
  light: {
    groupedAssets: {
      color: "rgba(0, 0, 0, 0.5)"
    },
    parentAccountPrimary: {
      color: "#264769"
    },
    parentAccountSecondary: {
      color: "#5B626E"
    },
    entitySelectItemText: {
      color: "#5B626E"
    }
  },
  dark: {
    groupedAssets: {
      color: "rgba(255, 255, 255, 0.5)"
    },
    parentAccountPrimary: {
      color: "#D4D6DB"
    },
    parentAccountSecondary: {
      color: "#D4D6DB"
    },
    entitySelectItemText: {
      color: "#D4D6DB"
    }
  }
};

const MuiListItemText = mode => {
  return {
    variants: [
      {
        props: { variant: "groupedAssets" },
        style: {
          color: options[mode].groupedAssets.color,
          marginBottom: 0,
          marginTop: 0
        }
      },
      {
        props: { variant: "parentAccount" },
        style: {
          "&.MuiListItemText-root .MuiListItemText-primary": {
            fontSize: "12px",
            color: options[mode].parentAccountPrimary.color,
            fontWeight: 400
          },
          "&.MuiListItemText-root .MuiListItemText-secondary": {
            fontSize: "12px",
            color: options[mode].parentAccountSecondary.color,
            fontWeight: 400,
            margin: 0
          }
        }
      },
      {
        props: { variant: "entitySelectItemText" },
        style: {
          "& .MuiListItemText-primary": {
            fontSize: "12px",
            lineHeight: "18px",
            color: options[mode].entitySelectItemText.color
          },
          "&.MuiListItemText-inset": {
            paddingLeft: "24px"
          }
        }
      }
    ]
  };
};

export default MuiListItemText;
