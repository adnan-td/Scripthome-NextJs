import { useState, createContext } from "react";
import dscripts from "../../data/script.data.json";
import dreports from "../../data/reports.data.json";
import { getAllAdmins } from "../../api/admins.api";
import useSetAsyncData from "../../api/setdata.hook";

export const DataContext = createContext({ scripts: {}, setscripts: () => {}, reports: {}, setreports: () => {}, admins: {}, setadmins: () => {} });

export function DataValue({ children }) {
  const [scripts, setscripts] = useState(dscripts);
  const [reports, setreports] = useState(dreports);
  const [admins, setadmins] = useState([]);

  const setrefresh = useSetAsyncData(setadmins, getAllAdmins);

  const value = { scripts, setscripts, reports, setreports, admins, setadmins, setrefresh };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
