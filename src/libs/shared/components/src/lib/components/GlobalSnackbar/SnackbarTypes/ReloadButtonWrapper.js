import { Grid2 as Grid, IconButton } from "@mui/material";
import Icon from "../../Icon/Icon";

const ReloadButtonWrapper = ({ message }) => {
  return (
    <Grid container sx={{ alignContent: "space-between", flexDirection: "row", gap: 1 }}>
      <Grid sx={{ flexGrow: 1 }}>{message}</Grid>
      <Grid>
        <IconButton onClick={() => window.location.reload()} aria-label="reload" title="Reload" name="reload">
          <Icon type="SyncIcon" sx={{ width: "20px", height: "20px" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ReloadButtonWrapper;
