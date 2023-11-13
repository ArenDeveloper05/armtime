import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useFetch = (request, limit, reduxSettings) => {
  const dispatch = useDispatch();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await request();

        if (reduxSettings && reduxSettings.redux) {
          dispatch(reduxSettings.action(data.data));
        } else {
          setResult(data);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [request]);

  return {
    result,
    loading,
    error,
  };
};

export default useFetch;
