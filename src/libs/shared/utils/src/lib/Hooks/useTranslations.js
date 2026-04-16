import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const useTranslations = () => {
  const { t } = useTranslation();
  const translate = useCallback(
    (value = "", defaultVal) => {
      if (typeof value === "string") {
        return t(value.toUpperCase(), defaultVal !== undefined ? defaultVal : value);
      }

      return value;
    },
    [t]
  );

  return translate;
};

export default useTranslations;
