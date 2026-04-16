import React, { FC, ReactNode } from "react";
import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface ITextfield {
  name: string;
  label?: ReactNode;
  required?: boolean;
  errorPlaceholder?: string;
}

const Textfield: FC<ITextfield & TextFieldProps> = ({ name, label, errorPlaceholder = null, ...props }) => {
  const [field, meta] = useField(name);
  const error = meta && meta.touched && meta.error;

  return (
    <>
      {label && (
        <InputLabel component="label" required={props.required}>
          {label}
        </InputLabel>
      )}
      <TextField {...field} {...props} error={!!error} helperText={error || errorPlaceholder} />
    </>
  );
};

export default Textfield;
