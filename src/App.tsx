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
        "https://altcode-api.onrender.com/api/auth/signup",
        formData
      );
      setUser(response.data.user);
      setIsLoggedIn(true);
      navigate("/");
      console.log("Register success");
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
  };

  const handleLoginClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://altcode-api.onrender.com/api/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
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
