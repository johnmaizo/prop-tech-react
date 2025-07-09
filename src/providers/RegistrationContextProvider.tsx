import { UserData } from "../types";
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import axios from "axios";

interface RegistrationContextType {
  userData: UserData | null;
  loading: boolean;
}

interface RegistrationContextProviderProps {
  children: ReactNode;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

const RegistrationContextProvider = ({
  children,
}: RegistrationContextProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const authenticate = async () => {
      const invAuthToken = localStorage.getItem("invitationAuthToken");
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/authenticate`,
          {
            headers: {
              Authorization: `Bearer ${invAuthToken}`,
            },
          }
        );

        if (response.status === 200) {
          const data = response.data?.data;

          console.log(data);

          setUserData(data);
        }
      } catch (e) {
        // to do
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, []);

  return (
    <RegistrationContext.Provider value={{ userData, loading }}>
      {children}
    </RegistrationContext.Provider>
  );
};

const useRegistrationContextProvider = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error(
      "useRegistrationContextProvider must be used within a AppProvider"
    );
  }
  return context;
};

export { RegistrationContextProvider, useRegistrationContextProvider };
