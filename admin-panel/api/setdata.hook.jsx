import { useCallback, useEffect, useState } from "react";

export default function useSetAsyncData(setdata, fetchdata) {
  const [refresh, setRefresh] = useState(true);
  const getData = useCallback(async () => {
    const fetchedItem = await fetchdata();
    setdata(fetchedItem);
    setRefresh(false);
  }, [setdata, fetchdata]);

  useEffect(() => {
    getData();
  }, [getData, refresh]);

  return setRefresh;
}
