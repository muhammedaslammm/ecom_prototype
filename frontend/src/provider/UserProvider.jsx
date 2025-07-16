import { useEffect, useState } from "react";
import { UserContext } from "../contexts";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = { user };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
