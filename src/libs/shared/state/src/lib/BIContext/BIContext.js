import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { AccountContext } from "../Context/Context";

const BIContext = createContext();

const BIProvider = ({ children }) => {
  const { accountContext, accountCrmId } = useContext(AccountContext);
  const [biIntegration, setBiIntegration] = useState({});
  const hasNotEntitledData = !!biIntegration?.notEntitledFlag;

  const fetchBiIntegration = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/entities/admin/bi/entitled/${accountCrmId}`,
        { withCredentials: true, headers: { Context: accountContext } }
      );
      setBiIntegration(data);
    } catch (error) {
      setBiIntegration({});
    }
  }, [accountCrmId, accountContext]);

  useEffect(() => {
    if (accountContext) {
      fetchBiIntegration();
    }
    return () => {
      setBiIntegration({});
    };
  }, [accountContext, fetchBiIntegration]);

  return <BIContext.Provider value={{ accountContext, biIntegration, hasNotEntitledData }}>{children}</BIContext.Provider>;
};

export { BIContext, BIProvider };
