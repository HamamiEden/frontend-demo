import { useEffect, useState } from "react";
import {
  Box,
  FormControlLabel,
  Grid2 as Grid,
  IconButton,
  Menu,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography
} from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";

const QuickRange = ({
  options,
  onRefreshChange,
  onTimeRangeChange,
  selected,
  hasTimeRange,
  disabled = false,
  enableAutoRefresh = true,
  style = {}
}) => {
  const translate = useTranslations();
  const [refresh, setRefresh] = useState(false);
  const [disableRefresh, setDisableRefresh] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    if (disabled) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelected = (event, option) => {
    if (!option) return;
    if (!hasTimeRange && (option && option?.id) === selected?.id) return;
    if (enableAutoRefresh && !option.enableRefresh) {
      setRefresh(false);
      setDisableRefresh(true);
      onRefreshChange && onRefreshChange(null);
    } else {
      setDisableRefresh(false);
    }
    onTimeRangeChange && onTimeRangeChange(option);
    handleClose();
  };

  const handleRefresh = val => {
    setRefresh(val);
    onRefreshChange && onRefreshChange(val ? selected.refreshRate : null);
  };

  useEffect(() => {
    if (hasTimeRange) {
      setRefresh(false);
      setDisableRefresh(true);
      onRefreshChange && onRefreshChange(null);
    } else {
      setDisableRefresh(false);
    }
  }, [hasTimeRange, onRefreshChange]);

  useEffect(() => {
    if (selected) {
      if ((enableAutoRefresh && !selected?.enableRefresh) || hasTimeRange) {
        setRefresh(false);
        setDisableRefresh(true);
        onRefreshChange && onRefreshChange(null);
      } else if (enableAutoRefresh && selected?.enableRefresh) {
        setDisableRefresh(false);
      }
    }
  }, [selected, enableAutoRefresh, setRefresh, setDisableRefresh, onRefreshChange, hasTimeRange]);

  return (
    <>
      <Grid
        container
        onClick={handleClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
        sx={{
          alignItems: "center",
          cursor: options && options.length > 1 ? "pointer" : "default",
          pointerEvents: disabled ? "none" : "auto",
          ...style,
          "&:hover": {
            "& .MuiButtonBase-root.MuiIconButton-root": {
              backgroundColor: theme => theme.palette.iconButtonWithHover.hover.backgroundColor
            }
          }
        }}
      >
        <Icon type="clockIcon" sx={{ mr: "6px", width: "18px", height: "18px" }} />

        <Typography variant="secondaryColor" sx={{ fontSize: "12px" }}>
          {translate("QUICK_RANGE")}:
        </Typography>

        <Typography colors={disabled ? "secondaryDisabled" : "newBlue"} sx={{ fontSize: 12, fontWeight: 500, marginLeft: 0.875 }}>
          {hasTimeRange ? translate("CUSTOM") : selected?.description}
        </Typography>

        {options && options.length > 1 && (
          <IconButton
            variant="inputIcon"
            className="activeOnContainerHover"
            sx={{ transform: `rotate(${anchorEl ? "180deg" : "0"})`, marginLeft: "5px" }}
            aria-label="expand-quick-range"
            name="expand-quick-range"
            disabled={disabled}
          >
            <Icon type="ExpandMoreIcon" />
          </IconButton>
        )}
      </Grid>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl) && options && options.length > 1}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        variant="menu"
        type="quickFilter"
      >
        <Grid container sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Grid>
            <Typography variant="body2">{translate("QUICK_RANGE")}</Typography>
          </Grid>

          {enableAutoRefresh && (
            <Grid sx={{ alignItems: "center", display: "flex" }}>
              <FormControlLabel
                sx={{ m: 0 }}
                control={
                  <Switch
                    checked={refresh}
                    variant="ios"
                    onClick={e => e.stopPropagation()}
                    onChange={e => handleRefresh(e.target.checked)}
                    disabled={disableRefresh}
                    disableRipple
                  />
                }
                label={
                  <Typography variant="body2" sx={{ marginLeft: 0.625 }}>
                    Auto Refresh
                  </Typography>
                }
              />
              {disableRefresh && (
                <Tooltip arrow title="The Auto Refresh feature is disabled for the selected Time Range" placement="bottom">
                  <Box sx={{ height: "20px", marginLeft: 0.625 }}>
                    <Icon type="InfoIcon" />
                  </Box>
                </Tooltip>
              )}
            </Grid>
          )}
        </Grid>

        <ToggleButtonGroup
          value={hasTimeRange ? null : selected}
          exclusive={true}
          onChange={handleSelected}
          variant="contained-tabs"
          sx={{ mt: "15px" }}
        >
          {options &&
            options.map((opt, i) => (
              <ToggleButton disableRipple key={i} value={opt} variant="contained" sx={{ textTransform: "initial" }}>
                {opt.name}
              </ToggleButton>
            ))}
        </ToggleButtonGroup>
      </Menu>
    </>
  );
};

export default QuickRange;
