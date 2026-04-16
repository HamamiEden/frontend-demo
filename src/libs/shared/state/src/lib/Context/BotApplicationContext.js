import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { localStorage } from "@csms-consoles/shared-utils";
import { AccountContext } from "./Context";

const BotContext = React.createContext();
const SELECTED_BOT_APP = "botApps";

const BotContextProvider = ({ children }) => {
  const { wafAccountId } = useContext(AccountContext);
  const [botApplications, setBotApplications] = useState([]);
  const [selectedBotApp, setSelectedBotApp] = useState({});

  const getBotApplications = useCallback(async () => {
    const { data } = await axios.get(
      `${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/bot/customers/getApplications/${wafAccountId}`,
      {
        withCredentials: true,
        headers: { Context: wafAccountId, requestentityids: wafAccountId }
      }
    );

    return data || [];
  }, [wafAccountId]);

  const updateBotContext = useCallback(async context => {
    localStorage.set(SELECTED_BOT_APP, JSON.stringify(context));
    setSelectedBotApp(context);
  }, []);

  useEffect(() => {
    if (wafAccountId) {
      (async () => {
        const applications = await getBotApplications();
        const botApps = applications.filter(app => app.botmSiteId != null);
        if (botApps && botApps.length > 0) {
          let localStorageBotApp = getContext();
          let parsedStorageBotApp = JSON.parse(localStorageBotApp);
          if (parsedStorageBotApp) {
            let context = botApps.find(item => item.id === parsedStorageBotApp.id);
            if (context) {
              await updateBotContext(context);
            } else {
              await updateBotContext(botApps[0]);
            }
          } else {
            await updateBotContext(botApps[0]);
          }
        } else {
          await updateBotContext(null);
        }
        setBotApplications(botApps);
      })();
    }
  }, [wafAccountId, updateBotContext]);

  const getContext = useCallback(() => {
    return localStorage.get(SELECTED_BOT_APP);
  }, []);

  return (
    <BotContext.Provider
      value={{
        botApplications,
        selectedBotApp,
        setSelectedBotApp,
        updateBotContext
      }}
    >
      {children}
    </BotContext.Provider>
  );
};

export { BotContext, BotContextProvider };
