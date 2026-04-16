import React, { useCallback, useMemo, useState } from "react";
import { localStorage } from "@csms-consoles/shared-utils";

const ListSettingsContext = React.createContext();

const LOCALSTORAGE_NAME = "lists";

const ListSettingsProvider = React.memo(({ children }) => {
  const localListSettings = useMemo(() => JSON.parse(localStorage.get(LOCALSTORAGE_NAME)) || {}, []);
  const [listSettings, setListSettings] = useState({});

  const validateSettingsByType = useCallback(
    (type, settingsKey, settingsValue, version) => {
      if (!type || !settingsKey) return;
      const localstorageTypeSettings = localListSettings?.[type];

      const updateSettingsState = settings => {
        setListSettings(prevSettings => {
          const updatedSettings = { ...prevSettings };
          updatedSettings[type] = {
            ...updatedSettings[type],
            ...settings,
            [settingsKey]: localstorageTypeSettings?.[settingsKey] || settingsValue
          };
          updatedSettings[type].validated = true;

          return updatedSettings;
        });
      };

      if (!localstorageTypeSettings) {
        updateSettingsState({ version });
      } else if (!version) {
        const { version, ...rest } = localstorageTypeSettings;
        updateSettingsState(rest);
      } else {
        if (version === localstorageTypeSettings?.version) {
          updateSettingsState(localstorageTypeSettings);
        } else {
          delete localListSettings[type][settingsKey];
          localStorage.set(LOCALSTORAGE_NAME, localListSettings, true);
          updateSettingsState({ version });
        }
      }
    },
    [localListSettings]
  );

  const getListSettingsByType = useCallback(
    (type, settingsKey) => {
      if (!type) return;
      return settingsKey ? listSettings?.[type]?.[settingsKey] : listSettings?.[type];
    },
    [listSettings]
  );

  const setListSettingsByType = useCallback(
    (type = "", settingsKey, settingsValue, shouldStoreLocalStorage = true) => {
      if (!type || !settingsKey) return;
      if (!settingsValue && !Array.isArray(settingsValue) && typeof settingsValue !== "object") return;

      setListSettings(prevSettings => {
        const updatedListSettings = { ...prevSettings };
        updatedListSettings[type] = { ...updatedListSettings[type] };
        updatedListSettings[type][settingsKey] = settingsValue;

        if (shouldStoreLocalStorage && updatedListSettings?.[type]?.validated) {
          const { validated, ...parsedListSettings } = updatedListSettings[type];
          localListSettings[type] = parsedListSettings;
          localStorage.set(LOCALSTORAGE_NAME, localListSettings, true);
        }
        return updatedListSettings;
      });
    },
    [localListSettings]
  );

  const isListSettingsValidated = useCallback(
    type => {
      if (!type) return;
      return listSettings?.[type]?.validated;
    },
    [listSettings]
  );

  return (
    <ListSettingsContext.Provider
      value={{
        listSettings,
        getListSettingsByType,
        setListSettingsByType,
        validateSettingsByType,
        isListSettingsValidated
      }}
    >
      {children}
    </ListSettingsContext.Provider>
  );
});

export { ListSettingsProvider, ListSettingsContext };
