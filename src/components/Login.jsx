import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { checkValidation } from "../utils/validate";
import SignInWithGoogle from "./SignInWithGoogle";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    const message = checkValidation(email, password);
    if (message) {
      setErrorMessage(message);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <main>
      <section className="flex flex-col justify-center m-auto">
        <div className="flex flex-col justify-center items-center m-auto h-auto">
          <h1 className="font-bold text-4xl mt-2">Login</h1>
          <form
            className="p-2 border border-black rounded-md shadow-lg w-96 gap-3 flex flex-col justify-center items-center m-auto mt-20 h-auto"
            onSubmit={onLogin}
          >
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div>
              <button
                type="submit"
                className="border border-white text-white bg-black rounded-lg shadow-lg p-2 h-10 w-20"
              >
                Login
              </button>
            </div>
            <div className="text-black font-semibold text-center">
              --Or continue with--
            </div>
            <div>
              <SignInWithGoogle />
            </div>
          </form>
          <p className="text-sm text-black text-center ">
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
