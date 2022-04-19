import React, { useContext, useState, useEffect } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase-config";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
const [currentUser, setCurrentUser] = useState();

function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });
  return unsubscribe;
}, []);

const value = {
  currentUser,
  signup,
};

export function AuthProvider(children) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
