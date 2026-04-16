import { IconButton, Tooltip } from "@mui/material";
import useExport from "../../Hooks/useExport";
import Icon from "../Icon/Icon";

const ExportListIcon = ({ tooltip = "", filters, entity, exportName, accountId, entityId }) => {
  const { handleExport } = useExport({ filters, entity, exportName, accountId, entityId });
  return (
    <Tooltip title={tooltip} placement="bottom-start" arrow>
      <IconButton onClick={handleExport} size="medium" aria-label="export-list" name="export-list">
        <Icon type="ExportIcon" />
      </IconButton>
    </Tooltip>
  );
};

export default ExportListIcon;
