import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  login: () => void;
  isAuthenticated: boolean;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () =>
    username === "" || password === ""
      ? alert("Please fill in all fields")
      : setIsAuthenticated(true);

  const logout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };
  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        login,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return auth;
};
