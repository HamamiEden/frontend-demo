import { FormControlLabel } from "@mui/material";
import { CommonCheckbox } from "../../Checkbox/CommonCheckbox";

const FilterCheckbox = ({
  name = "",
  labelVariant,
  disabled,
  checked,
  noPadding,
  onChange,
  indeterminate,
  inputProps,
  selectAll,
  ...props
}) => {
  const onChecked = event => {
    onChange(event);
  };

  return name ? (
    <FormControlLabel
      variant="checkbox"
      typestyle={labelVariant}
      sx={{ whiteSpace: "noWrap", mr: 0 }}
      label={name}
      {...props}
      control={
        <CommonCheckbox
          sx={[
            {
              "& .MuiSvgIcon-root": {
                fontSize: 18
              }
            }
          ]}
          noPadding={noPadding}
          inputProps={inputProps}
          indeterminate={indeterminate}
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange && onChecked}
        />
      }
    />
  ) : (
    <CommonCheckbox
      noPadding={noPadding}
      inputProps={inputProps}
      indeterminate={indeterminate}
      checked={checked}
      disabled={disabled}
      name={name}
      onChange={onChange && onChecked}
    />
  );
};

export default FilterCheckbox;
