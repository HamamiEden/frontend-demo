const colorOptions = {
  light: {
    primary: { color: "#EDEEF0" }, // #E5E5E580
    darkBlue: { color: "#0E0ADA" },
    certificate: {
      color: "#EDF2F6"
    },
    accountOverview: {
      color: "#E9F1F3"
    },
    fwaasDashboard: {
      color: "#E5E5E580"
    }
  },
  dark: {
    primary: { color: "#5B626E" }, //#D4D6DB4D
    darkBlue: { color: "#6DCFFC" },
    certificate: {
      color: "rgba(237, 242, 246, 0.3)" // #EDF2F6 30%
    },
    accountOverview: {
      color: "rgba(233, 241, 243, 0.3)"
    },
    fwaasDashboard: {
      color: "#E5E5E580"
    }
  }
};

const MuiDivider = mode => {
  return {
    variants: [
      {
        props: { variant: "certificateDivider" },
        style: {
          margin: "22px 0 16px -20px",
          width: "calc(100% + 20px + 20px)",
          borderColor: colorOptions[mode].certificate.color
        }
      },
      {
        props: { variant: "accountOverviewDivider" },
        style: {
          borderColor: colorOptions[mode].accountOverview.color
        }
      },
      {
        props: { variant: "ftiDivider" },
        style: {
          borderColor: colorOptions[mode].accountOverview.color,
          width: "100%",
          margin: "0 0 17px 0"
        }
      },
      {
        props: { variant: "fwaasDashboard" },
        style: {
          borderColor: colorOptions[mode]?.fwaasDashboard?.color
        }
      },
      {
        props: { type: "primaryDivider" },
        style: {
          borderColor: colorOptions[mode].primary.color
        }
      },
      {
        props: { colors: "darkBlue" },
        style: {
          borderColor: colorOptions[mode].darkBlue.color
        }
      }
    ]
  };
};

export default MuiDivider;
