import { createContext, useContext } from "react";
import { User } from "../App";

export const UserContext = createContext<User | undefined>(undefined);

//custom hooks
export const useUserContext = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return user;
};
