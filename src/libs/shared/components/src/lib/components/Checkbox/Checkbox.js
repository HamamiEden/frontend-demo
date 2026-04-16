import { forwardRef } from "react";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

const Checkbox = forwardRef(
  ({ label = "", disabled, checked, noPadding, onChange, indeterminate, inputProps, selectAll, ...props }, ref) => {
    const onChecked = event => {
      onChange(event);
    };

    const checkbox = (
      <MuiCheckbox
        ref={ref}
        sx={noPadding ? { p: 0 } : undefined}
        inputProps={inputProps}
        indeterminate={indeterminate}
        checked={checked}
        disabled={disabled}
        disableRipple
        name={props.name || label}
        onChange={onChange && onChecked}
      />
    );

    return label ? <FormControlLabel variant="checkbox" label={label} {...props} control={checkbox} /> : checkbox;
  }
);

export default Checkbox;
