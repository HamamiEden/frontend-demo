import { SortDirection } from "react-virtualized";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TableCell, TableSortLabel } from "@mui/material";
import { Convertors } from "@csms-consoles/shared-utils";

const HeaderRenderer = ({
  label,
  columnIndex,
  sortBy,
  dataKey,
  headerHeight,
  columns,
  sortDirection,
  scaleType,
  rateType,
  isScalable,
  tableOptions
}) => {
  const direction = {
    [SortDirection.ASC]: "asc",
    [SortDirection.DESC]: "desc"
  };
  return (
    <TableCell
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        height: headerHeight,
        flex: 1,
        border: "unset",
        cursor: "initial",
        "&.MuiTableCell-root.MuiTableCell-head": {
          fontSize: 14,
          backgroundColor: "dialog.background",
          whiteSpace: "nowrap",
          padding: tableOptions && tableOptions.padding ? tableOptions.padding : null,
          "& .MuiTableSortLabel-root": {
            paddingLeft: "20px"
          }
        }
      }}
      variant="head"
      align={"center"}
    >
      <TableSortLabel active={sortBy === dataKey} direction={direction[sortDirection]} IconComponent={ArrowDropDownIcon}>
        {isScalable && (rateType || scaleType) ? label + " (" + Convertors.unitConverter(rateType, scaleType) + ")" : label}
      </TableSortLabel>
    </TableCell>
  );
};

export default HeaderRenderer;
