import React, { useContext } from "react";
import { TableBody } from "@mui/material";
import { ListContext } from "../../../ListProvider";
import { TableContext } from "../TableProvider";
import Row from "./Row/Row";

const TableRows = () => {
  const {
    state: {
      rows: { data },
      headers,
      settings: { canViewActions, date, expandSettings, entityIdentifier },
      ExpandComponent,
      ExpandButtonComponent,
      EditComponent,
      TableActions,
      filters,
      entityType
    },
    actions: { onRowClicked, reload },
    components: { NewRow, ActionComponent },
    renders: { renderRow }
  } = useContext(ListContext);
  const { onSelectRow, selectedRows, selectedActions, isRowSelected, resetSelections } = useContext(TableContext);

  if (!Array.isArray(data)) {
    return <TableBody></TableBody>;
  }

  return (
    <TableBody>
      <NewRow>
        <Row
          onClick={() => {}}
          headers={headers}
          onSelectRow={onSelectRow}
          isSelected={true}
          hideMode={true}
          showCB={canViewActions}
          ActionComponent={ActionComponent}
          filters={filters}
          entityType={entityType}
          date={date}
          entityIdentifier={entityIdentifier}
          TableActions={TableActions}
          EditComponent={EditComponent}
          reload={reload}
          newRowMode
        />
      </NewRow>
      {data.map((row, i) =>
        renderRow ? (
          <React.Fragment key={row.id || i}>{renderRow(headers, row, isRowSelected(row, entityIdentifier), reload)}</React.Fragment>
        ) : (
          <Row
            onClick={() => onRowClicked(row)}
            headers={headers}
            row={row}
            key={i}
            index={i}
            onSelectRow={onSelectRow}
            isSelected={isRowSelected(row, entityIdentifier)}
            showCB={canViewActions}
            ActionComponent={ActionComponent}
            filters={filters}
            entityType={entityType}
            date={date}
            expandSettings={expandSettings}
            ExpandComponent={expandSettings && ExpandComponent ? ExpandComponent : null}
            ExpandButtonComponent={ExpandButtonComponent}
            EditComponent={EditComponent}
            entityIdentifier={entityIdentifier}
            TableActions={TableActions}
            reload={reload}
            resetSelections={resetSelections}
            selectedRows={selectedRows}
            selectedActions={selectedActions}
          />
        )
      )}
    </TableBody>
  );
};

export default TableRows;
