import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/context";

export interface User {
  id: number;
  name: string;
}

function App() {
  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
  });
  return (
    <>
      <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider>
    </>
  );
}

export default App;
