import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Return a cleanup function that will be called every time ...
      return () => {
        clearTimeout(handler);
      };
    },
    // Only re-call effect if value changes
    [value, delay]
  );

  return debouncedValue;
}
