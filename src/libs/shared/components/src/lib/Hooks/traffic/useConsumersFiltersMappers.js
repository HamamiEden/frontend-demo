import { useContext, useMemo } from "react";
import { cloneDeep } from "lodash";
import { getUnixTime } from "date-fns";
import { AttacksContext, FiltersContext } from "@csms-consoles/shared-state";
import { DatesUtils, TrafficUtils } from "@csms-consoles/shared-utils";

const MULIPLY_TO_MILISECONDS = 1000;

const ATTACK_MANAGEMENT_ASSET_FILTER_TYPE = "extendedAssets";
const ATTACK_MANAGEMENT_ATTACK_FILTER_TYPE = "attacks";
const ATTACK_MANAGEMENT_EVENT_FILTER_TYPE = "extendedEvents";
const ATTACK_MANAGEMENT_OPERATIONAL_FILTER_TYPE = "extendedOperational";
const ATTACK_MANAGEMENT_TRAFFIC_FILTER_TYPE = "attackManagementTraffic";
const ATTACK_MANAGEMENT_ANALYTICS_FILTER_TYPE = "attackManagementAnalytics";
const ATTACK_MANAGEMENT_SEARCH_FILTER_TYPE = "ATTACK_MANAGEMENT_SEARCH_FILTERS";
const ATTACK_MANAGEMENT_TIME_RANGE_TYPE = "attackManagementTimeRange";
const ATTACK_MANAGEMENT_QUICK_RANGE_FILTER_TYPE = "attackManagementQuickRange";
const ENTITY_FILTER_TYPE = "entity";
const TIME_RANGE = "timeRange";
const ATTACK_MANAGEMENT_ASSETS = "ATTACK_MANAGEMENT_ASSETS";

const entitiesConsumers = [
  ATTACK_MANAGEMENT_ASSET_FILTER_TYPE,
  ATTACK_MANAGEMENT_ATTACK_FILTER_TYPE,
  ATTACK_MANAGEMENT_EVENT_FILTER_TYPE,
  ATTACK_MANAGEMENT_OPERATIONAL_FILTER_TYPE
];

const statisticsConsumers = [ATTACK_MANAGEMENT_TRAFFIC_FILTER_TYPE, ATTACK_MANAGEMENT_ANALYTICS_FILTER_TYPE];

const useConsumersFiltersMappers = () => {
  const { getFiltersByType, setFiltersByType, clearFiltersByType } = useContext(FiltersContext);
  const { attacks } = useContext(AttacksContext);
  const searchFilter = useMemo(() => getFiltersByType(ATTACK_MANAGEMENT_SEARCH_FILTER_TYPE), [getFiltersByType]);
  const quickRange = getFiltersByType(ATTACK_MANAGEMENT_QUICK_RANGE_FILTER_TYPE)?.selectedRange;

  const { attackdAssets, attackIdAlias } = attacks || {};
  const entitiesConsumersFilters = entitiesConsumers.map(v => getFiltersByType(v) || []);
  const statisticsConsumersFilters = statisticsConsumers.map(getFiltersByType);

  const clearFilters = (filters, fieldName, fieldsToRemove) => filters?.filter(obj => !fieldsToRemove.includes(obj?.[fieldName]));

  const filterByTime = (consumerCategory, consumerType, consumerFiltersByType, searchFiltersByType, filterData) => {
    const { from, to, tr, shouldUpdateTimerange } = filterData;
    let timeRange;

    if (!from && !to) {
      const timeRangeObj = DatesUtils.buildTimeRangeObj(quickRange?.subtract?.type, quickRange?.subtract?.amount);
      timeRange = { from: timeRangeObj.from * MULIPLY_TO_MILISECONDS, to: timeRangeObj.to * MULIPLY_TO_MILISECONDS, tr: quickRange?.tr };

      setFiltersByType(
        ATTACK_MANAGEMENT_TIME_RANGE_TYPE,
        {
          from: new Date(timeRange.from),
          to: new Date(timeRange.to),
          isAutoMappedByQuickRange: true
        },
        false
      );
    } else {
      timeRange = { from, to, tr };
    }

    if (!timeRange.tr) timeRange.tr = TrafficUtils.getTimeResolution(timeRange.from, timeRange.to);

    if (shouldUpdateTimerange) {
      setFiltersByType(
        ATTACK_MANAGEMENT_TIME_RANGE_TYPE,
        {
          from: new Date(timeRange.from),
          to: new Date(timeRange.to),
          isAutoMappedByQuickRange: false
        },
        false
      );
    }

    if (consumerCategory === "ENTITY") {
      let filters = clearFilters(consumerFiltersByType, "field", ["startTimestamp", "timestamp"]);

      const nextFilter = {
        from: new Date(timeRange.from).toISOString(),
        to: new Date(timeRange.to).toISOString(),
        field: "timestamp",
        fieldName: "Date/Time"
      };

      if (consumerType === ATTACK_MANAGEMENT_OPERATIONAL_FILTER_TYPE) {
        filters = [...filters, nextFilter];
      } else if (consumerType === ATTACK_MANAGEMENT_EVENT_FILTER_TYPE || consumerType === ATTACK_MANAGEMENT_ATTACK_FILTER_TYPE) {
        filters = [...filters, { ...nextFilter, field: "startTimestamp" }];
      }

      return { consumerFiltersByType: filters, searchFiltersByType };
    }

    if (consumerCategory === "STATISTICS") {
      return {
        consumerFiltersByType: {
          ...consumerFiltersByType,
          [TIME_RANGE]: {
            from: getUnixTime(timeRange.from),
            to: getUnixTime(timeRange.to),
            tr: timeRange.tr
          }
        },
        searchFiltersByType
      };
    }
  };

  const filterByAttack = (consumerCategory, consumerType, consumerFiltersByType, searchFiltersByType, filterData, supportMultiFilters) => {
    const { entityName, attackId } = filterData;
    let newSearchFilter;

    if (entityName && attackId) {
      const searchFiltersToAdd = [
        {
          key: "assets",
          label: "Assets",
          values: [entityName || attackdAssets[0].name]
        },
        {
          key: "attacks",
          label: "Attack ID",
          values: [attackId] || [attackIdAlias]
        }
      ];

      if (supportMultiFilters) {
        newSearchFilter = clearFilters(searchFiltersByType, "key", ["assets", "attacks"]);
        newSearchFilter.push(...searchFiltersToAdd);
      } else {
        newSearchFilter = searchFiltersToAdd;
      }

      if (consumerCategory === "ENTITY") {
        const nextFilter = [{ id: entityName || attackdAssets[0].name, field: "assetName", entity: consumerType }];

        if (consumerType === ATTACK_MANAGEMENT_ASSET_FILTER_TYPE) {
          nextFilter[0].fieldName = "Name";
          nextFilter[0].field = "name";
        } else if (consumerType === ATTACK_MANAGEMENT_ATTACK_FILTER_TYPE) {
          nextFilter.push({ field: "attackIdAlias", entity: "attacks", id: attackId || attackIdAlias });
        }

        return { consumerFiltersByType: [...consumerFiltersByType, ...nextFilter], searchFiltersByType: newSearchFilter };
      } else {
        return { consumerFiltersByType, searchFiltersByType: newSearchFilter };
      }
    } else {
      const data = filterByTime(consumerCategory, consumerType, consumerFiltersByType, searchFiltersByType, {});

      if (consumerCategory === "ENTITY" && consumerType === ATTACK_MANAGEMENT_ATTACK_FILTER_TYPE) {
        return {
          consumerFiltersByType: clearFilters(data.consumerFiltersByType, "field", ["attackIdAlias"]),
          searchFiltersByType: clearFilters(data.searchFiltersByType, "key", ["attacks"])
        };
      }

      return data;
    }
  };

  const filterByAsset = (consumerCategory, consumerType, consumerFiltersByType, searchFiltersByType, filterData, supportMultiFilters) => {
    const { asset } = filterData;
    let newSearchFilter;

    if (asset) {
      const searchFilterToAdd = [
        {
          key: "assets",
          label: "Assets",
          values: [asset?.name]
        }
      ];

      if (supportMultiFilters) {
        newSearchFilter = clearFilters(searchFiltersByType, "key", ["assets"]);
        newSearchFilter.push(...searchFilterToAdd);
      } else {
        newSearchFilter = searchFilterToAdd;
      }

      setFiltersByType(ATTACK_MANAGEMENT_ASSETS, { _id: asset?._id, name: asset?.name });

      if (consumerCategory === "ENTITY") {
        let filters = clearFilters(consumerFiltersByType, "entity", [consumerType]);
        const nextFilter = { id: asset?.name, field: "assetName", entity: consumerType };

        if (consumerType === ATTACK_MANAGEMENT_ASSET_FILTER_TYPE) {
          nextFilter.fieldName = "Name";
          nextFilter.field = "name";
        }

        filters = [...filters, nextFilter];

        return { consumerFiltersByType: filters, searchFiltersByType: newSearchFilter };
      }

      if (consumerCategory === "STATISTICS") {
        return {
          consumerFiltersByType: { ...consumerFiltersByType, [ENTITY_FILTER_TYPE]: { entityId: asset?._id, entityType: "asset" } },
          searchFiltersByType: newSearchFilter
        };
      }
    } else {
      const filteredSearchFilter = clearFilters(searchFiltersByType, "key", ["assets"]);
      clearFiltersByType(ATTACK_MANAGEMENT_ASSETS);

      if (consumerCategory === "ENTITY") {
        if (consumerType === ATTACK_MANAGEMENT_ATTACK_FILTER_TYPE) {
          return {
            consumerFiltersByType: clearFilters(consumerFiltersByType, "field", ["assetName"]),
            searchFiltersByType: filteredSearchFilter
          };
        } else {
          return {
            consumerFiltersByType: clearFilters(consumerFiltersByType, "entity", [consumerType]),
            searchFiltersByType: filteredSearchFilter
          };
        }
      }

      if (consumerCategory === "STATISTICS") {
        return { consumerFiltersByType: { ...consumerFiltersByType, [ENTITY_FILTER_TYPE]: {} }, searchFiltersByType };
      }
    }
  };

  const filterByType = (
    consumerCategory,
    consumerType,
    filter,
    consumerFiltersByType,
    searchFiltersByType,
    supportMultiFilters = false
  ) => {
    switch (filter?.type) {
      case "ASSETS": {
        return filterByAsset(consumerCategory, consumerType, consumerFiltersByType, searchFiltersByType, filter?.data, supportMultiFilters);
      }
      case "ATTACKS": {
        return filterByAttack(
          consumerCategory,
          consumerType,
          consumerFiltersByType,
          searchFiltersByType,
          filter?.data,
          supportMultiFilters
        );
      }
      case "TIME": {
        return filterByTime(consumerCategory, consumerType, consumerFiltersByType, searchFiltersByType, filter?.data);
      }
    }
  };

  const updateFilters = (filtersToUpdate = []) => {
    let searchFiltersByType = cloneDeep(searchFilter);

    entitiesConsumers.forEach((type, index) => {
      let entityConsumerFiltersByType = cloneDeep(entitiesConsumersFilters[index]);

      filtersToUpdate.forEach(filter => {
        const data = filterByType("ENTITY", type, filter, entityConsumerFiltersByType, searchFiltersByType, false);

        searchFiltersByType = data.searchFiltersByType;
        entityConsumerFiltersByType = data.consumerFiltersByType;
      });

      setFiltersByType(type, entityConsumerFiltersByType, false);
    });

    statisticsConsumers.forEach((type, index) => {
      let statisticsConsumerFiltersByType = cloneDeep(statisticsConsumersFilters[index]);

      filtersToUpdate.forEach(filter => {
        const data = filterByType("STATISTICS", type, filter, statisticsConsumerFiltersByType, searchFiltersByType, false);

        searchFiltersByType = data.searchFiltersByType;
        statisticsConsumerFiltersByType = data.consumerFiltersByType;
      });

      setFiltersByType(type, statisticsConsumerFiltersByType);
    });

    setFiltersByType(ATTACK_MANAGEMENT_SEARCH_FILTER_TYPE, searchFiltersByType);
  };

  return { updateFilters };
};

export default useConsumersFiltersMappers;
