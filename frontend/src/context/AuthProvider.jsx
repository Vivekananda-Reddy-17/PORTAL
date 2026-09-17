import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const client = axios.create({
  baseURL: "http://localhost:8000/api/v1/users",
});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("token"),
  );

  const navigate = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const request = await client.post("/register", {
        name,
        username,
        password,
      });

      if (request.status === 201) {
        console.log(request.data.message);
      }

      return request.data;
    } catch (err) {
      console.log("Registration error:", err.response?.data || err.message);

      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const request = await client.post("/login", {
        username,
        password,
      });

      if (request.status === 200) {
        localStorage.setItem("token", request.data.token);

        setUserData(request.data.user);

        // Tell the whole app that login succeeded
        setIsAuthenticated(true);
        navigate("/home");
      }

      return request.data;
    } catch (err) {
      console.log("Login error:", err.response?.data || err.message);

      throw err;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    setUserData(null);
    setIsAuthenticated(false);
  };

  const data = {
    userData,
    setUserData,

    isAuthenticated,

    handleRegister,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
