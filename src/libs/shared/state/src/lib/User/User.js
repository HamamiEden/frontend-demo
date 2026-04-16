import React, { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

const UserProvider = React.memo(({ children, org_id }) => {
  const { user } = useAuth0();

  const getUserMetadata = useCallback(() => {
    return user[process.env.NX_REACT_APP_AUTH0_AUDIENCE_URL + "/metadata"];
  }, [user]);

  const getUserAuthorization = useCallback(() => {
    return user[process.env.NX_REACT_APP_AUTH0_AUDIENCE_URL + "/authorization"];
  }, [user]);

  const organizationId = user?.org_id || org_id;

  const contextValue = {
    user,
    organizationId,
    getUserMetadata,
    getUserAuthorization
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
});

export { UserContext, UserProvider };
