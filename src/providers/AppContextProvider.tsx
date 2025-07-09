import { UserData } from "../types";
import { createContext, ReactNode, useState, useContext } from "react";

interface AppContextType {
  userData: UserData | null;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <AppContext.Provider value={{ userData }}>{children}</AppContext.Provider>
  );
};

const useAppContextProvider = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContextProvider must be used within a AppProvider");
  }
  return context;
};

export { AppContextProvider, useAppContextProvider };
