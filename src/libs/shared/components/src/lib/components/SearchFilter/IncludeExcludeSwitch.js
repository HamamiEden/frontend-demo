import { Grid2 as Grid, Typography } from "@mui/material";

const commonStyles = {
  fontSize: "12px",
  borderRadius: "20px",
  padding: "6px 17px",
  flex: 1,
  textAlign: "center",
  zIndex: 1
};

const IncludeExcludeSwitch = ({ exclude, onChange }) => {
  return (
    <Grid
      container
      wrap="nowrap"
      onClick={onChange}
      bg_color="excludeFilterBackground"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "fit-content",
        borderRadius: commonStyles.borderRadius,
        cursor: "pointer",
        borderWidth: "1px",
        borderStyle: "solid",
        position: "relative"
      }}
    >
      <Typography
        variant="body2"
        colors={!exclude ? "FILTER_INCLUDE_CHECKED" : ""}
        sx={{
          ...commonStyles,
          fontWeight: !exclude ? "bold" : "normal"
        }}
      >
        Include
      </Typography>
      <Typography
        variant="body2"
        colors={exclude ? "FILTER_EXCLUDE_CHECKED" : ""}
        sx={{
          ...commonStyles,
          fontWeight: exclude ? "bold" : "normal"
        }}
      >
        Exclude
      </Typography>
    </Grid>
  );
};

export default IncludeExcludeSwitch;
