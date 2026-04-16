import React, { useEffect, useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import { CircularProgress, Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import { useDebounce } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";

const Autocomplete = ({
  width,
  options,
  renderOption,
  loading,
  selectionChanged,
  selected,
  disableClear,
  fetchOptions,
  minTextLength = 2,
  debounceTime = 500,
  groupBy,
  label,
  handleSearchChange,
  noOptionsText,
  multiple,
  id = "_id",
  disabled,
  limitTags,
  limit,
  onClose,
  disableCloseOnSelect,
  icon = "",
  autoCompleteProps = {}
}) => {
  const [inputValue, setInputValue] = useState("");
  const debounceTerm = useDebounce(inputValue, debounceTime);

  useEffect(() => {
    if (debounceTerm && debounceTerm.length >= minTextLength) {
      if (fetchOptions instanceof Function) {
        fetchOptions(debounceTerm);
      }
    }
  }, [debounceTerm, minTextLength, fetchOptions]);

  const onChange = (e, v, reason) => {
    selectionChanged(v, reason);
  };

  const onInputChange = (event, newInputValue) => {
    if (event && event.type === "change") {
      setInputValue(newInputValue);
      if (handleSearchChange instanceof Function) {
        handleSearchChange(newInputValue);
      }
    } else {
      if (handleSearchChange instanceof Function) {
        handleSearchChange(newInputValue);
      }
    }
  };

  const handleOnClose = (e, r) => {
    if (onClose instanceof Function) {
      onClose(e, r);
    }
  };

  return (
    <MuiAutocomplete
      variant="context"
      {...autoCompleteProps}
      disabled={disabled}
      multiple={multiple}
      onClose={handleOnClose}
      disableClearable={disableClear}
      loading={loading}
      sx={{ ...(width ? { width: width } : {}), "& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: "8px" } }}
      size="small"
      options={options}
      getOptionLabel={opt => opt.name || ""}
      isOptionEqualToValue={(opt, value) => opt && value && opt[id] === value[id]}
      getOptionDisabled={opt => limit && selected.length >= limit}
      renderOption={renderOption}
      onChange={onChange}
      value={selected}
      groupBy={groupBy}
      limitTags={limitTags}
      disableCloseOnSelect={disableCloseOnSelect}
      noOptionsText={
        options && inputValue && inputValue.length > minTextLength ? "No Options" : noOptionsText ? noOptionsText : "No Options"
      }
      onInputChange={onInputChange}
      popupIcon={<Icon type={icon ? icon : "ExpandMoreIcon"} />}
      ListboxComponent={ListboxComponent}
      renderInput={params => (
        <TextField
          sx={{
            "& .MuiAutocomplete-popupIndicator": {
              transform: icon && "rotate(0)"
            }
          }}
          {...params}
          variant="outlined"
          fullWidth
          placeholder={selected?.length ? "" : label}
          slotProps={{
            input: {
              ...params.InputProps,
              variants: "context",
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }
          }}
        />
      )}
    />
  );
};

const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemCount = Array.isArray(children) ? children.length : 0;

  return (
    <div ref={ref}>
      <div {...other}>
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              width={width}
              rowHeight={36}
              height={itemCount > 4 ? 250 : 36 * itemCount}
              overscanCount={10}
              rowCount={itemCount}
              rowRenderer={props => {
                return React.cloneElement(children[props.index], {
                  style: props.style,
                  key: props.index
                });
              }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
});

export default Autocomplete;
