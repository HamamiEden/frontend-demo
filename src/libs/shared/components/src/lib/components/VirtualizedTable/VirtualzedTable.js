import React, { useCallback, useEffect, useState } from "react";
import { AutoSizer, Column, SortDirection, Table } from "react-virtualized";
import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import PropTypes from "prop-types";
import { getTableWrapperStyle } from "./VirtualizedTable.style";
import HeaderRowRenderer from "./components/HeaderRowRenderer/HeaderRowRenderer";

const VirtualizedTable = ({
  columns,
  rowHeight = 35,
  headerHeight = 48,
  list,
  loading,
  scaleType,
  rateType,
  tableSortBy = "",
  tableSortDirection = "",
  noRowsText = "Nothing found",
  tableOptions = {},
  skeletonRows = 10,
  rowStyle = {},
  HeaderRenderer,
  CellRenderer,
  columnFlexGrow = 0,
  tableHeight = 340
}) => {
  const [sortBy, setSortBy] = useState();
  const [sortDirection, setSortDirection] = useState();
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    if (tableSortBy && typeof tableSortBy === "string") {
      setSortBy(tableSortBy);
      if (tableSortDirection && tableSortDirection === "string" && SortDirection[tableSortDirection]) {
        setSortDirection(tableSortDirection);
      } else {
        setSortDirection(SortDirection.DESC);
      }
    }
  }, [tableSortBy, tableSortDirection]);

  const sortList = useCallback(
    ({ sortBy, sortDirection }) => {
      if (list && list.length > 0) {
        if (sortBy) {
          let updatedList = list.sort(function (a, b) {
            var columnA;
            var columnB;
            if (typeof a[sortBy] === "string") {
              columnA = a[sortBy].toLowerCase();
              columnB = b[sortBy].toLowerCase();
            } else if (typeof a[sortBy] === "number") {
              columnA = a[sortBy];
              columnB = b[sortBy];
            }
            if (columnA < columnB) {
              return -1;
            }
            if (columnA > columnB) {
              return 1;
            }
            return 0;
          });
          setSortedList(sortDirection === SortDirection.DESC ? updatedList.reverse() : updatedList);
        }
        setSortBy(sortBy);
        setSortDirection(sortDirection);
        setSortedList(list);
      }
    },
    [list]
  );

  useEffect(() => {
    if (Array.isArray(list)) {
      setSortedList(list);
    }
  }, [list]);

  const getRowClassName = ({ index }) => {
    return clsx("tableRow", "flexContainer", {
      tableRowHover: index !== -1
    });
  };

  const NoRowsRender = () => {
    return (
      <Box sx={{ textAlign: "center", pt: 4.625 }}>
        <Typography variant={tableOptions ? tableOptions.typographyVariant : "caption"}>{noRowsText}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={getTableWrapperStyle(tableHeight)}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit"
            }}
            rowStyle={rowStyle}
            headerHeight={headerHeight}
            rowGetter={({ index }) => (loading ? "" : sortedList[index])}
            rowCount={loading ? skeletonRows : sortedList.length}
            rowClassName={getRowClassName}
            sort={sortList}
            sortBy={sortBy}
            sortDirection={sortDirection}
            headerRowRenderer={props => <HeaderRowRenderer {...props} />}
            noRowsRenderer={() => (loading ? null : <NoRowsRender />)}
          >
            {columns.map(({ dataKey, isScalable, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps => (
                    <HeaderRenderer
                      {...headerProps}
                      columnIndex={index}
                      headerHeight={headerHeight}
                      columns={columns}
                      scaleType={scaleType}
                      rateType={rateType}
                      isScalable={isScalable}
                      tableOptions={tableOptions && tableOptions.tableHeadersStyles}
                    />
                  )}
                  className={"flexContainer"}
                  cellRenderer={props => <CellRenderer {...props} columns={columns} rowHeight={rowHeight} loading={loading} />}
                  dataKey={dataKey}
                  flexGrow={columnFlexGrow}
                  width={100}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    </Box>
  );
};

VirtualizedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number
};

export default VirtualizedTable;
