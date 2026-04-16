import React, { useCallback, useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import axios from "axios";
import { localStorage } from "@csms-consoles/shared-utils";

const AccountContext = React.createContext();

const AccountContextProvider = ({ children }) => {
  const [accountContext, setAccountContext] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState();
  const [accounts, setAccounts] = useState([]);
  const [loadingContext, setLoading] = useState(true);
  const [accountAddons, setAccountAddons] = useState({});
  const [accountServices, setAccountServices] = useState({});
  const [accountPlans, setAccountPlans] = useState({});
  const [loadingServices, setLoadingServices] = useState(false);
  const [accountServicesDetails, setAccountServicesDetails] = useState([]);
  const [versions, setVersions] = useState(null);

  const getContextServices = useCallback(async accountId => {
    const { data } = await axios.get(
      `${
        process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL
      }/entities/accounts/services/${accountId}?fields=addons,type,planType`,
      { withCredentials: true, headers: { Context: accountId } }
    );

    return data || [];
  }, []);

  const updateContext = useCallback(
    async context => {
      localStorage.set("accountId", context._id);
      setSelectedAccount(context);
      setAccountContext(context._id);
      setLoadingServices(true);
      const services = await getContextServices(context._id);
      setLoadingServices(false);
      if (services) {
        let accountAddons = {};
        let accountServices = {};
        let accountPlans = {};
        if (Array.isArray(services) && services.length) {
          setAccountServicesDetails(services);
          for (let service of services) {
            accountAddons = { ...accountAddons, ...service.addons };
            accountServices[String(service.type).toLocaleLowerCase()] = true;
            accountPlans[String(service.type).toLocaleLowerCase()] = service?.planType;
          }
        } else if (typeof services === "object" && services?.type) {
          accountAddons = { ...services.addons };
          accountServices[String(services.type).toLocaleLowerCase()] = true;
          accountPlans[String(services.type).toLocaleLowerCase()] = services?.planType;
        }
        setAccountServices(accountServices);
        setAccountAddons(accountAddons);
        setAccountPlans(accountPlans);
      }
    },
    [getContextServices]
  );

  const getContext = useCallback(() => {
    return localStorage.get("accountId");
  }, []);

  useEffect(() => {
    (async () => {
      const accountRequest = await axios
        .get(
          `${
            process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL
          }/entities/accounts?sortBy=name&orderBy=1&fields=_type,name`,
          { withCredentials: true, headers: { Context: "" } }
        )
        .catch(error => {
          setLoading(false);
        });
      const accountsList = accountRequest?.data;
      setAccounts(accountsList);
      if (accountsList && accountsList.length > 0) {
        let localStorageAccountId = getContext();
        if (localStorageAccountId) {
          let context = accountsList.find(item => item._id === localStorageAccountId);
          // If context exists this means we have a match between localstorage accountid and accounts list
          if (context) {
            await updateContext(context);
          } else {
            // if we get here this means we have found localstorage accountid but it doesn't match out list
            // this can happen if we switch auth0 account context or moved from unified to standalone
            await updateContext(accountsList[0]);
          }
        } else {
          await updateContext(accountsList[0]);
        }
      }
      setLoading(false);
    })();
  }, [updateContext, getContext]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/settings/build-versions`,
        {
          withCredentials: true,
          headers: { Context: "" }
        }
      );
      setVersions(get(response, "data.versions", []));
    })();
  }, []);

  const getServiceIdByType = useCallback(
    type => {
      const service = accountServicesDetails?.find(service => String(service?.type).toUpperCase() === String(type).toUpperCase());
      return service?.id;
    },
    [accountServicesDetails]
  );

  const ddosAccountId = useMemo(() => selectedAccount?.cddosId, [selectedAccount]);

  const wafAccountId = useMemo(() => selectedAccount?.cwafId, [selectedAccount]);

  const unifiedAccountId = useMemo(() => selectedAccount?._id, [selectedAccount]);

  // const accountServices = useMemo(() => {
  //   return { cddos: !!selectedAccount?.cddosId, cwaf: !!selectedAccount?.cwafId}
  // }, [selectedAccount])

  const accountType = useMemo(() => selectedAccount?._type, [selectedAccount]);

  const accountName = useMemo(() => selectedAccount?.name, [selectedAccount]);

  const accountOverusage = useMemo(() => selectedAccount?.overusageEnabled, [selectedAccount]);

  const accountErtLiveChat = useMemo(() => selectedAccount?.ertLiveChat, [selectedAccount]);

  const accountCrmId = useMemo(() => selectedAccount?.crmId, [selectedAccount]);

  return (
    <AccountContext.Provider
      value={{
        updateContext,
        getServiceIdByType,
        accountContext,
        ddosAccountId,
        wafAccountId,
        unifiedAccountId,
        accounts,
        selectedAccount,
        loadingContext,
        accountServices,
        accountType,
        accountName,
        accountAddons,
        accountOverusage,
        loadingServices,
        accountPlans,
        accountErtLiveChat,
        versions,
        accountCrmId
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContext, AccountContextProvider };
