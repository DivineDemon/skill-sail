import { useState, useEffect } from "react";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/${endpoint}?${query}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": RAPIDAPI_KEY,
            "X-RapidAPI-Host": RAPIDAPI_HOST,
          },
        }
      );

      const data = await response.json();
      setData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (endpoint || query) {
      fetchData();
    }
  }, [endpoint, query]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
