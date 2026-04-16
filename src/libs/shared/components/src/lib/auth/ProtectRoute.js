import { Route } from "react-router-dom";

//import Can from "./Can";

const ProtectRoute = ({ permission, redirectURI, children, ...rest }) => {
  // if (!permission) {
  //   return <Route {...rest}>{children}</Route>;
  // }
  // return (
  //   <Route
  //     {...rest}
  //     render={() => (
  //       <Can
  //         perform={permission}
  //         yes={() => children}
  //         no={() => <Redirect to={redirectURI || "/"} />}
  //       />
  //     )}
  //   />
  // );
  return <Route {...rest}>{children}</Route>;
};

export default ProtectRoute;
