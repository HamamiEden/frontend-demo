import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import { Box, Collapse, Grid2 as Grid, IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import Checkbox from "../../../../../Checkbox/Checkbox";
import Icon from "../../../../../Icon/Icon";
import { ListContext } from "../../../../ListProvider";
import Cell from "./Cell/Cell";

const Row = ({
  row,
  headers,
  onSelectRow,
  isSelected,
  onClick,
  showCB,
  ActionComponent,
  ExpandComponent,
  ExpandButtonComponent,
  EditComponent,
  TableActions,
  entityType,
  date = {},
  expandSettings,
  entityIdentifier,
  reload,
  resetSelections,
  selectedRows,
  selectedActions,
  newRowMode,
  index
}) => {
  const [checked, setChecked] = useState(isSelected);
  const [nonIdExpand, setNonIdExpand] = useState(false);

  const {
    state: {
      highlight,
      checkDisabledRow,
      expand,
      setExpand,
      isUTC,
      settings: { rowClassField },
      search
    },
    actions: { isActionDisabled, handleCloseAction },
    renders: { renderRowCell, renderRow }
  } = useContext(ListContext);

  const isRowDisabled = checkDisabledRow ? checkDisabledRow(row) : row?.rowDisabled ? row?.rowDisabled : false;
  const isRowExpanded = useMemo(() => (expand ? expand === get(row, entityIdentifier) : false), [entityIdentifier, expand, row]);
  const isRowExpandDisabled = row?.isExpandDisabled;

  useEffect(() => {
    setChecked(isSelected);
  }, [isSelected]);

  const handleChange = event => {
    setChecked(event.target.checked);
    onSelectRow(event.target.checked, row, entityIdentifier);
  };

  const handleExpandRow = useCallback(() => {
    if (!entityIdentifier) {
      setNonIdExpand(prv => !prv);
      return;
    }

    setExpand && setExpand(expand !== get(row, entityIdentifier) ? get(row, entityIdentifier) : "");
  }, [entityIdentifier, expand, row, setExpand]);

  const Action = useCallback(
    ({ row, headerId, value, componentType, header }) => {
      return (
        <ActionComponent
          action={{ componentType }}
          entityType={entityType}
          entityProp={headerId}
          entityIdentifier={entityIdentifier}
          selected={row}
          rowIndex={index}
          value={value}
          header={header}
          onSelectRow={onSelectRow}
          isSelected={isSelected}
          selectedRows={selectedRows}
          selectedActions={selectedActions}
          handleCloseAction={handleCloseAction}
          reload={reload}
          isRowDisabled={isRowDisabled}
        />
      );
    },
    [
      handleCloseAction,
      entityIdentifier,
      entityType,
      ActionComponent,
      onSelectRow,
      isSelected,
      selectedRows,
      selectedActions,
      reload,
      isRowDisabled,
      index
    ]
  );

  const getEditComponent = actions => {
    if (!actions) return false;
    const action = actions.find(action => action.editComponent);
    return action && action.actionComponent ? action.actionComponent : false;
  };

  const generateRowClasses = useMemo(() => {
    return () => {
      if (!Array.isArray(rowClassField) || !row) return "";

      const formatClassName = (field, value) =>
        `row-${entityType}-${String(field).replace(/[ .]/g, "_")}-${String(value).replace(/[ .]/g, "_")}`;

      return rowClassField
        .filter(field => get(row, field))
        .map(field => formatClassName(field, get(row, field)))
        .join(" ");
    };
  }, [row, rowClassField, entityType]);

  return renderRow ? (
    renderRow(row, headers, reload)
  ) : EditComponent &&
    (highlight === (row && get(row, entityIdentifier)) || newRowMode || row.isEditMode) &&
    getEditComponent(row?.actions) ? (
    <EditComponent
      module={getEditComponent(row?.actions)}
      data={row}
      headers={headers}
      checked={checked}
      reload={reload}
      entityIdentifier={entityIdentifier}
      entityType={entityType}
      index={index}
    />
  ) : (
    <>
      <TableRow
        className={generateRowClasses()}
        hover={!isRowDisabled}
        selected={checked}
        sx={theme => ({
          cursor: isRowDisabled ? "default" : "pointer",
          height: "50px",
          ...(isRowExpanded
            ? {
                backgroundColor: "tableRow.selected.backgroundColor",
                ...(expandSettings?.rowStyles?.[theme.palette.mode] || {})
              }
            : {})
        })}
      >
        {showCB && (
          <TableCell padding="checkbox">
            <Checkbox checked={checked} onChange={handleChange} />
          </TableCell>
        )}
        {expandSettings && ExpandComponent && (
          <TableCell padding="checkbox">
            <Tooltip
              title={(isRowExpandDisabled ? expandSettings?.disabledTooltip : expandSettings?.tooltip) || ""}
              arrow
              placement="bottom-start"
            >
              <Box component="span">
                {ExpandButtonComponent && expandSettings.expandButton?.component ? (
                  <ExpandButtonComponent
                    component={expandSettings.expandButton.component}
                    componentProps={expandSettings.expandButton.componentProps}
                    handleExpandRow={handleExpandRow}
                    isRowExpandDisabled={isRowExpandDisabled}
                    isRowExpanded={isRowExpanded}
                    rowIndex={index}
                  />
                ) : (
                  <IconButton
                    variant="blue"
                    aria-label="expand row"
                    onClick={handleExpandRow}
                    disabled={isRowExpandDisabled}
                    name="expand-row"
                  >
                    <Icon type={isRowExpanded ? "ExpandLess" : "ExpandMore"} fontSize="small" />
                  </IconButton>
                )}
              </Box>
            </Tooltip>
          </TableCell>
        )}
        {headers.map((header, i) =>
          renderRowCell ? (
            <React.Fragment key={i}>{renderRowCell(row, header)}</React.Fragment>
          ) : (
            <TableCell
              key={i}
              align={header.align ? header.align : "left"}
              onClick={() => !isRowDisabled && onClick()}
              padding={header.padding ? header.padding : "normal"}
              sx={header.style ? header.style : null}
            >
              <Cell
                row={row}
                path={header.id}
                type={header.type}
                entityType={entityType}
                isUTC={isUTC}
                dateFormat={date.format}
                Action={Action}
                componentType={header.componentType}
                header={header}
                isDisabled={isRowDisabled}
                search={search}
              />
            </TableCell>
          )
        )}
        <TableCell align="right" padding="none" className="actionCell">
          <Grid container sx={{ flexWrap: "nowrap", justifyContent: "flex-end", alignItems: "center", gap: 0.625 }}>
            <TableActions
              actions={row?.actions}
              row={row}
              rowIndex={index}
              reload={reload}
              entityIdentifier={entityIdentifier}
              entityType={entityType}
              highlight={highlight}
              resetSelections={resetSelections}
              isActionDisabled={isActionDisabled}
              isRowDisabled={isRowDisabled}
              isUTC={isUTC}
            />
          </Grid>
        </TableCell>
      </TableRow>
      {expandSettings && ExpandComponent && (
        <TableRow sx={{ height: "auto" }}>
          <TableCell
            sx={{
              padding: 0,
              border: "none",
              borderBottom: expand && (theme => theme.palette.tableExpand.borderBottom)
            }}
            colSpan={headers.length + 3}
            padding="normal"
          >
            <Collapse in={nonIdExpand || isRowExpanded} timeout="auto" unmountOnExit>
              <ExpandComponent module={expandSettings} settings={expandSettings} data={row} />
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

Row.defaultProps = {
  ActionComponent: () => null
};

export default Row;
