import { useContext } from "react";
import { makeUseAxios } from "axios-hooks";
import { AccountContext } from "@csms-consoles/shared-state";
import axiosInstance from "./axiosInstance";

const useAxios = (config, options) => {
  const { accountContext } = useContext(AccountContext);

  axiosInstance.defaults.headers["Context"] = accountContext || "";

  return makeUseAxios({ axios: axiosInstance })(config, options);
};

export default useAxios;
