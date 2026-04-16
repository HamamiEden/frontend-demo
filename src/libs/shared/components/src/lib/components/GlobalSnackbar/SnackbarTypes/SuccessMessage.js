import { Alert, Snackbar } from "@mui/material";
import Icon from "../../Icon/Icon";
import style from "./style";

const SuccessMessage = ({ message, closeSnackBar, open }) => (
  <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={open} autoHideDuration={6000} onClose={closeSnackBar}>
    <Alert
      data-test-id="SNACKBAR_SUCCESS_ALERT"
      onClose={closeSnackBar}
      colors="seaGreenSuccess"
      sx={style}
      icon={<Icon type="SuccessIcon" />}
    >
      {message || "Success"}
    </Alert>
  </Snackbar>
);

export default SuccessMessage;
