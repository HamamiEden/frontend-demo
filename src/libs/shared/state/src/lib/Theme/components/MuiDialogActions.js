const MuiDialogActions = mode => {
  return {
    styleOverrides: {
      root: {
        padding: "0 20px 16px 20px",
        gap: 10,
        "&>:not(:first-of-type)": {
          marginLeft: 0
        }
      }
    }
  };
};

export default MuiDialogActions;
