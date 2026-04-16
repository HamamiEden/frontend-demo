import React from "react";
import { List, Skeleton, TextField } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import DatePickerFilters from "./DatePickerFilters/DatePickerFilters";
import DateTimePickerFilters from "./DatePickerFilters/DateTimePickerFilters";
import FilterRow from "./FilterRow/FilterRow";

const FilterSelection = ({ handleClick, handleDeleteDate, handleFreeTextChange, filter, options, selectedOptions, entity, loading }) => {
  const translate = useTranslations();

  const handleOptionsFilterClick = f => {
    handleClick(f);
  };
  if (loading) {
    return (
      <List sx={{ marginLeft: "20px" }}>
        <Skeleton width={120} height={40} alt="loading" aria-busy="true" />
        <Skeleton width={120} height={40} alt="loading" aria-busy="true" />
        <Skeleton width={120} height={40} alt="loading" aria-busy="true" />
      </List>
    );
  }

  switch (filter.settings.type) {
    case "options":
      return (
        <List
          sx={{
            maxHeight: 400,
            overflowY: "auto"
          }}
        >
          {options
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((opt, i) => (
              <FilterRow
                key={i}
                filter={opt}
                field={filter.id}
                handleClick={handleOptionsFilterClick}
                selected={
                  selectedOptions && selectedOptions.length
                    ? selectedOptions.findIndex(f => f.id === opt.id && f.field === opt.field) > -1
                    : null
                }
                entity={entity}
              />
            ))}
        </List>
      );
    case "date_range":
      return (
        <DatePickerFilters
          filter={filter}
          handleClick={handleClick}
          handleDeleteDate={handleDeleteDate}
          selectedOptions={selectedOptions}
          selectedDate={selectedOptions.find(f => f.field === filter.id)}
        />
      );
    case "date_time_range":
      return (
        <DateTimePickerFilters
          filter={filter}
          handleClick={handleClick}
          handleDeleteDate={handleDeleteDate}
          selectedOptions={selectedOptions}
          selectedDate={selectedOptions.find(f => f.field === filter.id)}
        />
      );
    case "free_text":
      return (
        <TextField
          value={selectedOptions.find(f => f.field === filter.id)?.name || ""}
          placeholder={translate(filter.name)}
          onChange={e => handleFreeTextChange(filter, e.target.value.trim())}
          sx={{ "& .MuiOutlinedInput-root": { width: 250 } }}
        />
      );
    default:
      return null;
  }
};

export default FilterSelection;
