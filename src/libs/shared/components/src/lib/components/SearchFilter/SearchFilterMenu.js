import { useRef, useState } from "react";
import { isEmpty } from "lodash";
import {
  Autocomplete,
  Badge,
  Box,
  Button,
  Chip,
  Grid2 as Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import Icon from "../Icon/Icon";
import TooltipOverflow from "../TooltipOverflow/TooltipOverflow";
import IncludeExcludeSwitch from "./IncludeExcludeSwitch";

const ITEM_HEIGHT = 36;
const MENU_HEIGHT = 6 * ITEM_HEIGHT;

const SearchFilterMenu = ({
  anchorEl,
  selected,
  selectedKey,
  loading,
  limit,
  keysPlaceholder = "",
  valuePlaceholder = "",
  isSelectedKeyMultiSelect,
  onClose,
  resetStates,
  handleBackButtonClick,
  filters,
  onDelete,
  onApplyFilter,
  deleteItemByIndex,
  validationData,
  limitationData,
  titleTooltip = "",
  excludeSupport,
  exclude,
  handleExcludeChange,
  onChange,
  ...props
}) => {
  const chipLabelRef = useRef();
  const maxItemsDisplayed = 1;
  const keyId = selectedKey ? "_id" : "key";

  const [openList, setOpenList] = useState(false);

  const onTextFieldKeyDown = event => {};

  const isApplyDisabled = loading || !selectedKey || isEmpty(selected) || validationData?.hasError || limitationData?.isExceededLimitation;

  const onMenuTransitionEnd = () => {
    setOpenList(!!anchorEl);

    if (!anchorEl) resetStates();
  };

  const isOptionSelected = option => selected?.find(item => item[keyId] === option[keyId]);
  const isActiveFilter = option => filters?.find(item => item[keyId] === option[keyId]);

  return (
    <Menu
      anchorEl={anchorEl}
      open={!!anchorEl}
      onTransitionEnd={onMenuTransitionEnd}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      type="secondaryMenu"
      variants="searchListFilter"
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          flexDirection: "column",
          flexWrap: "nowrap",
          gap: 1.25,
          height: !selectedKey || selectedKey.type === "options" ? "370px" : "auto",
          width: "310px"
        }}
      >
        <Grid container wrap="nowrap" sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Grid container sx={{ alignItems: "center", gap: 0.8 }}>
            {selectedKey && (
              <Grid sx={{ lineHeight: 0 }}>
                <IconButton
                  variant="backArrowButton"
                  size="small"
                  onClick={handleBackButtonClick}
                  sx={{ "& svg": { width: "16px" } }}
                  aria-label="back-button"
                  name="back-button"
                >
                  <Icon type="KeyboardArrowLeftIcon" />
                </IconButton>
              </Grid>
            )}

            <Grid>
              <Typography sx={{ fontSize: 14 }}>Filter</Typography>
            </Grid>

            {titleTooltip && (
              <Grid>
                <Tooltip title={titleTooltip} arrow={true} placement="right" slotProps={{ tooltip: { sx: { maxWidth: "275px" } } }}>
                  <IconButton size="small" hover="noBGHover" iconcolor="info" sx={{ width: "13px", height: "13px", pb: "1px" }}>
                    <Icon type="InfoIcon" />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
          </Grid>

          <Grid sx={{ lineHeight: 0 }}>
            <IconButton variant="secondaryBlue" size="small" onClick={onClose} aria-label="close-menu" name="close-menu">
              <Icon type="Close" />
            </IconButton>
          </Grid>
        </Grid>

        {excludeSupport ? (
          <Grid>
            <IncludeExcludeSwitch exclude={exclude} onChange={handleExcludeChange} />
          </Grid>
        ) : null}

        <Grid sx={{ flexGrow: 1 }}>
          <Autocomplete
            variant="search"
            size="small"
            getOptionLabel={opt => opt.name || ""}
            isOptionEqualToValue={(opt, value) => (selectedKey?.type === "freeText" ? false : opt && value && opt[keyId] === value[keyId])}
            value={isSelectedKeyMultiSelect ? selected : selected?.[0] || []}
            noOptionsText="No Options"
            open={Boolean(anchorEl && (!selectedKey || selectedKey?.type === "options"))}
            clearText=""
            renderInput={params => (
              <TextField
                {...params}
                slotProps={{
                  input: {
                    ...params.InputProps,
                    startAdornment: (
                      <>
                        {selectedKey && (
                          <InputAdornment position="start" sx={{ ml: "5px", mr: "-6px" }}>
                            <Typography variant="primaryColor" sx={{ whiteSpace: "nowrap", fontSize: 12, lineHeight: "14px", mr: "3px" }}>
                              {selectedKey.name}
                            </Typography>
                            <Typography variant="primaryColor" sx={{ whiteSpace: "nowrap", fontSize: 14, lineHeight: "15px", mr: "3px" }}>
                              {exclude ? "\u2260" : "\u003D"}
                            </Typography>
                          </InputAdornment>
                        )}
                        {params.InputProps.startAdornment}
                      </>
                    )
                  }
                }}
                fullWidth
                placeholder={!selectedKey ? keysPlaceholder : selected?.length ? "" : valuePlaceholder}
                onKeyDown={onTextFieldKeyDown}
                sx={{
                  "& .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth": {
                    pr: "25px"
                  },
                  "& .MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputSizeSmall": {
                    height: "19px",
                    fontWeight: 500,
                    color: theme => theme.palette.text.secondary
                  }
                }}
                error={validationData?.hasError || limitationData?.isExceededLimitation}
                helperText={
                  !validationData?.hasError && selectedKey?.type === "freeText" && !selected?.length
                    ? `press "Enter" to apply filter`
                    : validationData?.message || (limitationData?.isExceededLimitation && limitationData?.message) || " "
                }
              />
            )}
            renderOption={(optionProps, option) => {
              const isReachedLimitation =
                selectedKey?.type === "options" && !loading && limitationData?.isReachedLimitation && !isOptionSelected(option);

              return (
                <Tooltip
                  title={
                    isReachedLimitation ? (
                      <Grid container wrap="nowrap" spacing="5px">
                        <Grid size="auto">
                          <Icon type="FailedIcon" sx={{ color: theme => theme.palette.failedIcon.color }} />
                        </Grid>
                        <Grid size="grow">{limitationData?.message}</Grid>
                      </Grid>
                    ) : (
                      ""
                    )
                  }
                  arrow
                  placement="bottom-start"
                  slotProps={{ tooltip: { sx: { width: "355px", maxWidth: "355px", paddingLeft: "8px" } } }}
                  key={option.name}
                >
                  <Box
                    sx={{
                      "&:last-child .MuiMenuItem-root": {
                        borderBottom: "none"
                      }
                    }}
                  >
                    <MenuItem
                      {...optionProps}
                      value={option[keyId]}
                      variants="select"
                      className={`${optionProps.className} coloredItemIcon secondarySelect networkAnalyticsSerach`}
                      disabled={loading || isReachedLimitation}
                      disableRipple
                      sx={{ maxHeight: ITEM_HEIGHT, "&.MuiAutocomplete-option": { padding: "10px 17px 10px 10px" } }}
                    >
                      <Grid container sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <Grid>
                          {option.name}
                          {keyId === "key" && isActiveFilter(option) ? (
                            <Badge color="primary" variant="dot" size="xs" sx={{ position: "relative", top: "-4px", right: "-6px" }} />
                          ) : (
                            ""
                          )}
                        </Grid>
                        {option.type === "options" && (
                          <Grid>
                            <Icon type="ArrowIcon" className="option-icon blue" style={{ transform: "rotate(270deg)" }} />
                          </Grid>
                        )}
                      </Grid>
                    </MenuItem>
                  </Box>
                </Tooltip>
              );
            }}
            renderTags={selectedValues => (
              <Grid container sx={{ flexWrap: "nowrap", width: "auto", alignItems: "center", padding: "2px 4px 2px 6px" }}>
                {selectedValues.map((value, index) => {
                  if (index < maxItemsDisplayed) {
                    return (
                      <TooltipOverflow
                        elementRef={chipLabelRef}
                        key={index}
                        title={selectedKey?.type === "freeText" ? value : value?.name}
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
                          key={index}
                          variant="inputChips"
                          label={
                            <Typography
                              ref={chipLabelRef}
                              sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                maxWidth: "70px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              }}
                            >
                              {selectedKey?.type === "freeText" ? value : value?.name}
                            </Typography>
                          }
                          onDelete={e => deleteItemByIndex(index)}
                          deleteIcon={<Icon type="Close" onMouseDown={event => event.stopPropagation()} />}
                        />
                      </TooltipOverflow>
                    );
                  } else if (index === maxItemsDisplayed) {
                    return (
                      <Tooltip
                        slotProps={{
                          tooltip: {
                            sx: {
                              textAlign: "center",
                              pl: "6px",
                              pr: "1px",
                              pb: "1px"
                            }
                          }
                        }}
                        arrow
                        key={index}
                        title={
                          <>
                            {selectedValues.map((tooltipVal, i) => {
                              if (i >= maxItemsDisplayed) {
                                return (
                                  <Box key={i} sx={{ marginBottom: 1.25 }}>
                                    <Chip
                                      variant="inputChips"
                                      label={selectedKey?.type === "freeText" ? tooltipVal : tooltipVal.name}
                                      onDelete={e => deleteItemByIndex(i)}
                                      deleteIcon={<Icon type="Close" onMouseDown={event => event.stopPropagation()} />}
                                    />
                                  </Box>
                                );
                              } else {
                                return null;
                              }
                            })}
                          </>
                        }
                      >
                        <Chip variant="inputChips" label={`+${selectedValues.length - maxItemsDisplayed}`} />
                      </Tooltip>
                    );
                  } else {
                    return null;
                  }
                })}
              </Grid>
            )}
            slotProps={{
              popper: { sx: { visibility: openList && anchorEl ? "initial" : "hidden" } },
              paper: { variants: "secondaryAutocomplete", sx: { marginTop: "2px" } },
              popupIndicator: { sx: { display: "none" } },
              clearIndicator: { size: "small" },
              listbox: { sx: { maxHeight: MENU_HEIGHT } }
            }}
            sx={{ width: "100%", "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": { padding: "3px" } }}
            onChange={onChange}
            {...props}
          />
        </Grid>

        <Grid container sx={{ gap: 0.625, justifyContent: "flex-end", mt: "5px" }}>
          <Grid>
            <Button onClick={onClose} variant="default" size="small" disableRipple aria-label="cancel" name="cancel">
              Cancel
            </Button>
          </Grid>
          <Grid>
            <Button
              onClick={() => !isApplyDisabled && onApplyFilter()}
              disabled={isApplyDisabled}
              variant="primary"
              size="small"
              disableRipple
              aria-label="apply-filter"
              name="apply-filter"
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Menu>
  );
};

export default SearchFilterMenu;
