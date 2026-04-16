import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import useIdle from "../Hooks/useIdle";

// const IDLE_LOGOUT = 10_800_000; // 3 hours Idle to logout
//const IDLE_LOGOUT = 60_000; // 60 seconds Idle to logout
const IDLE_LOGOUT = 43_200_000; // 12 hours Idle to logout
const ABSO_TIME = 36_000_000; // 10 hours absolute time to renew token
// const ABSO_TIME = 15_000; // 15 seconds absolute time to renew token

const WHITELABELORG = [
  { domain: "somelogo", org_id: "org_5g1syo7d72Pyajdr" },
  { domain: "viettelidc", org_id: "org_MD88HivpnHh3GY9a" },
  { domain: "chtsecurity", org_id: "org_ZVO7XE7dLJDGt4yw" },
  { domain: "datacom", org_id: "org_W2beIXf9XXT6fExa" },
  { domain: "advantage", org_id: "org_1dBM5vcdtpUzptEt" },
  { domain: "spectrumenterprise", org_id: "org_DsGap7wv5gOtWqDx", url: "https://spectrumenterprise.radwarecloud.com" },
  { domain: "foxcom", org_id: "org_mLRhmhcPKgZg7lZx", url: "https://waf.foxcom.eu" },
  { domain: "hackers-challenge", org_id: "org_7PnMA28sRGAEUTtM", url: "https://cloudsecure.hackers-challenge.com/" },
  { domain: "claro", org_id: "org_gBRHE0s6n7E8OIrw" },
  { domain: "ciriontechnologies", org_id: "org_4xtyaZUfj5w6MAWT", url: "https://cloudsecurity.ciriontechnologies.com" },
  { domain: "epcomworld", org_id: "org_KSGTpy4rjykuzYJC", url: "https://websecuritycenter.epcomworld.com" }
];

const Auth0Authentication = ({ children, org_id, Loader }) => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
  const [, setCookie] = useCookies();
  const [authenticated, setAuthenticated] = useState(false);
  const [idleTimeAllowed, setIdleTimeAllowed] = useState(IDLE_LOGOUT);
  const location = useLocation();

  const fetchAllowedIdleTime = async () => {
    const DEFAULT_SESSION_EXP = 720;
    try {
      const { data: organizationMetaData } = await axios.get(
        `${process.env.NODE_ENV === "production" ? "/api" : process.env.NX_REACT_APP_API_URL}/entities/accounts/organizations`,
        { withCredentials: true }
      );
      return organizationMetaData?.sessionExpiration || DEFAULT_SESSION_EXP;
    } catch (error) {
      console.error("Error fetching organization metaData:", error);
    }
  };

  const { elapsedIdle, elapsedSession, resetSession } = useIdle(idleTimeAllowed, ABSO_TIME);

  const getToken = async () => {
    const token = await getAccessTokenSilently({ ignoreCache: true, foo: "bar" });
    setCookie("csrftoken", token, { path: "/" });
  };

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        setCookie("csrftoken", token, { path: "/" });
        // initializing i18n
        // HERE BECAUSE USER NEEDS TO BE AUTHENTICATED IN ORDER TO REQUEST THE TRANSLATIONS FILE
        await import("../i18n/i18n");
        setAuthenticated(true);
        if (user?.org_id) {
          const user_wl_org = WHITELABELORG.find(org => user.org_id === org.org_id);
          if (user_wl_org && !window.location.href.includes(user_wl_org?.domain)) {
            if (user_wl_org?.url) window.location.href = user_wl_org.url;
          }
          const idleTime = await fetchAllowedIdleTime();
          const idleTimeMiliseconds = idleTime > 0 ? idleTime * 60 * 1000 : IDLE_LOGOUT;
          setIdleTimeAllowed(idleTimeMiliseconds);
        }
      }
    })();
  }, [isAuthenticated, getAccessTokenSilently, setCookie, user]);

  // Comment this to disable SESSION_REFRESH
  useEffect(() => {
    (async () => {
      if (elapsedSession) {
        resetSession();
        const token = await getAccessTokenSilently({ ignoreCache: true });
        setCookie("csrftoken", token, { path: "/" });
      }
    })();
  }, [elapsedSession, resetSession, getAccessTokenSilently, setCookie]);

  if ((isLoading && !isAuthenticated && !authenticated) || (isAuthenticated && !authenticated)) {
    return <Loader height="100vh" />;
  }

  if (error) {
    return (
      <div>
        Oops... {error.message}{" "}
        <button
          style={{
            background: "none",
            color: "blue",
            textDecoration: "underline",
            border: "none",
            padding: 0,
            fontSize: "inherit",
            cursor: "pointer"
          }}
          onClick={() => logout({ returnTo: window.location.origin, federated: true })}
          aria-label="logout"
          name="logout"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Comment this to disable IDLE_LOGOUT
  if (elapsedIdle) {
    logout({ returnTo: window.location.origin, federated: true });
    return null;
  }

  if (!isAuthenticated) {
    const query = new URLSearchParams(location.search);
    let invitation = query.get("invitation");
    let organization = query.get("organization");
    let connection = query.get("connection");
    for (let org of WHITELABELORG) {
      if (window.location.href.includes(org.domain)) {
        organization = org.org_id;
      }
    }
    if (invitation && organization) {
      loginWithRedirect({ invitation, organization });
    } else if (connection) {
      loginWithRedirect({});
    } else {
      loginWithRedirect(
        organization
          ? { organization }
          : org_id
            ? { organization: org_id, appState: { returnTo: window.location.pathname } }
            : { appState: { returnTo: window.location.pathname } }
      );
    }
    return null;
  }

  return isAuthenticated && children;
};

export default Auth0Authentication;
