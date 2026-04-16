import { useCallback } from "react";

const useGoogleAnalytics = (event, name, category, action, label, debugMode = false) => {
  const triggerEvent = useCallback(() => {
    window.dataLayer = window.dataLayer || [];
    window?.dataLayer?.push({
      event: event,
      event_name: name,
      event_category: category,
      event_action: action,
      event_label: label,
      debug_mode: debugMode
    });
  }, [event, name, category, action, label, debugMode]);

  return { triggerEvent };
};

export default useGoogleAnalytics;
