import React, { useCallback, useEffect, useState } from "react";
import { get } from "lodash";
import axios from "axios";

const UIContext = React.createContext();

const UIProvider = ({ children }) => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [loadingSettings, setLoadingSettings] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [sidebarItems, setSidebarItems] = useState([]);
  const [themes, setThemes] = useState();
  const [chartThemes, setChartThemes] = useState();
  const [generalSettings, setGeneralSettings] = useState();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    (async () => {
      setLoadingSettings(true);
      const response = await axios.get(`${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/settings/ui`, {
        withCredentials: true,
        headers: { Context: "" }
      });
      setRoutes(get(response, "data.ui.routing", []));
      setSidebarItems(get(response, "data.ui.sideBar", []));
      setChartThemes(get(response, "data.ui.chartThemes", []));
      setThemes(get(response, "data.ui.themes", []));
      setGeneralSettings(get(response, "data.ui.general", []));
      setOrganization(get(response, "data.ui.organization", null));
      setLoadingSettings(false);
    })();
  }, []);

  useEffect(() => {
    const favIcon = document.getElementById("favicon-link");
    if (favIcon && organization) favIcon.href = organization?.logo?.favIcon;
  }, [organization]);

  const addBreadCrumb = useCallback((name, link) => {
    setBreadCrumbs(prv => [...prv, { name, link }]);
  }, []);

  const resetBreadCrumbs = useCallback(() => {
    setBreadCrumbs([]);
  }, []);

  const getGeneralSettings = useCallback(
    (entity, field, value) => {
      let foundObj = {};
      if (generalSettings) {
        foundObj = generalSettings[entity];
        if (foundObj && !field) return foundObj.default || {};
        if (foundObj && field) {
          if (foundObj[field]) {
            foundObj = foundObj[field];
          } else {
            return {};
          }
          if (!value) {
            return foundObj.default || {};
          } else {
            return foundObj[value] || foundObj.default || {};
          }
        }
        return generalSettings.default || {};
      }
      return {};
    },
    [generalSettings]
  );

  return (
    <UIContext.Provider
      value={{
        breadCrumbs,
        addBreadCrumb,
        resetBreadCrumbs,
        loadingSettings,
        getGeneralSettings,
        sideBarToggle,
        setSideBarToggle,
        sidebarItems,
        routes,
        themes,
        chartThemes,
        organization
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export { UIContext, UIProvider };
