import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        toast.success("Successfully logged in!", {
          position: "top-right",
          autoClose: 3000, // Optional: duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/home");
      }
    });
  };

  return (
    <div className="flex">
      <div className="flex justify-center" onClick={googleLogin}>
        <img
          className="w-[72%] cursor-pointer h-16"
          src="https://th.bing.com/th/id/OIP.yePZ7F93zWGOJ2Mlb5vpewHaB4?w=330&h=88&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignInWithGoogle;
