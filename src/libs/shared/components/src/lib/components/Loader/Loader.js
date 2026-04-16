import { Box } from "@mui/material";

const CircularIndeterminate = ({ component = "div", height = "100%" }) => {
  return (
    <Box
      component={component}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        minHeight: "calc(100vh - 160px)", // Relevant for pages from WAF federation that are loaded initially with a short wrapper, causing the loader to be rendered at the top of the page
        height
      }}
    >
      <Box
        component="img"
        sx={{
          position: "absolute",
          width: "50px",
          height: "50px"
        }}
        src="/_assets/radware_logo_loading.svg"
        alt="favicon"
      />
    </Box>
  );
};
export default CircularIndeterminate;
