import React, { useCallback, useMemo, useState } from "react";
import { localStorage } from "@csms-consoles/shared-utils";

const FiltersContext = React.createContext();

const FiltersProvider = React.memo(({ children }) => {
  const localFilters = useMemo(() => JSON.parse(localStorage.get("filters")) || {}, []);
  const [filters, setFilters] = useState({});

  const validateFiltersByType = useCallback(
    (type, filters) => {
      if (!type) return;
      const localstorageTypeFilters = localFilters?.[type];
      const version = filters?.version;

      const updateFiltersState = filters => {
        setFilters(prevFilters => {
          const updatedFilters = { ...prevFilters };
          updatedFilters[type] = {
            ...updatedFilters[type],
            ...filters,
            validated: true
          };
          return updatedFilters;
        });
      };

      if (!localstorageTypeFilters) {
        updateFiltersState({ version });
      } else if (!version) {
        const { version, ...rest } = localstorageTypeFilters;
        updateFiltersState(rest);
      } else {
        if (version === localstorageTypeFilters?.version) {
          updateFiltersState(localstorageTypeFilters);
        } else {
          delete localFilters[type];
          localStorage.set("filters", localFilters, true);
          updateFiltersState({ version });
        }
      }
    },
    [localFilters]
  );

  const getFiltersByType = useCallback(
    type => {
      if (!type) return;
      return filters?.[type]?.filters;
    },
    [filters]
  );

  const checkFiltersByType = useCallback(
    type => {
      if (!type) return;
      return filters?.[type]?.validated;
    },
    [filters]
  );

  const getAllFilters = useCallback(() => {
    return filters;
  }, [filters]);

  const setFiltersByType = useCallback(
    (type = "", filters, shouldStoreLocalStorage = true) => {
      if (!type) return;
      if (!filters && !Array.isArray(filters) && typeof filters !== "object") return;

      setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters };
        updatedFilters[type] = {
          ...updatedFilters[type],
          filters
        };

        if (shouldStoreLocalStorage && updatedFilters?.[type]?.validated) {
          const { validated, ...parsedFilter } = updatedFilters[type];
          localFilters[type] = parsedFilter;
          localStorage.set("filters", localFilters, true);
        }
        return updatedFilters;
      });
    },
    [localFilters]
  );

  const clearFiltersByType = useCallback(
    (type = "") => {
      if (!type) return;

      setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[type];

        if (localFilters[type]) {
          localStorage.set("filters", updatedFilters, true);
        }
        return updatedFilters;
      });
    },
    [localFilters]
  );

  const clearAllFilters = useCallback(() => {
    localStorage.set("filters", {}, true);
    setFilters({});
  }, []);

  return (
    <FiltersContext.Provider
      value={{
        filters,
        getFiltersByType,
        getAllFilters,
        setFiltersByType,
        clearAllFilters,
        clearFiltersByType,
        validateFiltersByType,
        checkFiltersByType
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
});

export { FiltersContext, FiltersProvider };
