import { forwardRef, useEffect, useState } from "react";
import { Autocomplete, Box, CircularProgress, IconButton, OutlinedInput, Popper, useTheme } from "@mui/material";
import { useDebounce, useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../../../Icon/Icon";

const SdAutocompleteSearch = ({
  options,
  renderItem,
  loading,
  selectionChanged,
  selected,
  disableClear,
  fetchOptions,
  minTextLength = 2,
  debounceTime = 500,
  groupBy,
  handleSearchChange,
  label
}) => {
  const [inputValue, setInputValue] = useState("");
  const debounceTerm = useDebounce(inputValue, debounceTime);
  const [data, setData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    setData(options);
  }, [options]);

  useEffect(() => {
    if (debounceTerm && debounceTerm.length >= minTextLength) {
      if (fetchOptions instanceof Function) {
        fetchOptions(debounceTerm);
      }
    }
  }, [debounceTerm, minTextLength, fetchOptions]);

  const onChange = (e, v) => {
    selectionChanged(v);
  };

  const onInputChange = (event, newInputValue) => {
    if (event && event.type === "change") {
      setInputValue(newInputValue);
      if (handleSearchChange instanceof Function) {
        handleSearchChange(newInputValue);
      }
    }
  };

  const handleOnBlur = () => {
    setInputValue("");
    setData([]);
  };

  const translate = useTranslations();

  return (
    <Autocomplete
      variant="search"
      disableClearable={disableClear}
      loading={loading}
      blurOnSelect={true}
      size="small"
      options={data}
      getOptionLabel={opt => opt.name || ""}
      isOptionEqualToValue={(opt, value) => opt._id === value._id}
      renderOption={renderItem}
      onChange={onChange}
      value={selected}
      groupBy={groupBy}
      onInputChange={onInputChange}
      sx={{
        width: "100%"
      }}
      noOptionsText={inputValue === "" && data.length === 0 && !loading ? (label ? label : "Search here") : "No Options"}
      clearOnBlur
      renderInput={params => {
        return (
          <Box ref={params.InputProps.ref}>
            <OutlinedInput
              variant="search"
              onBlur={handleOnBlur}
              placeholder={`${translate("Search")}`}
              type="search"
              inputProps={{ ...params.inputProps, "aria-label": "search" }}
              endAdornment={
                !inputValue ? (
                  <IconButton variant="inputIcon" aria-label="search" name="search">
                    <Icon type="SearchIcon" style={{ color: theme.palette.mainSearch.icon.color }} />
                  </IconButton>
                ) : null
              }
            />
            {loading ? (
              <CircularProgress
                sx={{
                  verticalAlign: "middle",
                  marginRight: 2,
                  position: "absolute",
                  right: "150px",
                  top: "14px"
                }}
                color="primary"
                size={20}
              />
            ) : null}
          </Box>
        );
      }}
      slots={{
        popper: props => <Popper {...props} placement="bottom-end" />
      }}
      slotProps={{
        listbox: {
          component: forwardRef((props, ref) => (
            <Box
              component="ul"
              sx={{
                "&.MuiAutocomplete-listbox": { maxHeight: 220 },
                "& .MuiListSubheader-root.MuiAutocomplete-groupLabel": {
                  lineHeight: "35px"
                }
              }}
              ref={ref}
              {...props}
            />
          ))
        }
      }}
    />
  );
};

export default SdAutocompleteSearch;
