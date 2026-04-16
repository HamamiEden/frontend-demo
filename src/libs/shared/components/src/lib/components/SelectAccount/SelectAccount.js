import { Card, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";

const SelectAccount = ({ name }) => {
  const translate = useTranslations();

  return (
    <>
      {name && (
        <Grid sx={{ pl: 2.5 }}>
          <Typography variant="h6">{name}</Typography>
        </Grid>
      )}
      <Card variant="default" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Grid container sx={{ flexDirection: "column", gap: 5, alignItems: "center", flexGrow: 1 }}>
          <Grid>
            <Typography color="primarySubTitle3Color" sx={{ fontSize: 20, fontWeight: 700 }}>
              {translate("TO_VIEW_DATA_SELECT_AN_ACCOUNT")}
            </Typography>
          </Grid>
          <Grid>
            <Icon type="UserSelectAccountIcon" />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SelectAccount;
