import { memo, useContext, useEffect, useMemo, useState } from "react";
import { Grid2 as Grid, IconButton, Typography } from "@mui/material";
import Icon from "../../../../Icon/Icon";
import { ListContext } from "../../../ListProvider";
import RowsPerPage from "./RowsPerPage";

const KeysetPagination = memo(() => {
  const {
    state: {
      page,
      rows,
      loadingData,
      error,
      settings: { identifier }
    },
    actions: { handleChangePage }
  } = useContext(ListContext);

  const [lastRowKey, setLastRowKey] = useState(0);
  const firstRowKey = lastRowKey - rows.pageSize + 1;

  const firstRowId = useMemo(() => rows?.data?.[0]?.[identifier || "_id"], [identifier, rows?.data]);
  const lastRowId = useMemo(() => rows?.data?.[rows?.pageSize - 1]?.[identifier || "_id"], [identifier, rows]);

  useEffect(() => {
    if (!rows || !page) return;
    const { direction, id } = page;
    const { hasPrev, hasNext, total, pageSize } = rows;
    if (id === firstRowId || id === lastRowId) return;
    setLastRowKey(lastRowKey => {
      if (!hasNext) return total; // last page
      if (!hasPrev) return pageSize; // first page
      if (direction === "NEXT") return id ? lastRowKey + pageSize : pageSize; // next page : first page
      return id ? lastRowKey - pageSize : total; // last page : prev page
    });
  }, [firstRowId, lastRowId, page, rows]);

  const handleButtonClick = (direction, id) => handleChangePage({ direction, id });
  const getFormattedNumber = number => <Typography variant="captionTitle">{new Intl.NumberFormat().format(number)}</Typography>;

  const disablePrevButton = useMemo(
    () => (page.direction === "NEXT" && !page.id) || !rows.hasPrev || loadingData || firstRowKey === 1,
    [firstRowKey, loadingData, page, rows.hasPrev]
  );
  const disableNextButton = useMemo(
    () => (page.direction === "PREV" && !page.id) || !rows.hasNext || loadingData || lastRowKey === rows.total,
    [lastRowKey, loadingData, page, rows]
  );

  if (error) return null;
  return (
    <>
      {!!rows?.total && (
        <Grid container size="auto" sx={{ alignItems: "center", marginRight: "10px" }}>
          <Typography component="span" sx={{ fontSize: 14 }}>
            {getFormattedNumber(firstRowKey)}
            {" - "}
            {getFormattedNumber(lastRowKey)}
            {" of "}
            {getFormattedNumber(rows?.total)}
          </Typography>
        </Grid>
      )}
      <RowsPerPage />
      <Grid container wrap="nowrap" size="auto">
        <Grid>
          <IconButton
            aria-label="first-page"
            name="first-page"
            type="firstLast"
            variant="paginationIconButton"
            onClick={() => handleButtonClick("NEXT")}
            disabled={disablePrevButton}
          >
            <Icon type="FirstPageIcon" />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton
            aria-label="previous-page"
            name="previous-page"
            type="previousNext"
            variant="paginationIconButton"
            onClick={() => handleButtonClick("PREV", firstRowId)}
            disabled={disablePrevButton}
          >
            <Icon type="KeyboardArrowLeftIcon" />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton
            aria-label="next-page"
            name="next-page"
            type="previousNext"
            variant="paginationIconButton"
            onClick={() => handleButtonClick("NEXT", lastRowId)}
            disabled={disableNextButton}
          >
            <Icon type="KeyboardArrowRightIcon" />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton
            aria-label="last-page"
            name="last-page"
            type="firstLast"
            variant="paginationIconButton"
            onClick={() => handleButtonClick("PREV")}
            disabled={disableNextButton}
          >
            <Icon type="LastPageIcon" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
});

export default KeysetPagination;
