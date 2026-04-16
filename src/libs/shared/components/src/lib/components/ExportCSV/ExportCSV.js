import { IconButton, useTheme } from "@mui/material";
import Icon from "../Icon/Icon";

const ExportCSV = ({ chartRef, callback }) => {
  const theme = useTheme();

  return (
    <IconButton id="CSV_DOWNLOAD_ICON" onClick={callback} aria-label="export-csv" name="export-csv">
      <Icon type="CSVDownloadIcon" style={{ color: theme.palette.text.color }} />
    </IconButton>
  );
};

export default ExportCSV;
