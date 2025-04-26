import { useAuthContext } from "../context/authContext";

const Profile = () => {
  const { username, logout } = useAuthContext();

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Profile</h2>
        <p className="text-gray-600 text-lg mb-8">
          Welcome, <span className="font-semibold">{username}</span>!
        </p>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-md transform hover:scale-105 active:scale-95"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
