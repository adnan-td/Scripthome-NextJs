import { useState, createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { hostname } from "../../../config/hostname";
import axios from "axios";

export const UserContext = createContext({ user: null });

export const User = ({ children }) => {
  const [user, Setuser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { data: session, status } = useSession();
  useEffect(() => {
    async function getuser() {
      const res = await axios({
        method: "get",
        url: `${hostname}/api/checkuser/${session.user.email}`,
      });
      if (res.status === 200) {
        Setuser(res.data);
      }
    }
    if (session) {
      getuser();
    } else {
      Setuser(null);
    }
  }, [session, refresh]);
  const value = { user, status, refresh, setRefresh };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
