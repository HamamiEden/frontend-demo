import { useContext } from "react";
import { UserContext } from "@csms-consoles/shared-state";

const check = (roles, permissions, action) => {
  const permission = permissions && permissions.includes(action);
  return permission;
};

const Can = ({ perform, yes, no }) => {
  const { getUserAuthorization } = useContext(UserContext);
  const { permissions, roles } = getUserAuthorization() ? getUserAuthorization() : { permissions: null, roles: null };
  return check(roles, permissions, perform) ? yes() : no();
};

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;
