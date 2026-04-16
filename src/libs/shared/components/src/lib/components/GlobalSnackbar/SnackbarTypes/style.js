const style = {
  minWidth: "500px",
  maxWidth: "calc(90vw)",
  maxHeight: "calc(90vh)",
  overflowY: "auto",
  borderRadius: "8px",
  marginBottom: "6px",
  display: "flex",
  alignItems: "flex-start",
  padding: "8px",
  border: 0,
  "& .MuiAlert-message": {
    fontSize: "14px",
    lineHeight: "21px",
    padding: 0,
    width: "100%",
    flexGrow: 1
  },
  "& .MuiAlert-icon": {
    marginRight: "8px",
    width: "18px",
    height: "18px",
    padding: 0,
    opacity: 1
  },
  "& .MuiAlert-action": {
    marginRight: "unset",
    padding: 0,
    margin: 0,
    svg: { width: "20px", height: "20px" },
    paddingLeft: 1
  }
};

export default style;
