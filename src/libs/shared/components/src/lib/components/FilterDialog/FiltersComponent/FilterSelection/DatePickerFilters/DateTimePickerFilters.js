import { useEffect, useMemo, useState } from "react";
import { Chip } from "@mui/material";
import { Grid2 as Grid, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";

const DateTimePickerFilters = ({ filter, handleClick, handleDeleteDate, selectedDate }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const fullDate = useMemo(() => {
    if (from && to) {
      let tempFrom = format(from || new Date(), "MM/dd/yyyy HH:mm");
      let tempTo = format(to || new Date(), "MM/dd/yyyy HH:mm");
      return `${tempFrom} - ${tempTo}`;
    } else {
      return "";
    }
  }, [from, to]);

  useEffect(() => {
    if (selectedDate) {
      setFrom(selectedDate.from);
      setTo(selectedDate.to);
    }
  }, [selectedDate]);

  const handleFromDate = date => {
    let timeRange = {
      from: date,
      to: to || new Date(date),
      field: filter.id
    };
    setFrom(date);
    handleClick(timeRange);
  };

  const handleToDate = date => {
    let timeRange = {
      from: from || new Date(date),
      to: date,
      field: filter.id
    };
    setTo(date);
    handleClick(timeRange);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2}>
          <Grid>
            <DateTimePicker
              ampm={false}
              label="From"
              value={from}
              onChange={handleFromDate}
              renderInput={params => <TextField onKeyDown={event => event.preventDefault()} {...params} />}
              maxDate={to || new Date()}
              showTodayButton={true}
              inputFormat="MM/dd/yyyy HH:mm"
            />
          </Grid>
          <Grid>
            <DateTimePicker
              ampm={false}
              label="To"
              value={to}
              onChange={handleToDate}
              renderInput={params => <TextField onKeyDown={event => event.preventDefault()} {...params} />}
              minDate={from}
              maxDate={new Date()}
              showTodayButton={true}
              inputFormat="MM/dd/yyyy HH:mm"
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
      <br />
      <br />
      {selectedDate ? <Chip label={fullDate} color="primary" clickable onDelete={() => handleDeleteDate(filter)} /> : null}
    </>
  );
};

export default DateTimePickerFilters;
