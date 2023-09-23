import { Route, Routes, useNavigate } from "react-router";
import Home from "./Components/Home";
import { useState } from "react";
import axios from "axios";
import { User } from "./types/user-type";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setToken] = useState("");

  const handleSubmitSignUp = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    try {
      const response = await axios.post(
        import.meta.env.VITE_URL_LINK + "/auth/signup",
        formData
      );
      setUser(response.data.user);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.data) {
        const { error: responseError } = error.response.data;
        if (responseError) {
          setSignupError(responseError);
        } else {
          setSignupError("An error occurred during sign up");
        }
      } else {
        setSignupError("An error occurred during sign up");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleLoginClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        import.meta.env.VITE_URL_LINK + "/user/login",
        {
          email,
          password,
          username,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data;
      if (!token) {
        throw new Error("No token received from the server");
      }
      if (!token) {
        throw new Error("No token received from the server");
      }

      setToken(token);
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const userResponse = await axios.get(
        import.meta.env.VITE_URL_LINK + "/user",
        config
      );
      const userData = userResponse.data;
      setUser(userData);
      setLoginError("");
      setToken(token);
      setLoginError("");
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      setLoginError("Wrong email or password");
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              user={user}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              handleSubmitSignUp={handleSubmitSignUp}
              email={email}
              setEmail={setEmail}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              setAvatar={setAvatar}
              signupError={signupError}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              handleLoginClick={handleLoginClick}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              loginError={loginError}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
