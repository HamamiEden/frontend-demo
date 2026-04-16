import { useEffect, useState } from "react";
import { Box, Chip, Grid2 as Grid, Tooltip, Typography } from "@mui/material";
import { format } from "date-fns";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";

const maxChipsToDisplay = 2;

const FiltersRow = ({ filters, selectedFilters, onFiltersChanged, type }) => {
  const translate = useTranslations();

  const [filtersOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    if (filters) {
      let newFilters = [];
      if (Array.isArray(filters)) {
        filters.forEach(filter => {
          let index = newFilters.findIndex(f => f.field === filter.field);
          if (index > -1) {
            newFilters[index].ids.push(filter.name || filter.id);
          } else {
            if (filter.from) {
              if (typeof filter.from === "string") filter.from = new Date(filter.from);
              if (typeof filter.to === "string") filter.to = new Date(filter.to);

              let from = format(filter.from, "MM/dd/yyyy HH:mm");
              let to = format(filter.to, "MM/dd/yyyy HH:mm");
              let parsedFullDate = `${from} - ${to}`;
              newFilters.push({
                fieldName: filter.fieldName || filter.field,
                field: filter.field,
                ids: [parsedFullDate]
              });
            } else {
              newFilters.push({
                fieldName: filter.fieldName || filter.field,
                field: filter.field,
                ids: [filter.name || filter.id]
              });
            }
          }
        });
      }
      setFilterOptions(newFilters);
    }
  }, [filters]);

  const handleFilterRemove = filter => {
    let newFilters = selectedFilters.filter(f => f.field !== filter.field);
    onFiltersChanged(newFilters);
  };

  return (
    <Grid container sx={{ alignItems: "center", flexWrap: "nowrap" }}>
      {filtersOptions.map((filter, index) => {
        if (index < maxChipsToDisplay) {
          return (
            <Grid key={filter.field} container sx={{ alignItems: "center", flexWrap: "nowrap", width: "auto" }}>
              <Chip
                variant="inputChipsNew"
                type="filterChip"
                sx={{ height: "24px", maxWidth: "228px" }}
                label={
                  <Typography component="span" sx={{ fontSize: 12, display: "flex", alignItems: "center" }}>
                    <Typography component="span" sx={{ fontSize: 12, fontWeight: 300, flexShrink: 0 }}>
                      {translate(filter.fieldName)}{" "}
                    </Typography>

                    <Chip
                      colors="success"
                      label="="
                      sx={{
                        width: "14px",
                        height: "14px",
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: "14px",
                        ml: "4px",
                        mr: "4px",
                        flexShrink: 0
                      }}
                    />

                    <Typography
                      component="span"
                      sx={{ fontSize: 12, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {filter.ids.map(item => translate(`${type}_${filter.field}_${String(item)}`, String(item))).join(", ")}
                    </Typography>
                  </Typography>
                }
                onDelete={() => handleFilterRemove(filter)}
                deleteIcon={
                  <Tooltip title="Remove Filter">
                    <Box onMouseDown={e => e.stopPropagation()}>
                      <Icon type="Close" />
                    </Box>
                  </Tooltip>
                }
              />

              {index < filtersOptions.length - 1 && (
                <Typography component="span" sx={{ fontSize: 12, fontWeight: 400, mr: "8px", color: "var(--text-enhance)" }}>
                  And
                </Typography>
              )}
            </Grid>
          );
        }

        if (index === maxChipsToDisplay) {
          return (
            <Grid key="overflow" container sx={{ alignItems: "center", flexWrap: "nowrap" }}>
              <Tooltip
                arrow
                title={
                  <Grid container sx={{ rowGap: 1, flexDirection: "column" }}>
                    {filtersOptions.slice(maxChipsToDisplay).map((overflowFilter, idx) => (
                      <Grid key={overflowFilter.field} sx={{ flexWrap: "nowrap", flexDirection: "column" }}>
                        <Chip
                          variant="inputChipsNew"
                          type="filterChip"
                          sx={{
                            height: "auto",
                            maxWidth: 220,
                            "& .MuiChip-label": {
                              display: "block",
                              whiteSpace: "normal"
                            }
                          }}
                          label={
                            <Typography component="span" sx={{ fontSize: 12 }}>
                              <Typography component="span" sx={{ fontSize: 12, fontWeight: 300 }}>
                                {translate(overflowFilter.fieldName)}
                              </Typography>

                              <Chip
                                colors="success"
                                label="="
                                sx={{
                                  width: "14px",
                                  height: "14px",
                                  fontSize: "14px",
                                  fontWeight: 700,
                                  lineHeight: "14px",
                                  ml: "4px",
                                  mr: "4px",
                                  flexShrink: 0
                                }}
                              />

                              <Typography component="span" sx={{ fontSize: 12, fontWeight: 500 }}>
                                {overflowFilter.ids
                                  .map(item => translate(`${type}_${overflowFilter.field}_${String(item)}`, String(item)))
                                  .join(", ")}
                              </Typography>
                            </Typography>
                          }
                          onDelete={() => handleFilterRemove(overflowFilter)}
                          deleteIcon={
                            <Box onMouseDown={e => e.stopPropagation()}>
                              <Icon type="Close" />
                            </Box>
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                }
                slotProps={{
                  tooltip: {
                    sx: { maxWidth: "240px", textAlign: "left", padding: "10px 16px" }
                  }
                }}
              >
                <Chip
                  variant="inputChipsNew"
                  type="filterChip"
                  label={`+${filtersOptions.length - maxChipsToDisplay}`}
                  sx={{
                    "& .MuiChip-label": {
                      fontSize: "12px",
                      fontWeight: 400
                    }
                  }}
                />
              </Tooltip>
            </Grid>
          );
        }

        return null;
      })}
    </Grid>
  );
};

export default FiltersRow;
