import { useEffect, useState } from "react";
import axios from "axios";

const MakeApiRequest = (method, url, body ,  headers) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: body,
          headers:headers
        })
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }

      finally{
        setIsLoading(false)
      }
    };

    fetchData();
  }, [url, method, body , headers]);

  return { isLoading, apiData, serverError };
};

export default MakeApiRequest;
