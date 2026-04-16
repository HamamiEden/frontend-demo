import { Dialog, DialogContent, DialogTitle, IconButton, useTheme } from "@mui/material";
import Icon from "../Icon/Icon";

const SupportAction = ({ handleClose, open }) => {
  const theme = useTheme();

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root.MuiDialog-paper": {
          maxWidth: "100%"
        }
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="feedback-title"
    >
      <DialogTitle sx={{ padding: 0 }} id="feedback-title">
        <IconButton sx={{ top: 10, right: 20 }} variant="closeDialog" onClick={handleClose} aria-label="close-dialog" name="close-dialog">
          <Icon type="Close" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: 0, border: "none" }}>
        <iframe
          width="680"
          height="745"
          title="feedback"
          style={{ border: "none" }}
          src={`https://www.surveymonkey.com/r/${
            theme && theme.palette && theme.palette.mode === "light" ? "JWNSYY8" : "PDTQWSJ"
          }?embedded=1`}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SupportAction;
