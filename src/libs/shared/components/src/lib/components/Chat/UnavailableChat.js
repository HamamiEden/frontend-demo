import { Grid2 as Grid, Typography } from "@mui/material";
import Icon from "../Icon/Icon";

const UnavailableChat = () => {
  return (
    <Grid container direction="column" sx={{ justifyContent: "center", alignItems: "center", height: "100%", pb: "138px" }}>
      <Grid>
        <Icon type="UnavailableChatIcon" />
      </Grid>
      <Grid container sx={{ flexDirection: "column" }}>
        <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography
            component="span"
            sx={{ textAlign: "center", maxWidth: "190px", fontSize: "16px", fontWeight: 500, lineHeight: "19px" }}
          >
            Chat is not available.
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ textAlign: "center", fontSize: "16px", fontWeight: 500, lineHeight: "19px" }}>
            Please Try again later.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UnavailableChat;
