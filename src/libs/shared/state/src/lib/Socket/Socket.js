import React, { useEffect } from "react";
import { io } from "socket.io-client";

const path = process.env.NODE_ENV === "development" ? null : "/ws/socket.io";
const url = process.env.NODE_ENV === "development" ? process.env.NX_REACT_APP_API_SOCKET_URL : window.location.origin;

const socket = io(url, {
  path,
  withCredentials: true,
  secure: true,
  autoConnect: false
});

export const SocketContext = React.createContext();

export const SocketProvider = props => {
  useEffect(() => {
    socket.connect();
  }, []);

  return <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>;
};
