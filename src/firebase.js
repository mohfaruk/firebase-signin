import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5__GzXENDShvUmtKsZhFOZf-TQsIbiDA",
  authDomain: "sign-in-cbd04.firebaseapp.com",
  projectId: "sign-in-cbd04",
  storageBucket: "sign-in-cbd04.appspot.com",
  messagingSenderId: "552586708325",
  appId: "1:552586708325:web:1abaa5c101c7e8f1c8cd8c",
  measurementId: "G-VRX8JQQ9ZX",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
