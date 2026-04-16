import React, { useContext } from "react";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import Checkbox from "../../../../Checkbox/Checkbox";
import SortIcon from "../../../../SortIcon/SortIcon";
import { ListContext } from "../../../ListProvider";
import { TableContext } from "../TableProvider";

const TableHeaders = () => {
  const translate = useTranslations();
  const {
    state: {
      headers,
      sortBy,
      orderBy,
      settings: { canViewActions, expandSettings, entityIdentifier, headerActionsStyles }
    },
    components: { HeaderComponent },
    actions: { handleSort },
    renders: { renderHeaderRow, renderHeaderCell }
  } = useContext(ListContext);

  const { isSelectAllChecked, isIndeterminate, onSelectAllClick } = useContext(TableContext);

  return (
    <TableHead>
      {renderHeaderRow ? (
        renderHeaderRow(headers)
      ) : (
        <TableRow sx={{ height: "50px" }}>
          {canViewActions && (
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={isIndeterminate(entityIdentifier)}
                checked={isSelectAllChecked(entityIdentifier)}
                onChange={e => onSelectAllClick(e.target.checked, entityIdentifier)}
                inputProps={{ "aria-label": "select all" }}
                selectAll={true}
              />
            </TableCell>
          )}
          {expandSettings && <TableCell padding="checkbox"></TableCell>}
          {headers.map((header, i) =>
            renderHeaderCell ? (
              <React.Fragment key={i}>{renderHeaderCell(header)}</React.Fragment>
            ) : header.headerComponent && HeaderComponent ? (
              <HeaderComponent
                key={i}
                module={header.headerComponent}
                header={header}
                handleSort={handleSort}
                sortBy={sortBy}
                orderBy={orderBy}
                SortAsc={SortIcon}
              />
            ) : (
              <TableCell
                key={i}
                align={header.align ? header.align : "left"}
                sx={{
                  "&.MuiTableCell-root.MuiTableCell-head": {
                    "& .MuiTableSortLabel-root": {
                      paddingLeft: header.align ? "20px" : ""
                    },
                    ...header.style,
                    ...header?.headerStyle
                  }
                }}
                padding={header.padding ? header.padding : "normal"}
              >
                {header.hideSort ? (
                  translate(header.name)
                ) : (
                  <TableSortLabel
                    onClick={() => handleSort(header.id)}
                    active={sortBy === header.id}
                    direction={sortBy === header.id ? orderBy : "asc"}
                    IconComponent={SortIcon}
                  >
                    {translate(header.name)}
                  </TableSortLabel>
                )}
              </TableCell>
            )
          )}
          {/* Actions column */}
          <TableCell sx={{ ...headerActionsStyles }} padding="none"></TableCell>
        </TableRow>
      )}
    </TableHead>
  );
};

export default TableHeaders;
