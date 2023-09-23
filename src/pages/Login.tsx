import { useNavigate } from "react-router-dom";

const Login = ({
  handleLoginClick,
  email,
  setEmail,
  password,
  setPassword,
  loginError,
}: any) => {
  const navigate = useNavigate();
  const registrationClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center text-base sm:text-lg md:text-xl lg:text-2xl pt-32 sm:w-52 md:w-72 lg:w-96 m-auto signup-page">
      <form onSubmit={handleLoginClick}>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event?.target.value)}
          className="bg-transparent border-b border-white focus:outline-none text-white placeholder-white pl-2 pb-2 w-full"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event?.target.value)}
          className="bg-transparent border-b border-white focus:outline-none text-white placeholder-white pl-2 pb-2 w-full pt-5"
          placeholder="Password"
        />

        {loginError && <p className="text-red-500 mt-2">{loginError}</p>}

        <button className="bg-transparent border border-white hover:bg-white hover:text-white text-white font-semibold py-2 px-4 rounded w-full mt-5">
          Login
        </button>
        <p className="border-b border-white w-full"></p>
        <div className="flex flex-col gap-5 justify-center items-center text-base sm:text-lg md:text-xl lg:text-2xl pt-3 text-white">
          <p>Don't have an account?</p>
          <button
            className="bg-transparent border border-white hover:bg-white hover:text-white text-white font-semibold py-2 px-4 rounded w-full"
            onClick={() => registrationClick("/registration")}
          >
            Create new account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
