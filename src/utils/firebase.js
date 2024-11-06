// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAieuIup69Dx-cq-mPbIFNHMgRGgqKkZv0",
  authDomain: "byteedu-155c6.firebaseapp.com",
  projectId: "byteedu-155c6",
  storageBucket: "byteedu-155c6.firebasestorage.app",
  messagingSenderId: "637902668862",
  appId: "1:637902668862:web:cfa9abdd80157608e8fd6f",
  measurementId: "G-1S8E3WSCQV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
