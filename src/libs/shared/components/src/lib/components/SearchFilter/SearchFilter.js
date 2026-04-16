import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Badge, Chip, Grid2 as Grid, IconButton, Tooltip } from "@mui/material";
import { FiltersContext } from "@csms-consoles/shared-state";
import Icon from "../Icon/Icon";
import SearchChips from "./SearchChips";
import SearchFilterMenu from "./SearchFilterMenu";

const DEFAULT_VALIDATION_DATA = { hasError: false, message: "" };

const SearchFilter = ({
  handleSearchFilterChange,
  validateSearchFilterByType,
  featurePrefix,
  useAxios,
  keyFetchUrl,
  optionsFetchUrl,
  supportMultiKeys = true,
  limitationData,
  validateFiltersLimitation,
  fetchOptions,
  disabled = false
}) => {
  const SEARCH_FILTER_TYPE = `${featurePrefix}_SEARCH_FILTERS`;

  const [{ data: settings, loading: loadingSettings, error: settingsError }] = useAxios({
    url: keyFetchUrl,
    method: "GET"
  });

  const [{ loading: loadingItemOptions }, fetchItemOptions] = useAxios({ method: "GET" }, { manual: true });

  const { getFiltersByType, setFiltersByType, clearFiltersByType } = useContext(FiltersContext);
  const searchFiltersByType = useMemo(() => getFiltersByType(SEARCH_FILTER_TYPE) || [], [SEARCH_FILTER_TYPE, getFiltersByType]);
  const filtersTypesToClear = searchFiltersByType?.map(filter => `${featurePrefix}_${filter.key.toUpperCase()}_FILTERS`);

  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedValue, setSelectedValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [itemOptions, setItemOptions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [validationData, setValidationData] = useState(DEFAULT_VALIDATION_DATA);
  const [runLimitationCheckOnInit, setRunLimitationCheckOnInit] = useState(false);
  const [excludeSupport, setExcludeSupport] = useState(false);
  const [exclude, setExclude] = useState(false);

  const searchButtonWrapperRef = useRef(null);
  const searchButtonRef = useRef(null);
  const isSelectedKeyMultiSelect = selectedKey?.multiple;

  const resetStates = () => {
    setSelectedKey(null);
    setSelectedValue([]);
    setInputValue("");
    setValidationData(DEFAULT_VALIDATION_DATA);
    setItemOptions([]);
    setExclude(false);
    setExcludeSupport(false);
  };

  const handleBackButtonClick = () => {
    resetStates();

    if (validateFiltersLimitation) validateFiltersLimitation(searchFiltersByType, selectedKey);
  };

  const onMenuOpen = () => {
    if (disabled) return;

    setAnchorEl(searchButtonWrapperRef.current);
    searchButtonRef.current.blur();

    if (validateFiltersLimitation) validateFiltersLimitation(searchFiltersByType, selectedKey);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const clearAllFilters = () => {
    clearFiltersByType(SEARCH_FILTER_TYPE);

    filtersTypesToClear.forEach(filter => {
      clearFiltersByType(filter);
    });

    const currentFiltersKeysToClear = searchFiltersByType?.map(filter => filter.key.toUpperCase());
    handleSearchFilterChange("clearAll", currentFiltersKeysToClear);
  };

  const onApplyFilter = () => {
    const searchFilterValues = selectedKey.type === "options" ? selectedValue.map(value => value.name) : selectedValue;

    const newFilter = {
      key: selectedKey.key,
      label: selectedKey.name,
      values: searchFilterValues,
      exclude
      // ...(exclude ? { exclude } : {}),
    };

    if (supportMultiKeys) {
      const newFilters = [...searchFiltersByType];
      const valueIndex = newFilters.findIndex(filter => filter.key === selectedKey.key);

      if (valueIndex === -1) newFilters.push(newFilter);
      else newFilters[valueIndex] = newFilter;

      setFiltersByType(SEARCH_FILTER_TYPE, newFilters, false);
    } else {
      clearAllFilters();
      setFiltersByType(SEARCH_FILTER_TYPE, [newFilter], false);
    }
    handleSearchFilterChange("update", selectedKey.key.toUpperCase(), selectedValue, exclude);
    setExclude(false);
    onMenuClose();
  };

  const onKeyChange = async option => {
    setSelectedKey(option);
    setInputValue("");
    setExcludeSupport(!!option?.excludeSupport);

    const filterValues = getFiltersByType(`${featurePrefix}_${option?.key?.toUpperCase()}_FILTERS`) || [];

    if (option?.type === "options") {
      let options = [];

      if (option?.values) {
        options = option.values;
      } else {
        try {
          const requestOptions = fetchOptions?.[option.key];

          const { data } = await fetchItemOptions({ url: `${optionsFetchUrl}/${option.key}`, ...requestOptions });

          if (typeof data !== "object" || !Array.isArray(data)) return;
          options = data;
        } catch (e) {
          console.log(e);
        }
      }

      const filter = searchFiltersByType.find(item => item.key === option.key);
      if (filter) setExclude(!!filter.exclude);

      setItemOptions(options);

      let values = [];

      if (Array.isArray(filterValues)) {
        filterValues.forEach(filterValue => {
          values.push(options.find(option => String(option._id).toLowerCase() === String(filterValue._id).toLowerCase()) || {});
        });
      }

      setSelectedValue(values);
      if (!option?.multiple) {
        setInputValue(values[0]?.name || "");
      }
    } else if (option?.type === "freeText" && !option?.multiple) {
      setSelectedValue(filterValues);
      setInputValue(filterValues?.[0] || "");
    } else {
      setSelectedValue(filterValues);
    }

    if (validateFiltersLimitation) validateFiltersLimitation(searchFiltersByType, selectedKey);
  };

  const onChange = (event, option) => {
    if (!option) {
      setSelectedValue([]);
      return;
    }

    if (option?.isKey) onKeyChange(option);
    else {
      const isFreeText = selectedKey?.type === "freeText";

      setSelectedValue(isSelectedKeyMultiSelect ? option : [option]);
      setInputValue(isSelectedKeyMultiSelect ? "" : isFreeText ? option : option.name);

      if (validateFiltersLimitation) validateFiltersLimitation(searchFiltersByType, selectedKey, option);

      if (validateSearchFilterByType) {
        const validation = validateSearchFilterByType(selectedKey?.key, option);
        setValidationData(validation);
      }
    }
  };

  const onInputChange = (event, newInputValue, reason) => {
    if (reason === "clear") {
      setInputValue("");
      return;
    }
    if (event && event.type === "change") {
      setInputValue(newInputValue);

      if (!isSelectedKeyMultiSelect && !newInputValue) setSelectedValue([]);
    }
  };

  const onDelete = values => {
    const updatedFilter = searchFiltersByType.filter(filter => filter.key !== values.key);

    setFiltersByType(SEARCH_FILTER_TYPE, updatedFilter, false);
    handleSearchFilterChange("remove", values.key.toUpperCase());

    if (validateFiltersLimitation) validateFiltersLimitation(searchFiltersByType, selectedKey, [], "reset");
  };

  const deleteItemByIndex = index => {
    const newValues = selectedValue.filter((_, i) => i !== index);
    setSelectedValue(newValues);

    if (validateSearchFilterByType) {
      const validation = validateSearchFilterByType(selectedKey?.key, newValues);
      setValidationData(validation);
    }

    if (validateFiltersLimitation) validateFiltersLimitation(searchFiltersByType, selectedKey, newValues);
  };

  const handleExcludeChange = () => {
    setExclude(prevValue => !prevValue);
  };

  useEffect(() => {
    if (validateFiltersLimitation && !runLimitationCheckOnInit) {
      validateFiltersLimitation(searchFiltersByType, selectedKey);
      setRunLimitationCheckOnInit(true);
    }
  }, [runLimitationCheckOnInit, searchFiltersByType, selectedKey, validateFiltersLimitation]);

  return (
    <Grid container sx={{ flexWrap: "nowrap", alignItems: "center", gap: 0.5, width: "100%" }}>
      <Tooltip
        title={
          disabled ? null : limitationData?.isReachedLimitation ? (
            <Grid container wrap="nowrap" spacing="5px">
              <Grid size="auto">
                <Icon type="FailedIcon" sx={{ color: theme => theme.palette.failedIcon.color }} />
              </Grid>
              <Grid size="grow">{limitationData?.message}</Grid>
            </Grid>
          ) : (
            "Click to filter options"
          )
        }
        slotProps={
          limitationData?.isReachedLimitation ? { tooltip: { sx: { width: "355px", maxWidth: "355px", paddingLeft: "8px" } } } : {}
        }
        arrow
        placement="bottom-start"
      >
        <Grid
          container
          hover="activeButtonOnHover"
          onClick={onMenuOpen}
          sx={{ cursor: disabled ? "default" : "pointer", width: "30px", height: "30px", alignItems: "center" }}
          ref={searchButtonWrapperRef}
        >
          <IconButton
            ref={searchButtonRef}
            className="activeOnContainerHover"
            aria-label="search-filter-button"
            name="search-filter-button"
            disabled={disabled}
          >
            <Badge
              variant="filtersBadge"
              badgeContent={searchFiltersByType?.length || 0}
              sx={{
                "& .MuiBadge-badge": {
                  height: "16px",
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  minWidth: "16px",
                  top: "-2px",
                  right: "-4px"
                }
              }}
            >
              <Icon type="FilterIcon" />
            </Badge>
          </IconButton>
        </Grid>
      </Tooltip>

      <Grid>
        <SearchFilterMenu
          anchorEl={anchorEl}
          selected={selectedKey ? selectedValue : selectedKey}
          selectedKey={selectedKey}
          loading={loadingSettings || loadingItemOptions}
          filters={searchFiltersByType}
          options={selectedKey?.type === "options" && !loadingItemOptions ? itemOptions : settings?.options || []}
          disabled={!!settingsError}
          multiple={!!selectedKey?.multiple}
          inputValue={inputValue}
          isSelectedKeyMultiSelect={isSelectedKeyMultiSelect}
          keysPlaceholder={settings?.placeholder}
          valuePlaceholder={selectedKey?.placeholder}
          onClose={onMenuClose}
          resetStates={resetStates}
          handleBackButtonClick={handleBackButtonClick}
          onApplyFilter={onApplyFilter}
          onDelete={onDelete}
          onChange={onChange}
          onInputChange={onInputChange}
          freeSolo={selectedKey?.type === "freeText" ? true : false}
          deleteItemByIndex={deleteItemByIndex}
          validationData={validationData}
          limitationData={limitationData}
          titleTooltip={settings?.titleTooltip}
          excludeSupport={excludeSupport}
          exclude={exclude}
          handleExcludeChange={handleExcludeChange}
        />
      </Grid>

      <Grid container sx={{ alignItems: "center", flexWrap: "nowrap", gap: 1.875, flexGrow: 1 }}>
        <SearchChips
          filters={searchFiltersByType}
          onDelete={onDelete}
          clearAllFilters={clearAllFilters}
          onMenuOpen={onMenuOpen}
          excludeSupport={settings?.excludeSupport}
          disabled={disabled}
        />
      </Grid>

      <Grid sx={{ marginLeft: "auto" }}>
        <Chip
          sx={{ ml: 1.5 }}
          onClick={clearAllFilters}
          variant="entityChips"
          label={"Clear All"}
          disabled={searchFiltersByType?.length === 0}
        />
      </Grid>
    </Grid>
  );
};

export default SearchFilter;
