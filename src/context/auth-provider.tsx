import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, User, UserCredential, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { auth } from "./firebase";
import { AuthProviderProps } from "./types";
import { updateProfile } from "firebase/auth";

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  const CurrentAuthContext = AuthContext.context;

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }

  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    auth,
    updateProfile,
    logOut,
  };

  return <CurrentAuthContext.Provider value={values}>{children}</CurrentAuthContext.Provider>;
};
