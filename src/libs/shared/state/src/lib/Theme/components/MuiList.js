const options = {
  light: {
    groupedAssets: {
      background: "rgba(243, 242, 242, 0.5)"
    },
    entitySelect: {
      background: "#FFFFFF",
      borderColor: "#C0CDDF",
      noData: {
        background: "#F8F8F8"
      }
    },
    paleSky: "#5B626E",
    iron: {
      color: "#DBDEE1"
    },
    tabs: {
      background: "#F6F6F6"
    }
  },
  dark: {
    groupedAssets: {
      background: "#353739"
    },
    entitySelect: {
      background: "#212225",
      borderColor: "#D4D6DB80",
      noData: {
        background: "#191B1E"
      }
    },
    paleSky: "#D4D6DB",
    iron: {
      color: "#D4D6DB"
    },
    tabs: {
      background: "#414346"
    }
  }
};

const MuiList = mode => {
  return {
    variants: [
      {
        props: { variant: "groupedAssets" },
        style: {
          background: options[mode].groupedAssets.background,
          borderRadius: "12px",
          maxHeight: "200px",
          minHeight: "100px",
          width: "250px",
          overflowY: "auto"
        }
      },
      {
        props: { variant: "entitySelect" },
        style: {
          background: options[mode].entitySelect.background,
          borderColor: options[mode].entitySelect.borderColor,
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: "12px",
          minHeight: "100px",
          overflowY: "auto",

          "&.noData": {
            background: options[mode].entitySelect.noData.background
          }
        }
      },
      {
        props: { variant: "groupedListItems" },
        style: {
          margin: 0,
          padding: "0px 0px 0px 30px",
          listStyleType: "disc",
          listStylePosition: "outside",
          color: options[mode].paleSky,
          "& .MuiListItem-root": { display: "list-item" }
        }
      },
      {
        props: { colors: "iron" },
        style: {
          borderLeft: `4px solid ${options[mode].iron.color}`
        }
      },
      {
        props: { colors: "tabs" },
        style: {
          backgroundColor: options[mode].tabs.background
        }
      }
    ]
  };
};

export default MuiList;
