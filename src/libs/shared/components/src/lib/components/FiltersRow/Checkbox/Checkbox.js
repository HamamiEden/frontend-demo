import { Grid2 as Grid } from "@mui/material";
import FilterCheckbox from "./FilterCheckbox";

const Checkbox = ({ id, entityType, name, onFiltersChanged, activeFilters, allFilters }) => {
  const checked = activeFilters.find(filter => filter.name === name);

  const onChange = e => {
    if (checked) onFiltersChanged(activeFilters.filter(filter => e.target.name !== filter.name));
    if (!checked) onFiltersChanged([...activeFilters, allFilters.find(filter => filter.name === name)]);
  };
  return (
    <Grid sx={{ marginLeft: 1.875 }}>
      <FilterCheckbox
        labelVariant={String(`${entityType}_${id}`).toLocaleLowerCase()}
        onChange={onChange}
        checked={!!checked}
        name={name}
      />
    </Grid>
  );
};

export default Checkbox;
