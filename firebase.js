import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITEKAI_API_KEY,
  authDomain: import.meta.env.VITEKAI_AUTHdOMAIN,
  projectId: import.meta.env.VITEKAI_PROJECT_ID,
  storageBucket: import.meta.env.VITEKAI_STORAGEBCKET,
  messagingSenderId: import.meta.env.VITEKAI_MESSAGINGSENDERID,
  appId: import.meta.env.VITEKAI_APP_ID
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);