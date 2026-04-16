import { Alert, Snackbar } from "@mui/material";
import Icon from "../../Icon/Icon";
import style from "./style";

const ErrorMessage = ({ message, closeSnackBar, open, autoHide, action = null }) => (
  <Snackbar
    open={open}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    autoHideDuration={autoHide ? 6000 : null}
    onClose={closeSnackBar}
  >
    <Alert
      data-test-id="SNACKBAR_ERROR_ALERT"
      onClose={closeSnackBar}
      colors="magentaError"
      sx={style}
      icon={<Icon type="ErrorIcon" />}
      action={action}
    >
      {message || "Error"}
    </Alert>
  </Snackbar>
);

export default ErrorMessage;
