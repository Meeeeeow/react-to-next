import { useAuthContext } from "../context/authContext";

const Login = () => {
  const { username, setUsername, password, setPassword, login } =
    useAuthContext();
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mx-auto">Login to your account</h2>
      <form className="flex flex-col my-8">
        <input
          type="text"
          placeholder="Enter your username"
          className="border-2 border-gray-300 rounded-lg p-2 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border-2 border-gray-300 rounded-lg p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="border-2 border-white bg-blue-500 text-white rounded-lg p-2 mb-4 hover:bg-blue-600 hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
