import { useCallback, useEffect, useState } from "react";
import { Badge, Grid2 as Grid, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import Search from "../../Search/Search";
import FilterSelection from "./FilterSelection/FilterSelection";

const FiltersComponent = ({
  filters,
  selectedPreparedFilters,
  setSelectedPreparedFilters,
  handleFiltersChange,
  fetchFields,
  filterOptionsData,
  loadingFilterOptionsData,
  filtersOptions,
  type
}) => {
  const [search, setSearch] = useState("");
  const [filtersList, setFiltersList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    if (filterOptionsData) {
      setFiltersList(filterOptionsData);
    }
  }, [filterOptionsData]);

  const translate = useTranslations();

  const handleSearchChanged = useCallback(
    async search => {
      setSearch(search);
      if (selectedFilter.values && selectedFilter.values.length > 0) {
        setFiltersList(selectedFilter.values.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
      } else if (selectedFilter.uiSearch) {
        setFiltersList(filterOptionsData.filter(item => item?.name?.toLowerCase().includes(search.toLowerCase())));
      } else {
        await fetchFields({ data: { field: selectedFilter, search } });
      }
    },
    [selectedFilter, fetchFields, filterOptionsData]
  );

  const handleMainFilter = async filter => {
    if (selectedFilter && selectedFilter.id === filter.id) return;
    setSearch("");
    setSelectedFilter(filter);
    setFiltersList([]);
    if (filter.settings.type === "options") {
      if (filter.values) {
        setFiltersList(filter.values);
      } else {
        fetchFields({ data: { field: filter } });
      }
    }
  };

  const handleFilter = filter => {
    if (selectedFilter.settings.type === "options") {
      handleFiltersOptions(filter);
    } else if (selectedFilter.settings.type === "date_range" || selectedFilter.settings.type === "date_time_range") {
      handleFiltersDate(filter);
    }
    if (selectedPreparedFilters !== null) {
      setSelectedPreparedFilters(null);
    }
  };

  const handleFiltersOptions = filter => {
    const contains = filters.findIndex(f => f.id === filter.id && f.field === filter.field) > -1;

    if (contains) {
      handleFiltersChange(filters.filter(f => !(f.id === filter.id && f.field === filter.field)));
    } else {
      if (!selectedFilter.settings.multiple) {
        return handleFiltersChange([
          ...filters.filter(f => f.field !== filter.field),
          {
            ...filter,
            field: selectedFilter.id,
            fieldName: selectedFilter.name
          }
        ]);
      }
      return handleFiltersChange([...filters, { ...filter, field: selectedFilter.id, fieldName: selectedFilter.name }]);
    }
  };

  const handleFiltersDate = filter => {
    const contains = filters.findIndex(f => f.field === filter.field) > -1;

    if (contains) {
      let tempFilters = filters.filter(f => f.field !== filter.field);
      tempFilters.push({
        ...filter,
        field: selectedFilter.id,
        fieldName: selectedFilter.name
      });
      handleFiltersChange(tempFilters);
    } else {
      handleFiltersChange([...filters, { ...filter, field: selectedFilter.id, fieldName: selectedFilter.name }]);
    }
  };

  const handleDeleteDateFilter = filter => {
    let newFilters = filters.filter(f => f.field !== filter.id);
    handleFiltersChange(newFilters);
  };

  const handleFreeTextChange = (filter, value) => {
    const tempFilters = filters.filter(f => f.field !== filter.id);
    handleFiltersChange(
      value ? [...tempFilters, { id: value, field: filter.id, fieldName: filter.name, name: value, entity: type }] : tempFilters
    );
  };

  const isFilterUsed = filter => {
    return !!filters.find(f => f.field === filter.id);
  };

  return (
    <Grid container spacing={2}>
      <>
        <Grid size={3}>
          <List>
            {filtersOptions &&
              filtersOptions.filters.map(
                (filter, i) =>
                  filter &&
                  filter.settings &&
                  !filter.settings.isExternal && (
                    <ListItemButton
                      disableRipple
                      sx={{
                        "&.MuiListItemButton-root.Mui-selected": {
                          backgroundColor: theme => theme?.palette?.filters?.item?.selected?.backgroundColor
                        }
                      }}
                      key={i}
                      selected={selectedFilter?.id === filter?.id}
                      onClick={() => handleMainFilter(filter)}
                    >
                      <ListItemText
                        primary={
                          <Badge color="primary" variant="dot" invisible={!isFilterUsed(filter)}>
                            <Typography>{translate(filter.name)}</Typography>
                          </Badge>
                        }
                      />
                    </ListItemButton>
                  )
              )}
          </List>
        </Grid>
        <Grid size={6}>
          {selectedFilter && (
            <>
              <Toolbar>
                {selectedFilter.settings.type === "options" && (
                  <Search search={search} handleSearchChanged={handleSearchChanged} loading={loadingFilterOptionsData} />
                )}
              </Toolbar>
              <FilterSelection
                loading={loadingFilterOptionsData}
                handleClick={handleFilter}
                handleDeleteDate={handleDeleteDateFilter}
                handleFreeTextChange={handleFreeTextChange}
                selectedOptions={filters}
                filter={selectedFilter}
                options={filtersList}
                entity={type}
              />
            </>
          )}
        </Grid>
      </>
    </Grid>
  );
};

export default FiltersComponent;
