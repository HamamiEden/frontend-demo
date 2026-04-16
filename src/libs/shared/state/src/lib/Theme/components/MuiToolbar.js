const MuiToolbar = mode => {
  return {
    variants: [
      {
        props: { variant: "navbarToolbar" },
        style: {
          "@media all": {
            paddingLeft: 20,
            paddingRight: 36,
            minHeight: 50,
            "& .MuiGrid-root.search": {
              marginRight: 19
            }
          },
          "& a.logoIcon": {
            marginLeft: "1.5px",
            display: "flex"
          }
        }
      }
    ]
  };
};

export default MuiToolbar;
