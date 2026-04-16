import { useState } from "react";
import { Chip, ClickAwayListener, Grid2 as Grid, Tooltip } from "@mui/material";
import Icon from "../Icon/Icon";

const OptionPicker = ({ options = [], chipsProps = { sx: {} }, disabled, selected, onSelect, loading }) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options?.find(({ id, isDefault }) => {
    return selected ? selected.id === id : isDefault;
  });

  const isDisabled = disabled || loading;

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Tooltip
        arrow
        onClose={() => setOpen(false)}
        onClick={e => {
          e.stopPropagation();
          if (isDisabled) return;

          setOpen(prev => !prev);
        }}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <Grid container direction={"column"} sx={{ gap: "10px" }}>
            {options
              ?.filter(({ id, isDefault }) => {
                return selected ? selected.id !== id : !isDefault;
              })
              ?.map(option => {
                return (
                  <Chip
                    key={option.id}
                    label={option?.name}
                    variant={"fatRoundedChip"}
                    colors={option?.colors || option?.id}
                    disableRipple
                    onClick={e => {
                      e.stopPropagation();
                      if (isDisabled) return;

                      setOpen(false);
                      onSelect(option);
                    }}
                    disabled={isDisabled}
                    {...chipsProps}
                  />
                );
              })}
          </Grid>
        }
        slotProps={{
          popper: { sx: { ".MuiTooltip-tooltip": { borderRadius: "10px", padding: "10px" } } }
        }}
      >
        <Grid sx={{ position: "relative" }}>
          <Chip
            label={loading ? "Loading..." : selectedOption?.name}
            variant={"fatRoundedChip"}
            colors={selectedOption?.colors || selectedOption?.id}
            disableRipple
            onClick={e => {
              e.stopPropagation();
              if (isDisabled) return;

              setOpen(prev => !prev);
            }}
            disabled={isDisabled}
            {...chipsProps}
            sx={{
              justifyContent: "flex-start",
              "& .MuiChip-label": { px: "12px" },
              ...chipsProps.sx
            }}
          />

          {!isDisabled && (
            <Icon
              type="ArrowSmall"
              sx={{
                position: "absolute",
                right: "4px",
                height: "100%",
                transform: `rotate(${open ? "180deg" : "0deg"})`,
                pointerEvents: "none"
              }}
            />
          )}
        </Grid>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default OptionPicker;
