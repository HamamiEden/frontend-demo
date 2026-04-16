import { useContext } from "react";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { Box, Chip, Grid2 as Grid, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme } from "@mui/material";
import { AccountContext, TrialsContext } from "@csms-consoles/shared-state";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../../../Icon/Icon";

const ItemComp = ({ item, handleMobileToggle, child, sidebarStatus, toggleFeedback }) => {
  const { text, icon, link, chip, childrens, help, service, addon, showIfNoAddon, trial, tooltipWidth } = item;
  const translate = useTranslations();
  const theme = useTheme();
  const { mode } = theme.palette;

  const location = useLocation();

  const { accountServices, accountAddons, accountType } = useContext(AccountContext);
  const { isTrialActive } = useContext(TrialsContext) || {};

  const isItemDisabledByService = service => {
    return accountType !== "RESELLER" && !accountServices[service];
  };

  const isItemDisabledByAddon = (addon, showIfNoAddon = false, trial) => {
    if (showIfNoAddon) return false;
    else if (isTrialActive && isTrialActive(trial)) return false;

    return accountType !== "RESELLER" && !accountAddons[addon]?.enabled;
  };

  const currentItem = childrens && childrens.find(child => matchPath(location.pathname, { path: child?.link?.toLowerCase() }));

  const isActiveItem =
    childrens && childrens.length
      ? childrens.find(subItem => matchPath(location.pathname, { path: subItem?.link?.toLowerCase() }))
      : matchPath(location.pathname, { path: link?.toLowerCase() });

  const isFirstItemActive = () => {
    const firstItem = childrens[0];
    const isFirstItemActive = (currentItem && currentItem.text) === (firstItem && firstItem.text);
    if (isFirstItemActive) {
      if (mode === "light") {
        return "#5E7890";
      } else if (mode === "dark") {
        return "#595B5F";
      }
    }
    return "";
  };

  return (!service || !isItemDisabledByService(service)) && (!addon || !isItemDisabledByAddon(addon, showIfNoAddon, trial)) ? (
    <Tooltip
      disableFocusListener
      title={
        sidebarStatus ? (
          ""
        ) : childrens && childrens.length > 0 ? (
          <nav>
            <List sx={{ pb: 0, pt: 0 }}>
              {childrens.map(
                ({ id, text, link, chip, newTab, feedback, service, addon, showIfNoAddon, trial, new: isNewBadgeEnabled }, index) =>
                  (!service || !isItemDisabledByService(service)) && (!addon || !isItemDisabledByAddon(addon, showIfNoAddon, trial)) ? (
                    <ListItemButton
                      disableRipple
                      key={index}
                      onClick={feedback && toggleFeedback ? toggleFeedback : null}
                      component={link ? NavLink : null}
                      target={newTab ? "_blank" : null}
                      rel={newTab ? "noopener noreferrer" : null}
                      to={newTab ? { pathname: link } : link ? link : null}
                      variant="tooltipItem"
                      active={currentItem && currentItem.text === text ? "activeTooltipItem" : "notActive"}
                      aria-label={"tooltipItem_" + text}
                      alt={"tooltipItem_" + text}
                    >
                      <ListItemText
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "0.75rem"
                          }
                        }}
                        primary={
                          chip ? (
                            <Grid container wrap="nowrap" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                              <Grid>{translate(text)}</Grid>
                              <Grid sx={{ mr: "10px" }}>
                                <Chip label={chip} variant="beta" colors="beta" />
                              </Grid>
                            </Grid>
                          ) : isNewBadgeEnabled ? (
                            <Grid container wrap="nowrap" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                              <Grid>{translate(text)}</Grid>
                              <Grid sx={{ mr: "10px" }}>
                                <Chip label="New" variant="new" sx={{ cursor: "pointer" }} />
                              </Grid>
                            </Grid>
                          ) : (
                            translate(text)
                          )
                        }
                      />
                    </ListItemButton>
                  ) : null
              )}
            </List>
          </nav>
        ) : (
          translate(text)
        )
      }
      arrow
      placement={childrens && childrens.length ? (help ? "right-end" : "right-start") : "right"}
      slotProps={
        childrens && childrens.length
          ? {
              tooltip: {
                sx: {
                  bgcolor: "tooltip.sidebar.backgroundColor",
                  color: "tooltip.sidebar.color",
                  p: 0,
                  boxShadow: 1,
                  fontSize: "caption.fontSize",
                  fontWeight: "caption.fontWeight",
                  borderRadius: "12px",
                  width: tooltipWidth ? tooltipWidth : help ? "243px" : "168px"
                }
              },
              arrow: {
                sx: {
                  color: "tooltip.sidebar.arrow.color",
                  "&:before": {
                    backgroundColor: isFirstItemActive()
                  }
                }
              }
            }
          : {
              tooltip: {
                sx: {
                  bgcolor: "tooltip.sidebar.backgroundColor",
                  color: "tooltip.sidebar.color",
                  p: 1.2,
                  boxShadow: 1,
                  fontSize: "caption.fontSize",
                  fontWeight: "caption.fontWeight",
                  borderRadius: 2
                  // left: 4,
                }
              },
              arrow: {
                sx: {
                  color: "tooltip.sidebar.arrow.color"
                }
              }
            }
      }
    >
      <ListItemButton
        disableRipple
        id={"ItemComp_" + text}
        aria-label={"ItemComp_" + text}
        alt={"ItemComp_" + text}
        onClick={handleMobileToggle}
        to={link ? link.toLowerCase() : ""}
        component={NavLink}
        variant="sidebarBtn"
        active={isActiveItem ? "activeIndicator" : "notActive"}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
            color: "#FFFFFF80",
            pl: child && sidebarStatus ? 10 : 0
          }}
        >
          <Box component="span" sx={{ display: "flex" }}>
            <Icon type={icon} className={`SIDEBAR-ITEM-${text.toUpperCase()}`}></Icon>
          </Box>
        </ListItemIcon>
        {sidebarStatus && (
          <ListItemText
            sx={{
              "& span": {
                fontSize: 14,
                lineHeight: 1
              }
            }}
            primary={
              chip ? (
                <Grid container columnSpacing="15px" wrap="nowrap" sx={{ alignItems: "center" }}>
                  <Grid>{translate(text)}</Grid>
                  <Grid>
                    <Chip label={chip} variant="beta" colors="beta" />
                  </Grid>
                </Grid>
              ) : (
                translate(text)
              )
            }
          />
        )}
      </ListItemButton>
    </Tooltip>
  ) : null;
};

export default ItemComp;
