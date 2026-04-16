const styles = {
  button: {
    position: "absolute",
    right: "7px",
    "&.open": {
      transform: "rotateX(180deg)"
    }
  },
  outlinedInput: {
    width: 185,
    "&.MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-input": {
      fontSize: "12px",
      fontWeight: 400
    }
  },
  menuItem: {
    "&.Mui-disabled": {
      padding: 0,
      "& .MuiBox-root": {
        width: "100%",
        padding: "6px 16px"
      }
    }
  }
};
export default styles;
