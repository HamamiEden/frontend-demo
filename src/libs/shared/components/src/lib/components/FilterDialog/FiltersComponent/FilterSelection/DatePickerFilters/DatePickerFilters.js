import { useCallback, useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { Grid2 as Grid, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";

const DatePickerFilters = ({ filter, handleClick, handleDeleteDate, selectedDate }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fullDate, setFullDate] = useState("");

  const parseFullDate = useCallback(() => {
    let tempFrom = format(from || new Date(), "d-MM-yyyy");
    let tempTo = format(to || new Date(), "d-MM-yyyy");
    let fullDateDisplay = `${tempFrom} - ${tempTo}`;
    setFullDate(fullDateDisplay);
  }, [from, to]);

  useEffect(() => {
    if (selectedDate) {
      setFrom(selectedDate.from);
      setTo(selectedDate.to);
    }
  }, [selectedDate]);

  useEffect(() => {
    parseFullDate();
  }, [parseFullDate]);

  const handleFromDate = date => {
    let startOfDay = new Date(date.setHours(0, 0, 0, 0));

    let timeRange = {
      from: startOfDay,
      to: to || new Date(new Date().setHours(23, 59, 59, 999)),
      field: filter.id
    };
    setFrom(startOfDay);
    handleClick(timeRange);
  };

  const handleToDate = date => {
    let endOfDay = new Date(date.setHours(23, 59, 59, 999));

    let timeRange = {
      from: from || new Date(new Date().setHours(0, 0, 0, 0)),
      to: endOfDay,
      field: filter.id
    };
    setTo(endOfDay);
    handleClick(timeRange);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={1}>
          <Grid>
            <DatePicker
              label="From"
              value={from}
              onChange={handleFromDate}
              renderInput={params => <TextField {...params} />}
              maxDate={to || new Date()}
              showTodayButton={true}
            />
          </Grid>
          <Grid>
            <DatePicker
              label="To"
              value={to}
              onChange={handleToDate}
              renderInput={params => <TextField {...params} />}
              minDate={from}
              maxDate={new Date()}
              showTodayButton={true}
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

export default DatePickerFilters;
