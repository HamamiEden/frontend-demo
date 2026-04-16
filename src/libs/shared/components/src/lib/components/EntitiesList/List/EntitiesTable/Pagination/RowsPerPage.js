import { memo, useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, Grid2 as Grid, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";
import { ListContext } from "../../../ListProvider";

const RowsPerPage = memo(({ setPaginationConfig }) => {
  const {
    state: { rowsPerPage, paginationOptions },
    actions: { handleRowsPerPage }
  } = useContext(ListContext);
  const translate = useTranslations();

  return (
    <Grid>
      <FormControl>
        <Select
          value={rowsPerPage}
          onChange={e => handleRowsPerPage(e.target.value)}
          renderValue={value => `${value} ${translate("PER_PAGE")}`}
          input={<OutlinedInput sx={{ width: "110px" }} variants="pagination" />}
          IconComponent={ExpandMoreIcon}
          MenuProps={{
            anchorOrigin: {
              vertical: "top",
              horizontal: "center"
            },
            transformOrigin: {
              vertical: "bottom",
              horizontal: "center"
            },
            getcontentanchorel: null,
            PaperProps: {
              variants: "select"
            }
          }}
        >
          {paginationOptions.map(option => (
            <MenuItem key={option} value={option} variants="select">
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
});

export default RowsPerPage;
