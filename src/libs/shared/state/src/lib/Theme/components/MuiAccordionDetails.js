const MuiAccordionDetails = () => {
  return {
    styleOverrides: {
      root: {
        maxHeight: "677px",
        overflowY: "auto",
        padding: "8px 0 16px 16px"
      }
    },
    variants: [
      {
        props: { variant: "list-accordion" },
        style: {
          maxHeight: "630px",
          overflowY: "auto",
          padding: "4px 0 0 16px"
        }
      }
    ]
  };
};

export default MuiAccordionDetails;
