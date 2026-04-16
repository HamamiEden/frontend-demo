import { FormHelperText, Grid2 as Grid, IconButton, InputLabel, Tooltip } from "@mui/material";
import { Icon } from "@csms-consoles/shared-components";

const Field = ({ children, required, fieldStyles, formHelperTextStyles, errorMsg, label, tooltipProps, rowField }) => {
  return (
    <Grid sx={{ position: "relative", width: "100%", ...fieldStyles }}>
      {label && (
        <Grid container width="100%" alignItems="center" sx={{ lineHeight: 0 }}>
          <Grid>
            <InputLabel component="label" required={required}>
              {label}
            </InputLabel>
          </Grid>

          {tooltipProps && (
            <Grid sx={{ pb: "5px" }}>
              <Tooltip placement={"bottom-start"} arrow {...tooltipProps}>
                <IconButton
                  size="small"
                  hover="noBGHover"
                  iconcolor="info"
                  sx={{ width: "29px", height: "13px" }}
                  aria-label="info"
                  name="info"
                >
                  <Icon type="InfoIcon" />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      )}
      {children}
      {errorMsg && !rowField && (
        <FormHelperText error sx={{ position: "absolute", top: label ? "47px" : "30px", width: "100%", ...formHelperTextStyles }}>
          {errorMsg}
        </FormHelperText>
      )}
    </Grid>
  );
};

export default Field;
