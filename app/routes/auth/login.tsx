const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl text-amber-600">Login Page</h1>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
