import { useUserContext } from "../context/context";

const Sidebar = () => {
  const user = useUserContext();
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <p>User ID: {user.id}</p>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default Sidebar;
