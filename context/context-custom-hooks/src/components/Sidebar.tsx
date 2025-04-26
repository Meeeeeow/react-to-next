import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom"; // If you're using React Router

const Sidebar = () => {
  const { username } = useAuthContext();

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8">Welcome, {username}!</h2>
    </div>
  );
};

export default Sidebar;
