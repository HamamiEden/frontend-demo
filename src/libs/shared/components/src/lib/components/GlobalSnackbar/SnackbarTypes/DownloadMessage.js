import React from "react";
import { IconButton, Snackbar } from "@mui/material";
import Icon from "../../Icon/Icon";

const DownloadMessage = ({ closeSnackBar, link, open }) => {
  const handleDownloadFile = () => {
    window.open(link, "_blank");
    closeSnackBar();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      onClose={closeSnackBar}
      message={"Your download is ready"}
      action={
        <React.Fragment>
          <IconButton variant="secondary" size="small" aria-label="download" color="inherit" onClick={handleDownloadFile} name="download">
            <Icon type="GetApp" fontSize="medium" />
          </IconButton>
          <IconButton variant="secondary" size="small" aria-label="close" color="inherit" onClick={closeSnackBar} name="close">
            <Icon type="Close" fontSize="medium" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

export default DownloadMessage;
