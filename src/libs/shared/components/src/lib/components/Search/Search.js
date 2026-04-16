import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import { IconButton, OutlinedInput, useTheme } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";

const Search = ({ search, handleSearchChanged, loadingFilterOptionsData, placeholder, style }) => {
  const [searchVal, setSearchVal] = useState(search);
  const translate = useTranslations();

  const debouncedChangedHandler = useMemo(
    () =>
      debounce(val => {
        handleSearchChanged(val);
      }, 300),
    [handleSearchChanged]
  );

  useEffect(() => {
    setSearchVal(search);
  }, [search]);

  const handleChange = e => {
    setSearchVal(e.target.value);
    debouncedChangedHandler(e.target.value);
  };

  return (
    <OutlinedInput
      name="search"
      autoComplete="off"
      variant="search"
      value={searchVal}
      onChange={handleChange}
      placeholder={placeholder || `${translate("Search")}`}
      disabled={loadingFilterOptionsData}
      type="search"
      sx={{
        ...style
      }}
      endAdornment={
        !searchVal ? (
          <IconButton variant="inputIcon" aria-label="search-button" name="search-button">
            <Icon type="SearchIcon" />
          </IconButton>
        ) : null
      }
    />
  );
};

export default Search;
