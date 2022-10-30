import { useState, createContext, useEffect } from "react";
import { hostname } from "../../../config/hostname";
import axios from "axios";

export const AllScriptContext = createContext({ scripts: null });

export const ScriptsAll = ({ children }) => {
  const [scripts, setScripts] = useState([]);
  const [refreshScripts, setRefreshScripts] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getScripts() {
      setLoading(true);
      const res = await axios({
        method: "get",
        url: `${hostname}/api/scripts`,
      });
      setScripts(res.data);
      setLoading(false);
    }
    getScripts();
  }, [refreshScripts]);
  const value = { scripts, setScripts, refreshScripts, setRefreshScripts, loading };
  return <AllScriptContext.Provider value={value}>{children}</AllScriptContext.Provider>;
};
