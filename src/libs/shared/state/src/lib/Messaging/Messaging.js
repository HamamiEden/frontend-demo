import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../Socket/Socket";

const MessagingContext = React.createContext();

const MessagingProvider = React.memo(({ children }) => {
  const SnackbarTypes = useRef({
    ERROR_MESSAGE: "errorMessage",
    SUCCESS_MESSAGE: "successMessage",
    DOWNLOAD: "download"
  }).current;

  const initialMessageState = {
    type: "",
    message: "",
    link: null,
    open: false,
    autoHide: false,
    action: null
  };

  const [messageData, setMessageData] = useState(initialMessageState);
  const socket = useContext(SocketContext);

  const showSnackBar = useCallback(
    (message, type, link = null, autoHide = false, action = null) => setMessageData({ message, type, link, open: true, autoHide, action }),
    []
  );

  useEffect(() => {
    socket.on("GlobalMessaging", data => {
      if (data.data.type === "message") {
        setMessageData({ message: data.data.message, open: true });
      } else if (data.data.error) {
        setMessageData({
          message: data.data.message,
          type: SnackbarTypes.ERROR_MESSAGE,
          open: true
        });
      }
    });
  }, [socket, SnackbarTypes]);

  const handleClose = () => {
    setMessageData(initialMessageState);
  };

  return (
    <MessagingContext.Provider value={{ showSnackBar, messageData, SnackbarTypes, handleClose }}>{children}</MessagingContext.Provider>
  );
});

export { MessagingContext, MessagingProvider };
