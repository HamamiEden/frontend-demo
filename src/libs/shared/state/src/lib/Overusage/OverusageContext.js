import { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AccountContext } from "../Context/Context";

const projection = [
  "service",
  "accountId",
  "type",
  "startedAt",
  "confirmReason",
  "confirmedAt",
  "limit",
  "count",
  "overUsage",
  "peak",
  "average",
  "unit",
  "month"
];

const OverusageContext = createContext();

const OverusageProvider = ({ children }) => {
  const { accountContext, accountOverusage } = useContext(AccountContext);
  const [open, setOpen] = useState(false);
  const [overUsageData, setOverUsageData] = useState({});

  const fetchOverUsage = useCallback(async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/entities/overUsage/table`,
        {
          projection,
          filters: [
            {
              id: null,
              field: "resolvedAt"
            }
          ]
        },
        { withCredentials: true, headers: { Context: accountContext } }
      );
      setOverUsageData(data);
    } catch (error) {
      setOverUsageData({});
    }
  }, [accountContext]);

  useEffect(() => {
    if (accountContext) {
      fetchOverUsage();
    }
    return () => {
      setOverUsageData({});
    };
  }, [accountContext, fetchOverUsage]);

  useEffect(() => {
    const hasUnconfirmedItems = overUsageData?.data?.length && overUsageData?.data?.some(item => !item?.confirmedAt);
    if (hasUnconfirmedItems) setOpen(true);
  }, [overUsageData?.data, overUsageData?.items?.length]);

  return (
    <OverusageContext.Provider
      value={{
        open,
        setOpen,
        overUsageData,
        fetchOverUsage,
        accountOverusage
      }}
    >
      {children}
    </OverusageContext.Provider>
  );
};

export { OverusageContext, OverusageProvider };
