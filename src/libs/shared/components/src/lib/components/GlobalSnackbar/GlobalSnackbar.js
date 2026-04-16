import { useContext } from "react";
import { MessagingContext } from "@csms-consoles/shared-state";
import DownloadMessage from "./SnackbarTypes/DownloadMessage";
import ErrorMessage from "./SnackbarTypes/ErrorMessage";
import SuccessMessage from "./SnackbarTypes/SuccessMessage";

const GlobalSnackbar = () => {
  const { messageData, SnackbarTypes, handleClose } = useContext(MessagingContext);
  const closeSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose();
  };

  const SnackbarComponent = () => {
    switch (messageData.type) {
      case SnackbarTypes.SUCCESS_MESSAGE:
        return <SuccessMessage message={messageData.message} closeSnackBar={closeSnackBar} open={messageData.open} />;
      case SnackbarTypes.ERROR_MESSAGE:
        return (
          <ErrorMessage
            message={messageData.message}
            closeSnackBar={closeSnackBar}
            open={messageData.open}
            autoHide={messageData.autoHide}
            action={messageData.action}
          />
        );
      case SnackbarTypes.DOWNLOAD:
        return <DownloadMessage link={messageData.link} closeSnackBar={closeSnackBar} open={messageData.open} />;
      default:
        return <SuccessMessage message={messageData.message} closeSnackBar={closeSnackBar} open={messageData.open} />;
    }
  };

  return (
    <div>
      <SnackbarComponent />
    </div>
  );
};

export default GlobalSnackbar;
