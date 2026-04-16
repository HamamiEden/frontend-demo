import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import Icon from "../../Icon/Icon";
import Item from "./Item/Item";

const CollapsedItems = ({ childs, name, onClick, icon, sidebarStatus }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        id={"CollapsedItems_" + name}
        button
        onClick={handleClick}
        aria-label={"CollapsedItems_" + name}
        alt={"CollapsedItems_" + name}
      >
        <ListItemIcon>
          <Tooltip title={sidebarStatus ? "" : name} arrow>
            <Icon type={icon} />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {childs.map((child, i) => (
            <Item item={child} sidebarStatus={sidebarStatus} key={i} handleMobileToggle={onClick} child />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapsedItems;
