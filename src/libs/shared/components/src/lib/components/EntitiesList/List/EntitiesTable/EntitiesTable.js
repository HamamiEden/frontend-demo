import { useContext } from "react";
import { Button, Grid2 as Grid, Table, TableContainer } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import { ListContext } from "../../ListProvider";
import EntitiesCards from "../EntitiesCards/EntitiesCards";
import ClearFilters from "./ClearFilters";
import LoadingTable from "./LoadingTable/LoadingTable";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";
import TableHeaders from "./TableHeaders/TableHeaders";
import { TableProvider } from "./TableProvider";
import TableRows from "./TableRows/TableRows";

const EntitiesTable = () => {
  const translate = useTranslations();
  const {
    state: {
      headers,
      rows,
      rowsPerPage,
      loadingData,
      error,
      highlight,
      cardViewEnabled,
      newRowMode,
      settings: { listMaxHeight, listPadding, hideTopbar, skeletonConfig, cardsViewSettings },
      entitiesContainerRef
    },
    actions: { reload },
    renders: { renderTopBar }
  } = useContext(ListContext);

  const Error = () => {
    return (
      <Grid container sx={{ justifyContent: "center" }}>
        <p>
          {`${translate("OPSS")}`}
          <Button color="primary" onClick={reload} disableRipple aria-label="retry" name="retry">
            {`${translate("try_again")}`}
          </Button>
        </p>
      </Grid>
    );
  };

  return (
    <TableProvider rows={rows} rowsPerPage={rowsPerPage} highlight={highlight}>
      <Grid container sx={{ justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
        {hideTopbar ? null : (
          <Grid container>
            <Grid variant="tableTopBar" size={12} sx={{ p: 2 }}>
              {renderTopBar ? renderTopBar() : <SearchBar />}
            </Grid>
          </Grid>
        )}
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid size={12}>
            {error ? (
              <Error />
            ) : cardViewEnabled && cardsViewSettings ? (
              <EntitiesCards />
            ) : (
              <TableContainer
                ref={entitiesContainerRef}
                sx={{
                  maxHeight: listMaxHeight ? listMaxHeight : "calc(100vh - 280px)",
                  padding: listPadding ?? "0 16px"
                }}
              >
                {loadingData ? (
                  <LoadingTable
                    rowsLength={skeletonConfig?.rowsAmount || rowsPerPage}
                    headersLength={headers.length > 0 ? headers.length : 4}
                    headerCellWidth={skeletonConfig?.headerCellWidth}
                    rowCellWidth={skeletonConfig?.rowCellWidth}
                    // withCheckBoxes
                  />
                ) : (
                  <Table stickyHeader>
                    <TableHeaders />
                    <TableRows />
                  </Table>
                )}
              </TableContainer>
            )}
            {rows && rows.data && rows.data.length === 0 && !loadingData && !newRowMode && <ClearFilters />}
          </Grid>
        </Grid>
        <Pagination />
      </Grid>
    </TableProvider>
  );
};

export default EntitiesTable;
