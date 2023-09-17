import { useState } from "react";
import { useNavigate } from "react-router";

interface SignUpProps {
  handleSubmitSignUp: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void>;
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  setAvatar: (avatar: File | null) => void;
  signupError: string;
}

const SignUp = ({
  handleSubmitSignUp,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  signupError,
  setAvatar,
}: SignUpProps) => {
  const navigate = useNavigate();
  const [, setAvatarError] = useState("");

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(file);
      setAvatarError("");
    }
  };

  const loginClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-base sm:text-lg md:text-xl lg:text-2xl pt-32 sm:w-52 md:w-72 lg:w-96 m-auto signup-page">
      <form onSubmit={handleSubmitSignUp}>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event?.target.value)}
          className="bg-transparent border-b border-white focus:outline-none text-white placeholder-white pl-2 pb-2 w-full"
          placeholder="Email"
        />
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event?.target.value)}
          className="bg-transparent border-b border-white focus:outline-none text-white placeholder-white pl-2 pb-2 w-full pt-5"
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event?.target.value)}
          className="bg-transparent border-b border-white focus:outline-none text-white placeholder-white pl-2 pb-2 w-full pt-5"
          placeholder="Password"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="bg-transparent border-b border-white focus:outline-none text-white placeholder-white pl-2 pb-2 w-full pt-5"
          placeholder="Image"
        />

        {signupError && <p className="text-red-500 mt-2">{signupError}</p>}

        <button className="bg-transparent border border-white hover:bg-white hover:text-white text-white font-semibold py-2 px-4  w-full mt-5 rounded-full">
          Sign Up
        </button>
        <div className="flex flex-col gap-5 justify-center items-center text-base sm:text-lg md:text-xl lg:text-2xl pt-3">
          <p>Already have an account?</p>
          <button
            className="bg-transparent border border-white hover:bg-white hover:text-white text-white font-semibold py-2 px-4 w-full rounded-full"
            onClick={() => loginClick("/login")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
