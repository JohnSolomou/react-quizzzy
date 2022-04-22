import React, { useContext, useState, useEffect } from "react";
import Auth from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(Auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(Auth, email, password);
  }

  function logout() {
    return signOut(Auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(Auth, email);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
