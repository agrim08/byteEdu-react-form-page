import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <main>
      <section className=" flex flex-col justify-center  m-auto">
        <div className="flex flex-col justify-center items-center m-auto">
          <h1 className="font-bold text-4xl mt-2"> Registration Form </h1>

          <form className="p-2 border border-black rounded-md shadow-lg w-96  gap-3 flex flex-col justify-center  items-center m-auto mt-20 h-72">
            <div className="m-2">
              <label
                htmlFor="email-address"
                className="text-xl font-medium text-center"
              >
                Email address
              </label>
              <br />
              <input
                className="w-64 border border-black mt-2 h-12 rounded-md text-justify p-2"
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>

            <div className="m-2">
              <label
                htmlFor="password"
                className="text-xl font-medium text-center"
              >
                Password
              </label>
              <br />
              <input
                type="password"
                className="w-64 border border-black mt-2 h-12 rounded-md text-justify p-2"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>

            <div>
              <button
                type="submit"
                onClick={onLogin}
                className="border border-white text-white bg-black rounded-lg shadow-lg p-2 h-10 w-20"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-sm text-black text-center">
            No account yet?{" "}
            <NavLink to="/signup">
              <span className="p-2 text-lg underline cursor-pointer">
                Sign up
              </span>
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
