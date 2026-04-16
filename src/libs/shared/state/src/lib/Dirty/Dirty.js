import { createContext, memo, useCallback, useMemo, useState } from "react";
import Close from "@mui/icons-material/Close";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from "@mui/material";

const DEFAULT_TYPE = "default";

const DirtyContext = createContext();

const DirtyProvider = memo(({ children }) => {
  const [dirty, setDirtyState] = useState({ default: false });
  const [dirtySettings, setDirtySettings] = useState({ isModalOpened: false });
  const { isModalOpened, callBack, dirtyType } = dirtySettings;

  const getDirty = useCallback((type = DEFAULT_TYPE) => dirty[type], [dirty]);

  const setDirty = useCallback(
    (state, type = DEFAULT_TYPE) => {
      setDirtyState(prev => {
        if (prev[type] !== state) return { ...prev, [type]: state };

        return prev;
      });
    },
    [setDirtyState]
  );

  const handleDirtyClose = useCallback(
    (cb, type = DEFAULT_TYPE) => {
      if (typeof cb !== "function") return;

      if (dirty[type]) {
        setDirtySettings({ isModalOpened: true, callBack: cb, dirtyType: type });
        return;
      }

      return cb();
    },
    [dirty]
  );

  const handleDialogClose = useCallback(() => {
    setDirtySettings(prev => ({ ...prev, isModalOpened: false }));
  }, []);

  const handleDialogDismiss = useCallback(() => {
    setDirty(false, dirtyType);
    handleDialogClose();
    return callBack();
  }, [setDirty, handleDialogClose, dirtyType, callBack]);

  const value = useMemo(() => {
    return { getDirty, setDirty, handleDirtyClose };
  }, [getDirty, setDirty, handleDirtyClose]);

  return (
    <DirtyContext.Provider value={value}>
      <Dialog title="Dirty Dialog" open={isModalOpened} onClose={handleDialogClose} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Typography component="span" fontSize={16} fontWeight={500}>
            Discard changes?
          </Typography>
          <IconButton variant="closeDialog" onClick={handleDialogClose} aria-label="close-dialog" name="close-dialog">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ py: "18px" }}>
          <DialogContentText>
            You have unsaved changes.
            <br />
            Do you want to discard the changes and continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="borderless" disableRipple onClick={handleDialogClose} aria-label="cancel" name="cancel">
            Cancel
          </Button>
          <Button variant="danger" disableRipple onClick={handleDialogDismiss} aria-label="discard" name="discard">
            Discard
          </Button>
        </DialogActions>
      </Dialog>
      {children}
    </DirtyContext.Provider>
  );
});

export { DirtyContext, DirtyProvider };
