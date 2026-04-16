import { format, isValid } from "date-fns";
import useTranslations from "../Hooks/useTranslations";

const conversions = {
  default: [
    { limit: 1000, unit: "" },
    { limit: 1000 * 1000, unit: "K" },
    { limit: 1000 * 1000 * 1000, unit: "M" },
    { limit: 1000 * 1000 * 1000 * 1000, unit: "B" }
  ],
  ms: [
    { limit: 1000, divisor: 1, unit: "ms" },
    { limit: 1000 * 60, divisor: 1000, unit: "s" },
    { limit: 1000 * 60 * 60, divisor: 1000 * 60, unit: "m" },
    { limit: 1000 * 60 * 60 * 60, divisor: 1000 * 60 * 60, unit: "h" }
  ],
  bytes: [
    { limit: 1000, unit: "B" },
    { limit: 1000 * 1000, unit: "KB" },
    { limit: 1000 * 1000 * 1000, unit: "MB" },
    { limit: 1000 * 1000 * 1000 * 1000, unit: "GB" },
    { limit: 1000 * 1000 * 1000 * 1000 * 1000, unit: "TB" }
  ],
  bitRates: [
    { limit: 1000, unit: "bps" },
    { limit: 1000 * 1000, unit: "Kbps" },
    { limit: 1000 * 1000 * 1000, unit: "Mbps" },
    { limit: 1000 * 1000 * 1000 * 1000, unit: "Gbps" },
    { limit: 1000 * 1000 * 1000 * 1000 * 1000, unit: "Tbps" }
  ]
};

const kbps2mbps = (kb, decimals = 0, isBytes) => {
  let bytes = isBytes ? kb : kb * 1000;
  if (bytes === 0) return "0 Kbps";

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bps", "Kbps", "Mbps", "Gbps"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const quantityToUnit = (quantity, decimals = 0, conversionType) => {
  if (quantity === 0) {
    return { quantity: 0, unit: "" };
  }

  const conversion = conversions[conversionType || "default"];

  for (let [i, set] of conversion.entries()) {
    if (quantity < set.limit || i === conversion.length - 1) {
      const normalizedQuantity = conversionType === "ms" ? quantity / set.divisor : quantity * (1000 / set.limit);

      return {
        quantity: parseFloat(normalizedQuantity.toFixed(decimals)),
        unit: set.unit
      };
    }
  }
};

const Recurrences = ({ recurrence }) => {
  const translate = useTranslations();
  if (!recurrence) {
    return "";
  }

  let timeString = "";
  try {
    if (isValid(new Date(recurrence.time))) {
      timeString = `at ${format(new Date(recurrence.time), "HH:mm")}`;
    }
  } catch (e) {
    console.log(e);
  }

  switch (recurrence.type) {
    case "DAYS": {
      let daysSelected = recurrence.values && (recurrence.values !== "" || recurrence.values.length > 0);
      let daysString = daysSelected
        ? `, every ${recurrence.values instanceof Array ? recurrence.values.join(", ") : recurrence.values} day(s)`
        : "";
      return `Daily${daysString} ${timeString}`;
    }
    case "WEEKS": {
      let dayString =
        recurrence.values.length > 0
          ? `, every ${recurrence.values
              .map(item => translate("DAYS_" + item, " "))
              .filter(item => item !== " ")
              .join(", ")}`
          : "";
      return `Weekly${dayString} ${timeString}`;
    }
    case "MONTHS": {
      let dayString =
        recurrence.values.length > 0
          ? `, every ${recurrence.values
              .map(item => {
                if (String(item).slice(-1) === "1") {
                  return String(item) + "st";
                } else if (String(item).slice(-1) === "2") {
                  return String(item) + "nd";
                } else if (String(item).slice(-1) === "3") {
                  return String(item) + "rd";
                }
                return String(item) + "th";
              })
              .join(", ")} of month`
          : "";
      return `Monthly${dayString} ${timeString}`;
    }
    default:
      return "";
  }
};

const unitConverter = (rateType, scaleType) => {
  let rate = "";
  let scale = "";
  if (scaleType && typeof scaleType === "string") {
    scale = scaleType.charAt(0).toUpperCase();
  }
  if (rateType && typeof rateType === "string") {
    rate = rateType.toLowerCase();
  }
  return `${scale}${rate}`;
};

export default {
  kbps2mbps,
  Recurrences,
  unitConverter,
  quantityToUnit
};
