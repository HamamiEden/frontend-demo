import { useContext, useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Drawer, Grid2 as Grid, IconButton, List, useTheme } from "@mui/material";
import { UIContext } from "@csms-consoles/shared-state";
import ItemsList from "./ItemsList/ItemsList";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const Sidebar = ({ sidebarList, expandable, toggleFeedback }) => {
  const { sideBarToggle, setSideBarToggle } = useContext(UIContext);
  const [persistent, setPersistent] = useState(sideBarToggle);
  const theme = useTheme();

  const handlePersistentToggle = () => {
    setPersistent(!persistent);
  };

  useEffect(() => {
    setTimeout(
      () => {
        setSideBarToggle(persistent);
      },
      persistent ? theme.transitions.duration.leavingScreen : theme.transitions.duration.enteringScreen
    );
  }, [persistent, setSideBarToggle, theme.transitions.duration.leavingScreen, theme.transitions.duration.enteringScreen]);

  return (
    <Drawer
      sx={[
        {
          width: theme => theme.elementWidth.sidebar,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          position: "relative",
          ...(persistent
            ? {
                width: theme => theme.elementWidth.sidebarDrawer,
                transition: theme =>
                  theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen
                  }),
                overflowX: "hidden"
              }
            : {
                width: theme => theme.elementWidth.miniSidebarDrawer,
                transition: theme =>
                  theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                  }),
                overflowX: "hidden"
              }),
          "& .MuiDrawer-paper": {
            marginTop: "50px",
            marginLeft: "10px",
            borderRight: "none",
            backgroundColor: "transparent",
            overflowY: "clip",
            ...(persistent
              ? {
                  width: theme => theme.elementWidth.sidebar,
                  transition: theme =>
                    theme.transitions.create("width", {
                      easing: theme.transitions.easing.sharp,
                      duration: theme.transitions.duration.enteringScreen
                    })
                }
              : {
                  width: theme => theme.elementWidth.miniSidebar,
                  transition: theme =>
                    theme.transitions.create("width", {
                      easing: theme.transitions.easing.sharp,
                      duration: theme.transitions.duration.leavingScreen
                    })
                })
          }
        }
      ]}
      variant="permanent"
      open={persistent}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          flexWrap: "nowrap",
          position: "relative",
          flexDirection: "column",
          bgcolor: "sidebar.backgroundColor",
          height: "calc(100% - 70px)",
          display: "flex",
          flexGrow: 1,
          mb: "90px",
          color: "sidebar.listColor",
          borderRadius: persistent ? 4.5 : 6,
          overflowX: "hidden",
          transition: theme =>
            theme.transitions.create("border-radius", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            })
        }}
      >
        {/* {isBetaPortal && (
          <Grid item sx={{ overflow: "hidden", mt: "26px", minHeight: "45px" }}>
            <Chip
              label="Beta"
              variant="beta"
              colors="beta"
              sx={{ minWidth: "80px", transform: "rotate(-22deg) translateX(-18px)", mt: "5px" }}
            />
          </Grid>
        )} */}

        {/* <List sx={{ pb: "20px", pt: isBetaPortal ? "14px" : "24px" }}> */}
        <List sx={{ pb: "20px", pt: "24px" }}>
          <ItemsList list={sidebarList.filter(item => !item.help)} sidebarStatus={persistent} />
        </List>

        <Grid
          container
          sx={{
            flexWrap: "nowrap",
            flexDirection: "column",
            height: "100%",
            justifyContent: "end"
          }}
        >
          <Box sx={{ mb: expandable ? "100px" : "36px" }}>
            <List>
              <ItemsList list={sidebarList.filter(item => item.help)} sidebarStatus={persistent} toggleFeedback={toggleFeedback} />
            </List>
            <ThemeSwitch sidebarStatus={persistent} />
          </Box>
        </Grid>
      </Grid>
      {expandable && (
        <IconButton
          aria-label="expend sidebar"
          name="expand-sidebar"
          onClick={handlePersistentToggle}
          sx={{
            backgroundColor: "#FF2B44",
            position: "absolute",
            bottom: 134,
            right: -13,
            width: 26,
            height: 26,
            "&:hover": {
              backgroundColor: "#FF2B44"
            },
            "&::after": {
              position: "absolute",
              borderRadius: 24,
              width: 24,
              height: 24,
              content: '""',
              boxShadow: "0px 0px 6px 2px rgba(255, 101, 101, 0.5)",
              opacity: 0,
              transition: "opacity 0.2s ease-in-out"
            },
            "&:hover::after": {
              opacity: 1
            },
            transform: persistent ? "rotate(180deg)" : "",
            transition: theme =>
              theme.transitions.create("transform", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
              })
          }}
        >
          <ArrowForwardIosIcon
            fontSize="small"
            sx={{
              width: 15,
              marginLeft: "1px",
              color: theme => theme.sidebar.toggleIcon.color
            }}
          />
        </IconButton>
      )}
    </Drawer>
  );
};

export default Sidebar;
