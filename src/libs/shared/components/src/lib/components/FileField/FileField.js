import React, { useCallback } from "react";
import { Box, FormControl, FormHelperText, IconButton, InputLabel, Typography } from "@mui/material";
import { useField } from "formik";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";

const FileField = ({ label, ...props }) => {
  const translate = useTranslations();
  const [, meta, helpers] = useField(props.name);

  const selectedFile = meta.value;
  const showError = meta.touched && meta.error;

  const handleChange = useCallback(
    event => {
      const file = event.target.files[0];

      helpers.setTouched(true, false);
      helpers.setValue(file);
    },
    [helpers]
  );

  const onDeleteFile = useCallback(() => {
    helpers.setValue(null);
  }, [helpers]);

  return (
    <>
      {selectedFile ? (
        <FormControl variants="fileSelectedControl">
          <Box>
            <Icon type="PaperIcon" />
          </Box>

          <Typography variant="caption" component="span">
            {selectedFile.name}
          </Typography>

          <IconButton variant="caution" size="small" onClick={onDeleteFile} aria-label="delete-file" name="delete-file">
            <Icon type="DeleteIcon" />
          </IconButton>
        </FormControl>
      ) : (
        <FormControl component="label" variants="fileUploadControl" sx={{ cursor: props.disabled ? "not-allowed" : "pointer" }}>
          <input type="file" onChange={handleChange} {...props} />

          <InputLabel component="span" required={props.required}>
            {label}
          </InputLabel>

          <FormHelperText>
            <Typography component="span" variant="caption">
              {translate("BROWSE")}
            </Typography>
          </FormHelperText>
        </FormControl>
      )}

      {showError && <FormHelperText error>{meta.error}</FormHelperText>}
    </>
  );
};

export default FileField;
