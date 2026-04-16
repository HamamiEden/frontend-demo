const options = {
  light: {
    infoAlert: {
      color: "#0E0ADA"
    },
    warning: {
      color: "#B5153A"
    },
    explore: {
      color: "#0E0ADA"
    },
    magneta: "#B5153A",
    secondaryWarning: "#BF360C"
  },
  dark: {
    infoAlert: {
      color: "#6DCFFC"
    },
    warning: {
      color: "#B5153A"
    },
    explore: {
      color: "#6DCFFC"
    },
    magneta: "#FE3363",
    secondaryWarning: "#FFB549"
  }
};

const MuiLink = mode => {
  return {
    variants: [
      {
        props: { variant: "infoAlert" },
        style: {
          color: options[mode].infoAlert.color,
          textDecoration: "underline",
          paddingLeft: "10px",
          paddingRight: "10px",
          cursor: "pointer",
          fontWeight: 500
        }
      },
      {
        props: { variant: "warning" },
        style: {
          color: options[mode].warning.color,
          textDecoration: "underline",
          paddingLeft: "10px",
          paddingRight: "10px",
          cursor: "pointer",
          fontWeight: 500
        }
      },
      {
        props: { variants: "explore" },
        style: {
          color: options[mode].explore.color,
          fontSize: "11px",
          fontWeight: 400
        }
      },
      {
        props: { colors: "magneta" },
        style: {
          color: options[mode].magneta
        }
      },
      {
        props: { colors: "secondaryWarning" },
        style: {
          color: options[mode].secondaryWarning
        }
      }
    ]
  };
};

export default MuiLink;
