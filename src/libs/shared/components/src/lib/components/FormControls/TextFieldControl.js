import { useController } from "react-hook-form";
import { merge } from "lodash";
import { Grid2 as Grid, IconButton, TextField as MuiTextField, Tooltip, Typography } from "@mui/material";
import Icon from "../Icon/Icon";
import Field from "./Field";

const getInputProps = error => ({
  InputProps: error
    ? {
        startAdornment: (
          <Tooltip title={error?.message} slotProps={{ tooltip: { sx: { maxWidth: "150px" } } }} placement="bottom-start" arrow>
            <IconButton size="small" hover="noBGHover" sx={{ height: "auto" }} disableRipple aria-label="info" name="info">
              <Icon type="InfoIcon" />
            </IconButton>
          </Tooltip>
        )
      }
    : {}
});

const getTextFieldStyle = (error, sx) => {
  const baseStyle = {
    "& .MuiOutlinedInput-root": {
      paddingLeft: error ? "4px" : "",
      "& .MuiOutlinedInput-input": {
        paddingLeft: error ? "0px" : ""
      },
      "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme => (error ? theme.palette.failedIcon.color : "")
      },
      "& svg": {
        color: theme => theme.palette.failedIcon.color
      }
    }
  };
  return {
    sx: merge(baseStyle, sx)
  };
};

const TextFieldControl = ({
  control,
  name,
  rules,
  label,
  tooltipProps,
  fieldStyles,
  formHelperTextStyles,
  options,
  disabled,
  unit,
  hideAsterisk,
  disableErrorMsg,
  inlineErrorMessage,
  sx = {},
  ...props
}) => {
  const {
    field: { value, ...field },
    fieldState: { error },
    formState: { disabled: isFormDisabled }
  } = useController({
    name,
    control,
    rules
  });

  return (
    <Field
      errorMsg={disableErrorMsg || inlineErrorMessage ? "" : error?.message}
      required={!!rules?.required && !hideAsterisk}
      label={label}
      tooltipProps={tooltipProps}
      formHelperTextStyles={formHelperTextStyles}
      fieldStyles={fieldStyles}
    >
      <Grid container gap="5px" alignItems="center">
        <Grid>
          <MuiTextField
            value={value?.toString() || ""}
            {...field}
            {...props}
            disabled={isFormDisabled || disabled}
            error={Boolean(error?.message)}
            {...(inlineErrorMessage ? getInputProps(error, sx) : { sx })}
            {...(inlineErrorMessage ? getTextFieldStyle(error, sx) : { sx })}
          />
        </Grid>
        {unit && (
          <Grid>
            <Typography fontSize={12} lineHeight="14px">
              {unit}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Field>
  );
};

export default TextFieldControl;
