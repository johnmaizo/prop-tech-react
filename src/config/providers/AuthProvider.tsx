import {createContext, useContext, useEffect, useState, useMemo} from "react";
import {AnimatePresence} from "framer-motion";
import Axios from "axios";
import AxiosInstance from "../AxiosInstance.ts";
import {getAuthToken} from "../helpers/getAuthToken.ts";
import LoadingPage from "./LoadingPage.tsx";

type AuthProviderContextType = {
  authenticated: boolean | null;
  refreshAuth: () => void;
};

const AuthProviderContext = createContext<AuthProviderContextType>({
  authenticated: null,
  refreshAuth: () => {},
});

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    const authToken = getAuthToken();

    const authenticateUser = async () => {
      try {
        const response = await AxiosInstance.get(`authenticate`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          cancelToken: source.token,
          timeout: 5000, // 5-second timeout
        });

        setAuthenticated(response.status === 200);
      } catch (e) {
        if (Axios.isCancel(e)) {
          console.debug("Auth request canceled:", (e as Error).message);
        } else if (Axios.isAxiosError(e) && e.response?.status === 401) {
          setAuthenticated(false);
        } else if (retryCount < 2) {
          // Retry max 2 times
          console.warn("Authentication retry:", retryCount + 1);
          setTimeout(
            () => setRetryCount((c) => c + 1),
            1000 * (retryCount + 1)
          );
        } else {
          setAuthenticated(false);
        }
      }
    };

    authenticateUser();

    return () => source.cancel("Component unmounted");
  }, [retryCount]); // Retry when retryCount changes

  const contextValue = useMemo(
    () => ({
      authenticated,
      refreshAuth: () => setAuthenticated(null),
    }),
    [authenticated]
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {authenticated === null && <LoadingPage key="auth-loader" />}
      </AnimatePresence>

      {authenticated !== null && (
        <AuthProviderContext.Provider value={contextValue}>
          {children}
        </AuthProviderContext.Provider>
      )}
    </>
  );
}

const useAuthProvider = () => useContext(AuthProviderContext);

// eslint-disable-next-line react-refresh/only-export-components
export {AuthProvider, useAuthProvider};
