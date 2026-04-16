import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid2 as Grid, IconButton, Tooltip } from "@mui/material";
import Icon from "../../../../Icon/Icon";
import Search from "../../../../Search/Search";
import { ListContext } from "../../../ListProvider";
import ColumnSelector from "../ColumnSelector/ColumnSelector";
import { TableContext } from "../TableProvider";

const SearchBar = () => {
  const {
    state: {
      rows,
      search,
      listName,
      loadingData,
      settings: {
        pageActions,
        searchConfig,
        hideSearch,
        hideSearchBar,
        hideExport,
        hideColumnSelector,
        uniqueExport,
        exportComponent,
        disableSearch,
        selectedActions,
        entityIdentifier,
        enableReload,
        hideReload,
        filtersBarComponent,
        stupidBarComponent,
        headers
      },
      headers: selectedHeaders,
      TableActions,
      entityType,
      filters,
      hasFilters,
      accountContext,
      entityId,
      cardViewEnabled
    },
    actions: { reload, handleSearchChanged, isActionDisabled, toggleCardView },
    components: { FiltersRowComponent, ExportComponent, FiltersBarComponent, ActionComponent }
  } = useContext(ListContext);
  const { selectedRows, handleSelectAllData, handleSelectedActions, resetSelections } = useContext(TableContext);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const location = useLocation();
  const useQuery = () => new URLSearchParams(location.search);
  const query = useQuery();
  const searchString = query.get("search");

  useEffect(() => {
    searchString && handleSearchChanged(searchString);
  }, [searchString, handleSearchChanged]);

  useEffect(() => {
    if (!loadingData) {
      setLoadingSearch(false);
    }
  }, [loadingData]);

  const filteredPageActions = useMemo(() => pageActions?.filter(action => !action.isCardView), [pageActions]);

  return (
    !hideSearch && (
      <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Grid>
          <Grid container sx={{ alignItems: "center", gap: 2.5 }}>
            {stupidBarComponent && ActionComponent && (
              <Grid>
                <ActionComponent action={stupidBarComponent} module={stupidBarComponent} entityType={entityType} />
              </Grid>
            )}
            {!hideSearchBar && (
              <Grid>
                <Search
                  search={search}
                  handleSearchChanged={handleSearchChanged}
                  loading={loadingSearch}
                  disabled={disableSearch}
                  placeholder={searchConfig?.placeholder}
                  style={searchConfig?.style}
                />
              </Grid>
            )}
            {filteredPageActions && filteredPageActions.length ? (
              <Grid>
                <TableActions actions={filteredPageActions} entityType={entityType} isActionDisabled={isActionDisabled} />
              </Grid>
            ) : null}
            {FiltersBarComponent && filtersBarComponent ? (
              <Grid>
                <FiltersBarComponent module={filtersBarComponent} entityType={entityType} />
              </Grid>
            ) : FiltersRowComponent && hasFilters ? (
              <Grid>
                <FiltersRowComponent />
              </Grid>
            ) : null}
          </Grid>
        </Grid>
        <Grid>
          <Grid container columnSpacing={1} sx={{ alignItems: "center" }}>
            {selectedActions && (
              <TableActions
                TableActions={TableActions}
                entityType={entityType}
                actions={selectedActions}
                reload={reload}
                selectedRows={selectedRows}
                resetSelections={resetSelections}
                handleSelectedActions={handleSelectedActions}
                entityIdentifier={entityIdentifier}
              />
            )}
            {!hideColumnSelector && <ColumnSelector headers={headers} selectedHeaders={selectedHeaders} entityType={entityType} />}
            {!hideReload && (
              <Grid>
                <Tooltip title="Refresh" arrow placement="bottom-end">
                  <IconButton
                    id={`${entityType?.toUpperCase()}_RELOAD_BUTTON`}
                    onClick={reload}
                    size="medium"
                    aria-label="reload"
                    name="reload"
                  >
                    <Icon type="ReloadIcon" />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            {!hideExport && ExportComponent && exportComponent && (
              <Grid>
                <ExportComponent
                  tooltip={"Download"}
                  module={exportComponent}
                  entityId={entityId}
                  accountId={accountContext}
                  reload={reload}
                  entity={entityType}
                  filters={{
                    search,
                    filters,
                    selected: selectedRows.selected,
                    all: selectedRows.all
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    )
  );
};

export default SearchBar;
