import React, { useCallback, useContext, useEffect, useState } from "react";
import { AccountContext } from "@csms-consoles/shared-state";
import { deepFind } from "@csms-consoles/shared-utils";

const TableContext = React.createContext();

const TableProvider = ({ rows, rowsPerPage, highlight, children }) => {
  const [selectedActions, setSelectedActions] = useState([]);
  const [selectedRows, setSelectedRows] = useState({
    all: false,
    selected: []
  });

  const { accountContext } = useContext(AccountContext);

  const onSelectAllClick = useCallback(
    (val, entityIdentifier) => {
      const all = rows.data.map(row => deepFind(row, entityIdentifier));
      if (val) {
        setSelectedRows(prv => ({
          all: false,
          selected: [...prv.selected, ...all].filter((value, index, self) => self.indexOf(value) === index)
        }));
      } else {
        setSelectedRows(prv => ({
          all: false,
          selected: prv.selected.filter(value => all.indexOf(value) === -1)
        }));
      }
    },
    [rows]
  );
  const isSelectAllChecked = useCallback(
    entityIdentifier => {
      if (!rows || !rows.data || rows.data.length === 0) return false;
      if (selectedRows.all) return true;
      const rowsIds = rows.data.map(row => deepFind(row, entityIdentifier));
      let difference = rowsIds.filter(x => selectedRows.selected.indexOf(x) === -1);
      return difference.length === 0;
    },
    [selectedRows, rows]
  );

  const isIndeterminate = useCallback(
    entityIdentifier => {
      if (!rows || !rows.data) return false;
      const currentSelected = rows.data.filter(row => selectedRows.selected.indexOf(deepFind(row, entityIdentifier)) > -1).length;

      return currentSelected < rowsPerPage && currentSelected > 0 && !selectedRows.all && currentSelected < rows.data.length;
    },
    [selectedRows, rowsPerPage, rows]
  );

  const isRowSelected = useCallback(
    (row, entityIdentifier) => {
      let id = deepFind(row, entityIdentifier);
      if (id && id === highlight) return true;
      if ((selectedRows && selectedRows.selected && selectedRows.selected.indexOf(id) !== -1) || selectedRows.all) return true;
      return false;
    },
    [selectedRows, highlight]
  );

  const getSelectedRowId = useCallback((row, entityIdentifier) => {
    return deepFind(row, entityIdentifier);
  }, []);

  const onSelectRow = useCallback(
    (val, row, entityIdentifier) => {
      let row_id = deepFind(row, entityIdentifier);
      if (val) {
        if (selectedRows.selected.length + 1 === rows.total) {
          setSelectedRows({ all: true, selected: [] });
        } else {
          setSelectedRows(prv => ({
            all: false,
            selected: [...prv.selected, row_id]
          }));
        }
      } else {
        const rowSelection = rows.data
          .filter(item => {
            let item_id = deepFind(item, entityIdentifier);
            return item_id !== row_id;
          })
          .map(item => {
            let item_id = deepFind(item, entityIdentifier);
            return item_id;
          });
        setSelectedRows(prv => {
          if (prv.all) {
            return { all: false, selected: rowSelection };
          }
          return {
            all: false,
            selected: prv.selected.filter(r => r !== row_id)
          };
        });
      }
    },
    [rows, selectedRows]
  );

  const handleSelectAllData = useCallback(() => {
    setSelectedRows({ all: true, selected: [] });
  }, []);

  const resetSelections = useCallback(() => {
    setSelectedRows({ selected: [], all: false });
  }, []);

  const handleSelectedActions = useCallback(actions => {
    setSelectedActions(actions);
  }, []);

  useEffect(() => {
    resetSelections();
  }, [accountContext, resetSelections]);

  return (
    <TableContext.Provider
      value={{
        isSelectAllChecked,
        isIndeterminate,
        onSelectAllClick,
        onSelectRow,
        handleSelectAllData,
        resetSelections,
        isRowSelected,
        getSelectedRowId,
        handleSelectedActions,
        selectedRows,
        selectedActions
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableProvider, TableContext };
