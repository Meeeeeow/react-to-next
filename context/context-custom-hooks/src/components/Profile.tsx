import { useUserContext } from "../context/context";

const Profile = () => {
  const user = useUserContext();
  return (
    <div>
      <h2>Profile</h2>
      <p>User ID: {user.id}</p>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default Profile;
