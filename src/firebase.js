import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmxR3IaTAwbk_8Sy6xYFR7WkwCrZtrKOM",
  authDomain: "chat-app-49f49.firebaseapp.com",
  projectId: "chat-app-49f49",
  storageBucket: "chat-app-49f49.appspot.com",
  messagingSenderId: "494829697555",
  appId: "1:494829697555:web:2a40f82eb2276c4b9b1de6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db = getFirestore();