import { useContext } from "react";
import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import { ListContext } from "../../ListProvider";
import { TableContext } from "./TableProvider";

const ClearFilters = () => {
  const { resetSelections } = useContext(TableContext);
  const {
    actions: { handleClearFilters },
    state: {
      search,
      noOptionsText,
      filters,
      TableActions,
      entityType,
      filtersByType,
      settings: { noDataComponent }
    },
    actions: { isActionDisabled }
  } = useContext(ListContext);

  const handleFilters = () => {
    handleClearFilters();
    resetSelections();
  };

  const translate = useTranslations();

  return (
    <Grid container direction="column" sx={{ alignItems: "center", mt: 3 }}>
      <Grid>
        {noDataComponent?.component && !search && !filtersByType?.length && !filters?.length ? (
          <TableActions actions={[{ ...noDataComponent }]} entityType={entityType} isActionDisabled={isActionDisabled} />
        ) : !isActionDisabled() ? (
          <Typography variant="subtitle2">{translate("NO_DATA_AVAILABLE")}</Typography>
        ) : null}

        {filters && filters.length > 0 && (
          <Grid container columnSpacing={1.5} sx={{ alignItems: "center" }}>
            <Grid>
              <Typography variant="body2">{translate("CLEAR_FILTERS_AND_TRY_AGAIN")}</Typography>
            </Grid>
            <Grid>
              <Button color="primary" onClick={handleFilters} disableRipple aria-label="clear-filters" name="clear-filters">
                {translate("CLEAR")}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      {noOptionsText && (
        <Grid>
          <Typography variant="body2">{noOptionsText}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ClearFilters;
