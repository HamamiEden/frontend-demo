import AddIcon from "@mui/icons-material/Add";
import { Chip, ListItem } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";

const FilterRow = ({ filter, handleClick, selected, field, entity }) => {
  const translate = useTranslations();
  return (
    filter &&
    (filter.name || filter.name !== undefined) && (
      <ListItem>
        <Chip
          type={selected ? "filtersChips" : ""}
          sx={{
            backgroundColor: "chip.background",
            "&:hover": {
              backgroundColor: "chip.background"
            }
          }}
          id={"FilterRow_select_" + filter.name}
          label={translate(`${entity}_${field}_${String(filter.name)}`, String(filter.name))}
          clickable
          deleteIcon={selected ? null : <AddIcon />}
          onDelete={() => handleClick(filter)}
          onClick={() => handleClick(filter)}
        ></Chip>
      </ListItem>
    )
  );
};

export default FilterRow;
