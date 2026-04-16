import { intervalToDuration } from "date-fns";

const getTimeResolution = (from, to) => {
  const { days: daysFromStart, months: monthsFromStart } = intervalToDuration({
    start: from,
    end: Date.now()
  });

  const duration = intervalToDuration({
    start: from,
    end: to
  });

  if (daysFromStart < 14 && !monthsFromStart) {
    if (duration.hours < 10 && !duration.days) return "1m";
    if (duration.hours >= 10 || duration.days < 7) return "10m";
    if (duration.days >= 7 && duration.days < 14) return "1h";
  }

  if (daysFromStart >= 14 && daysFromStart < 28 && !monthsFromStart) {
    if (duration.days < 7) return "10m";
    if (duration.days >= 7 && duration.days < 28) return "1h";
  }

  if (daysFromStart >= 28 || monthsFromStart) {
    if (duration.hours < 10 && !duration.days && !duration.months) return "10m";
    if (duration.hours >= 10 && duration.days < 14 && !duration.months) return "1h";
    if (duration.days >= 14 || duration.months) return "1d";
  }
};

export default { getTimeResolution };
