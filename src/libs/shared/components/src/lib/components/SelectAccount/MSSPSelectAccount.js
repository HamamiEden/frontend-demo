import { Card, Grid2 as Grid, Typography } from "@mui/material";
import Icon from "../Icon/Icon";

const MSSPSelectAccount = ({ name }) => {
  return (
    <>
      {name && (
        <Grid sx={{ pl: 2.5 }}>
          <Typography variant="h6">{name}</Typography>
        </Grid>
      )}
      <Card variant="default" sx={{ height: "100%" }}>
        <Grid
          container
          sx={{ flexDirection: "column", gap: 5, alignItems: "center", height: "100%", justifyContent: "center", flexWrap: "nowrap" }}
        >
          <Grid container sx={{ gap: 2, maxWidth: "400px", textAlign: "center", justifyContent: "center" }}>
            <Grid>
              <Typography color="primarySubTitle3Color" sx={{ fontSize: 20, fontWeight: 700 }}>
                MSSP Account
              </Typography>
            </Grid>
            <Grid>
              <Typography color="primarySubTitle3Color" sx={{ fontSize: 16, fontWeight: 400, lineHeight: "24px" }}>
                No data is available for preview in the MSSP Account. Select a non-MSSP account to view the data.
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ paddingLeft: "30px" }}>
            <Icon type="UserSelectAccountIcon" />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default MSSPSelectAccount;
