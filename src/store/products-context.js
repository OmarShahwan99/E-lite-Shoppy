import axios from "axios";
import { createContext, useCallback, useState } from "react";

const productsContext = createContext({
  isLoading: false,
  error: null,
  sendRequest: ({ url, method = "GET", data = null, headers = {} }) => {},
});

export const ProductsProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async ({ url, method = "GET", data = null, headers = {} }) => {
      setIsLoading(true);
      try {
        const response = await axios({ url, method, data, headers });
        const responseData = await response.data;
        setIsLoading(false);
        return responseData;
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    },
    []
  );

  const contextValue = {
    isLoading,
    error,
    sendRequest,
  };

  return (
    <productsContext.Provider value={contextValue}>
      {props.children}
    </productsContext.Provider>
  );
};

export default productsContext;
