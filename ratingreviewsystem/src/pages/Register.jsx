import { useState } from "react";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const handleRegister = async (e) => {

    e.preventDefault();

    const response = await fetch(
      "http://localhost:3000/api/users/register",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data =
      await response.json();

    alert(data.message);

    console.log(data);

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <form
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg mb-4 text-white"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg mb-4 text-white"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg mb-4 text-white"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full bg-cyan-500 py-3 rounded-lg hover:bg-cyan-600"
        >
          Register
        </button>

        <p className="text-center mt-6 text-gray-300">

        Already have an account?

        <a
           href="/login"
           className="text-cyan-400 ml-2 hover:underline"
        >
         Login
       </a>

      </p>

      </form>

    </div>
  );
}

export default Register;