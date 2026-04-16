import { useCallback } from "react";
import { MenuItem, Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import Icon from "../Icon/Icon";

const ITEM_HEIGHT = 36;
const MENU_HEIGHT = 6 * ITEM_HEIGHT;

const MonthsAutocomplete = ({ value, options, onChange, isDisabled, placeholder = "" }) => {
  const handleChange = useCallback((event, selected) => onChange(selected), [onChange]);

  return (
    <MuiAutocomplete
      size="small"
      variant="search"
      disabled={isDisabled}
      disableClearable
      value={value}
      onChange={handleChange}
      options={options}
      getOptionLabel={option => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(optionProps, option) => (
        <MenuItem {...optionProps} value={option.id} variants="select" disableRipple sx={{ maxHeight: ITEM_HEIGHT }}>
          {option.name}
        </MenuItem>
      )}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              ...params.InputProps,
              variants: "select"
            }
          }}
          placeholder={placeholder}
        />
      )}
      popupIcon={<Icon type="ExpandMoreIcon" />}
      slotProps={{
        clearIndicator: { variant: "small" },
        paper: { variants: "select" },
        listbox: { sx: { maxHeight: MENU_HEIGHT } }
      }}
      sx={{
        "&.MuiAutocomplete-root": { width: "151px" },
        "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
          height: "30px",
          padding: "0 4px"
        }
      }}
    />
  );
};

export default MonthsAutocomplete;
