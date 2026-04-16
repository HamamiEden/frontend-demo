import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Autocomplete, Box, Button, Grid2 as Grid, InputLabel, TextField, Tooltip } from "@mui/material";
import Icon from "../Icon/Icon";

const TransferList = ({ options, value, handleChange, titles, listWidth, controlWidth, disabled, listHeight, containerHeight }) => {
  const [lists, setLists] = useState({
    left: [],
    right: []
  });

  const [checkedLists, setCheckedLists] = useState({
    left: [],
    right: []
  });

  const clearChecked = () => {
    setCheckedLists({
      left: [],
      right: []
    });
  };

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const handleSelectionChange = (side, selected) => {
    setCheckedLists(prv => {
      return {
        ...prv,
        [side]: selected
      };
    });
  };

  const handleToggle = useCallback(
    side => {
      const from = side === "right" ? "left" : "right";
      const to = side;
      const newLists = {
        [from]: lists[from].filter(item => !checkedLists[from].includes(item)).sort(compare),
        [to]: lists[to].concat(checkedLists[from]).sort(compare)
      };
      clearChecked();
      handleChange(newLists.right);
    },
    [checkedLists, handleChange, lists]
  );

  const handleAll = useCallback(
    side => {
      const newValue = side === "right" ? lists.right.concat(lists.left).sort(compare) : [];
      clearChecked();
      handleChange(newValue);
    },
    [handleChange, lists]
  );

  useEffect(() => {
    setLists({
      left: options
        .filter(option => !value.find(val => val.code === option.code))
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)),
      right: value
    });
  }, [options, value]);

  const buttons = useMemo(() => {
    return [
      {
        action: () => handleAll("right"),
        icon: "DoubleArrowsIcon",
        rotate: "0deg",
        disabled: lists.left.length === 0,
        title: "Select All",
        style: {
          mb: 0.375
        }
      },
      {
        action: () => handleToggle("right"),
        icon: "ArrowIcon",
        rotate: "-90deg",
        disabled: checkedLists.left.length === 0,
        title: "Select",
        style: {
          mb: 2.25
        }
      },
      {
        action: () => handleToggle("left"),
        icon: "ArrowIcon",
        rotate: "90deg",
        disabled: checkedLists.right.length === 0,
        title: "Unselect",
        style: {
          mb: 0.375
        }
      },
      {
        action: () => handleAll("left"),
        icon: "DoubleArrowsIcon",
        rotate: "180deg",
        disabled: lists.right.length === 0,
        title: "Unselect All",
        style: {
          mb: 0.375
        }
      }
    ];
  }, [checkedLists.left.length, checkedLists.right.length, handleAll, handleToggle, lists.left.length, lists.right.length]);

  const customList = (side, items) => (
    <>
      <InputLabel sx={{ lineHeight: "20px", pb: 0.125 }}>{titles[side]}</InputLabel>
      <Autocomplete
        getOptionDisabled={option => disabled || false}
        open
        key={side}
        name={side}
        options={items}
        value={checkedLists[side]}
        multiple
        onChange={(e, s, r) => handleSelectionChange(side, s)}
        renderTags={() => null}
        noOptionsText="None"
        disablePortal
        fullWidth
        sx={{
          minWidth: listWidth,
          width: "100%",
          zIndex: "auto",
          "& .MuiOutlinedInput-root": {
            padding: 0.625,
            pl: 1.125,
            "& .MuiAutocomplete-input": {
              p: 0,
              "&::placeholder": {
                color: "autoCompletePlaceholder.secondaryColor",
                fontWeight: 300
              }
            },
            "& .MuiAutocomplete-endAdornment": {
              display: "none"
            }
          }
        }}
        getOptionLabel={option => option?.name}
        isOptionEqualToValue={(option, value) => option?.code === value?.code}
        slotProps={{
          paper: {
            variants: "select",
            papertype: "transferlist",
            sx: listHeight
              ? {
                  "& .MuiAutocomplete-listbox, & .MuiAutocomplete-noOptions": {
                    height: listHeight
                  }
                }
              : {}
          }
        }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
            placeholder="Filter by Country name"
            slotProps={{
              input: {
                ...params.InputProps,
                variants: "select"
              }
            }}
          />
        )}
      />
    </>
  );

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        flexWrap: "noWrap",
        height: containerHeight || 270
      }}
    >
      <Grid container sx={{ width: "100%", flexWrap: "noWrap", gap: 1 }}>
        <Grid sx={{ flexGrow: 1 }}>{customList("left", lists.left)}</Grid>

        <Grid sx={{ alignSelf: "center", marginTop: 3 }}>
          {buttons.map((btn, i) => (
            <Tooltip key={i} title={disabled ? "" : btn.title} arrow placement="top">
              <Box sx={{ mb: 0.375 }}>
                <Button
                  variant="outlined"
                  onClick={btn.action}
                  disabled={btn.disabled || disabled}
                  sx={{ minWidth: 48, width: controlWidth || 68, px: 2, ...btn.style }}
                  disableRipple
                  aria-label="transfer-list-button"
                  name={`transfer-list-button-${btn.icon}`}
                >
                  <Icon type={btn.icon} style={{ transform: `rotate(${btn.rotate})` }} />
                </Button>
              </Box>
            </Tooltip>
          ))}
        </Grid>

        <Grid sx={{ flexGrow: 1 }}>{customList("right", lists.right)}</Grid>
      </Grid>
    </Grid>
  );
};

export default TransferList;
