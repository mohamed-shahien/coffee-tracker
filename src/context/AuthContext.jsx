import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useContext, createContext } from "react";
import { auth } from "../../firebase";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [GlobalDat, setGlobalData] = useState(null);
  const [loading, setLoading] = useState(false);
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function resetPasword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  function signout(email, password) {
    setUser(null);
    setGlobalData(null);
    return signout(auth);
  }

  const value = {
    user,
    GlobalDat,
    setGlobalData,
    loading,
    signout,
    signup,
    signin,
    resetPasword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
