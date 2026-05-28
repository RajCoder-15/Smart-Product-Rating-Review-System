import { useState } from "react";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  const handleLogin = async (e) => {

    e.preventDefault();

    const response = await fetch(
      "http://localhost:3000/api/users/login",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data =
      await response.json();

    if (data.token) {

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Login Successful");

    } else {

      alert(data.message);

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg mb-4 text-black"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg mb-4 text-black"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full bg-cyan-500 py-3 rounded-lg hover:bg-cyan-600"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;