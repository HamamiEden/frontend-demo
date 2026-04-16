import { useCallback, useMemo, useState } from "react";
import { Box, Grid2 as Grid, IconButton, Menu, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { format, isSameDay, isValid, parseISO } from "date-fns";
import Icon from "../Icon/Icon";

const SingleDatePicker = ({
  onChangeDate,
  label = "Select Date",
  availableDates = null,
  value = new Date(),
  views = ["year", "month", "day"],
  formatType = "dd/MM/yyyy",
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const parsedAvailableDates = useMemo(() => availableDates?.map(date => parseISO(date)), [availableDates]);

  const shouldDisableDate = useCallback(
    date => parsedAvailableDates && !parsedAvailableDates?.some(availableDate => isSameDay(date, availableDate)),
    [parsedAvailableDates]
  );

  const parsedDate = useMemo(() => new Date(value), [value]);

  return (
    <Grid container>
      <Grid container onClick={handleClick} sx={{ alignItems: "center", gap: 1 }}>
        <Grid sx={{ lineHeight: 0 }}>
          <Icon type="clockIcon" sx={{ width: "18px", height: "18px" }} />
        </Grid>
        <Grid>
          <Typography variant="caption" color="secondaryColor">
            {label}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="captionTitle" colors="newBlue">
            {isValid(parsedDate) ? format(parsedDate, formatType) : formatType}
          </Typography>
        </Grid>
        <Grid>
          <IconButton variant="inputIcon" aria-label="open-datepicker" name="open-datepicker">
            <Icon type="ArrowSmall" style={{ transform: anchorEl && "rotate(180deg)" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          variant="menu"
        >
          <Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                value={value || ""}
                onChange={onChangeDate}
                displayStaticWrapperAs={"desktop"}
                inputFormat={formatType}
                open={!!anchorEl}
                renderInput={() => null}
                views={views}
                {...(shouldDisableDate && { shouldDisableDate })}
                {...(parsedAvailableDates && { minDate: parsedAvailableDates[parsedAvailableDates.length - 1] || undefined })}
                {...(parsedAvailableDates && { maxDate: parsedAvailableDates[0] || undefined })}
              />
            </LocalizationProvider>
          </Box>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default SingleDatePicker;
