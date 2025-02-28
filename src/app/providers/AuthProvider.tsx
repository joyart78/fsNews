import { createContext, useState, ReactNode } from "react";

interface IValue {
  isAuthenticated: boolean;
  signin: (callback: () => void) => void;
}

export const AuthContext = createContext<IValue | undefined>(undefined);

const getAuthFromLS = (): boolean => {
  const auth = localStorage.getItem("isAuthenticated");
  return auth ? JSON.parse(auth) : false;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(getAuthFromLS());

  const signin = (callback: () => void): void => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    callback();
  };

  const value: IValue = {
    isAuthenticated,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
