import { useEffect, useMemo } from "react";
import sortBy from "lodash/sortBy";
import { Box, Grid2 as Grid, List, ListItemButton, ListItemText, Tab, Tooltip } from "@mui/material";
import Icon from "../Icon/Icon";

const ParentTab = ({ parentItem, isDisabled, handleTabChange, items = [], activeItemId, expandedItem, setExpandedItem, ...rest }) => {
  const isExpanded = expandedItem === parentItem?.id;
  const isActive = useMemo(() => items?.some(item => item.id === activeItemId), [activeItemId, items]);

  useEffect(() => {
    if (isActive) {
      setExpandedItem(parentItem?.id);
    }
  }, [isActive, parentItem?.id]);

  return (
    <>
      <Tab
        {...rest}
        disabled={isDisabled}
        className={isActive ? "Mui-selected" : ""}
        icon={
          <Icon
            type="ExpandMoreIcon"
            style={{ height: "14px", transition: "transform .2s", transform: isExpanded ? "rotate(180deg)" : "none" }}
          />
        }
        iconPosition="end"
        sx={{ "&.Mui-disabled": { pointerEvents: "auto" } }}
        label={
          isDisabled ? (
            <Tooltip
              title={parentItem.disabledItemTooltip || ""}
              arrow
              placement="right"
              slotProps={{
                tooltip: { sx: { maxWidth: "240px" } },
                popper: {
                  sx: { "&.MuiTooltip-popper[data-popper-placement*='right'] .MuiTooltip-tooltip": { ml: "22px" } }
                }
              }}
            >
              <Grid container>{parentItem.name}</Grid>
            </Tooltip>
          ) : (
            <Grid container sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <Grid>{parentItem.name}</Grid>
              {parentItem.tooltip && (
                <Tooltip
                  title={parentItem.tooltip}
                  arrow
                  placement="right"
                  slotProps={{
                    popper: {
                      sx: { "&.MuiTooltip-popper[data-popper-placement*='right'] .MuiTooltip-tooltip": { ml: "22px" } }
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: "13px",
                      color: theme => theme.palette.iconWithoutHoverBg.info.color,
                      "&:hover": { color: theme => theme.palette.iconWithoutHoverBg.info.hover.color }
                    }}
                  >
                    <Icon type="InfoIcon" style={{ width: "13px", height: "13px" }} />
                  </Box>
                </Tooltip>
              )}
            </Grid>
          )
        }
      />
      {isExpanded && (
        <List
          dense
          sx={{
            "&.MuiList-root": {
              borderRadius: "4px",
              padding: "4px",
              marginTop: "-4px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "4px"
            }
          }}
          colors="tabs"
        >
          {sortBy(items || [], "sort").map(item => (
            <ListItemButton
              disableRipple
              colors="tabs"
              sx={{
                height: "24px",
                borderRadius: "4px",
                "&.Mui-selected": { "& .MuiListItemText-primary": { fontWeight: "500" } }
              }}
              selected={item.id === activeItemId}
              onClick={event => {
                handleTabChange(event, item.id);
                setExpandedItem(parentItem?.id);
              }}
              key={item.id}
            >
              <ListItemText primary={item.name} sx={{ "& .MuiListItemText-primary": { fontSize: "11px" } }} />
            </ListItemButton>
          ))}
        </List>
      )}
    </>
  );
};

export default ParentTab;
