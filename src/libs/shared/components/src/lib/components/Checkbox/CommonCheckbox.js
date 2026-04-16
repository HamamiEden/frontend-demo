import { Checkbox as MuiCheckbox } from "@mui/material";

const CommonCheckbox = ({ disabled, checked, noPadding, onChange, indeterminate, inputProps, selectAll, name = "", ...props }) => {
  const onChecked = event => {
    onChange(event);
  };

  return (
    <MuiCheckbox
      sx={[
        noPadding && {
          p: 0
        }
      ]}
      inputProps={inputProps}
      indeterminate={indeterminate}
      checked={checked}
      disabled={disabled}
      disableRipple
      name={name}
      onChange={onChange && onChecked}
      {...props}
    />
  );
};

export default CommonCheckbox;
