import { useContext, useState } from "react";
import { Grid2 as Grid, IconButton, ListItemText, Menu, MenuItem, Tooltip } from "@mui/material";
import { ListSettingsContext } from "@csms-consoles/shared-state";
import Icon from "../../../../Icon/Icon";

const HEADERS = "headers";

const ColumnSelector = ({ headers = [], selectedHeaders = [], entityType }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setListSettingsByType } = useContext(ListSettingsContext);

  const handleAddClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectedColumn = (column, isSelected) => {
    const updatedColumns = isSelected ? selectedHeaders.filter(item => item.id !== column.id) : [...selectedHeaders, column];

    setListSettingsByType(entityType, HEADERS, updatedColumns);
  };

  return headers?.length ? (
    <Grid>
      <Tooltip title="Select columns" arrow placement="bottom-end">
        <IconButton onClick={handleAddClick} aria-label="select-columns" name="select-columns">
          <Icon type="ColumnsIcon" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        type="selectMenu"
      >
        {headers?.map(column => {
          const isSelected = selectedHeaders.some(item => item.id === column.id);

          return column.id ? (
            <MenuItem
              key={column.id}
              value={column.id}
              variants="select"
              onClick={() => handleSelectedColumn(column, isSelected)}
              selected={isSelected}
              disableRipple
            >
              <ListItemText primary={column.name || column.id} variant="entitySelectItemText" />
            </MenuItem>
          ) : null;
        })}
      </Menu>
    </Grid>
  ) : null;
};

export default ColumnSelector;
