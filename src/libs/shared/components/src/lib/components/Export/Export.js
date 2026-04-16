import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material";
import Icon from "../Icon/Icon";

const Export = ({ menuOptions, callback }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleExport = event => {
    setAnchorEl(event.currentTarget);
    if (!menuOptions) handleCallback();
  };

  const handleCallback = option => {
    if (typeof callback === "function") callback(option);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="defaultSmall"
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl)}
        disableElevation
        disableRipple
        onClick={handleExport}
        startIcon={<Icon type={"FileIcon"} style={{ marginRight: 2, width: 15, height: 15, marginBottom: 1 }} />}
        aria-label="export"
        name="export"
      >
        Export
      </Button>
      {menuOptions && menuOptions.length && (
        <Menu
          id="action-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "right",
          // }}
          // transformOrigin={{
          //   vertical: "top",
          //   horizontal: "right",
          // }}
          variant="menu"
          elevation={theme.elevations.menu}
          onClose={handleClose}
          sx={{
            "& .MuiMenu-paper": {
              width: "90px"
            }
          }}
        >
          {menuOptions.map((option, i) => (
            <MenuItem key={i} onClick={() => handleCallback(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default Export;
