import React, { useEffect, useState } from "react";
import { Button, Grid2 as Grid, IconButton, Menu, TextField, Typography, useTheme } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { addMinutes, format } from "date-fns";
import Icon from "../Icon/Icon";

const TimeRange = ({ onChange, from, to, utc, fromDatePickerProps, toDatePickerProps, highlighted, disabled = false }) => {
  const [fromDate, setFrom] = useState(null);
  const [toDate, setTo] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fromValid, setFromValid] = useState(false);
  const [toValid, setToValid] = useState(false);

  useEffect(() => {
    if (from instanceof Date && to instanceof Date) {
      setFrom(from);
      setTo(to);
    }
  }, [from, to]);

  const handleClick = event => {
    if (disabled) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFromChange = newVal => {
    if (newVal instanceof Date && isFinite(newVal)) {
      if (toDate instanceof Date && isFinite(toDate)) {
        if (newVal.getTime() > toDate.getTime()) {
          setFromValid(false);
        } else {
          setFromValid(true);
          setToValid(true);
        }
      } else {
        setFromValid(true);
      }
    } else {
      setFromValid(false);
    }
    setFrom(newVal);
  };

  const handleToChange = newVal => {
    if (newVal instanceof Date && isFinite(newVal)) {
      if (fromDate instanceof Date && isFinite(fromDate)) {
        if (newVal.getTime() < fromDate.getTime()) {
          setToValid(false);
        } else {
          setToValid(true);
          setFromValid(true);
        }
      } else {
        setToValid(true);
      }
    } else {
      setToValid(false);
    }
    setTo(newVal);
  };

  const handleApply = () => {
    onChange(fromDate, toDate);
    handleClose();
  };

  const DateFormat = ({ from, to, isUTC }) => {
    const getParsedDate = d => {
      if (isUTC) {
        return format(addMinutes(d, d.getTimezoneOffset()), "dd/MM/yyyy HH:mm");
      } else {
        return format(d, "dd/MM/yyyy HH:mm");
      }
    };
    if (from instanceof Date && to instanceof Date) {
      return `${getParsedDate(from)} - ${getParsedDate(to)}`;
    }
    return "Not Selected";
  };

  const theme = useTheme();

  const datePickerSx = {
    backgroundColor: theme.palette.datepicker.backgroundColor,
    color: theme.palette.datepicker.color,
    svg: { color: theme.palette.datepicker.color },
    "& .MuiButtonBase-root.MuiPickersDay-root": {
      color: theme.palette.datepicker.color,
      backgroundColor: theme.palette.datepicker.backgroundColor,
      "&:hover": {
        color: theme.palette.datepicker.hover.color,
        backgroundColor: theme.palette.datepicker.hover.backgroundColor
      },
      "&.Mui-selected": {
        color: theme.palette.datepicker.selected.color,
        "&:focus": {
          backgroundColor: theme.palette.datepicker.backgroundColor
        }
      },
      "&.Mui-selected:hover": {
        color: theme.palette.datepicker.hover.color,
        backgroundColor: theme.palette.datepicker.selected.hover.backgroundColor
      },
      "&.Mui-disabled": {
        color: theme.palette.datepicker.disabled
      }
    },
    "& .MuiClockPicker-root": {
      "&>*:nth-of-type(2)": {
        "&>*:nth-of-type(1)": {
          backgroundColor: theme.palette.datepicker.clock.backgroundColor
        }
      }
    },
    "& .MuiTypography-root": {
      color: theme.palette.datepicker.color
    }
  };

  return (
    <>
      <Grid
        container
        onClick={handleClick}
        sx={{
          cursor: disabled ? "default" : "pointer",
          alignItems: "center",
          gap: "5px"
        }}
        hover={disabled ? "" : "activeButtonOnHover"}
      >
        <Icon type="DateIcon" style={{ height: "17px", width: "17px" }} />
        <Typography sx={{ fontSize: "12px", variant: "secondaryColor", cursor: "pointer" }}>Time Range:</Typography>
        <Typography
          color={highlighted ? "link" : ""}
          colors={disabled ? "secondaryDisabled" : "newBlue"}
          component={"span"}
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "1.5"
          }}
        >
          <DateFormat from={from} to={to} isUTC={utc} />{" "}
        </Typography>
        <IconButton
          variant="inputIcon"
          disabled={disabled}
          className="activeOnContainerHover"
          sx={{ transform: `rotate(${anchorEl ? "180deg" : "0"})` }}
        >
          <Icon type={"ExpandMoreIcon"} />
        </IconButton>
      </Grid>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
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
        sx={{
          "& .MuiPaper-root.MuiMenu-paper.MuiPaper-root.MuiPopover-paper": {
            boxShadow: theme => theme.palette.timeRange.boxShadow,
            border: theme => theme.palette.timeRange.border,
            borderRadius: "6px",
            mt: "5px",
            backgroundImage: "none",
            bgcolor: theme => (theme.palette.mode === "light" ? "#fff" : "#1a1c1e")
          },
          "& .MuiMenu-list": {
            p: 0
          }
        }}
      >
        <div>
          <Grid container sx={{ flexGrow: 1, padding: "16px" }} gap={2} direction="column">
            <Grid size={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 400, lineHeight: "16px" }}>
                Time Range
              </Typography>
            </Grid>
            <Grid size={12}>
              <StyledEngineProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid container columnSpacing={2}>
                    <Grid size={6}>
                      <Typography
                        sx={{ mb: 0.625, pl: 1.1875, lineHeight: "14px", fontWeight: 400 }}
                        component="div"
                        variant="captionTitle"
                      >
                        From
                      </Typography>
                      <DateTimePicker
                        ampm={false}
                        value={fromDate?.setSeconds(0)}
                        onChange={handleFromChange}
                        components={{
                          OpenPickerIcon: props => (
                            <Icon {...props} type="TimeRangeCalendarIcon" style={{ width: "14px", height: "15px" }} />
                          )
                        }}
                        PaperProps={{
                          sx: datePickerSx
                        }}
                        renderInput={params => (
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                width: "170px",
                                pr: "17px"
                              },
                              "& .MuiFormLabel-root.MuiInputLabel-root": {
                                top: "-7px",
                                ml: 0
                              },
                              "& .MuiButtonBase-root.MuiIconButton-root": {
                                height: "22px",
                                width: "22px",
                                "& .MuiSvgIcon-root": {
                                  fontSize: "1rem"
                                }
                              }
                            }}
                            variant="outlined"
                            {...params}
                          />
                        )}
                        maxDate={toDate || new Date()}
                        showTodayButton={true}
                        inputFormat="MM/dd/yyyy HH:mm"
                        {...fromDatePickerProps}
                      />
                    </Grid>
                    <Grid size={6}>
                      <Typography
                        sx={{ mb: 0.625, pl: 1.1875, lineHeight: "14px", fontWeight: 400 }}
                        component="div"
                        variant="captionTitle"
                      >
                        To
                      </Typography>
                      <DateTimePicker
                        ampm={false}
                        value={toDate?.setSeconds(0)}
                        onChange={handleToChange}
                        components={{
                          OpenPickerIcon: props => (
                            <Icon {...props} type="TimeRangeCalendarIcon" style={{ width: "14px", height: "15px" }} />
                          )
                        }}
                        PaperProps={{
                          sx: datePickerSx
                        }}
                        renderInput={params => (
                          <TextField
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                width: "170px",
                                pr: "17px"
                              },
                              "& .MuiFormLabel-root.MuiInputLabel-root": {
                                top: "-7px",
                                ml: 0
                              },
                              "& .MuiButtonBase-root.MuiIconButton-root": {
                                height: "22px",
                                width: "22px",
                                "& .MuiSvgIcon-root": {
                                  fontSize: "1rem"
                                }
                              }
                            }}
                            variant="outlined"
                            {...params}
                          />
                        )}
                        minDate={fromDate}
                        maxDate={new Date()}
                        showTodayButton={true}
                        inputFormat="MM/dd/yyyy HH:mm"
                        {...toDatePickerProps}
                      />
                    </Grid>
                  </Grid>
                </LocalizationProvider>
              </StyledEngineProvider>
            </Grid>
            <Grid container sx={{ justifyContent: "flex-end", gap: "5px" }}>
              <Grid>
                <Button size="small" onClick={handleClose} disableRipple aria-label="cancel" name="cancel">
                  Cancel
                </Button>
              </Grid>
              <Grid>
                <Button
                  disableRipple
                  onClick={handleApply}
                  variant="primary"
                  disabled={!fromValid || !toValid}
                  size="small"
                  aria-label="apply"
                  name="apply"
                >
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Menu>
    </>
  );
};

export default TimeRange;
