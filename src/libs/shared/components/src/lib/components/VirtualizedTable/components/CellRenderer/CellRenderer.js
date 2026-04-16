import { Skeleton, TableCell } from "@mui/material";

const CellRenderer = ({ cellData, columnIndex, onRowClick, rowHeight, columns, loading }) => {
  return (
    <TableCell
      component="div"
      sx={{
        flex: 1,
        borderBottom: "1px solid",
        borderColor: theme => (theme.palette.mode === "light" ? "#E9F1F3" : "#e9f1f34d"),
        fontSize: 12,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        height: rowHeight,
        ...(onRowClick === null
          ? {
              cursor: "initial"
            }
          : {})
      }}
      variant="body"
      align={"left"} //(columnIndex != null && columns[columnIndex].numeric) || false ? "right" : "left"}
    >
      {loading ? (
        <Skeleton variant="text" width="100%" alt="loading" aria-busy="true" />
      ) : columnIndex != null && columns[columnIndex].numeric ? (
        cellData.toLocaleString()
      ) : (
        cellData
      )}
    </TableCell>
  );
};

export default CellRenderer;
