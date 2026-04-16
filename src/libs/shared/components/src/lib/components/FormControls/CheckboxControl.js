import { useController } from "react-hook-form";
import { Checkbox, FormControlLabel, InputLabel } from "@mui/material";
import Field from "./Field";

const CheckboxControl = ({ control, name, rules, label, labelPlacement, disabled, required, ...props }) => {
  const {
    field: { ref, ...field },
    formState: { disabled: isFormDisabled }
  } = useController({
    name,
    control,
    rules
  });

  return (
    <Field required={required}>
      <FormControlLabel
        variant="checkbox"
        label={
          label ? (
            <InputLabel
              htmlFor={field.name}
              component="label"
              required={required}
              sx={{ lineHeight: "14px", marginLeft: 0, paddingBottom: 0 }}
            >
              {label}
            </InputLabel>
          ) : null
        }
        labelPlacement={labelPlacement}
        control={<Checkbox {...field} id={field.name} checked={field.value || false} disabled={isFormDisabled || disabled} {...props} />}
        sx={{ height: "auto", marginRight: 0 }}
      />
    </Field>
  );
};

export default CheckboxControl;
