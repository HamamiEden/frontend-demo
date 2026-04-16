import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const redirectUri = window.location.origin;
  const history = useHistory();

  const onRedirectCallback = appState => {
    history?.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={process.env["NX_REACT_APP_AUTH0_DOMAIN"]}
      clientId={process.env["NX_REACT_APP_AUTH0_CLIENT_ID"]}
      audience={process.env["NX_REACT_APP_AUTH0_AUDIENCE_URL"]}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
