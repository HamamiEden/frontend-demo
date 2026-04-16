import { TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useField } from "formik";

const inputProps = {
  sx: {
    "& .MuiIconButton-root": {
      height: 20,
      width: 20,
      mr: -1.125,
      "& .MuiSvgIcon-root": {
        fontSize: "1rem",
        flexShrink: 0
      }
    }
  }
};

export default function TimePickerRange({ fromName, toName, handleChange, ...props }) {
  const [fieldFrom, metaFrom] = useField(fromName);
  const [fieldTo, metaTo] = useField(toName);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        {...props}
        name={fromName}
        value={fieldFrom.value}
        InputAdornmentProps={inputProps}
        onChange={newValue => {
          handleChange(fromName, newValue);
        }}
        renderInput={params => (
          <TextField
            sx={{ "& .MuiOutlinedInput-root": { width: "100px" } }}
            {...params}
            {...fieldFrom}
            error={metaFrom.touched && Boolean(metaFrom.error)}
            helperText={(metaFrom.touched && metaFrom.error) || " "}
            slotProps={{
              formHelperText: {
                sx: {
                  position: "absolute",
                  top: "100%"
                }
              }
            }}
          />
        )}
      />
      <Typography variant="secondaryColor" component="span" sx={{ fontSize: "12px", fontWeight: 400, p: 0.6, pt: 1, lineHeight: "31px" }}>
        to
      </Typography>
      <TimePicker
        {...props}
        name={toName}
        value={fieldTo.value}
        InputAdornmentProps={inputProps}
        onChange={newValue => {
          handleChange(toName, newValue);
        }}
        renderInput={params => (
          <TextField
            sx={{ "& .MuiOutlinedInput-root": { width: "100px" } }}
            {...params}
            {...fieldTo}
            error={metaTo.touched && Boolean(metaTo.error)}
            helperText={(metaTo.touched && metaTo.error) || " "}
            slotProps={{
              formHelperText: {
                sx: {
                  position: "relative",
                  top: "100%",
                  overflowWrap: true
                }
              }
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
