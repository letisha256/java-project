import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEzjcJwba1uS7_OgE1E02XFJiaFlSyH6w",
  authDomain: "java-project-d57df.firebaseapp.com",
  projectId: "java-project-d57df",
  storageBucket: "java-project-d57df.firebasestorage.app",
  messagingSenderId: "836803533350",
  appId: "1:836803533350:web:1beccc9dd45fad430a64e7",
  measurementId: "G-L0JLB8GGNJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth };