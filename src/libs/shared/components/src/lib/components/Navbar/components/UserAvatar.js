import { useState } from "react";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../../Icon/Icon";

const UserAvatar = ({ toggleDrawer, UserProfileList }) => {
  const translate = useTranslations();
  const [anchorE2, setAnchorE2] = useState(null);
  const { user, logout } = useAuth0();
  const handleClose = () => {
    setAnchorE2(null);
  };

  const handleAvatarClick = e => {
    setAnchorE2(e.currentTarget);
  };

  const handleSettings = () => {
    handleClose();
    toggleDrawer(true);
  };

  return (
    <>
      <Avatar
        onClick={handleAvatarClick}
        variant="userAvatar"
        alt={user.nickname}
        src={user.picture}
        role="button"
        tabIndex="0"
        className="button"
        aria-label="user-avatar"
      />
      <Menu
        id="user-menu"
        anchorEl={anchorE2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        variant="menu"
        open={Boolean(anchorE2)}
        onClose={handleClose}
        sx={{
          minWidth: "elementWidth.user",
          "& .MuiPaper-root.MuiMenu-paper.MuiPopover-paper": {
            borderRadius: "8px"
          }
        }}
      >
        <List disablePadding>
          <ListItem variant="menu">
            <ListItemAvatar>
              <Avatar alt={user.nickname} src={user.picture} />
            </ListItemAvatar>
            <ListItemText primary={user.nickname} secondary={user.email} />
          </ListItem>
          {UserProfileList && <UserProfileList handleClose={handleClose} />}
          <ListItemButton disableRipple variant="menu" id="user_profile_settings" onClick={handleSettings}>
            <ListItemIcon variant="menu">
              <IconButton aria-label="user-profile-settings" name="user-profile-settings">
                <Icon type="SettingsIcon" />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={translate("User Profile Settings")} />
          </ListItemButton>
          <ListItemButton
            disableRipple
            variant="menu"
            id="UserAvatar_logout"
            onClick={() => logout({ returnTo: window.location.origin, federated: true })}
          >
            <ListItemIcon variant="menu">
              <IconButton aria-label="logout-user-avatar" name="logout-user-avatar">
                <Icon type="LogoutIcon" />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={translate("Logout")} />
          </ListItemButton>
        </List>
      </Menu>
    </>
  );
};

export default UserAvatar;
