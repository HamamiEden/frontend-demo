import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { FiltersContext, ListSettingsContext } from "@csms-consoles/shared-state";
import SDArray from "./utils/SdArray";

// import { AccountContext } from "@csms-consoles/shared-state";
const ListContext = React.createContext();

const ListProvider = ({
  rows,
  parametersChanged,
  loadingData,
  error,
  onReload,
  onRowClicked,
  settings,
  filters,
  children,
  clearFilters,
  ActionComponent,
  ExpandComponent,
  ExpandButtonComponent,
  EditComponent,
  TableActions,
  entityType,
  noOptionsText,
  FiltersRowComponent,
  hasFilters,
  NewRow,
  highlight,
  newRowMode,
  renderHeaderCell,
  renderHeaderRow,
  renderRowCell,
  renderRow,
  renderTopBar,
  accountContext,
  entityId,
  handleCloseAction,
  checkDisabledRow,
  HeaderComponent,
  ExportComponent,
  FiltersBarComponent,
  expand,
  setExpand,
  openSidePanel,
  CardComponent
}) => {
  const { getListSettingsByType, isListSettingsValidated, validateSettingsByType } = useContext(ListSettingsContext);
  const listSettingsByType = getListSettingsByType(entityType);
  const entitiesContainerRef = useRef(null);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState((settings && settings.defaultParams && settings.defaultParams.sortBy) || "");
  const [orderBy, setOrderBy] = useState((settings && settings.defaultParams && settings.defaultParams.orderBy) || "asc");
  const defaultPage = useMemo(() => (settings && settings.defaultParams && settings.defaultParams.page) || 0, [settings]);
  const [page, setPage] = useState(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState((settings && settings.defaultParams && settings.defaultParams.rowsPerPage) || 10);
  //const { accountContext } = useContext(AccountContext);

  const [cardViewEnabled, setCardViewEnabled] = useState(
    (settings && settings.cardsViewSettings && settings.cardsViewSettings.enabled) || false
  );

  const paginationOptions = useMemo(() => (settings?.paginationOptions?.length ? settings.paginationOptions : [10, 25, 50]), [settings]);

  const isUTC = useMemo(() => {
    if (typeof listSettingsByType?.date?.isUTC === "boolean") {
      return listSettingsByType?.date?.isUTC;
    }
    return settings?.date?.isUTC || false;
  }, [listSettingsByType, settings?.date?.isUTC]);

  const headers = useMemo(() => {
    let _headers = [];

    if (listSettingsByType?.headers && typeof listSettingsByType.headers === "object" && Object.keys(listSettingsByType.headers)?.length) {
      _headers = Object.values(listSettingsByType?.headers);
    } else {
      _headers = settings?.headers?.filter(header => !header.optional) || [];
    }

    return SDArray.from(_headers).sortByProp("order") || [];
  }, [listSettingsByType?.headers, settings.headers]);

  const { getFiltersByType } = useContext(FiltersContext);
  const filtersByType = getFiltersByType(entityType);

  const mergeFilters = useCallback((filters, providerFilters) => {
    let newFilters = [];
    if (providerFilters !== null && providerFilters !== undefined) {
      if (Array.isArray(providerFilters)) {
        newFilters = [...providerFilters];
      } else if (typeof newFilters === "object" && Object.keys(providerFilters).length > 0) {
        newFilters = Object.values(providerFilters).filter(filter => {
          if (filter && typeof filter === "object" && Object.keys(filter).length > 0) return true;
          return false;
        });
      }
    }
    return [...(filters || []), ...newFilters];
  }, []);

  useEffect(() => {
    const mergedFilters = mergeFilters(filters, filtersByType);
    parametersChanged({
      filters: mergedFilters,
      orderBy,
      sortBy,
      page,
      rowsPerPage,
      search
    });
  }, [filters, filtersByType, sortBy, orderBy, search, page, rowsPerPage, accountContext, parametersChanged, mergeFilters]);

  useEffect(() => {
    setPage(defaultPage);
  }, [filters, filtersByType, accountContext, defaultPage]);

  const handleChangePage = useCallback(val => {
    setPage(val);
  }, []);

  useEffect(() => {
    if (!isListSettingsValidated(entityType) && headers) {
      validateSettingsByType(entityType, "headers", headers, settings?.version);
    }
  }, [entityType, isListSettingsValidated, validateSettingsByType, headers, settings?.version]);

  const handleRowsPerPage = useCallback(
    rows => {
      setRowsPerPage(rows);
      setPage(defaultPage);
    },
    [defaultPage]
  );

  const handleSearchChanged = useCallback(
    val => {
      setSearch(val);
      setPage(defaultPage);
    },
    [defaultPage]
  );

  const handleSort = useCallback(
    headerId => {
      if (sortBy === headerId) {
        let order = orderBy === "asc" ? "desc" : "asc";
        setOrderBy(order);
        setPage(defaultPage);
      } else {
        setSortBy(headerId);
        setOrderBy("asc");
        setPage(defaultPage);
      }
    },
    [sortBy, orderBy, defaultPage]
  );

  const handleClearFilters = useCallback(() => {
    setSearch("");
    setOrderBy(settings.defaultParams.orderBy || "");
    setSortBy(settings.defaultParams.sortBy || "");
    setPage(defaultPage);
    setRowsPerPage(settings.defaultParams.rowsPerPage || 10);
    clearFilters();
  }, [settings, clearFilters, defaultPage]);

  const reload = useCallback(() => {
    const mergedFilters = mergeFilters(filters, filtersByType);
    onReload({ search, sortBy, orderBy, filters: mergedFilters, rowsPerPage, page });
  }, [search, sortBy, orderBy, filters, filtersByType, rowsPerPage, page, onReload, mergeFilters]);

  const isActionDisabled = useCallback(() => {
    if (!newRowMode && !highlight) return false;
    return true;
  }, [newRowMode, highlight]);

  const toggleCardView = useCallback(() => {
    setCardViewEnabled(prev => !prev);
  }, [setCardViewEnabled]);

  return (
    <ListContext.Provider
      value={{
        state: {
          entitiesContainerRef,
          search,
          sortBy,
          orderBy,
          page,
          rowsPerPage,
          rows,
          loadingData,
          error,
          settings,
          filters: filters || [],
          headers,
          ExpandComponent,
          ExpandButtonComponent,
          EditComponent,
          TableActions,
          entityType,
          noOptionsText,
          hasFilters,
          highlight,
          accountContext,
          entityId,
          checkDisabledRow,
          expand,
          setExpand,
          openSidePanel,
          cardViewEnabled,
          filtersByType,
          isUTC,
          newRowMode,
          paginationOptions
        },
        actions: {
          handleChangePage,
          handleRowsPerPage,
          handleSearchChanged,
          reload,
          handleClearFilters,
          handleSort,
          isActionDisabled,
          onRowClicked,
          handleCloseAction,
          toggleCardView
        },
        components: {
          FiltersRowComponent,
          NewRow,
          ActionComponent,
          HeaderComponent,
          ExportComponent,
          FiltersBarComponent,
          CardComponent
        },
        renders: {
          renderHeaderCell,
          renderHeaderRow,
          renderRowCell,
          renderRow,
          renderTopBar
        }
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

ListProvider.defaultProps = {
  ActionComponent: function () {
    return null;
  },
  rows: { data: null },
  ExpandComponent: function () {
    return null;
  },
  ExpandButtonComponent: function () {
    return null;
  },
  FiltersRowComponent: function () {
    return null;
  },
  TableActions: function () {
    return null;
  },
  NewRow: function () {
    return null;
  },
  settings: {}
};

export { ListProvider, ListContext };
