import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <nav>
        <p>Welcome Home</p>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
