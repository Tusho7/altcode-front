import { useNavigate } from "react-router-dom";
import Input from "../form/Input";

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
        <Input
          type="text"
          value={email}
          onChange={setEmail}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Password"
        />

        {loginError && <p className="text-red-500 mt-2">{loginError}</p>}

        <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded w-full mt-5">
          Login
        </button>
        <p className="border-b border-white w-full"></p>
        <div className="flex flex-col gap-5 justify-center items-center text-base sm:text-lg md:text-xl lg:text-2xl pt-3 text-white">
          <p>Don't have an account?</p>
          <button
            className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded w-full"
            onClick={() => registrationClick("/signup")}
          >
            Create new account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
