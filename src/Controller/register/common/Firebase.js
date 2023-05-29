import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYVMmjSp1HdHSV0yPS1rsUoRaJ8-Qfyok",
  authDomain: "mockproject-2267f.firebaseapp.com",
  projectId: "mockproject-2267f",
  storageBucket: "mockproject-2267f.appspot.com",
  messagingSenderId: "437627522993",
  appId: "1:437627522993:web:67519e5f91a51305137790",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
