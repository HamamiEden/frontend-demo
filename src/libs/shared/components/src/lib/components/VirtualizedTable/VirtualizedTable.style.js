export const getTableWrapperStyle = tableHeight => ({
  minHeight: tableHeight,
  height: "100%",

  "& .flexContainer": {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  "& .tableRow": {
    cursor: "pointer"
  },
  "& .tableRowHover": {
    "&:hover": {
      backgroundColor: "#0000000a"
    }
  }
});
