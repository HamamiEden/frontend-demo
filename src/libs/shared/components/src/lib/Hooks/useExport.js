import { useContext } from "react";
import { uuid } from "short-uuid";
import { MessagingContext } from "@csms-consoles/shared-state";
import { SocketContext } from "@csms-consoles/shared-state";
import { downloadFile } from "@csms-consoles/shared-utils";

const useExport = ({ filters, entity, exportName, accountId, entityId }) => {
  const socket = useContext(SocketContext);
  const { showSnackBar, SnackbarTypes } = useContext(MessagingContext);

  const handleExport = async type => {
    const id = uuid();
    socket.emit(exportName, {
      filters,
      entity,
      id,
      accountId: accountId,
      entityId
    });
    socket.on(id, data => {
      if (data.progress) {
        return showSnackBar("We are working on it, your export will be available soon.");
      }
      if (data.error) {
        showSnackBar(data.message, SnackbarTypes.ERROR_MESSAGE);
        socket.off(id);
      } else {
        downloadFile(data.fileType, data.fileName, data.data);
        socket.off(id);
      }
    });
  };
  return { handleExport };
};

export default useExport;
