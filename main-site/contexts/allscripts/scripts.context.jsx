import { useState, createContext, useEffect } from "react";
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
        url: `/api/scripts`,
      });
      function dateComparison(a, b) {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        return date2 - date1;
      }
      function viewComparison(a, b) {
        return b.views - a.views;
      }
      res.data.sort(viewComparison);
      res.data.sort(dateComparison);
      setScripts(res.data);
      setLoading(false);
    }
    getScripts();
  }, [refreshScripts]);
  const value = { scripts, setScripts, refreshScripts, setRefreshScripts, loading };
  return <AllScriptContext.Provider value={value}>{children}</AllScriptContext.Provider>;
};
