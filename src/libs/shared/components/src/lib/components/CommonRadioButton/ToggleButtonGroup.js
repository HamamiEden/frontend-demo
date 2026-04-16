import { useCallback } from "react";
import { FormControl, ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton } from "@mui/material";
import { useField } from "formik";

const ToggleButtonGroup = ({ list, name, handleChange, toggleButtonProps, defaultValue, onBlur, ...props }) => {
  const [field, meta] = useField(name);

  const onChange = useCallback(
    (_, newValue) => {
      if (newValue !== null && newValue !== field.value) {
        handleChange(name, newValue);
      }
    },
    [handleChange, name, field]
  );

  return (
    <FormControl fullWidth error={meta && meta.touched && meta.error}>
      <MuiToggleButtonGroup variant="tabs" exclusive {...field} {...props} onChange={onChange} onBlur={onBlur}>
        {list &&
          list.map(option => (
            <ToggleButton key={option.id} value={option.id} variant="tab" {...toggleButtonProps} disableRipple>
              {option.name}
            </ToggleButton>
          ))}
      </MuiToggleButtonGroup>
    </FormControl>
  );
};

export default ToggleButtonGroup;
