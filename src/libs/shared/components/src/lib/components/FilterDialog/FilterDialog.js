import { useEffect, useState } from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
// import ColumnsFilter from "./ColumnsFilter/ColumnsFilter";
import FiltersComponent from "./FiltersComponent/FiltersComponent";

const FilterDialog = ({
  openFiltersDialog,
  handleCloseFiltersDialog,
  filtersOptions,
  filters,
  onFiltersChanged,
  type,
  filterOptionsData,
  loadingFilterOptionsData,
  fetchFields
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedPreparedFilters, setSelectedPreparedFilters] = useState(null);
  const [_filters, _setFilters] = useState([]);

  useEffect(() => {
    _setFilters(filters);
  }, [filters]);

  const handleSaveFilters = () => {
    onFiltersChanged(_filters);
    handleCloseFiltersDialog();
  };

  const handleResetFilters = () => {
    _setFilters([]);
    setSelectedPreparedFilters(null);
  };

  const handleTabChange = (event, val) => {
    setSelectedTab(val);
  };

  const handleFiltersChange = filters => {
    _setFilters(filters);
  };

  return (
    <Dialog
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          minHeight: 620,
          maxWidth: 960
        }
      }}
      fullWidth={true}
      onClose={handleCloseFiltersDialog}
      open={openFiltersDialog}
    >
      <DialogTitle>
        <Typography component="span" sx={{ fontSize: 14, fontWeight: 400 }}>
          Filters
        </Typography>
        <IconButton variant="closeDialog" onClick={handleCloseFiltersDialog} aria-label="close-dialog" name="close-dialog">
          <Icon type="Close" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <FiltersComponent
          handleFiltersChange={handleFiltersChange}
          selectedPreparedFilters={selectedPreparedFilters}
          setSelectedPreparedFilters={setSelectedPreparedFilters}
          filters={_filters}
          filtersOptions={filtersOptions}
          type={type}
          filterOptionsData={filterOptionsData}
          loadingFilterOptionsData={loadingFilterOptionsData}
          fetchFields={fetchFields}
        />
      </DialogContent>
      <DialogActions>
        <Button disableRipple onClick={handleResetFilters} startIcon={<ClearAllIcon />} aria-label="reset-filters" name="reset-filters">
          Reset
        </Button>
        <Button autoFocus onClick={handleSaveFilters} variant="primary" disableRipple aria-label="save-filters" name="save-filters">
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FilterDialog.propTypes = {
  openFiltersDialog: PropTypes.bool.isRequired,
  handleCloseFiltersDialog: PropTypes.func.isRequired,
  filtersOptions: PropTypes.object,
  filters: PropTypes.array,
  onFiltersChanged: PropTypes.func.isRequired
};

export default FilterDialog;
