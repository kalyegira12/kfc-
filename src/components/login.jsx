// Login.jsx
import React, { useState } from "react";
import { redirect } from "react-router-dom";

const Login = ({ setIsLoggedIn, handleCloseMenu }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    e.preventDefault();
    // Implement your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    // const validUsername = "user";
    // const validPassword = "pass";
    console.log("you...")
    redirect("/") 

    // if (username === validUsername && password === validPassword) {
    //   // setIsLoggedIn(true);
    //   // handleCloseMenu();
      
    //   // Close the menu after successful login
    // } else {
    //   alert("Invalid credentials. Please try again.");
    // }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-5 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <button
      type="sumit"
        //onClick={()=>redirect("/hey")}
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
