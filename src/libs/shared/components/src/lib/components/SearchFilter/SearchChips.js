import { useRef } from "react";
import { Box, Chip, Grid2 as Grid, Tooltip, Typography } from "@mui/material";
import Icon from "../Icon/Icon";
import TooltipOverflow from "../TooltipOverflow/TooltipOverflow";

const maxChipsToDisplay = 2;

const SearchChips = ({ filters, onDelete, onMenuOpen, disabled }) => {
  const inputRef = useRef();

  const buildFiltersChips = (label, selectedFilter, hasNewLine, exclude) => {
    return (
      <Grid container flexWrap={hasNewLine ? "wrap" : "nowrap"}>
        <Box
          ref={inputRef}
          sx={{
            ...(!hasNewLine && {
              maxWidth: "228px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            })
          }}
        >
          <Typography component="span" sx={{ fontSize: 12, fontWeight: 300 }}>
            {label}
            <Chip
              colors={exclude ? "YET_ANOTHER_STUPID_RED_COLOR" : "success"}
              label={exclude ? "\u2260" : "\u003D"}
              sx={{
                width: "14px",
                height: "14px",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "14px",
                ml: "4px",
                mr: "4px"
              }}
            />
          </Typography>

          {hasNewLine && <br />}

          <Typography
            component="span"
            sx={{
              fontSize: 12,
              fontWeight: 500,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              mr: "4px"
            }}
          >
            {selectedFilter.join(", ")}
          </Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <Grid container sx={{ alignContent: "center", alignItems: "center", flexWrap: "nowrap", justifyContent: "flex-start", width: "100%" }}>
      {filters?.length ? (
        filters.map((item, index) => {
          if (index < maxChipsToDisplay) {
            return (
              <Grid key={index} container sx={{ flexWrap: "nowrap", width: "auto" }}>
                <Grid>
                  <TooltipOverflow
                    elementRef={inputRef}
                    title={item?.values?.join("\n")}
                    arrow
                    componentsProps={{
                      tooltip: {
                        sx: {
                          textAlign: "left",
                          padding: "6px"
                        }
                      }
                    }}
                  >
                    <Chip
                      sx={{ "&.MuiChip-root": { maxWidth: "228px" } }}
                      variant="inputChipsNew"
                      type="filterChip"
                      label={buildFiltersChips(item?.label, item?.values, null, item?.exclude)}
                      onDelete={() => onDelete(item)}
                      deleteIcon={
                        <Tooltip title="Remove Filter">
                          <Box sx={{ "&.MuiChip-deleteIcon.MuiChip-deleteIconMedium": { marginLeft: "2px" } }}>
                            <Icon type="Close" onMouseDown={event => event.stopPropagation()} />
                          </Box>
                        </Tooltip>
                      }
                    />
                  </TooltipOverflow>
                </Grid>
                {index < filters.length - 1 && (
                  <Grid>
                    <Typography component="span" sx={{ fontSize: 12, fontWeight: 400, mr: "8px", color: "var(--text-enhance)" }}>
                      And
                    </Typography>
                  </Grid>
                )}
              </Grid>
            );
          } else if (index === maxChipsToDisplay) {
            return (
              <Grid container key={index} sx={{ flexWrap: "nowrap" }}>
                <Grid>
                  <Tooltip
                    arrow
                    title={
                      <Grid container sx={{ rowGap: 1, flexDirection: "column" }}>
                        {filters?.slice(maxChipsToDisplay).map((tooltipVal, idx) => (
                          <Grid key={idx} sx={{ flexWrap: "nowrap", flexDirection: "column" }}>
                            <Chip
                              sx={{
                                height: "auto",
                                "& .MuiChip-root": {
                                  maxWidth: 220,
                                  borderRadius: "15px"
                                },
                                "& .MuiChip-label": {
                                  display: "block",
                                  whiteSpace: "normal"
                                }
                              }}
                              variant="inputChipsNew"
                              type="filterChip"
                              label={buildFiltersChips(tooltipVal?.label, tooltipVal?.values, true, tooltipVal?.exclude)}
                              onDelete={() => onDelete(item)}
                              deleteIcon={<Icon type="Close" onMouseDown={event => event.stopPropagation()} />}
                            />
                            {idx < filters?.slice(maxChipsToDisplay)?.length - 1 ? (
                              <Grid sx={{ pl: "5px", pt: "8px" }}>
                                <Typography component="span" color="link" sx={{ fontSize: 11, fontWeight: 400 }}>
                                  And
                                </Typography>
                              </Grid>
                            ) : null}
                          </Grid>
                        ))}
                      </Grid>
                    }
                    slotProps={{
                      tooltip: {
                        sx: {
                          maxWidth: "240px",
                          textAlign: "left",
                          padding: "10px 16px",
                          "& .MuiCardContent-root:last-child": { p: 0 }
                        }
                      }
                    }}
                  >
                    <Chip
                      sx={{
                        "& .MuiChip-root": {
                          borderRadius: "4px"
                        }
                      }}
                      variant="inputChipsNew"
                      type="filterChip"
                      label={`+${filters.length - maxChipsToDisplay}`}
                    />
                  </Tooltip>
                </Grid>
              </Grid>
            );
          } else {
            return null;
          }
        })
      ) : (
        <Grid container flex={1} alignItems="center" onClick={onMenuOpen} height="40px" sx={{ cursor: disabled ? "default" : "pointer" }}>
          <Typography
            component="span"
            color="secondaryColor"
            className={disabled ? "disabled" : ""}
            sx={{
              fontStyle: "italic",
              fontSize: 12,
              fontWeight: 300
            }}
          >
            Filters Display
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchChips;
