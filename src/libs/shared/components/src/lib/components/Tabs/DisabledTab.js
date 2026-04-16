import { Box, Chip, Grid2 as Grid, Tab, Tooltip } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";

const DisabledTab = ({ tab }) => {
  const translate = useTranslations();

  return (
    <Tooltip
      arrow
      title={
        <>
          <Chip
            icon={tab.disabledByAddon && !tab.disabledByService ? <Icon type="PuzzleIcon" /> : null}
            label={tab?.disabledByService ? translate("OUT_OF_PLAN") : tab?.disabledByAddon ? translate("ADD_ON") : null}
            variant="disabledTab"
            colors="outOfPlan"
          />
          {tab?.disabledByService ? (
            tab?.disabledByAddon ? (
              <Box>
                {translate(`ACCOUNT_ADDON_${tab?.addon}`)} {translate("TAB_SERVICE_ADDON_DISABLED")}
              </Box>
            ) : (
              <Box>
                {tab.title} {translate("TAB_SERVICE_DISABLED")}
              </Box>
            )
          ) : tab?.disabledByAddon ? (
            <Box>
              {translate(`ACCOUNT_ADDON_${tab?.addon}`)} {translate("TAB_ADDON_DISABLED")}
            </Box>
          ) : null}
        </>
      }
      key={tab.id}
      value={tab.slug}
      slotProps={{
        tooltip: {
          sx: {
            width: "240px",
            maxWidth: "240px",
            padding: "10px",
            bgcolor: "tooltip.outOfPlan.backgroundColor",
            color: "tooltip.outOfPlan.color"
          }
        },
        arrow: {
          sx: {
            color: "tooltip.outOfPlan.arrow.color"
          }
        }
      }}
    >
      <Box>
        <Tab
          key={tab.id}
          wrapped
          variant={tab.chip && "beta"}
          label={
            tab.chip ? (
              <Grid container columnSpacing="10px" sx={{ alignItems: "center" }}>
                <Grid>{tab.title}</Grid>
                <Grid>
                  <Chip label={tab.chip} variant="beta" colors="beta" />
                </Grid>
              </Grid>
            ) : (
              tab.title
            )
          }
          margins="noMargin"
          disableRipple
          disabled
        />
      </Box>
    </Tooltip>
  );
};

export default DisabledTab;
