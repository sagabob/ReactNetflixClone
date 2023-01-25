import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, User, UserCredential } from "firebase/auth"
import { useEffect, useState } from "react"
import { AuthContext } from "./auth-context"
import { auth } from "./firebase"
import { AuthProviderProps } from "./types"
import { updateProfile } from "firebase/auth";

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    const [user, setUser] = useState<User | null>(null)

    function signUp(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function resetPassword(email: string): Promise<void> {
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() => {
        //function that firebase notifies you if a user is set
        const unsubsrcibe = auth.onAuthStateChanged((user) => {
            setUser(user)
        })
        return unsubsrcibe
    }, [])

    const values = {
        signUp,
        user,
        signIn,
        resetPassword,
        auth,
        updateProfile
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
