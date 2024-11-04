// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAieuIup69Dx-cq-mPbIFNHMgRGgqKkZv0",
  authDomain: "byteedu-155c6.firebaseapp.com",
  projectId: "byteedu-155c6",
  storageBucket: "byteedu-155c6.firebasestorage.app",
  messagingSenderId: "637902668862",
  appId: "1:637902668862:web:cfa9abdd80157608e8fd6f",
  measurementId: "G-1S8E3WSCQV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
