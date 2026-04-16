import { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AccountContext } from "../Context/Context";

const AttacksContext = createContext();

const INTERVAL_TIME = 30000;

const AttacksProvider = ({ children }) => {
  const { ddosAccountId } = useContext(AccountContext);
  const [attacks, setAttacks] = useState({});
  const [isAttackAdmin, setIsAttackAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchAttacks = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/ddos/entities/attacks/summary`,
        { withCredentials: true, headers: { Context: ddosAccountId } }
      );
      setIsAttackAdmin(data?.isAdmin);
      setAttacks(data);
      setLoading(false);
    } catch (error) {
      setAttacks({});
      setLoading(false);
    }
  }, [ddosAccountId]);

  useEffect(() => {
    if (ddosAccountId) {
      fetchAttacks();
    }
    return () => {
      setAttacks({});
      setLoading(false);
    };
  }, [ddosAccountId, fetchAttacks]);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (ddosAccountId) {
        fetchAttacks();
      }
    }, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    };
  }, [fetchAttacks, ddosAccountId]);

  return (
    <AttacksContext.Provider
      value={{
        attacks,
        loading,
        isAttackAdmin,
        fetchAttacks
      }}
    >
      {children}
    </AttacksContext.Provider>
  );
};

export { AttacksContext, AttacksProvider };
