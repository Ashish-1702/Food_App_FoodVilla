const Login = () => {
  

  return (
    <div className="flex justify-center items-center  w-200 h-400 p-10">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 mb-3"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
