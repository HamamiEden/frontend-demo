import { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AccountContext } from "../Context/Context";

const TrialsContext = createContext();

const TrialsProvider = ({ children }) => {
  const { accountContext } = useContext(AccountContext);
  const [accountTrials, setAccountTrials] = useState([]);
  const [drawerState, setDrawerState] = useState(false);
  const [entityType, setEntityType] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [isTrialsAdmin, setIsTrialsAdmin] = useState(false);
  const [accountId, setAccountId] = useState(null);

  const resetTrials = () => setAccountTrials([]);

  const resetDrawer = () => {
    setDrawerState(false);
    setEntityType(null);
    setItemId(null);
    setAccountId(null);
  };

  const fetchAccountTrials = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/trials?projection=accountId,applicationIds`,
        { withCredentials: true, headers: { Context: accountContext } }
      );
      setAccountTrials(data?.trials);
      setIsTrialsAdmin(data?.isAdmin);
    } catch (error) {
      resetTrials();
      resetDrawer();
    }
  }, [accountContext]);

  const getAccountTrials = useCallback(
    accountId => {
      if (!accountId) return accountTrials;
      const listOfTrials = accountTrials.filter(trial => trial?.accountId === accountId);
      return listOfTrials;
    },
    [accountTrials]
  );

  const getTrialByType = useCallback(
    (type, accountId) => {
      if (!type) return {};
      const listofTrials = accountId ? getAccountTrials(accountId) : accountTrials;
      const trialSelected = listofTrials.find(trial => trial.type === type) || {};
      return trialSelected;
    },
    [accountTrials, getAccountTrials]
  );

  const hasTrial = useCallback(
    (type, accountId) => {
      if (!type) return false;
      const listofTrials = accountId ? getAccountTrials(accountId) : accountTrials;
      const trialSelected = listofTrials.find(trial => trial.type === type);
      return trialSelected ? true : false;
    },
    [accountTrials, getAccountTrials]
  );

  const isTrialPending = useCallback(
    (type, accountId) => {
      const trialSelected = getTrialByType(type, accountId);

      return trialSelected?.status === "PENDING" || trialSelected?.status === "INITIALIZING";
    },
    [getTrialByType]
  );

  const isTrialActive = useCallback(
    (type, accountId) => {
      const trialSelected = getTrialByType(type, accountId);

      return trialSelected?.status === "ACTIVE";
    },
    [getTrialByType]
  );

  const isTrialExpired = useCallback(
    (type, accountId) => {
      const trialSelected = getTrialByType(type, accountId);

      return trialSelected?.status === "TERMINATING" || trialSelected?.status === "EXPIRED";
    },
    [getTrialByType]
  );

  const openDrawer = useCallback(
    (type, entityTypeId, accountId) => {
      if (!type || !entityTypeId) {
        resetDrawer();
        return;
      }

      setAccountId(accountId ? accountId : accountContext);
      setEntityType(type);
      setItemId(entityTypeId);
      setDrawerState(true);
    },
    [accountContext]
  );

  const closeDrawer = useCallback(() => {
    resetDrawer();
  }, []);

  useEffect(() => {
    if (accountContext) {
      fetchAccountTrials();
    }
    return () => {
      resetTrials();
      resetDrawer();
    };
  }, [accountContext, fetchAccountTrials]);

  return (
    <TrialsContext.Provider
      value={{
        accountTrials,
        drawerState,
        entityType,
        itemId,
        isTrialsAdmin,
        accountId,
        fetchAccountTrials,
        getTrialByType,
        getAccountTrials,
        hasTrial,
        isTrialPending,
        isTrialActive,
        isTrialExpired,
        openDrawer,
        closeDrawer
      }}
    >
      {children}
    </TrialsContext.Provider>
  );
};

export { TrialsContext, TrialsProvider };
