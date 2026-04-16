import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import sortBy from "lodash/sortBy";
import { Box, Card, Divider, Grid2 as Grid, Skeleton, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import { AccountContext } from "@csms-consoles/shared-state";
import Icon from "../Icon/Icon";
import ParentTab from "./ParentTab";

const PageSideBar = ({
  items = [],
  loading,
  activeItemId,
  numberOfSkeletons = 3,
  onItemChange = () => {},
  dynamicModule: DynamicModule,
  refCallback,
  cardStyle = {},
  dynamicModuleComponentProps = {}
}) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const expandParent = id => id && setExpandedItem(id === expandedItem ? null : id);
  const handleTabChange = useCallback(
    (e, value) => {
      setExpandedItem(null);
      value && onItemChange(value);
    },
    [onItemChange]
  );

  const getActiveItemInGroup = useCallback(
    group => {
      const activeItem = group.items?.find(item => item.id === activeItemId);
      return activeItem?.id || false;
    },
    [activeItemId]
  );

  return (
    <Card
      sx={{ height: "100%", padding: "20px", borderRadius: "8px", display: "flex", flexDirection: "column", ...cardStyle }}
      ref={node => (refCallback ? refCallback(node) : undefined)}
    >
      {loading ? (
        <Grid container sx={{ flexDirection: "column", gap: "10px" }}>
          {[...Array(numberOfSkeletons)].map((i, index) => (
            <Grid key={index}>
              <Skeleton variant="rounded" width="100%" height="30px" sx={{ borderRadius: "4px" }} alt="loading" aria-busy="true" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid variant="scrollableGrid">
          {sortBy(items || [], "sort").map((group, groupIndex) => (
            <Grid key={groupIndex} container sx={{ flexDirection: "column" }}>
              {group.groupTitle && (
                <Grid sx={{ mb: 2, lineHeight: "19px" }}>
                  <Typography variant="captionTitle" sx={{ fontSize: "16px" }}>
                    {group.groupTitle}
                  </Typography>
                </Grid>
              )}

              {group.type === "tabs" ? (
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  scrollButtons={false}
                  value={getActiveItemInGroup(group)}
                  onChange={handleTabChange}
                  sx={{
                    minHeight: "unset",
                    "& .MuiTabs-flexContainer": { gap: "10px" },
                    ...(group.maxHeight
                      ? {
                          height: group.maxHeight,
                          width: "188px",
                          "& .MuiTabs-scroller": {
                            overflowY: "auto",
                            scrollbarWidth: "thin"
                          }
                        }
                      : {})
                  }}
                >
                  {sortBy(group.items || [], "sort").map((item, index) => {
                    const isDisabled = item.isDisabled;
                    const isExpandable = item.haveChild;
                    const subItems = isExpandable && group.items.filter(subItem => subItem.parentId === item.id);

                    return [
                      isExpandable ? (
                        <ParentTab
                          items={subItems}
                          parentItem={item}
                          key={item.id}
                          value={null}
                          variant="vertical-tab"
                          disableRipple
                          isDisabled={isDisabled}
                          handleTabChange={handleTabChange}
                          activeItemId={activeItemId}
                          expandedItem={expandedItem}
                          setExpandedItem={setExpandedItem}
                          onClick={() => expandParent(item.id)}
                        />
                      ) : (
                        <Tab
                          key={item.id || index}
                          value={item.id}
                          variant="vertical-tab"
                          className={item?.type || ""}
                          disableRipple
                          icon={item.icon ? <Icon type={item.icon?.type} style={{ ...item.icon?.style }} /> : null}
                          iconPosition={item.icon?.position || "start"}
                          disabled={isDisabled}
                          sx={{
                            "&.Mui-disabled": { pointerEvents: "auto" },
                            ...(item.parentId && { visibility: "hidden", height: 0, width: 0, position: "absolute" })
                          }}
                          {...(item?.link?.to ? { component: Link, to: item.link.to } : {})}
                          label={
                            isDisabled ? (
                              <Tooltip
                                title={item.disabledItemTooltip || ""}
                                arrow
                                placement="right"
                                slotProps={{
                                  tooltip: { sx: { maxWidth: "240px" } },
                                  popper: {
                                    sx: { "&.MuiTooltip-popper[data-popper-placement*='right'] .MuiTooltip-tooltip": { ml: "22px" } }
                                  }
                                }}
                              >
                                <Grid container sx={{ width: "100%" }}>
                                  {item.name}
                                </Grid>
                              </Tooltip>
                            ) : (
                              <Grid container sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <Grid>{item.name}</Grid>
                                {item.tooltip && (
                                  <Tooltip
                                    title={item.tooltip}
                                    arrow
                                    placement="right"
                                    slotProps={{
                                      popper: {
                                        sx: {
                                          "&.MuiTooltip-popper[data-popper-placement*='right'] .MuiTooltip-tooltip": { ml: "22px" }
                                        }
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
                      ),
                      item.divider && (
                        <Tab
                          disabled
                          label=""
                          icon={<Divider type="primaryDivider" sx={{ width: "100%", opacity: "0.6" }} />}
                          sx={{ m: "10px", p: "0" }}
                        />
                      )
                    ];
                  })}
                </Tabs>
              ) : (
                group.type === "components" &&
                group.components?.map((c, compIndex) => (
                  <Grid key={compIndex}>
                    {c.componentType ? <DynamicModule module={c} {...dynamicModuleComponentProps} /> : c.component}
                  </Grid>
                ))
              )}
              {group.divider && <Divider type="primaryDivider" sx={{ margin: "20px 0 20px 0" }} />}
            </Grid>
          ))}
        </Grid>
      )}
    </Card>
  );
};

export default PageSideBar;
