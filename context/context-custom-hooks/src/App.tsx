import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/login";
import { useAuthContext } from "./context/authContext";

export interface User {
  name: string;
  password: string;
}

function App() {
  const { isAuthenticated } = useAuthContext();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-2 border-gray-300 rounded-2xl shadow-lg p-10 bg-white w-auto">
        {isAuthenticated ? <Dashboard /> : <Login />}
        {/* <UserContext.Provider value={user}>
          <Dashboard />
          </UserContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
