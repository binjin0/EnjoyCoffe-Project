import React from "react";
import { useRecoilState } from "recoil";
import { DataState } from "../recoil/recoilState";
import { fetchDataFromAPI } from "./api";

const DataFetcher = () => {
  const [userData, setUserData] = useRecoilState(DataState);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromAPI();
      setUserData(data);
    };

    fetchData();
  }, [setUserData]);

  return null;
};

export default DataFetcher;
