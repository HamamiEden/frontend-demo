import { endOfMonth, formatISO, getUnixTime, sub } from "date-fns";

const isTimestamp = n => {
  const parsed = parseFloat(n);
  return !Number.isNaN(parsed) && Number.isFinite(parsed) && /^\d+\.?\d+$/.test(n);
};

const convertDateToUTC = date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

const getDateUTC = day => {
  const dayDate = formatISO(day, { representation: "date" });
  return `${dayDate}T00:00:00.000Z`;
};

const getAvailableYear = selectedMonthId => {
  let year = currentYear;
  if (currentMonth < selectedMonthId) {
    return year - 1;
  }
  return year;
};

const getFirstDayTimestamp = selectedMonthId => {
  const firstDay = new Date(getAvailableYear(selectedMonthId), selectedMonthId - 1);
  return getDateUTC(firstDay);
};

const getLastDayTimestamp = selectedMonthId => {
  const lastDay = endOfMonth(new Date(getAvailableYear(selectedMonthId), selectedMonthId - 1));
  return getDateUTC(lastDay);
};

const months = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" }
];
const getMonthsWithYears = () => {
  const comparator = (a, b) => {
    // We add 12 before subtracting the month id from the current month and performing modulo operation to ensure we get a positive number.
    // The result of this operation gives the "distance" between the current month and the month represented by the id.
    const aMonth = (currentMonth - a.id + 12) % 12;
    const bMonth = (currentMonth - b.id + 12) % 12;
    return aMonth - bMonth;
  };

  const sortedMonths = months.sort(comparator);
  return sortedMonths.map(month => {
    return { ...month, name: `${month.name} ${getAvailableYear(month.id)}` };
  });
};

const buildTimeRangeObj = (type, amount, ms = false) => {
  const timeRange = {};
  if (type && amount) {
    timeRange.from = getUnixTime(sub(new Date(), { [type]: amount })) * (ms ? 1000 : 1);
    timeRange.to = getUnixTime(new Date()) * (ms ? 1000 : 1);
  }
  return timeRange;
};

export default {
  isTimestamp,
  convertDateToUTC,
  getFirstDayTimestamp,
  getLastDayTimestamp,
  getMonthsWithYears,
  buildTimeRangeObj
};
