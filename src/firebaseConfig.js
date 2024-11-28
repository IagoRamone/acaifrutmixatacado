import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCbmxk4RREhZOt1si_yT9upwNspzkkruhw",
  authDomain: "acai-frut-mix.firebaseapp.com",
  projectId: "acai-frut-mix",
  storageBucket: "acai-frut-mix.firebasestorage.app",
  messagingSenderId: "273289346755",
  appId: "1:273289346755:web:af9597de8a1ad9e1e5ec76",
  measurementId: "G-JQYT1XF0QY",
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
console.log(db);
const analytics =
typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, db, analytics };
