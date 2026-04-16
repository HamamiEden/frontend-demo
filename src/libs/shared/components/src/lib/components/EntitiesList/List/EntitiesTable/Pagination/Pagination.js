import { memo, useContext } from "react";
import { Grid2 as Grid, Pagination as MuiPagination } from "@mui/material";
import { ListContext } from "../../../ListProvider";
import KeysetPagination from "./KeysetPagination";
import RowsPerPage from "./RowsPerPage";

const Pagination = memo(() => {
  const {
    state: {
      rows,
      page,
      rowsPerPage,
      error,
      settings: { hidePagination, keysetPagination, styles }
    },
    actions: { handleChangePage }
  } = useContext(ListContext);

  if (hidePagination) return null;
  return (
    <Grid container columnSpacing={1} variant="tablePagination" sx={{ justifyContent: "flex-end", p: 2, ...styles?.pagination }}>
      {keysetPagination ? (
        <KeysetPagination />
      ) : (
        !error && (
          <>
            <RowsPerPage />
            <Grid>
              <MuiPagination
                sx={{
                  "& .MuiTouchRipple-root": {
                    display: "none"
                  }
                }}
                count={rows && rows.total ? Math.ceil(rows.total / rowsPerPage) : 0}
                page={page + 1}
                showFirstButton
                showLastButton
                onChange={(e, val) => handleChangePage(val - 1)}
              />
            </Grid>
          </>
        )
      )}
    </Grid>
  );
});

export default Pagination;
