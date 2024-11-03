import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
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
        <div>
          <div className="flex flex-col justify-center items-center m-auto">
            <h1 className="font-bold text-4xl mt-2"> Registration Form </h1>
            <form className="p-2 border border-black rounded-md shadow-lg w-96 gap-3 flex flex-col justify-center  items-center m-auto mt-20 h-auto">
              <div className="m-2">
                <label
                  htmlFor="Username"
                  className="text-xl font-medium text-center"
                >
                  Username
                </label>
                <br />
                <input
                  className="w-64 border border-black mt-2 h-12 rounded-md text-justify p-2"
                  type="text"
                  label="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  placeholder="username"
                />
              </div>
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

              <button
                type="submit"
                onClick={onSubmit}
                className="border border-white text-white bg-black rounded-lg shadow-lg p-2 h-10 w-20"
              >
                Sign up
              </button>
            </form>

            <p>
              Already have an account?{" "}
              <NavLink to="/login">
                <span className="p-2 text-lg underline cursor-pointer">
                  Sign in
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
