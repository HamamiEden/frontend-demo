import { useContext } from "react";
import { AppBar, Box, Grid2 as Grid, Toolbar, useTheme } from "@mui/material";
import { UIContext } from "@csms-consoles/shared-state";
import { useTranslations } from "@csms-consoles/shared-utils";
import ContextSelector from "../ContextSelector/ContextSelector";
import EntitiesSearch from "../EntitiesSearch/EntitiesSearch";
import UserAvatar from "./components/UserAvatar";

const Navbar = ({
  showContext,
  useSearch = false,
  FeedbackComponent,
  toggleDrawer,
  TryUnifiedComponent,
  SupportComponent,
  RecommendationsButton,
  NotificationsHistoryButton,
  AuditLogButton,
  WhatsNewButton,
  OverusageBanner,
  TrialsBanner,
  AttackIndicator,
  AiButton,
  BotAiButton,
  AgenticAiButton,
  UnifiedCopilotButton,
  UserProfileList,
  GenericMessage,
  EntitlementBanner
}) => {
  const theme = useTheme();
  const translate = useTranslations();
  const { organization } = useContext(UIContext);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "navbar.background",
        zIndex: theme => theme.zIndex.drawer - 1,
        backdropFilter: "blur(20px)"
      }}
    >
      <Toolbar
        variant="navbarToolbar"
        sx={{
          "@media all": {
            pl: 2.5,
            minHeight: theme => theme.elementHeight.header
          }
        }}
      >
        <Box className="logoIcon" component="a" href="/">
          {organization && (
            <img src={`${organization?.logo?.[theme.palette.mode]}`} alt="logo" style={{ maxWidth: "160px", maxHeight: "30px" }} />
          )}
        </Box>
        <Box sx={{ ml: 3.75 }}>
          {showContext && (
            <Grid>
              <ContextSelector />
            </Grid>
          )}
        </Box>
        {FeedbackComponent && (
          <Box sx={{ ml: 3.75 }}>
            <Grid>
              <FeedbackComponent />
            </Grid>
          </Box>
        )}
        {AttackIndicator && (
          <Box sx={{ ml: 3.75 }}>
            <Grid>{AttackIndicator}</Grid>
          </Box>
        )}
        <Box sx={{ display: "flex", flexGrow: 1 }}></Box>
        {TryUnifiedComponent && (
          <Grid>
            <TryUnifiedComponent onHoverText={translate("TRY_OUR_NEW")} />
          </Grid>
        )}
        {useSearch && (
          <Grid className="search">
            <EntitiesSearch />
          </Grid>
        )}

        <Grid container columnSpacing="15px" size="auto" sx={{ justifyContent: "right", alignItems: "center" }}>
          {TrialsBanner && <Grid>{TrialsBanner}</Grid>}
          {EntitlementBanner && <Grid>{EntitlementBanner}</Grid>}
          {OverusageBanner && <Grid>{OverusageBanner}</Grid>}
          {SupportComponent && <Grid>{SupportComponent}</Grid>}
          {GenericMessage && <Grid>{GenericMessage}</Grid>}
          {BotAiButton && <Grid>{BotAiButton}</Grid>}
          {UnifiedCopilotButton && <Grid>{UnifiedCopilotButton}</Grid>}
          {AiButton && <Grid>{AiButton}</Grid>}
          {AgenticAiButton && AgenticAiButton}
          {WhatsNewButton && <Grid>{WhatsNewButton}</Grid>}
          {RecommendationsButton && RecommendationsButton}
          {AuditLogButton && <Grid>{AuditLogButton}</Grid>}
          {NotificationsHistoryButton && <Grid>{NotificationsHistoryButton}</Grid>}
          <Grid>
            <UserAvatar toggleDrawer={toggleDrawer} UserProfileList={UserProfileList} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
